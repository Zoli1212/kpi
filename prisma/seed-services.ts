const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const services = [
    'Adathálózati szolgáltatások',
    'Adatközponti szolgáltatások',
    'Felhasználók száma',
    'Irodai eszközök szolgáltatás',
    'Kollaborációs szolgáltatások',
    'Mentés helyreállítási szolgáltatások',
  ];

  for (const name of services) {
    await prisma.service.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
}

main()
  .then(() => {
    console.log('✅ Szolgáltatások betöltve');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });