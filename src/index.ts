import "reflect-metadata";
import * as Fastify from 'fastify';
import * as fastifyCORS from 'fastify-cors';
// import { createConnection } from 'typeorm';
import routes from './routes';

const main = async () => {
  const fastify = Fastify({
    logger: true
  });

  const options = {
    'origin': true,
    'methods': [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'OPTIONS'
    ]
  }

  fastify.register(fastifyCORS, options);

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

