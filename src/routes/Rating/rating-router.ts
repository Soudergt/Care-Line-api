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
      handler: this.addCaretakerRating,
      url: '/rating/caretaker/add',
      method: 'POST',
      schema: {
        body: {
          rating: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                newRating: {
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
      handler: this.editCaretakerRating,
      url: '/rating/caretaker/edit',
      method: 'PUT',
      schema: {
        body: {
          rating: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                updatedRating: {
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
      handler: this.deleteCaretakerRating,
      url: '/rating/caretaker/delete',
      method: 'POST',
      schema: {
        body: {
          rating: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                removedRating: {
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

    fastify.route({
      handler: this.addClinicRating,
      url: '/rating/clinic/add',
      method: 'POST',
      schema: {
        body: {
          rating: { type: "object" },
          id: { type: "number" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                newRating: {
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
      handler: this.editClinicRating,
      url: '/rating/clinic/edit',
      method: 'PUT',
      schema: {
        body: {
          rating: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                updatedRating: {
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
      handler: this.deleteClinicRating,
      url: '/rating/clinic/delete',
      method: 'POST',
      schema: {
        body: {
          rating: { type: "object" },
          type: "object"
        },
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                additionalProperties: true,
                removedRating: {
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

  private async addCaretakerRating(request: Request, reply: Response) {
    try {
      const { rating } = request.body;

      rating.FKRatedByUser = request.session.user.UserID;

      const newRating = await new RatingService().addCaretakerRating(rating);
      
      reply.code(200).send({
        data: { newRating },
        message: "Successfully created rating",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async editCaretakerRating(request: Request, reply: Response) {
    try {
      const { rating } = request.body;

      const updatedRating = await new RatingService().editCaretakerRating(rating);
      
      reply.code(200).send({
        data: { updatedRating },
        message: "Successfully updated rating",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async deleteCaretakerRating(request: Request, reply: Response) {
    try {
      const { rating } = request.body;

      const removedRating = await new RatingService().deleteCaretakerRating(rating);
      
      reply.code(200).send({
        data: { removedRating },
        message: "Successfully removed rating",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
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

  private async addClinicRating(request: Request, reply: Response) {
    try {
      const { id, rating } = request.body;

      const newRating = await new RatingService().addClinicRating(id, rating);
      
      reply.code(200).send({
        data: { newRating },
        message: "Successfully created rating",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async editClinicRating(request: Request, reply: Response) {
    try {
      const { rating } = request.body;

      const updatedRating = await new RatingService().editClinicRating(rating);
      
      reply.code(200).send({
        data: { updatedRating },
        message: "Successfully updated rating",
        statusCode: 200
      });
    } catch (error) {
      reply.code(400).send({
        message: error,
        statusCode: 400
      });
    }
  }

  private async deleteClinicRating(request: Request, reply: Response) {
    try {
      const { rating } = request.body;

      const removedRating = await new RatingService().deleteClinicRating(rating);
      
      reply.code(200).send({
        data: { removedRating },
        message: "Successfully removed rating",
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
