const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { username: "Luciano" },
    update: {
      password: "231231LucOli",
      role: "ADMIN",
    },
    create: {
      username: "Luciano",
      password: "231231LucOli.",
      role: "ADMIN",
    },
  });

  console.log("ADMIN CREADO");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });