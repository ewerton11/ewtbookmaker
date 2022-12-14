import Fastify, { FastifyReply, FastifyRequest } from "fastify"
import { PrismaClient } from "@prisma/client"
import { sign, verify } from "jsonwebtoken"

const prisma = new PrismaClient({
  // log: ["query"],
})

const fastify = Fastify({
  logger: true,
})

fastify.register(require("@fastify/cors"), {
  origin: ["http://localhost:3000"],
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
})

interface BodyUser {
  name: string
  password: string
}

interface BodyBets {
  title: string
  value: string
  description: string
}

type Tokenpayload = {
  id: string
}

fastify.post("/auth", async (request, reply) => {
  const { name, password }: BodyUser = request.body as BodyUser

  const user = await prisma.user.findUnique({ where: { name } })

  if (!user) {
    return reply.send({ error: "user not found" })
  }

  if (password !== user.password) {
    return reply.send({ error: "password invalid" })
  }

  const token = sign({ id: user.id }, "secret", { expiresIn: "1d" })

  return reply.status(201).send({ name, password, token })
})

fastify.post("/user", async (request, reply) => {
  const { name, password }: BodyUser = request.body as BodyUser

  const user = await prisma.user.findUnique({ where: { name } })

  if (!user) {
    await prisma.user.create({
      data: {
        name,
        password,
      },
    })
    return reply.status(201).send({ name })
  }

  return reply.status(404).send({ error: "user not found" })
})

fastify.post("/bets", async (request, reply) => {
  const { title, value, description }: BodyBets = request.body as BodyBets

  await prisma.bets.create({
    data: {
      title,
      value,
      description,
    },
  })

  return reply.status(201).send({ title, value, description })
})

fastify.get(
  "/bets/selectedbet/:id",
  async (
    request: FastifyRequest<{
      Params: {
        id: string
      }
    }>,
    reply
  ) => {
    const data = await prisma.bets.findUnique({
      where: {
        id: request.params.id,
      },
    })

    return reply.status(200).send(data)
  }
)

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

function authMiddlwares(request: FastifyRequest, reply: FastifyReply) {
  const { authorization } = request.headers

  if (!authorization) {
    return reply.status(401).send({ error: "token not provided" })
  }

  const [, token] = authorization.split("")

  try {
    const decoded = verify(token, "secret")
    const { id } = decoded as Tokenpayload

    request.userId = id
  } catch {
    return reply.status(401).send({ error: "token invalid" })
  }
}
