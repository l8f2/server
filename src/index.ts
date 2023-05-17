import fastify from 'fastify'
import {schemas} from "./schemas";

const server = fastify()

server.post('/login', {
  schema: schemas.user['/login'].schema
}, (req, rep) => {

})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
