import Fastify from 'fastify'
import FastifyStatic from '@fastify/static'
import { promises as fs } from 'fs'
import * as path from 'path'

const fastify = Fastify({
	logger: true
})

fastify.register(FastifyStatic, {
	root: path.join(__dirname, 'pages'),
	prefix: '/public/',
	index: false,
	list: true
})

const start = async () => {
	try {
		fastify.post('/save', async (request) => {
			await fs.writeFile(
				path.join(__dirname, `pages/${request.body.version}.json`),
				JSON.stringify(request.body)
			)
			return true
		})

		await fastify.listen({ port: 3001 })
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}
start()
