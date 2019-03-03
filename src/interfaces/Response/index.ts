import { FastifyReply } from "fastify";
import { ServerResponse } from "http";

export interface Response extends FastifyReply<ServerResponse> {
  
}