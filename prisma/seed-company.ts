const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const companies = [
  'Egyéb DB',
  'MSSQL',
  'OPTESZ',
  'OPTESZ/TIGÁZ/TITÁSZ',
  'OPTESZ/TITÁSZ',
  'Oracle',
  'TIGÁZ',
  'TITÁSZ',
  'TITÁSZ/OPTESZ',
  'Tigáz',
  'Titász',
  'Titász AMR',
  'Titász SMART'
];

module.exports = async function seedCompanies() {
  for (const name of companies) {
    await prisma.company.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }
  console.log('🏢 Company rekordok betöltve');
};

// opcionális: azonnali futtatás, ha külön indítod
if (require.main === module) {
  module.exports()
    .then(() => console.log("✅ Company seed kész"))
    .catch((e: any) => {
      console.error("❌ Hiba a Company seeding során:", e);
      process.exit(1);
    });
}
