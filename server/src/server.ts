import Fastify from "fastify"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  log: ["query"],
})

const fastify = Fastify({
  logger: true,
})

async function start() {
  fastify.post("/user", async (request, reply) => {
    const { name } = request.body

    await prisma.user.create({
      data: {
        name,
      },
    })

    return reply.status(201).send({ name })
  })

  fastify.listen({ port: 3000 }, function (err) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}
start()
