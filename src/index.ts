import "reflect-metadata";

import * as RedisStore from "connect-redis";
import * as config from "config";
import * as Fastify from 'fastify';
import * as fastifyCORS from 'fastify-cors';
import * as fastifyCookie from "fastify-cookie";
import * as fastifySwagger from "fastify-swagger";
import * as fastifySession from "fastify-session";
import { getSessionSecret } from "./utils/SessionSecret";
// import { createConnection } from 'typeorm';

import routes from './routes';

const main = async () => {
  const fastify = Fastify({ 
    logger: config.get("server.logger")
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

  const sessionOptions: any = {
    cookie: {
      secure: false
    },
    secret: getSessionSecret(),
    store: new redisStore(config.get("redis"))
  };

  fastify.register(fastifyCORS, config.get("cors"));
  fastify.register(fastifyCookie);
  fastify.register(fastifySession, sessionOptions);

  try {
    fastify.after(() => {
      routes.forEach(Route => new Route(fastify));
    });
    
    fastify.listen(config.get("server.port"), "0.0.0.0", (err?: Error) => {
      if (err) {
        fastify.log.error(err);

        return process.exit(1);
      }

      fastify.log.info(
        `Server is listening on port ${config.get("server.port")}`
      );
    });
  } catch (err) {
    fastify.log.info('Failed to start server');

    process.exit(1);
  }
  // createConnection().then(async (connection) => {
    
  // }).catch(error => {
  //   console.log('db connection error:', error);
  // })
};
main();

