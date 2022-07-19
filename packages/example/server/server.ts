import Fastify from 'fastify'
import FastifyStatic from '@fastify/static'
import * as path from 'path'

const fastify = Fastify({
	logger: true
})

fastify.register(FastifyStatic, {
	root: path.join(__dirname, 'pages'),
})

const start = async () => {
	try {
		await fastify.listen({ port: 3001 })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
