import {FastifySchema} from "fastify/types/schema";
import {FromSchema, JSONSchema} from 'json-schema-to-ts'

const loginSchemaBody: JSONSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  }
} as const

const loginSchemaResponse200: JSONSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    age: {
      type: 'number'
    }
  },
} as const

const loginSchema: FastifySchema = {
  body: loginSchemaBody,
  response: {
    200: loginSchemaResponse200
  }
} as const

export {
  loginSchema
}
