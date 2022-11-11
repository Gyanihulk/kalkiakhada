import { PrismaClient } from '.prisma/client'
import { seedUser } from './data'

export async function insertSeedData(prisma: PrismaClient) {
  console.log(`🌱 Creating Seed Role`)
  const { id: roleId } = await prisma.role.create({
    data: {
      name: 'seed-role',
      canManageUsers: true,
      canManageRoles: true,
      canSeeOtherUsers: true,
    },
  })

  const users = await Promise.all(
    seedUser.map(async (user) => {
      console.log(`${user.name}`)
      return prisma.user.create({ data: { ...user, roleId } })
    }),
  )
}
