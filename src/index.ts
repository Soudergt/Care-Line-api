import "reflect-metadata";
import * as Fastify from 'fastify';
import * as fastifyCORS from 'fastify-cors';
import { createConnection } from 'typeorm';
import routes from './routes';

const main = async () => {
  createConnection().then(async (connection) => {
    const server = Fastify({
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
  
    server.register(fastifyCORS, options);
  
    try {
      server.after(() => {
        routes.forEach(Route => {
          const options: any = {};
  
          options.prefix = '/backend';
  
          server.register((f, opts, next) => {
            const r = new Route(f);
            next();
          }, options);
        });
      });
      
      server.listen(3000, err => {
        if (err) throw err
        server.log.info(`server listening on port 3000`);
      });
    } catch (err) {
      server.log.info('Failed to start server');
  
      process.exit(1);
    }
  }).catch(error => {
    console.log('db connection error:', error);
  })
};
main();

