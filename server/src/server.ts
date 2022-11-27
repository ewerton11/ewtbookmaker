import Fastify from "fastify"
// import cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  log: ["query"],
})

async function start() {
  const fastify = Fastify({
    logger: true,
  })

  fastify.register(require("@fastify/cors"), {
    origin: ["http://localhost:3001"],
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
  })

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
