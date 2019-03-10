import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { PatientService } from '../../libs/Patient/patient-service';

export class PatientRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getPatients,
      url: "/patient/getPatients/:uid",
      method: "GET",
      schema: {
        params: {
          uid: {
            type: "string"
          }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                patients: {
                  type: "array"
                },
                type: "object"
              }
            }
          },
          400: {
            properties: {
              data: { type: "object" },
              message: { type: "string" },
              statusCode: { type: "integer" }
            },
            type: "object"
          }
        }
      }
    });

    fastify.route({
      handler: this.getPatient,
      url: "/patient/:id",
      method: "GET",
      schema: {
        params: {
          id: {
            type: "string"
          }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                patient: {
                  type: "object"
                },
                type: "object"
              }
            }
          },
          400: {
            properties: {
              data: { type: "object" },
              message: { type: "string" },
              statusCode: { type: "integer" }
            },
            type: "object"
          }
        }
      }
    });
  }

  private async getPatients(request: Request, reply: Response) {
    try {
      const { uid } = request.params;

      const patients = await new PatientService().getPatients(uid);
            
      reply.code(200).send({
        data: { patients },
        message: "Successfully got patients",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async getPatient(request: Request, reply: Response) {
    try {
      const { id } = request.params;

      const patient = await new PatientService().getPatient(id);

      reply.code(200).send({
        data: { patient },
        message: "Successfully got patient",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async addPatient(request: Request, reply: Response) {
    try {
      const { newPatient } = request.query;

      const patient = await new PatientService().addPatient(newPatient);
      
      reply.code(200).send({
        data: { patient },
        message: "Successfully added patient",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async editPatient(request: Request, reply: Response) {
    try {
      const { selectedPatient } = request.query;

      const patient = await new PatientService().editPatient(selectedPatient);
      
      reply.code(200).send({
        data: { patient },
        message: "Successfully editted patient",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async deletePatient(request: Request, reply: Response) {
    try {
      const { patientID } = request.query;

      const patient = await new PatientService().deletePatient(patientID);
      
      reply.code(200).send({
        data: { patient },
        message: "Successfully deleted patient.",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }
}

