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
    
    fastify.listen(3000, err => {
      if (err) {
        fastify.log.error(err);
      }
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

