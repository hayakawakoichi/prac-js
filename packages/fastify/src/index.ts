import fastify from 'fastify'
import { routes } from './route'

const server = fastify({
    logger: true,
})

server.register(routes)

server.listen({ port: 9000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`server listening at ${address}`)
})
