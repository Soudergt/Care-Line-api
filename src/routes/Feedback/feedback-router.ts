import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { FeedbackService } from '../../libs/Feedback/feedback-service';

export class FeedbackRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getFeedback,
      url: '/feedback/getFeedback',
      method: 'GET',
      schema: {
        querystring: {
          uid: { type: 'number' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                feedback: {
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
      handler: this.addFeedback,
      url: '/feedback/add',
      method: 'POST',
      schema: {
        body: {
          uid: { type: 'number' },
          feedback: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                newFeedback: {
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
      handler: this.editFeedback,
      url: '/feedback/edit',
      method: 'POST',
      schema: {
        body: {
          feedback: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                updatedFeedback: {
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
      handler: this.deleteFeedback,
      url: '/feedback/delete',
      method: 'POST',
      schema: {
        body: {
          feedback: { type: 'object' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                removedFeedback: {
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

  private async getFeedback(request: Request, reply: Response) {
    try {
      const { uid } = request.query;

      const feedback = await new FeedbackService().getFeedback(uid);
      
      reply.code(200).send({
        data: { feedback },
        message: 'Successfully got feedback for user',
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: 'ERROR',
        statusCode: 400
      });
    }
  }

  private async addFeedback(request: Request, reply: Response) {
    try {
      const { uid, feedback } = request.body;

      const newFeedback = await new FeedbackService().addFeedback(uid, feedback);
      
      reply.code(200).send({
        data: { newFeedback },
        message: 'Successfully created feedback',
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: 'ERROR',
        statusCode: 400
      });
    }
  }

  private async editFeedback(request: Request, reply: Response) {
    try {
      const { feedback } = request.body;

      const updatedFeedback = await new FeedbackService().editFeedback(feedback);
      
      reply.code(200).send({
        data: { updatedFeedback },
        message: 'Successfully updated feedback',
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: 'ERROR',
        statusCode: 400
      });
    }
  }

  private async deleteFeedback(request: Request, reply: Response) {
    try {
      const { feedback } = request.body;

      const removedFeedback = await new FeedbackService().deleteFeedback(feedback);
      
      reply.code(200).send({
        data: { removedFeedback },
        message: 'Successfully removed feedback',
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: 'ERROR',
        statusCode: 400
      });
    }
  }

}
