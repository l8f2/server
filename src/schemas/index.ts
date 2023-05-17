import {FastifySchema} from "fastify/types/schema";
import {loginSchema} from "./user";

type TGroupInfo = {
  name: string
  description?: string
  schema: FastifySchema
  group?: TGroup
}

type TGroup = {
  [url: string]: TGroupInfo
}

const user: TGroup = {
  '/login': {
    name: '登入',
    schema: loginSchema,
  }
} as const

const schemas = {
  user
}

export {
  schemas
}
