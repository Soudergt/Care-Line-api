import "reflect-metadata";

import * as RedisStore from "connect-redis";
import * as config from "config";
import * as Fastify from 'fastify';
import * as fastifyCORS from 'fastify-cors';
import * as fastifyCookie from "fastify-cookie";
import * as fastifySwagger from "fastify-swagger";
import * as fastifySession from "fastify-session";
import { getSessionSecret } from "./utils/SessionSecret";
import { fastifyorm } from "./utils/FastifyTypeorm";
import AuthGate from "./utils/AuthGate";
import { RedisClient } from "redis";

import routes from './routes';

const main = async () => {
  const fastify = Fastify({
    logger: false
  });

  fastify.register(fastifySwagger, {
    exposeRoute: true,
    swagger: {
      consumes: ['application/json'],
      info: {
        description: 'Documentation for the CareLine API',
        title: 'CareLine API',
        version: '0.0.1'
      },
      produces: ['application/json'],
      schemes: ['http'],
    },
  });

  const redisStore = RedisStore(fastifySession);
  const store = new redisStore(config.get("redis"));
  
  const sessionOptions: any = {
    cookie: {
      secure: false,
      expires: new Date('2020-03-19T20:07:37.404Z'),
    },
    secret: getSessionSecret(),
    saveUninitialized: false,
    store: store
  };

  fastify.register(fastifyorm).ready();
  fastify.register(fastifyCORS, config.get("cors"));
  fastify.register(fastifyCookie);
  fastify.register(fastifySession, sessionOptions);

  fastify.addHook("preHandler", AuthGate);

  try {
    fastify.after(() => {
      routes.forEach(Route => {
        const options: any = {};
        options.prefix = config.get("server.prefix");

        fastify.register((f, opts, next) => {
          const r = new Route(f)
          next();
        }, options);
      });
    });

    fastify.listen(config.get("server.port"), "0.0.0.0", (err ? : Error) => {
      if (err) {
        fastify.log.error(err);

        return process.exit(1);
      }

      fastify.log.info(`Server is listening on port ${config.get("server.port")}`);
    });
  } catch (err) {
    fastify.log.info('Failed to start server');

    process.exit(1);
  }

};
main();