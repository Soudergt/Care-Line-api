import { FastifyInstance } from 'fastify';
import { CaretakerService } from '../../libs/Caretaker/caretaker-service';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";

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

    fastify.route({
      handler: this.getCaretaker,
      url: '/caretaker/:id',
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

  private async getCaretakers(request: Request, reply: Response) {
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

  private async getCaretaker(request: Request, reply: Response) {
    try {
      const { id } = request.params;

      const caretaker = await new CaretakerService().getCaretaker(id);

      reply.code(200).send({
        data: { caretaker },
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
