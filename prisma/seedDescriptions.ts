const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const descriptions = [
  { itemName: "Adatvonalak sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "LAN akt\u00edv eszk\u00f6z\u00f6k sz\u00e1ma (switch) (db)", text: "csak adatk\u00e9nt" },
  { itemName: "LAN akt\u00edv portok sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "T\u00e1mad\u00e1sok sz\u00e1ma (db)", text: "grafikon" },
  { itemName: "Telephelyek sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Tuzfal szab\u00e1lyok sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "WAN eszk\u00f6z\u00f6k sz\u00e1ma (router) (db)", text: "csak adatk\u00e9nt" },
  { itemName: "WiFi access pointok (AP) sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Adatb\u00e1zisok sz\u00e1ma (db)", text: "oszlop diagrammban mind a 3" },
  { itemName: "Archive storage haszn\u00e1lat (lefoglalt) (TB)", text: "oszlop diagramm" },
  { itemName: "Archive storage kapacit\u00e1s (teljes) (TB)", text: "oszlop diagramm" },
  { itemName: "Egy\u00e9b storage kapacit\u00e1s (TB)", text: "oszlop diagramm" },
  { itemName: "Fizikai szerverek sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Kiszolg\u00e1lt rendszerek sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Magas rendelkez\u00e9sre \u00e1ll\u00e1s\u00fa storage haszn\u00e1lat (lefoglalt) (TB)", text: "oszlop diagramm" },
  { itemName: "Magas rendelkez\u00e9sre \u00e1ll\u00e1s\u00fa storage kapacit\u00e1s (teljes) (TB)", text: "oszlop diagramm" },
  { itemName: "Ment\u00e9si  storage haszn\u00e1lat (lefoglalt) (TB)", text: "oszlop diagramm" },
  { itemName: "Ment\u00e9si storage kapacit\u00e1s (teljes) (TB)", text: "oszlop diagramm" },
  { itemName: "Storage felhaszn\u00e1lt kapacit\u00e1s (TB)", text: "oszlop diagramm" },
  { itemName: "Storage rendelkez\u00e9sre \u00e1ll\u00f3 \u00f6sszes kapacit\u00e1s (TB)", text: "csak adatk\u00e9nt" },
  { itemName: "Virtu\u00e1lis szerverek sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Zabbix-ba bevont alkalmaz\u00e1sok sz\u00e1ma (db)", text: "grafikon" },
  { itemName: "Zabbix-ba bevont Windows szerverek sz\u00e1ma (db)", text: "grafikon" },
  { itemName: "Havonta \u00e1tlagosan nyomtatott lapok sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Laptopok sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Mobil telefonok sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Nyomtat\u00f3k sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "PC-k sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "PDA-k sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "C\u00edmt\u00e1r felhaszn\u00e1l\u00f3k (akt\u00edv) (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Hasznos email sz\u00e1m (db)", text: "oszlop diagrammban mind a 2" },
  { itemName: "Postafi\u00f3kok sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "SharePoint Online site-ok sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "SPAM email sz\u00e1ma (db)", text: "grafikon" },
  { itemName: "Ment\u00e9si Szalagos kapacit\u00e1s (TB)", text: "csak adatk\u00e9nt" },
  { itemName: "Mentett adatb\u00e1zisok sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
  { itemName: "Mentett adatok mennyis\u00e9ge (TB)", text: "oszlop diagrammban mind a 2" },
  { itemName: "Mentett rendszerek sz\u00e1ma (db)", text: "csak adatk\u00e9nt" },
];
module.exports = async function seedDescriptions() {
  const guide = await prisma.guide.findFirst({
    where: { column: 'Leírás' }
  });

  for (const entry of descriptions) {
    const item = await prisma.item.findFirst({
      where: { name: entry.itemName }
    });

    if (!item) {
      console.warn(`⚠️ Item nem található: ${entry.itemName}`);
      continue;
    }

    await prisma.description.upsert({
      where: {
        itemId: item.id
      },
      update: {
        text: entry.text,
        guideId: guide?.id ?? null
      },
      create: {
        text: entry.text,
        itemId: item.id,
        guideId: guide?.id ?? null
      }
    });
  }

  console.log('📝 Description rekordok betöltve');
};

if (require.main === module) {
  module.exports()
    .then(() => console.log("✅ Description seed sikeres"))
    .catch((e: any) => {
      console.error("❌ Hiba:", e);
      process.exit(1);
    });
}
