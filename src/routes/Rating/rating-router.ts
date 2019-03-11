import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { RatingService } from '../../libs/Rating/rating-service';

export class RatingRouter {
  constructor(fastify: FastifyInstance) {
    fastify.route({
      handler: this.getCaretakerRatings,
      url: '/rating/caretaker/getRatings',
      method: 'GET',
      schema: {
        querystring: {
          id: { type: 'number' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                ratings: {
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
      handler: this.getCaretakerRating,
      url: '/rating/caretaker/getRating',
      method: 'GET',
      schema: {
        querystring: {
          id: { type: 'number' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                rating: {
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
      handler: this.getClinicRatings,
      url: '/rating/clinic/getRatings',
      method: 'GET',
      schema: {
        querystring: {
          id: { type: 'number' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                ratings: {
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
      handler: this.getClinicRating,
      url: '/rating/clinic/getRating',
      method: 'GET',
      schema: {
        querystring: {
          id: { type: 'number' }
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                rating: {
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

  private async getCaretakerRatings(request: Request, reply: Response) {
    try {
      const { id } = request.query;

      const ratings = await new RatingService().getCaretakerRatings(id);
      
      reply.code(200).send({
        data: { ratings },
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

  private async getCaretakerRating(request: Request, reply: Response) {
    try {
      const { id } = request.query;

      const rating = await new RatingService().getCaretakerRating(id);
      
      reply.code(200).send({
        data: { rating },
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

  private async getClinicRatings(request: Request, reply: Response) {
    try {
      const { id } = request.query;

      const ratings = await new RatingService().getClinicRatings(id);
      
      reply.code(200).send({
        data: { ratings },
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

  private async getClinicRating(request: Request, reply: Response) {
    try {
      const { id } = request.query;

      const rating = await new RatingService().getClinicRating(id);
      
      reply.code(200).send({
        data: { rating },
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
