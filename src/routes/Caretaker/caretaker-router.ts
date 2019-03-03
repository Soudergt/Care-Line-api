import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { CaretakerService } from '../../libs/Caretaker/caretaker-service';

export class CaretakerRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getCaretakers,
      url: '/caretaker/getCaretakers/:id',
      method: 'GET',
      schema: {
        params: {
          id: {
            type: "string"
          }
        }
      }
    });
  }

  private async getCaretakers(request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) {
    try {
      const { id } = request.params;

      const caretakers = await new CaretakerService().getCaretakers(id);
      

      reply.code(200).send({
        data: { caretakers },
        message: 'SUCCESS',
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        data: {},
        message: 'ERROR',
        statusCode: 400
      });
    }
  }

}
