'use strict';

import * as fp from "fastify-plugin";
import { createConnection } from "typeorm";

async function plugin(fastify, opts, next) {
  try {
    const connection = await createConnection();
    fastify.decorate('db', connection);
    next();
  } catch(err) {
    next(err);
  }
};

export const fastifyorm = fp(plugin);