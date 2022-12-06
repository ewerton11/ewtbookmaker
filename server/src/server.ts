import Fastify from "fastify"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  // log: ["query"],
})

const fastify = Fastify({
  logger: true,
})

interface Body {
  name: string
}

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

fastify.get("/bets/:id", async (request, reply) => {
  const data = await prisma.bets.findUnique({
    where: {
      id: request.params.id,
    },
  })

  return reply.status(200).send(request.params.id)
})

fastify.get("/bets", async (request, reply) => {
  const data = await prisma.bets.findMany()

  return reply.status(200).send(data)
})

const start = async () => {
  try {
    await fastify.listen({ port: 3333 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
