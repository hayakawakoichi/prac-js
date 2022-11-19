import fastify from 'fastify'

const server = fastify()

server.get('/',async (request, reply) => {
    return 'hello, fastify!'
})

server.get('/ping', async (request, reply) => {
    return "pong\n";
})

server.listen({ port: 9000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`server listening at ${address}`)
})
