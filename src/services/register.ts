import { hash } from "bcryptjs"
import prisma from "../lib/prisma"
import { PrismaUsersRepository } from "../repositories/prisma-users-repository"

interface RegisterServiceProps {
  name: string
  email: string
  password: string
}

// solid 

export class registerService {

  constructor(private usersRepository: any) { }

  async executeHandler({ name, email, password }: RegisterServiceProps) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithSameEmail) {
      throw new Error("User already exists")
    }

    // const prismaUsersRepository = new PrismaUsersRepository()
    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}