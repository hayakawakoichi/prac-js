import { FastifyInstance, FastifyPluginOptions } from 'fastify'

/**
 * API router
 *
 * @param fastify
 * @param option
 */
export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {
    fastify.get('/', async (request, reply) => {
        return 'hello, fastify!'
    })

    fastify.get('/ping', async (request, reply) => {
        return 'pong\n'
    })
}
