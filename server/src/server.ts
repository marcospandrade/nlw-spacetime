import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()

app.get('/hello', () => {
  const prisma = new PrismaClient()
  return prisma.user.findMany()
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on http://localhost:3333')
  })
