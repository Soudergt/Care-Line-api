import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { ClinicService } from '../../libs/Clinic/clinic-service';

export class ClinicRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getClinic,
      url: '/clinic/:id',
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

  private async getClinic(request: Request, reply: Response) {
    try {
      const { id } = request.params;

      const clinic = await new ClinicService().getClinic(id);
      
      reply.code(200).send({
        data: { clinic },
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
