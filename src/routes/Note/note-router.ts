import { FastifyInstance } from 'fastify';
import { Request } from "../../interfaces/Request";
import { Response } from "../../interfaces/Response";
import { NoteService } from '../../libs/Note/note-service';

export class NoteRouter {
  constructor(fastify: FastifyInstance) {
    // fastify.route({
    //   handler: this.getNotes,
    //   url: '/note/getNotes/:selectedDate',
    //   method: 'GET',
    //   schema: {
    //     querystring: {
    //       properties: {
    //         uid: {
    //           description: 'Selected Date',
    //           type: 'Date'
    //         }
    //       },
    //       required: ['selectedDate'],
    //       type: 'object'
    //     },
    //     response: {
    //       200: {
    //         properties: {
    //           data: { type: 'object' },
    //           message: { type: 'string' },
    //           statusCode: { type: 'integer' }
    //         },
    //         type: 'object'
    //       },
    //       400: {
    //         properties: {
    //           data: { type: 'object' },
    //           message: { type: 'string' },
    //           statusCode: { type: 'integer' }
    //         },
    //         type: 'object'
    //       }
    //     }
    //   },
    // });

    // fastify.route({
    //   handler: this.addNote,
    //   url: '/note/addNote',
    //   method: 'POST',
    //   schema: {
    //     response: {
    //       200: {
    //         properties: {
    //           data: { type: 'object' },
    //           message: { type: 'string' },
    //           statusCode: { type: 'integer' }
    //         },
    //         type: 'object'
    //       },
    //       400: {
    //         properties: {
    //           data: { type: 'object' },
    //           message: { type: 'string' },
    //           statusCode: { type: 'integer' }
    //         },
    //         type: 'object'
    //       }
    //     }
    //   }
    // });

    // fastify.route({
    //   handler: this.editNote,
    //   url: '/note/editNote',
    //   method: 'POST',
    //   schema: {
    //     response: {
    //       200: {
    //         properties: {
    //           data: { type: 'object' },
    //           message: { type: 'string' },
    //           statusCode: { type: 'integer' }
    //         },
    //         type: 'object'
    //       },
    //       400: {
    //         properties: {
    //           data: { type: 'object' },
    //           message: { type: 'string' },
    //           statusCode: { type: 'integer' }
    //         },
    //         type: 'object'
    //       }
    //     }
    //   }
    // });

    // fastify.route({
    //   handler: this.deleteNote,
    //   url: '/note/deleteNote',
    //   method: 'POST',
    //   schema: {
    //     response: {
    //       200: {
    //         properties: {
    //           data: { type: 'object' },
    //           message: { type: 'string' },
    //           statusCode: { type: 'integer' }
    //         },
    //         type: 'object'
    //       },
    //       400: {
    //         properties: {
    //           data: { type: 'object' },
    //           message: { type: 'string' },
    //           statusCode: { type: 'integer' }
    //         },
    //         type: 'object'
    //       }
    //     }
    //   }
    // });
  }

  private async getNotes(request: Request, reply: Response) {
    try {
      const { selectedDate } = request.query;

      const notes = await new NoteService().getNotes(selectedDate);

      reply.code(200).send({
        data: { notes: notes },
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
  };

  private async addNote(request: Request, reply: Response) {
    try {
      const { newNote } = request.query;

      const note = await new NoteService().addNote(newNote);

      reply.code(200).send({
        data: { note: note },
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
  };

  private async editNote(request: Request, reply: Response) {
    try {
      const { selectedNote } = request.query;

      const note = await new NoteService().editNote(selectedNote);

      reply.code(200).send({
        data: { note: note },
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
  };

  private async deleteNote(request: Request, reply: Response) {
    try {
      const { noteID } = request.query;

      const note = await new NoteService().deleteNote(noteID);

      reply.code(200).send({
        data: { note: note },
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
  };
}