import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { EventService } from '../../libs/Event/event-service';

export class EventRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getEventsByWeek,
      url: '/event/getEventsByWeek',
      method: 'GET',
      schema: {
        querystring: {
          uid: { type: 'number' },
          startDate: { type: 'string' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                events: {
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
      handler: this.getEvents,
      url: '/event/getEvents',
      method: 'GET',
      schema: {
        querystring: {
          uid: { type: 'number' },
          date: { type: 'string' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                events: {
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
      handler: this.getEvent,
      url: '/event/getEvent',
      method: 'GET',
      schema: {
        querystring: {
          id: { type: 'number' },
          date: { type: 'string' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                event: {
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

    fastify.route({
      handler: this.addEvent,
      url: '/event/add',
      method: 'POST',
      schema: {
        body: {
          user: { type: "object" },
          event: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                newEvent: {
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

    fastify.route({
      handler: this.editEvent,
      url: '/event/edit',
      method: 'PUT',
      schema: {
        body: {
          event: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                updatedEvent: {
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

    fastify.route({
      handler: this.deleteEvent,
      url: '/event/delete',
      method: 'POST',
      schema: {
        body: {
          event: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                removedEvent: {
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

  private async getEventsByWeek(request: Request, reply: Response) {
    try {
      const { uid, startDate } = request.query;

      const events = await new EventService().getEventsByWeek(uid, startDate);
      
      reply.code(200).send({
        data: { events },
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

  private async getEvents(request: Request, reply: Response) {
    try {
      const { uid, date } = request.query;

      const events = await new EventService().getEvents(uid, date);
      
      reply.code(200).send({
        data: { events },
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

  private async getEvent(request: Request, reply: Response) {
    try {
      const { id } = request.query;

      const event = await new EventService().getEvent(id);
      
      reply.code(200).send({
        data: { event },
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

  private async addEvent(request: Request, reply: Response) {
    try {
      const { user, event } = request.body;

      const newEvent = await new EventService().addEvent(user, event);
      
      reply.code(200).send({
        data: { newEvent },
        message: "Successfully created event",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async editEvent(request: Request, reply: Response) {
    try {
      const { event } = request.body;

      const updatedEvent = await new EventService().editEvent(event);
      
      reply.code(200).send({
        data: { updatedEvent },
        message: "Successfully updated event",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async deleteEvent(request: Request, reply: Response) {
    try {
      const { event } = request.body;

      const removedEvent = await new EventService().deleteEvent(event);
      
      reply.code(200).send({
        data: { removedEvent },
        message: "Successfully removed event",
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
