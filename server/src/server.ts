import Fastify from "fastify"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  log: ["query"],
})

async function start() {
  const fastify = Fastify({
    logger: true,
  })

  fastify.register(require("@fastify/cors"), {
    origin: ["http://localhost:3000"],
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

  fastify.post("/bets", async (request, reply) => {
    const { title, value, description }: any = request.body

    await prisma.bets.create({
      data: {
        title,
        value,
        description,
      },
    })

    return reply.status(201).send({ title, value, description })
  })

  fastify.get("/bets", async (request, reply) => {
    const data = await prisma.bets.findMany()

    return reply.status(200).send(data)
  })

  fastify.listen({ port: 3333 }, function (err) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}
start()
