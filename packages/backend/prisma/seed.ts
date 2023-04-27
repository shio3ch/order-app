import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "AdminUser",
      email: "hoge@fuga.piyo",
    },
  });

  const adminUser = await prisma.user.findMany({
    where: {
      name: "AdminUser",
    },
  });
  console.dir(adminUser, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
