const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedAll() {
  console.log("🚀 Seed indítása...");

  const services = [
    {"name": "Felhasználók száma"},
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { name: service.name },
      update: {}, create: service
    });
  }

  const items = [
    {
      code: "adatcsere__middleware_biztalk",
      name: "Adatcsere - middleware (biztalk)",
      description: "ideiglenes tétel",
      serviceName: "Felhasználók száma"
    },
    {
      code: "csocso",
      name: "Csocso",
      description: "ideiglenes tétel",
      serviceName: "Felhasználók száma"
    },
    {
      code: "dms__szerzodés_nyilvántartás",
      name: "DMS - szerződés nyilvántartás",
      description: "ideiglenes tétel",
      serviceName: "Felhasználók száma"
    },
    {
      code: "dms_ultimate__ügyfélszolgálati_modul",
      name: "DMS Ultimate - ügyfélszolgálati modul",
      description: "ideiglenes tétel",
      serviceName: "Felhasználók száma"
    },
    {
      code: "dms_ultimate_számla",
      name: "DMS Ultimate- számla",
      description: "ideiglenes tétel",
      serviceName: "Felhasználók száma"
    },
  ];

  for (const item of items) {
    const service = await prisma.service.findFirst({ where: { name: item.serviceName } });
    if (!service) continue;

    await prisma.item.upsert({
      where: { code: item.code },
      update: {},
      create: {
        code: item.code,
        name: item.name,
        description: item.description,
        service: { connect: { id: service.id } }
      }
    });
  }

  console.log("🎉 Hiányzó tételek és szolgáltatás seedelve.");
}

seedAll()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error("❌ Hiba:", e);
    prisma.$disconnect();
    process.exit(1);
  });
