const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  console.log("🚀 2025-ös adatok systemId-val seedelve...");
  const hashedPassword = '$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy';
  const users = {};
  users["Bende Zsolt"] = await prisma.user.upsert({
    where: { email: "bende.zsolt@example.com" },
    update: {},
    create: {
      name: "Bende Zsolt",
      email: "bende.zsolt@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Biró Csaba"] = await prisma.user.upsert({
    where: { email: "biró.csaba@example.com" },
    update: {},
    create: {
      name: "Biró Csaba",
      email: "biró.csaba@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Bíró-Zs"] = await prisma.user.upsert({
    where: { email: "bíró-zs@example.com" },
    update: {},
    create: {
      name: "Bíró-Zs",
      email: "bíró-zs@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Ducsi Szilárd"] = await prisma.user.upsert({
    where: { email: "ducsi.szilárd@example.com" },
    update: {},
    create: {
      name: "Ducsi Szilárd",
      email: "ducsi.szilárd@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Ecsedi Zoltán"] = await prisma.user.upsert({
    where: { email: "ecsedi.zoltán@example.com" },
    update: {},
    create: {
      name: "Ecsedi Zoltán",
      email: "ecsedi.zoltán@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Földi Lajos"] = await prisma.user.upsert({
    where: { email: "földi.lajos@example.com" },
    update: {},
    create: {
      name: "Földi Lajos",
      email: "földi.lajos@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Huszti János"] = await prisma.user.upsert({
    where: { email: "huszti.jános@example.com" },
    update: {},
    create: {
      name: "Huszti János",
      email: "huszti.jános@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Kelemen Zsolt"] = await prisma.user.upsert({
    where: { email: "kelemen.zsolt@example.com" },
    update: {},
    create: {
      name: "Kelemen Zsolt",
      email: "kelemen.zsolt@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Kevei Márk"] = await prisma.user.upsert({
    where: { email: "kevei.márk@example.com" },
    update: {},
    create: {
      name: "Kevei Márk",
      email: "kevei.márk@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Kiss Ferenc"] = await prisma.user.upsert({
    where: { email: "kiss.ferenc@example.com" },
    update: {},
    create: {
      name: "Kiss Ferenc",
      email: "kiss.ferenc@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Kun György"] = await prisma.user.upsert({
    where: { email: "kun.györgy@example.com" },
    update: {},
    create: {
      name: "Kun György",
      email: "kun.györgy@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Kállai Tamás"] = await prisma.user.upsert({
    where: { email: "kállai.tamás@example.com" },
    update: {},
    create: {
      name: "Kállai Tamás",
      email: "kállai.tamás@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Lipcsei István"] = await prisma.user.upsert({
    where: { email: "lipcsei.istván@example.com" },
    update: {},
    create: {
      name: "Lipcsei István",
      email: "lipcsei.istván@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Molnár József"] = await prisma.user.upsert({
    where: { email: "molnár.józsef@example.com" },
    update: {},
    create: {
      name: "Molnár József",
      email: "molnár.józsef@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Molnár Viktória Diána"] = await prisma.user.upsert({
    where: { email: "molnár.viktória.diána@example.com" },
    update: {},
    create: {
      name: "Molnár Viktória Diána",
      email: "molnár.viktória.diána@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Olajos Imre"] = await prisma.user.upsert({
    where: { email: "olajos.imre@example.com" },
    update: {},
    create: {
      name: "Olajos Imre",
      email: "olajos.imre@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Rónyai Zoltán"] = await prisma.user.upsert({
    where: { email: "rónyai.zoltán@example.com" },
    update: {},
    create: {
      name: "Rónyai Zoltán",
      email: "rónyai.zoltán@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Szuromi József"] = await prisma.user.upsert({
    where: { email: "szuromi.józsef@example.com" },
    update: {},
    create: {
      name: "Szuromi József",
      email: "szuromi.józsef@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Sólyom József"] = await prisma.user.upsert({
    where: { email: "sólyom.józsef@example.com" },
    update: {},
    create: {
      name: "Sólyom József",
      email: "sólyom.józsef@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Török Zsolt"] = await prisma.user.upsert({
    where: { email: "török.zsolt@example.com" },
    update: {},
    create: {
      name: "Török Zsolt",
      email: "török.zsolt@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Vincze Csilla"] = await prisma.user.upsert({
    where: { email: "vincze.csilla@example.com" },
    update: {},
    create: {
      name: "Vincze Csilla",
      email: "vincze.csilla@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Zilahi Zoltán"] = await prisma.user.upsert({
    where: { email: "zilahi.zoltán@example.com" },
    update: {},
    create: {
      name: "Zilahi Zoltán",
      email: "zilahi.zoltán@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  users["Zsipiné Szabó Hajnalka"] = await prisma.user.upsert({
    where: { email: "zsipiné.szabó.hajnalka@example.com" },
    update: {},
    create: {
      name: "Zsipiné Szabó Hajnalka",
      email: "zsipiné.szabó.hajnalka@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  const services = {};
  services["Adathálózati szolgáltatások"] = await prisma.service.upsert({
    where: { name: "Adathálózati szolgáltatások" },
    update: {},
    create: { name: "Adathálózati szolgáltatások" }
  });
  services["Adatközponti szolgáltatások"] = await prisma.service.upsert({
    where: { name: "Adatközponti szolgáltatások" },
    update: {},
    create: { name: "Adatközponti szolgáltatások" }
  });
  services["Felhasználók száma"] = await prisma.service.upsert({
    where: { name: "Felhasználók száma" },
    update: {},
    create: { name: "Felhasználók száma" }
  });
  services["Irodai eszközök szolgáltatás"] = await prisma.service.upsert({
    where: { name: "Irodai eszközök szolgáltatás" },
    update: {},
    create: { name: "Irodai eszközök szolgáltatás" }
  });
  services["Kollaborációs szolgáltatások"] = await prisma.service.upsert({
    where: { name: "Kollaborációs szolgáltatások" },
    update: {},
    create: { name: "Kollaborációs szolgáltatások" }
  });
  services["Mentés helyreállítási szolgáltatások"] = await prisma.service.upsert({
    where: { name: "Mentés helyreállítási szolgáltatások" },
    update: {},
    create: { name: "Mentés helyreállítási szolgáltatások" }
  });
  const companies = {};
  companies["Egyéb DB"] = await prisma.company.upsert({
    where: { name: "Egyéb DB" },
    update: {},
    create: { name: "Egyéb DB" }
  });
  companies["MSSQL"] = await prisma.company.upsert({
    where: { name: "MSSQL" },
    update: {},
    create: { name: "MSSQL" }
  });
  companies["OPTESZ"] = await prisma.company.upsert({
    where: { name: "OPTESZ" },
    update: {},
    create: { name: "OPTESZ" }
  });
  companies["OPTESZ/TIGÁZ/TITÁSZ"] = await prisma.company.upsert({
    where: { name: "OPTESZ/TIGÁZ/TITÁSZ" },
    update: {},
    create: { name: "OPTESZ/TIGÁZ/TITÁSZ" }
  });
  companies["Optesz"] = await prisma.company.upsert({
    where: { name: "Optesz" },
    update: {},
    create: { name: "Optesz" }
  });
  companies["Oracle"] = await prisma.company.upsert({
    where: { name: "Oracle" },
    update: {},
    create: { name: "Oracle" }
  });
  companies["TIGÁZ"] = await prisma.company.upsert({
    where: { name: "TIGÁZ" },
    update: {},
    create: { name: "TIGÁZ" }
  });
  companies["TITÁSZ"] = await prisma.company.upsert({
    where: { name: "TITÁSZ" },
    update: {},
    create: { name: "TITÁSZ" }
  });
  companies["TITÁSZ/OPTESZ"] = await prisma.company.upsert({
    where: { name: "TITÁSZ/OPTESZ" },
    update: {},
    create: { name: "TITÁSZ/OPTESZ" }
  });
  companies["Tigáz"] = await prisma.company.upsert({
    where: { name: "Tigáz" },
    update: {},
    create: { name: "Tigáz" }
  });
  companies["Titász"] = await prisma.company.upsert({
    where: { name: "Titász" },
    update: {},
    create: { name: "Titász" }
  });
  companies["Titász AMR"] = await prisma.company.upsert({
    where: { name: "Titász AMR" },
    update: {},
    create: { name: "Titász AMR" }
  });
  companies["Titász SMART"] = await prisma.company.upsert({
    where: { name: "Titász SMART" },
    update: {},
    create: { name: "Titász SMART" }
  });
  companies["Összesen"] = await prisma.company.upsert({
    where: { name: "Összesen" },
    update: {},
    create: { name: "Összesen" }
  });
  const systems = {};
  systems["REF-6865"] = await prisma.system.upsert({
    where: { name: "REF-6865" },
    update: {},
    create: {
      name: "REF-6865",
      companyId: companies["TITÁSZ/OPTESZ"].id
    }
  });
  systems["REF-6741"] = await prisma.system.upsert({
    where: { name: "REF-6741" },
    update: {},
    create: {
      name: "REF-6741",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6742"] = await prisma.system.upsert({
    where: { name: "REF-6742" },
    update: {},
    create: {
      name: "REF-6742",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6156"] = await prisma.system.upsert({
    where: { name: "REF-6156" },
    update: {},
    create: {
      name: "REF-6156",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6751"] = await prisma.system.upsert({
    where: { name: "REF-6751" },
    update: {},
    create: {
      name: "REF-6751",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6770"] = await prisma.system.upsert({
    where: { name: "REF-6770" },
    update: {},
    create: {
      name: "REF-6770",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6756"] = await prisma.system.upsert({
    where: { name: "REF-6756" },
    update: {},
    create: {
      name: "REF-6756",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6154"] = await prisma.system.upsert({
    where: { name: "REF-6154" },
    update: {},
    create: {
      name: "REF-6154",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6726"] = await prisma.system.upsert({
    where: { name: "REF-6726" },
    update: {},
    create: {
      name: "REF-6726",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6023"] = await prisma.system.upsert({
    where: { name: "REF-6023" },
    update: {},
    create: {
      name: "REF-6023",
      companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id
    }
  });
  systems["REF-6759"] = await prisma.system.upsert({
    where: { name: "REF-6759" },
    update: {},
    create: {
      name: "REF-6759",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6763"] = await prisma.system.upsert({
    where: { name: "REF-6763" },
    update: {},
    create: {
      name: "REF-6763",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6866"] = await prisma.system.upsert({
    where: { name: "REF-6866" },
    update: {},
    create: {
      name: "REF-6866",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6157"] = await prisma.system.upsert({
    where: { name: "REF-6157" },
    update: {},
    create: {
      name: "REF-6157",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6732"] = await prisma.system.upsert({
    where: { name: "REF-6732" },
    update: {},
    create: {
      name: "REF-6732",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6740"] = await prisma.system.upsert({
    where: { name: "REF-6740" },
    update: {},
    create: {
      name: "REF-6740",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6818"] = await prisma.system.upsert({
    where: { name: "REF-6818" },
    update: {},
    create: {
      name: "REF-6818",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6745"] = await prisma.system.upsert({
    where: { name: "REF-6745" },
    update: {},
    create: {
      name: "REF-6745",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6016"] = await prisma.system.upsert({
    where: { name: "REF-6016" },
    update: {},
    create: {
      name: "REF-6016",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6748"] = await prisma.system.upsert({
    where: { name: "REF-6748" },
    update: {},
    create: {
      name: "REF-6748",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6749"] = await prisma.system.upsert({
    where: { name: "REF-6749" },
    update: {},
    create: {
      name: "REF-6749",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6018"] = await prisma.system.upsert({
    where: { name: "REF-6018" },
    update: {},
    create: {
      name: "REF-6018",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6864"] = await prisma.system.upsert({
    where: { name: "REF-6864" },
    update: {},
    create: {
      name: "REF-6864",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6867"] = await prisma.system.upsert({
    where: { name: "REF-6867" },
    update: {},
    create: {
      name: "REF-6867",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6800"] = await prisma.system.upsert({
    where: { name: "REF-6800" },
    update: {},
    create: {
      name: "REF-6800",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6805"] = await prisma.system.upsert({
    where: { name: "REF-6805" },
    update: {},
    create: {
      name: "REF-6805",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6042"] = await prisma.system.upsert({
    where: { name: "REF-6042" },
    update: {},
    create: {
      name: "REF-6042",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6806"] = await prisma.system.upsert({
    where: { name: "REF-6806" },
    update: {},
    create: {
      name: "REF-6806",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6746"] = await prisma.system.upsert({
    where: { name: "REF-6746" },
    update: {},
    create: {
      name: "REF-6746",
      companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id
    }
  });
  systems["REF-6747"] = await prisma.system.upsert({
    where: { name: "REF-6747" },
    update: {},
    create: {
      name: "REF-6747",
      companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id
    }
  });
  systems["REF-6017"] = await prisma.system.upsert({
    where: { name: "REF-6017" },
    update: {},
    create: {
      name: "REF-6017",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6821"] = await prisma.system.upsert({
    where: { name: "REF-6821" },
    update: {},
    create: {
      name: "REF-6821",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6158"] = await prisma.system.upsert({
    where: { name: "REF-6158" },
    update: {},
    create: {
      name: "REF-6158",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6159"] = await prisma.system.upsert({
    where: { name: "REF-6159" },
    update: {},
    create: {
      name: "REF-6159",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6668"] = await prisma.system.upsert({
    where: { name: "REF-6668" },
    update: {},
    create: {
      name: "REF-6668",
      companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id
    }
  });
  systems["REF-6669"] = await prisma.system.upsert({
    where: { name: "REF-6669" },
    update: {},
    create: {
      name: "REF-6669",
      companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id
    }
  });
  systems["REF-6670"] = await prisma.system.upsert({
    where: { name: "REF-6670" },
    update: {},
    create: {
      name: "REF-6670",
      companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id
    }
  });
  systems["REF-28645"] = await prisma.system.upsert({
    where: { name: "REF-28645" },
    update: {},
    create: {
      name: "REF-28645",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-28644"] = await prisma.system.upsert({
    where: { name: "REF-28644" },
    update: {},
    create: {
      name: "REF-28644",
      companyId: companies["OPTESZ"].id
    }
  });
  systems["REF-28645"] = await prisma.system.upsert({
    where: { name: "REF-28645" },
    update: {},
    create: {
      name: "REF-28645",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6161"] = await prisma.system.upsert({
    where: { name: "REF-6161" },
    update: {},
    create: {
      name: "REF-6161",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6773"] = await prisma.system.upsert({
    where: { name: "REF-6773" },
    update: {},
    create: {
      name: "REF-6773",
      companyId: companies["TIGÁZ"].id
    }
  });
  systems["REF-6734"] = await prisma.system.upsert({
    where: { name: "REF-6734" },
    update: {},
    create: {
      name: "REF-6734",
      companyId: companies["TITÁSZ/OPTESZ"].id
    }
  });
  systems["REF-6854"] = await prisma.system.upsert({
    where: { name: "REF-6854" },
    update: {},
    create: {
      name: "REF-6854",
      companyId: companies["TITÁSZ"].id
    }
  });
  systems["REF-6856"] = await prisma.system.upsert({
    where: { name: "REF-6856" },
    update: {},
    create: {
      name: "REF-6856",
      companyId: companies["TITÁSZ/OPTESZ"].id
    }
  });
  systems["REF-6855"] = await prisma.system.upsert({
    where: { name: "REF-6855" },
    update: {},
    create: {
      name: "REF-6855",
      companyId: companies["TITÁSZ/OPTESZ"].id
    }
  });
  systems["REF-6857"] = await prisma.system.upsert({
    where: { name: "REF-6857" },
    update: {},
    create: {
      name: "REF-6857",
      companyId: companies["TITÁSZ/OPTESZ"].id
    }
  });
  systems["REF-6858"] = await prisma.system.upsert({
    where: { name: "REF-6858" },
    update: {},
    create: {
      name: "REF-6858",
      companyId: companies["TITÁSZ/OPTESZ"].id
    }
  });
  systems["REF-6879"] = await prisma.system.upsert({
    where: { name: "REF-6879" },
    update: {},
    create: {
      name: "REF-6879",
      companyId: companies["TITÁSZ/OPTESZ"].id
    }
  });
  systems["REF-6009"] = await prisma.system.upsert({
    where: { name: "REF-6009" },
    update: {},
    create: {
      name: "REF-6009",
      companyId: companies["TITÁSZ"].id
    }
  });
  const items = {};
  items["APN - GSM hálózatok száma (db)"] = await prisma.item.upsert({
    where: { code: "apn___gsm_hálózatok_száma_db" },
    update: {},
    create: {
      code: "apn___gsm_hálózatok_száma_db",
      name: "APN - GSM hálózatok száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["APN-be kötött (IOT eszközök) száma (db)"] = await prisma.item.upsert({
    where: { code: "apn_be_kötött_iot_eszközök_száma_db" },
    update: {},
    create: {
      code: "apn_be_kötött_iot_eszközök_száma_db",
      name: "APN-be kötött (IOT eszközök) száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["Adatbázisok száma (db)"] = await prisma.item.upsert({
    where: { code: "adatbázisok_száma_db" },
    update: {},
    create: {
      code: "adatbázisok_száma_db",
      name: "Adatbázisok száma (db)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Adatcsere - Middleware (Biztalk)​"] = await prisma.item.upsert({
    where: { code: "adatcsere__ middleware biztalk​" },
    update: {},
    create: {
      code: "adatcsere__ middleware biztalk​",
      name: "Adatcsere - Middleware (Biztalk)​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Adatvonalak száma (db)"] = await prisma.item.upsert({
    where: { code: "adatvonalak_száma_db" },
    update: {},
    create: {
      code: "adatvonalak_száma_db",
      name: "Adatvonalak száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["Archive storage használat (lefoglalt) (TB)"] = await prisma.item.upsert({
    where: { code: "archive_storage_használat_lefoglalt_tb" },
    update: {},
    create: {
      code: "archive_storage_használat_lefoglalt_tb",
      name: "Archive storage használat (lefoglalt) (TB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Archive storage kapacitás (teljes) (TB)"] = await prisma.item.upsert({
    where: { code: "archive_storage_kapacitás_teljes_tb" },
    update: {},
    create: {
      code: "archive_storage_kapacitás_teljes_tb",
      name: "Archive storage kapacitás (teljes) (TB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Azure eroforrás mutató (db)"] = await prisma.item.upsert({
    where: { code: "azure_eroforrás_mutató_db" },
    update: {},
    create: {
      code: "azure_eroforrás_mutató_db",
      name: "Azure eroforrás mutató (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["CsoCso"] = await prisma.item.upsert({
    where: { code: "csocso" },
    update: {},
    create: {
      code: "csocso",
      name: "CsoCso",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Címtár felhasználók (aktív) (db)"] = await prisma.item.upsert({
    where: { code: "címtár_felhasználók_aktív_db" },
    update: {},
    create: {
      code: "címtár_felhasználók_aktív_db",
      name: "Címtár felhasználók (aktív) (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["Címtár felhasználók (letiltott) (db)"] = await prisma.item.upsert({
    where: { code: "címtár_felhasználók_letiltott_db" },
    update: {},
    create: {
      code: "címtár_felhasználók_letiltott_db",
      name: "Címtár felhasználók (letiltott) (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["Címtár felhasználók száma összesen (db)"] = await prisma.item.upsert({
    where: { code: "címtár_felhasználók_száma_összesen_db" },
    update: {},
    create: {
      code: "címtár_felhasználók_száma_összesen_db",
      name: "Címtár felhasználók száma összesen (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["Címtár jogosultsági csoportok száma (db)"] = await prisma.item.upsert({
    where: { code: "címtár_jogosultsági_csoportok_száma_db" },
    update: {},
    create: {
      code: "címtár_jogosultsági_csoportok_száma_db",
      name: "Címtár jogosultsági csoportok száma (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["Címtár objektumok összesen (db)"] = await prisma.item.upsert({
    where: { code: "címtár_objektumok_összesen_db" },
    update: {},
    create: {
      code: "címtár_objektumok_összesen_db",
      name: "Címtár objektumok összesen (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["DMS - Szerződés nyilvántartás"] = await prisma.item.upsert({
    where: { code: "dms___szerződés_nyilvántartás" },
    update: {},
    create: {
      code: "dms___szerződés_nyilvántartás",
      name: "DMS - Szerződés nyilvántartás",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["DMS Ultimate - Ügyfélszolgálati modul"] = await prisma.item.upsert({
    where: { code: "dms_ultimate___ügyfélszolgálati_modul" },
    update: {},
    create: {
      code: "dms_ultimate___ügyfélszolgálati_modul",
      name: "DMS Ultimate - Ügyfélszolgálati modul",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["DMS Ultimate- Számla"] = await prisma.item.upsert({
    where: { code: "dms_ultimate__számla" },
    update: {},
    create: {
      code: "dms_ultimate__számla",
      name: "DMS Ultimate- Számla",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["DMS Ultimate- Általános"] = await prisma.item.upsert({
    where: { code: "dms_ultimate__általános" },
    update: {},
    create: {
      code: "dms_ultimate__általános",
      name: "DMS Ultimate- Általános",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["DMS-DataCAP"] = await prisma.item.upsert({
    where: { code: "dms_datacap" },
    update: {},
    create: {
      code: "dms_datacap",
      name: "DMS-DataCAP",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["DMS-Filenet"] = await prisma.item.upsert({
    where: { code: "dms_filenet" },
    update: {},
    create: {
      code: "dms_filenet",
      name: "DMS-Filenet",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["E-közmű"] = await prisma.item.upsert({
    where: { code: "e_közmű" },
    update: {},
    create: {
      code: "e_közmű",
      name: "E-közmű",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["E-számla letöltés​"] = await prisma.item.upsert({
    where: { code: "e_számla letöltés​" },
    update: {},
    create: {
      code: "e_számla letöltés​",
      name: "E-számla letöltés​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["ELO DMS-BESZ​"] = await prisma.item.upsert({
    where: { code: "elo_dms_besz​" },
    update: {},
    create: {
      code: "elo_dms_besz​",
      name: "ELO DMS-BESZ​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["ELO DMS​"] = await prisma.item.upsert({
    where: { code: "elo_dms​" },
    update: {},
    create: {
      code: "elo_dms​",
      name: "ELO DMS​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Egyéb storage kapacitás (TB)"] = await prisma.item.upsert({
    where: { code: "egyéb_storage_kapacitás_tb" },
    update: {},
    create: {
      code: "egyéb_storage_kapacitás_tb",
      name: "Egyéb storage kapacitás (TB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Eventus"] = await prisma.item.upsert({
    where: { code: "eventus" },
    update: {},
    create: {
      code: "eventus",
      name: "Eventus",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["FCI számla OCR​"] = await prisma.item.upsert({
    where: { code: "fci_számla ocr​" },
    update: {},
    create: {
      code: "fci_számla ocr​",
      name: "FCI számla OCR​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Fizikai CPU magok száma (db)"] = await prisma.item.upsert({
    where: { code: "fizikai_cpu_magok_száma_db" },
    update: {},
    create: {
      code: "fizikai_cpu_magok_száma_db",
      name: "Fizikai CPU magok száma (db)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Fizikai memória összesen (GB)"] = await prisma.item.upsert({
    where: { code: "fizikai_memória_összesen_gb" },
    update: {},
    create: {
      code: "fizikai_memória_összesen_gb",
      name: "Fizikai memória összesen (GB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Fizikai szerverek száma (db)"] = await prisma.item.upsert({
    where: { code: "fizikai_szerverek_száma_db" },
    update: {},
    create: {
      code: "fizikai_szerverek_száma_db",
      name: "Fizikai szerverek száma (db)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["GRASS-Digi​"] = await prisma.item.upsert({
    where: { code: "grass_digi​" },
    update: {},
    create: {
      code: "grass_digi​",
      name: "GRASS-Digi​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Google Earth"] = await prisma.item.upsert({
    where: { code: "google_earth" },
    update: {},
    create: {
      code: "google_earth",
      name: "Google Earth",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Gépjármű-követés (Webcontrol)"] = await prisma.item.upsert({
    where: { code: "gépjármű_követés_webcontrol" },
    update: {},
    create: {
      code: "gépjármű_követés_webcontrol",
      name: "Gépjármű-követés (Webcontrol)",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Gépjármű-nyilvántartó (SeeFleat)"] = await prisma.item.upsert({
    where: { code: "gépjármű_nyilvántartó_seefleat" },
    update: {},
    create: {
      code: "gépjármű_nyilvántartó_seefleat",
      name: "Gépjármű-nyilvántartó (SeeFleat)",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Hasznos email szám (db)"] = await prisma.item.upsert({
    where: { code: "hasznos_email_szám_db" },
    update: {},
    create: {
      code: "hasznos_email_szám_db",
      name: "Hasznos email szám (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["Havonta átlagosan nyomtatott lapok száma (db)"] = await prisma.item.upsert({
    where: { code: "havonta_átlagosan_nyomtatott_lapok_száma_db" },
    update: {},
    create: {
      code: "havonta_átlagosan_nyomtatott_lapok_száma_db",
      name: "Havonta átlagosan nyomtatott lapok száma (db)",
      serviceId: services["Irodai eszközök szolgáltatás"].id
    }
  });
  items["INIS"] = await prisma.item.upsert({
    where: { code: "inis" },
    update: {},
    create: {
      code: "inis",
      name: "INIS",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["INIS - DWG betöltő"] = await prisma.item.upsert({
    where: { code: "inis___dwg_betöltő" },
    update: {},
    create: {
      code: "inis___dwg_betöltő",
      name: "INIS - DWG betöltő",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["INIS - VBR2"] = await prisma.item.upsert({
    where: { code: "inis___vbr2" },
    update: {},
    create: {
      code: "inis___vbr2",
      name: "INIS - VBR2",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["KIFÜR"] = await prisma.item.upsert({
    where: { code: "kifür" },
    update: {},
    create: {
      code: "kifür",
      name: "KIFÜR",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["KOALA"] = await prisma.item.upsert({
    where: { code: "koala" },
    update: {},
    create: {
      code: "koala",
      name: "KOALA",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Kiszolgált rendszerek száma (db)"] = await prisma.item.upsert({
    where: { code: "kiszolgált_rendszerek_száma_db" },
    update: {},
    create: {
      code: "kiszolgált_rendszerek_száma_db",
      name: "Kiszolgált rendszerek száma (db)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Kofax ​"] = await prisma.item.upsert({
    where: { code: "kofax ​" },
    update: {},
    create: {
      code: "kofax ​",
      name: "Kofax ​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["LAN aktív eszközök száma (switch) (db)"] = await prisma.item.upsert({
    where: { code: "lan_aktív_eszközök_száma_switch_db" },
    update: {},
    create: {
      code: "lan_aktív_eszközök_száma_switch_db",
      name: "LAN aktív eszközök száma (switch) (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["LAN aktív portok száma (db)"] = await prisma.item.upsert({
    where: { code: "lan_aktív_portok_száma_db" },
    update: {},
    create: {
      code: "lan_aktív_portok_száma_db",
      name: "LAN aktív portok száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["LAN fali csatlakozók száma (db)"] = await prisma.item.upsert({
    where: { code: "lan_fali_csatlakozók_száma_db" },
    update: {},
    create: {
      code: "lan_fali_csatlakozók_száma_db",
      name: "LAN fali csatlakozók száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["LEO rendszer"] = await prisma.item.upsert({
    where: { code: "leo_rendszer" },
    update: {},
    create: {
      code: "leo_rendszer",
      name: "LEO rendszer",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Laptopok száma (db)"] = await prisma.item.upsert({
    where: { code: "laptopok_száma_db" },
    update: {},
    create: {
      code: "laptopok_száma_db",
      name: "Laptopok száma (db)",
      serviceId: services["Irodai eszközök szolgáltatás"].id
    }
  });
  items["Lecserélt WAN eszközök száma (db)"] = await prisma.item.upsert({
    where: { code: "lecserélt_wan_eszközök_száma_db" },
    update: {},
    create: {
      code: "lecserélt_wan_eszközök_száma_db",
      name: "Lecserélt WAN eszközök száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["Levelezési objektumok száma (db)"] = await prisma.item.upsert({
    where: { code: "levelezési_objektumok_száma_db" },
    update: {},
    create: {
      code: "levelezési_objektumok_száma_db",
      name: "Levelezési objektumok száma (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["Magas rendelkezésre állású storage használat (lefoglalt) (TB)"] = await prisma.item.upsert({
    where: { code: "magas_rendelkezésre_állású_storage_használat_lefoglalt_tb" },
    update: {},
    create: {
      code: "magas_rendelkezésre_állású_storage_használat_lefoglalt_tb",
      name: "Magas rendelkezésre állású storage használat (lefoglalt) (TB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Magas rendelkezésre állású storage kapacitás (teljes) (TB)"] = await prisma.item.upsert({
    where: { code: "magas_rendelkezésre_állású_storage_kapacitás_teljes_tb" },
    update: {},
    create: {
      code: "magas_rendelkezésre_állású_storage_kapacitás_teljes_tb",
      name: "Magas rendelkezésre állású storage kapacitás (teljes) (TB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["MaxSzim​"] = await prisma.item.upsert({
    where: { code: "maxszim​" },
    update: {},
    create: {
      code: "maxszim​",
      name: "MaxSzim​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Mentett adatbázisok száma (db)"] = await prisma.item.upsert({
    where: { code: "mentett_adatbázisok_száma_db" },
    update: {},
    create: {
      code: "mentett_adatbázisok_száma_db",
      name: "Mentett adatbázisok száma (db)",
      serviceId: services["Mentés helyreállítási szolgáltatások"].id
    }
  });
  items["Mentett adatok mennyisége (TB)"] = await prisma.item.upsert({
    where: { code: "mentett_adatok_mennyisége_tb" },
    update: {},
    create: {
      code: "mentett_adatok_mennyisége_tb",
      name: "Mentett adatok mennyisége (TB)",
      serviceId: services["Mentés helyreállítási szolgáltatások"].id
    }
  });
  items["Mentett rendszerek száma (db)"] = await prisma.item.upsert({
    where: { code: "mentett_rendszerek_száma_db" },
    update: {},
    create: {
      code: "mentett_rendszerek_száma_db",
      name: "Mentett rendszerek száma (db)",
      serviceId: services["Mentés helyreállítási szolgáltatások"].id
    }
  });
  items["Mentési  storage használat (lefoglalt) (TB)"] = await prisma.item.upsert({
    where: { code: "mentési__storage_használat_lefoglalt_tb" },
    update: {},
    create: {
      code: "mentési__storage_használat_lefoglalt_tb",
      name: "Mentési  storage használat (lefoglalt) (TB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Mentési Storage kapacitás (TB)"] = await prisma.item.upsert({
    where: { code: "mentési_storage_kapacitás_tb" },
    update: {},
    create: {
      code: "mentési_storage_kapacitás_tb",
      name: "Mentési Storage kapacitás (TB)",
      serviceId: services["Mentés helyreállítási szolgáltatások"].id
    }
  });
  items["Mentési Szalagos kapacitás (TB)"] = await prisma.item.upsert({
    where: { code: "mentési_szalagos_kapacitás_tb" },
    update: {},
    create: {
      code: "mentési_szalagos_kapacitás_tb",
      name: "Mentési Szalagos kapacitás (TB)",
      serviceId: services["Mentés helyreállítási szolgáltatások"].id
    }
  });
  items["Mentési storage kapacitás (teljes) (TB)"] = await prisma.item.upsert({
    where: { code: "mentési_storage_kapacitás_teljes_tb" },
    update: {},
    create: {
      code: "mentési_storage_kapacitás_teljes_tb",
      name: "Mentési storage kapacitás (teljes) (TB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Mentéssel kapcsolatos feladatok számossága (db)"] = await prisma.item.upsert({
    where: { code: "mentéssel_kapcsolatos_feladatok_számossága_db" },
    update: {},
    create: {
      code: "mentéssel_kapcsolatos_feladatok_számossága_db",
      name: "Mentéssel kapcsolatos feladatok számossága (db)",
      serviceId: services["Mentés helyreállítási szolgáltatások"].id
    }
  });
  items["Mobil telefonok száma (db)"] = await prisma.item.upsert({
    where: { code: "mobil_telefonok_száma_db" },
    update: {},
    create: {
      code: "mobil_telefonok_száma_db",
      name: "Mobil telefonok száma (db)",
      serviceId: services["Irodai eszközök szolgáltatás"].id
    }
  });
  items["MySigno hitelesítő"] = await prisma.item.upsert({
    where: { code: "mysigno_hitelesítő" },
    update: {},
    create: {
      code: "mysigno_hitelesítő",
      name: "MySigno hitelesítő",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Mérési központ és Portál"] = await prisma.item.upsert({
    where: { code: "mérési_központ_és_portál" },
    update: {},
    create: {
      code: "mérési_központ_és_portál",
      name: "Mérési központ és Portál",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["NEXON"] = await prisma.item.upsert({
    where: { code: "nexon" },
    update: {},
    create: {
      code: "nexon",
      name: "NEXON",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Neplan"] = await prisma.item.upsert({
    where: { code: "neplan" },
    update: {},
    create: {
      code: "neplan",
      name: "Neplan",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Nyomtatók száma (db)"] = await prisma.item.upsert({
    where: { code: "nyomtatók_száma_db" },
    update: {},
    create: {
      code: "nyomtatók_száma_db",
      name: "Nyomtatók száma (db)",
      serviceId: services["Irodai eszközök szolgáltatás"].id
    }
  });
  items["OPAL/OPEM Leolvasási rendszerek"] = await prisma.item.upsert({
    where: { code: "opal/opem_leolvasási_rendszerek" },
    update: {},
    create: {
      code: "opal/opem_leolvasási_rendszerek",
      name: "OPAL/OPEM Leolvasási rendszerek",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["PC-k száma (db)"] = await prisma.item.upsert({
    where: { code: "pc_k_száma_db" },
    update: {},
    create: {
      code: "pc_k_száma_db",
      name: "PC-k száma (db)",
      serviceId: services["Irodai eszközök szolgáltatás"].id
    }
  });
  items["PDA-k száma (db)"] = await prisma.item.upsert({
    where: { code: "pda_k_száma_db" },
    update: {},
    create: {
      code: "pda_k_száma_db",
      name: "PDA-k száma (db)",
      serviceId: services["Irodai eszközök szolgáltatás"].id
    }
  });
  items["Postafiókok száma (db)"] = await prisma.item.upsert({
    where: { code: "postafiókok_száma_db" },
    update: {},
    create: {
      code: "postafiókok_száma_db",
      name: "Postafiókok száma (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["Postázással kapcsolatos szoftverek ​"] = await prisma.item.upsert({
    where: { code: "postázással kapcsolatos szoftverek ​" },
    update: {},
    create: {
      code: "postázással kapcsolatos szoftverek ​",
      name: "Postázással kapcsolatos szoftverek ​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["PowerBI riporting"] = await prisma.item.upsert({
    where: { code: "powerbi_riporting" },
    update: {},
    create: {
      code: "powerbi_riporting",
      name: "PowerBI riporting",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Reginfo"] = await prisma.item.upsert({
    where: { code: "reginfo" },
    update: {},
    create: {
      code: "reginfo",
      name: "Reginfo",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Report Manager - INIS"] = await prisma.item.upsert({
    where: { code: "report_manager___inis" },
    update: {},
    create: {
      code: "report_manager___inis",
      name: "Report Manager - INIS",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["SAP ECC rendszer"] = await prisma.item.upsert({
    where: { code: "sap_ecc_rendszer" },
    update: {},
    create: {
      code: "sap_ecc_rendszer",
      name: "SAP ECC rendszer",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["SAP S4HANA rendszer"] = await prisma.item.upsert({
    where: { code: "sap_s4hana_rendszer" },
    update: {},
    create: {
      code: "sap_s4hana_rendszer",
      name: "SAP S4HANA rendszer",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["SAPERION számlaképnyilvántartó rendszer"] = await prisma.item.upsert({
    where: { code: "saperion_számlaképnyilvántartó_rendszer" },
    update: {},
    create: {
      code: "saperion_számlaképnyilvántartó_rendszer",
      name: "SAPERION számlaképnyilvántartó rendszer",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["SIMS és SIMS Web"] = await prisma.item.upsert({
    where: { code: "sims_és_sims_web" },
    update: {},
    create: {
      code: "sims_és_sims_web",
      name: "SIMS és SIMS Web",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["SPAM email száma (db)"] = await prisma.item.upsert({
    where: { code: "spam_email_száma_db" },
    update: {},
    create: {
      code: "spam_email_száma_db",
      name: "SPAM email száma (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["SharePoint Online site-ok száma (db)"] = await prisma.item.upsert({
    where: { code: "sharepoint_online_site_ok_száma_db" },
    update: {},
    create: {
      code: "sharepoint_online_site_ok_száma_db",
      name: "SharePoint Online site-ok száma (db)",
      serviceId: services["Kollaborációs szolgáltatások"].id
    }
  });
  items["Storage rendelkezésre álló összes kapacitás (TB)"] = await prisma.item.upsert({
    where: { code: "storage_rendelkezésre_álló_összes_kapacitás_tb" },
    update: {},
    create: {
      code: "storage_rendelkezésre_álló_összes_kapacitás_tb",
      name: "Storage rendelkezésre álló összes kapacitás (TB)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Szerelői Raktár (SZR)"] = await prisma.item.upsert({
    where: { code: "szerelői_raktár_szr" },
    update: {},
    create: {
      code: "szerelői_raktár_szr",
      name: "Szerelői Raktár (SZR)",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Szállítói minősítés (IBM BAW Üzleti automatizáció)"] = await prisma.item.upsert({
    where: { code: "szállítói_minősítés_ibm_baw_üzleti_automatizáció" },
    update: {},
    create: {
      code: "szállítói_minősítés_ibm_baw_üzleti_automatizáció",
      name: "Szállítói minősítés (IBM BAW Üzleti automatizáció)",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["TVRR vonalkódos rendszer"] = await prisma.item.upsert({
    where: { code: "tvrr_vonalkódos_rendszer" },
    update: {},
    create: {
      code: "tvrr_vonalkódos_rendszer",
      name: "TVRR vonalkódos rendszer",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Telephelyek száma (db)"] = await prisma.item.upsert({
    where: { code: "telephelyek_száma_db" },
    update: {},
    create: {
      code: "telephelyek_száma_db",
      name: "Telephelyek száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["Tuzfal szabályok száma (db)"] = await prisma.item.upsert({
    where: { code: "tuzfal_szabályok_száma_db" },
    update: {},
    create: {
      code: "tuzfal_szabályok_száma_db",
      name: "Tuzfal szabályok száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["Támadások száma (db)"] = await prisma.item.upsert({
    where: { code: "támadások_száma_db" },
    update: {},
    create: {
      code: "támadások_száma_db",
      name: "Támadások száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["UMP​"] = await prisma.item.upsert({
    where: { code: "ump​" },
    update: {},
    create: {
      code: "ump​",
      name: "UMP​",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["UPS kapacitás (?)"] = await prisma.item.upsert({
    where: { code: "ups_kapacitás_?" },
    update: {},
    create: {
      code: "ups_kapacitás_?",
      name: "UPS kapacitás (?)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["VezJog2"] = await prisma.item.upsert({
    where: { code: "vezjog2" },
    update: {},
    create: {
      code: "vezjog2",
      name: "VezJog2",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["Virtuális CPU-k száma (db)"] = await prisma.item.upsert({
    where: { code: "virtuális_cpu_k_száma_db" },
    update: {},
    create: {
      code: "virtuális_cpu_k_száma_db",
      name: "Virtuális CPU-k száma (db)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Virtuális szerverek száma (db)"] = await prisma.item.upsert({
    where: { code: "virtuális_szerverek_száma_db" },
    update: {},
    create: {
      code: "virtuális_szerverek_száma_db",
      name: "Virtuális szerverek száma (db)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["WAN eszközök száma (router) (db)"] = await prisma.item.upsert({
    where: { code: "wan_eszközök_száma_router_db" },
    update: {},
    create: {
      code: "wan_eszközök_száma_router_db",
      name: "WAN eszközök száma (router) (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["WERA"] = await prisma.item.upsert({
    where: { code: "wera" },
    update: {},
    create: {
      code: "wera",
      name: "WERA",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["WebBeny"] = await prisma.item.upsert({
    where: { code: "webbeny" },
    update: {},
    create: {
      code: "webbeny",
      name: "WebBeny",
      serviceId: services["Felhasználók száma"].id
    }
  });
  items["WiFi access pointok (AP) száma (db)"] = await prisma.item.upsert({
    where: { code: "wifi_access_pointok_ap_száma_db" },
    update: {},
    create: {
      code: "wifi_access_pointok_ap_száma_db",
      name: "WiFi access pointok (AP) száma (db)",
      serviceId: services["Adathálózati szolgáltatások"].id
    }
  });
  items["Zabbix-ba bevont Windows szerverek száma (db)"] = await prisma.item.upsert({
    where: { code: "zabbix_ba_bevont_windows_szerverek_száma_db" },
    update: {},
    create: {
      code: "zabbix_ba_bevont_windows_szerverek_száma_db",
      name: "Zabbix-ba bevont Windows szerverek száma (db)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["Zabbix-ba bevont alkalmazások száma (db)"] = await prisma.item.upsert({
    where: { code: "zabbix_ba_bevont_alkalmazások_száma_db" },
    update: {},
    create: {
      code: "zabbix_ba_bevont_alkalmazások_száma_db",
      name: "Zabbix-ba bevont alkalmazások száma (db)",
      serviceId: services["Adatközponti szolgáltatások"].id
    }
  });
  items["ÉVV"] = await prisma.item.upsert({
    where: { code: "évv" },
    update: {},
    create: {
      code: "évv",
      name: "ÉVV",
      serviceId: services["Felhasználók száma"].id
    }
  });
  const kpiRecords = [];
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Egyéb DB"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["MSSQL"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 552.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Oracle"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 38.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 595.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Egyéb DB"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["MSSQL"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 552.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Oracle"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 38.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 595.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Egyéb DB"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["MSSQL"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 552.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Oracle"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 38.0
  });
  kpiRecords.push({
    itemId: items["Adatbázisok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Bende Zsolt"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 595.0
  });
  kpiRecords.push({
    itemId: items["PowerBI riporting"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Biró Csaba"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6865"]?.id,
    date: new Date("2025-01-01"),
    value: 50.0
  });
  kpiRecords.push({
    itemId: items["PowerBI riporting"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Biró Csaba"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6865"]?.id,
    date: new Date("2025-02-01"),
    value: 50.0
  });
  kpiRecords.push({
    itemId: items["PowerBI riporting"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Biró Csaba"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6865"]?.id,
    date: new Date("2025-03-01"),
    value: 50.0
  });
  kpiRecords.push({
    itemId: items["Laptopok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 1592.0
  });
  kpiRecords.push({
    itemId: items["Laptopok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 1691.0
  });
  kpiRecords.push({
    itemId: items["Laptopok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 1721.0
  });
  kpiRecords.push({
    itemId: items["PC-k száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 275.0
  });
  kpiRecords.push({
    itemId: items["PC-k száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 275.0
  });
  kpiRecords.push({
    itemId: items["PC-k száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 279.0
  });
  kpiRecords.push({
    itemId: items["PDA-k száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 683.0
  });
  kpiRecords.push({
    itemId: items["PDA-k száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 683.0
  });
  kpiRecords.push({
    itemId: items["PDA-k száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Bíró-Zs"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 683.0
  });
  kpiRecords.push({
    itemId: items["Azure eroforrás mutató (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 77.0
  });
  kpiRecords.push({
    itemId: items["Azure eroforrás mutató (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 77.0
  });
  kpiRecords.push({
    itemId: items["Azure eroforrás mutató (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 77.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók (aktív) (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 4106.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók (aktív) (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 4180.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók (aktív) (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 4271.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók (letiltott) (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 3765.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók (letiltott) (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 3815.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók (letiltott) (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 3861.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók száma összesen (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 7871.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók száma összesen (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 7995.0
  });
  kpiRecords.push({
    itemId: items["Címtár felhasználók száma összesen (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 8055.0
  });
  kpiRecords.push({
    itemId: items["Címtár jogosultsági csoportok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 2460.0
  });
  kpiRecords.push({
    itemId: items["Címtár jogosultsági csoportok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 2493.0
  });
  kpiRecords.push({
    itemId: items["Címtár jogosultsági csoportok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 2536.0
  });
  kpiRecords.push({
    itemId: items["Címtár objektumok összesen (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 102153.0
  });
  kpiRecords.push({
    itemId: items["Címtár objektumok összesen (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 102845.0
  });
  kpiRecords.push({
    itemId: items["Címtár objektumok összesen (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 103723.0
  });
  kpiRecords.push({
    itemId: items["Hasznos email szám (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 41484.0
  });
  kpiRecords.push({
    itemId: items["Hasznos email szám (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 41730.0
  });
  kpiRecords.push({
    itemId: items["Hasznos email szám (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 41805.0
  });
  kpiRecords.push({
    itemId: items["Levelezési objektumok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 13140.0
  });
  kpiRecords.push({
    itemId: items["Levelezési objektumok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 13195.0
  });
  kpiRecords.push({
    itemId: items["Levelezési objektumok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 13229.0
  });
  kpiRecords.push({
    itemId: items["Postafiókok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 3649.0
  });
  kpiRecords.push({
    itemId: items["Postafiókok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 3684.0
  });
  kpiRecords.push({
    itemId: items["Postafiókok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 3711.0
  });
  kpiRecords.push({
    itemId: items["SharePoint Online site-ok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 774.0
  });
  kpiRecords.push({
    itemId: items["SharePoint Online site-ok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 789.0
  });
  kpiRecords.push({
    itemId: items["SharePoint Online site-ok száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 802.0
  });
  kpiRecords.push({
    itemId: items["SPAM email száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 1353.0
  });
  kpiRecords.push({
    itemId: items["SPAM email száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 1412.0
  });
  kpiRecords.push({
    itemId: items["SPAM email száma (db)"].id,
    serviceId: services["Kollaborációs szolgáltatások"].id,
    userId: users["Ducsi Szilárd"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 1336.0
  });
  kpiRecords.push({
    itemId: items["E-számla letöltés​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6741"]?.id,
    date: new Date("2025-01-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["E-számla letöltés​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6741"]?.id,
    date: new Date("2025-02-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["E-számla letöltés​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6741"]?.id,
    date: new Date("2025-03-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["FCI számla OCR​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6742"]?.id,
    date: new Date("2025-01-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["FCI számla OCR​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6742"]?.id,
    date: new Date("2025-02-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["FCI számla OCR​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6742"]?.id,
    date: new Date("2025-03-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["GRASS-Digi​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6156"]?.id,
    date: new Date("2025-01-01"),
    value: 236.0
  });
  kpiRecords.push({
    itemId: items["GRASS-Digi​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6156"]?.id,
    date: new Date("2025-02-01"),
    value: 232.0
  });
  kpiRecords.push({
    itemId: items["GRASS-Digi​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6156"]?.id,
    date: new Date("2025-03-01"),
    value: 233.0
  });
  kpiRecords.push({
    itemId: items["Kofax ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6751"]?.id,
    date: new Date("2025-01-01"),
    value: 7.0
  });
  kpiRecords.push({
    itemId: items["Kofax ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6751"]?.id,
    date: new Date("2025-02-01"),
    value: 7.0
  });
  kpiRecords.push({
    itemId: items["Kofax ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6751"]?.id,
    date: new Date("2025-03-01"),
    value: 7.0
  });
  kpiRecords.push({
    itemId: items["Postázással kapcsolatos szoftverek ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6770"]?.id,
    date: new Date("2025-01-01"),
    value: 45.0
  });
  kpiRecords.push({
    itemId: items["Postázással kapcsolatos szoftverek ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6770"]?.id,
    date: new Date("2025-02-01"),
    value: 45.0
  });
  kpiRecords.push({
    itemId: items["Postázással kapcsolatos szoftverek ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Ecsedi Zoltán"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6770"]?.id,
    date: new Date("2025-03-01"),
    value: 44.0
  });
  kpiRecords.push({
    itemId: items["MaxSzim​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Földi Lajos"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6756"]?.id,
    date: new Date("2025-01-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["MaxSzim​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Földi Lajos"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6756"]?.id,
    date: new Date("2025-02-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["MaxSzim​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Földi Lajos"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6756"]?.id,
    date: new Date("2025-03-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["UMP​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Földi Lajos"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6154"]?.id,
    date: new Date("2025-01-01"),
    value: 650.0
  });
  kpiRecords.push({
    itemId: items["UMP​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Földi Lajos"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6154"]?.id,
    date: new Date("2025-02-01"),
    value: 650.0
  });
  kpiRecords.push({
    itemId: items["UMP​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Földi Lajos"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6154"]?.id,
    date: new Date("2025-03-01"),
    value: 650.0
  });
  kpiRecords.push({
    itemId: items["Adatcsere - Middleware (Biztalk)​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6726"]?.id,
    date: new Date("2025-01-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["Adatcsere - Middleware (Biztalk)​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6726"]?.id,
    date: new Date("2025-02-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["Adatcsere - Middleware (Biztalk)​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6726"]?.id,
    date: new Date("2025-03-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["Adatcsere - Middleware (Biztalk)​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6726"]?.id,
    date: new Date("2025-04-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["Adatcsere - Middleware (Biztalk)​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6726"]?.id,
    date: new Date("2025-05-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["MySigno hitelesítő"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6023"]?.id,
    date: new Date("2025-01-01"),
    value: 4.0
  });
  kpiRecords.push({
    itemId: items["MySigno hitelesítő"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6023"]?.id,
    date: new Date("2025-02-01"),
    value: 4.0
  });
  kpiRecords.push({
    itemId: items["MySigno hitelesítő"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6023"]?.id,
    date: new Date("2025-03-01"),
    value: 4.0
  });
  kpiRecords.push({
    itemId: items["MySigno hitelesítő"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6023"]?.id,
    date: new Date("2025-04-01"),
    value: 4.0
  });
  kpiRecords.push({
    itemId: items["MySigno hitelesítő"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Huszti János"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6023"]?.id,
    date: new Date("2025-05-01"),
    value: 4.0
  });
  kpiRecords.push({
    itemId: items["Archive storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 80.0
  });
  kpiRecords.push({
    itemId: items["Archive storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 80.0
  });
  kpiRecords.push({
    itemId: items["Archive storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 80.0
  });
  kpiRecords.push({
    itemId: items["Archive storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 96.0
  });
  kpiRecords.push({
    itemId: items["Archive storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 96.0
  });
  kpiRecords.push({
    itemId: items["Archive storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 96.0
  });
  kpiRecords.push({
    itemId: items["Egyéb storage kapacitás (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 157.0
  });
  kpiRecords.push({
    itemId: items["Egyéb storage kapacitás (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 157.0
  });
  kpiRecords.push({
    itemId: items["Egyéb storage kapacitás (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 157.0
  });
  kpiRecords.push({
    itemId: items["Magas rendelkezésre állású storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 267.0
  });
  kpiRecords.push({
    itemId: items["Magas rendelkezésre állású storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 260.0
  });
  kpiRecords.push({
    itemId: items["Magas rendelkezésre állású storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 261.0
  });
  kpiRecords.push({
    itemId: items["Magas rendelkezésre állású storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 414.0
  });
  kpiRecords.push({
    itemId: items["Magas rendelkezésre állású storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 414.0
  });
  kpiRecords.push({
    itemId: items["Magas rendelkezésre állású storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 414.0
  });
  kpiRecords.push({
    itemId: items["Mentési  storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 699.0
  });
  kpiRecords.push({
    itemId: items["Mentési  storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 700.0
  });
  kpiRecords.push({
    itemId: items["Mentési  storage használat (lefoglalt) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 702.0
  });
  kpiRecords.push({
    itemId: items["Mentési Storage kapacitás (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 995.0
  });
  kpiRecords.push({
    itemId: items["Mentési Storage kapacitás (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 995.0
  });
  kpiRecords.push({
    itemId: items["Mentési Storage kapacitás (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 995.0
  });
  kpiRecords.push({
    itemId: items["Mentési storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 793.0
  });
  kpiRecords.push({
    itemId: items["Mentési storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 793.0
  });
  kpiRecords.push({
    itemId: items["Mentési storage kapacitás (teljes) (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 793.0
  });
  kpiRecords.push({
    itemId: items["Mentési Szalagos kapacitás (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 3571.0
  });
  kpiRecords.push({
    itemId: items["Mentési Szalagos kapacitás (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 3572.0
  });
  kpiRecords.push({
    itemId: items["Mentési Szalagos kapacitás (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 3574.0
  });
  kpiRecords.push({
    itemId: items["Mentéssel kapcsolatos feladatok számossága (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 6.0
  });
  kpiRecords.push({
    itemId: items["Mentéssel kapcsolatos feladatok számossága (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 8.0
  });
  kpiRecords.push({
    itemId: items["Mentéssel kapcsolatos feladatok számossága (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 19.0
  });
  kpiRecords.push({
    itemId: items["Mentett adatbázisok száma (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 100.0
  });
  kpiRecords.push({
    itemId: items["Mentett adatbázisok száma (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 101.0
  });
  kpiRecords.push({
    itemId: items["Mentett adatbázisok száma (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 102.0
  });
  kpiRecords.push({
    itemId: items["Mentett adatok mennyisége (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 808.0
  });
  kpiRecords.push({
    itemId: items["Mentett adatok mennyisége (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 809.0
  });
  kpiRecords.push({
    itemId: items["Mentett adatok mennyisége (TB)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 810.0
  });
  kpiRecords.push({
    itemId: items["Mentett rendszerek száma (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 334.0
  });
  kpiRecords.push({
    itemId: items["Mentett rendszerek száma (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 335.0
  });
  kpiRecords.push({
    itemId: items["Mentett rendszerek száma (db)"].id,
    serviceId: services["Mentés helyreállítási szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 337.0
  });
  kpiRecords.push({
    itemId: items["Storage rendelkezésre álló összes kapacitás (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 414.0
  });
  kpiRecords.push({
    itemId: items["Storage rendelkezésre álló összes kapacitás (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 414.0
  });
  kpiRecords.push({
    itemId: items["Storage rendelkezésre álló összes kapacitás (TB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kállai Tamás"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 414.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["Titász AMR"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 8208.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["Titász SMART"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 86629.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["Titász AMR"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 8229.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["Titász SMART"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 87842.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["Titász AMR"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 8274.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["Titász SMART"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 89344.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["Titász AMR"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 8339.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["Titász SMART"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 90730.0
  });
  kpiRecords.push({
    itemId: items["Mérési központ és Portál"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6759"]?.id,
    date: new Date("2025-01-01"),
    value: 30.0
  });
  kpiRecords.push({
    itemId: items["Mérési központ és Portál"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6759"]?.id,
    date: new Date("2025-02-01"),
    value: 30.0
  });
  kpiRecords.push({
    itemId: items["Mérési központ és Portál"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6759"]?.id,
    date: new Date("2025-03-01"),
    value: 31.0
  });
  kpiRecords.push({
    itemId: items["Mérési központ és Portál"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6759"]?.id,
    date: new Date("2025-04-01"),
    value: 31.0
  });
  kpiRecords.push({
    itemId: items["OPAL/OPEM Leolvasási rendszerek"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6763"]?.id,
    date: new Date("2025-01-01"),
    value: 71.0
  });
  kpiRecords.push({
    itemId: items["OPAL/OPEM Leolvasási rendszerek"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6763"]?.id,
    date: new Date("2025-02-01"),
    value: 71.0
  });
  kpiRecords.push({
    itemId: items["OPAL/OPEM Leolvasási rendszerek"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6763"]?.id,
    date: new Date("2025-03-01"),
    value: 71.0
  });
  kpiRecords.push({
    itemId: items["OPAL/OPEM Leolvasási rendszerek"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6763"]?.id,
    date: new Date("2025-04-01"),
    value: 71.0
  });
  kpiRecords.push({
    itemId: items["Reginfo"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6866"]?.id,
    date: new Date("2025-01-01"),
    value: 146.0
  });
  kpiRecords.push({
    itemId: items["Reginfo"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6866"]?.id,
    date: new Date("2025-02-01"),
    value: 150.0
  });
  kpiRecords.push({
    itemId: items["Reginfo"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6866"]?.id,
    date: new Date("2025-03-01"),
    value: 149.0
  });
  kpiRecords.push({
    itemId: items["Reginfo"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kelemen Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6866"]?.id,
    date: new Date("2025-04-01"),
    value: 149.0
  });
  kpiRecords.push({
    itemId: items["Támadások száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 82.0
  });
  kpiRecords.push({
    itemId: items["Támadások száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 91.0
  });
  kpiRecords.push({
    itemId: items["Támadások száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 105.0
  });
  kpiRecords.push({
    itemId: items["Tuzfal szabályok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 1010.0
  });
  kpiRecords.push({
    itemId: items["Tuzfal szabályok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 1021.0
  });
  kpiRecords.push({
    itemId: items["Tuzfal szabályok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 1024.0
  });
  kpiRecords.push({
    itemId: items["Zabbix-ba bevont alkalmazások száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["Zabbix-ba bevont alkalmazások száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["Zabbix-ba bevont alkalmazások száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["Zabbix-ba bevont alkalmazások száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 1.0
  });
  kpiRecords.push({
    itemId: items["Zabbix-ba bevont Windows szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 229.0
  });
  kpiRecords.push({
    itemId: items["Zabbix-ba bevont Windows szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 216.0
  });
  kpiRecords.push({
    itemId: items["Zabbix-ba bevont Windows szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Kevei Márk"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 216.0
  });
  kpiRecords.push({
    itemId: items["LEO rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kiss Ferenc"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6157"]?.id,
    date: new Date("2025-01-01"),
    value: 77.0
  });
  kpiRecords.push({
    itemId: items["LEO rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kiss Ferenc"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6157"]?.id,
    date: new Date("2025-02-01"),
    value: 78.0
  });
  kpiRecords.push({
    itemId: items["LEO rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kiss Ferenc"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6157"]?.id,
    date: new Date("2025-03-01"),
    value: 82.0
  });
  kpiRecords.push({
    itemId: items["LEO rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kiss Ferenc"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6157"]?.id,
    date: new Date("2025-04-01"),
    value: 84.0
  });
  kpiRecords.push({
    itemId: items["LEO rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kiss Ferenc"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6157"]?.id,
    date: new Date("2025-05-01"),
    value: 84.0
  });
  kpiRecords.push({
    itemId: items["CsoCso"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6732"]?.id,
    date: new Date("2025-01-01"),
    value: 4.0
  });
  kpiRecords.push({
    itemId: items["CsoCso"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6732"]?.id,
    date: new Date("2025-02-01"),
    value: 4.0
  });
  kpiRecords.push({
    itemId: items["E-közmű"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6740"]?.id,
    date: new Date("2025-01-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["E-közmű"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6740"]?.id,
    date: new Date("2025-02-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["ÉVV"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6818"]?.id,
    date: new Date("2025-01-01"),
    value: 318.0
  });
  kpiRecords.push({
    itemId: items["ÉVV"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6818"]?.id,
    date: new Date("2025-02-01"),
    value: 318.0
  });
  kpiRecords.push({
    itemId: items["Google Earth"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6745"]?.id,
    date: new Date("2025-01-01"),
    value: 320.0
  });
  kpiRecords.push({
    itemId: items["Google Earth"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6745"]?.id,
    date: new Date("2025-02-01"),
    value: 320.0
  });
  kpiRecords.push({
    itemId: items["INIS"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6016"]?.id,
    date: new Date("2025-01-01"),
    value: 33.0
  });
  kpiRecords.push({
    itemId: items["INIS"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6016"]?.id,
    date: new Date("2025-02-01"),
    value: 33.0
  });
  kpiRecords.push({
    itemId: items["INIS - DWG betöltő"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6748"]?.id,
    date: new Date("2025-01-01"),
    value: 6.0
  });
  kpiRecords.push({
    itemId: items["INIS - DWG betöltő"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6748"]?.id,
    date: new Date("2025-02-01"),
    value: 6.0
  });
  kpiRecords.push({
    itemId: items["INIS - VBR2"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6749"]?.id,
    date: new Date("2025-01-01"),
    value: 146.0
  });
  kpiRecords.push({
    itemId: items["INIS - VBR2"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6749"]?.id,
    date: new Date("2025-02-01"),
    value: 147.0
  });
  kpiRecords.push({
    itemId: items["INIS - VBR2"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6749"]?.id,
    date: new Date("2025-03-01"),
    value: 145.0
  });
  kpiRecords.push({
    itemId: items["KOALA"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6018"]?.id,
    date: new Date("2025-01-01"),
    value: 0.0
  });
  kpiRecords.push({
    itemId: items["KOALA"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6018"]?.id,
    date: new Date("2025-02-01"),
    value: 0.0
  });
  kpiRecords.push({
    itemId: items["KOALA"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6018"]?.id,
    date: new Date("2025-03-01"),
    value: 0.0
  });
  kpiRecords.push({
    itemId: items["Neplan"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6864"]?.id,
    date: new Date("2025-01-01"),
    value: 10.0
  });
  kpiRecords.push({
    itemId: items["Neplan"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6864"]?.id,
    date: new Date("2025-02-01"),
    value: 10.0
  });
  kpiRecords.push({
    itemId: items["Neplan"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6864"]?.id,
    date: new Date("2025-03-01"),
    value: 10.0
  });
  kpiRecords.push({
    itemId: items["Report Manager - INIS"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6867"]?.id,
    date: new Date("2025-01-01"),
    value: 23.0
  });
  kpiRecords.push({
    itemId: items["Report Manager - INIS"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6867"]?.id,
    date: new Date("2025-02-01"),
    value: 23.0
  });
  kpiRecords.push({
    itemId: items["SIMS és SIMS Web"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6800"]?.id,
    date: new Date("2025-01-01"),
    value: 39.0
  });
  kpiRecords.push({
    itemId: items["SIMS és SIMS Web"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6800"]?.id,
    date: new Date("2025-02-01"),
    value: 39.0
  });
  kpiRecords.push({
    itemId: items["SIMS és SIMS Web"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6800"]?.id,
    date: new Date("2025-03-01"),
    value: 39.0
  });
  kpiRecords.push({
    itemId: items["VezJog2"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6805"]?.id,
    date: new Date("2025-01-01"),
    value: 40.0
  });
  kpiRecords.push({
    itemId: items["VezJog2"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6805"]?.id,
    date: new Date("2025-02-01"),
    value: 40.0
  });
  kpiRecords.push({
    itemId: items["WebBeny"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6042"]?.id,
    date: new Date("2025-01-01"),
    value: 46.0
  });
  kpiRecords.push({
    itemId: items["WebBeny"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6042"]?.id,
    date: new Date("2025-02-01"),
    value: 46.0
  });
  kpiRecords.push({
    itemId: items["WebBeny"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6042"]?.id,
    date: new Date("2025-03-01"),
    value: 46.0
  });
  kpiRecords.push({
    itemId: items["WERA"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6806"]?.id,
    date: new Date("2025-01-01"),
    value: 462.0
  });
  kpiRecords.push({
    itemId: items["WERA"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Kun György"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6806"]?.id,
    date: new Date("2025-02-01"),
    value: 463.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-követés (Webcontrol)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6746"]?.id,
    date: new Date("2025-01-01"),
    value: 320.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-követés (Webcontrol)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6746"]?.id,
    date: new Date("2025-02-01"),
    value: 320.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-követés (Webcontrol)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6746"]?.id,
    date: new Date("2025-03-01"),
    value: 320.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-nyilvántartó (SeeFleat)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6747"]?.id,
    date: new Date("2025-01-01"),
    value: 21.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-nyilvántartó (SeeFleat)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6747"]?.id,
    date: new Date("2025-02-01"),
    value: 21.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-nyilvántartó (SeeFleat)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6747"]?.id,
    date: new Date("2025-03-01"),
    value: 21.0
  });
  kpiRecords.push({
    itemId: items["KIFÜR"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6017"]?.id,
    date: new Date("2025-01-01"),
    value: 501.0
  });
  kpiRecords.push({
    itemId: items["KIFÜR"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6017"]?.id,
    date: new Date("2025-02-01"),
    value: 501.0
  });
  kpiRecords.push({
    itemId: items["KIFÜR"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6017"]?.id,
    date: new Date("2025-03-01"),
    value: 502.0
  });
  kpiRecords.push({
    itemId: items["Adatvonalak száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 75.0
  });
  kpiRecords.push({
    itemId: items["Adatvonalak száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 75.0
  });
  kpiRecords.push({
    itemId: items["Adatvonalak száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 75.0
  });
  kpiRecords.push({
    itemId: items["Adatvonalak száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 75.0
  });
  kpiRecords.push({
    itemId: items["Adatvonalak száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 75.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Titász"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 2.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Titász"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 2.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Titász"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 2.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Titász"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 2.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Titász"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 5.0
  });
  kpiRecords.push({
    itemId: items["APN - GSM hálózatok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 2.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 11687.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 11687.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 11687.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 11687.0
  });
  kpiRecords.push({
    itemId: items["APN-be kötött (IOT eszközök) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Tigáz"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 11687.0
  });
  kpiRecords.push({
    itemId: items["Telephelyek száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 32.0
  });
  kpiRecords.push({
    itemId: items["Telephelyek száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 32.0
  });
  kpiRecords.push({
    itemId: items["Telephelyek száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 32.0
  });
  kpiRecords.push({
    itemId: items["Telephelyek száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 32.0
  });
  kpiRecords.push({
    itemId: items["Telephelyek száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 32.0
  });
  kpiRecords.push({
    itemId: items["WiFi access pointok (AP) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Optesz"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 300.0
  });
  kpiRecords.push({
    itemId: items["WiFi access pointok (AP) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Optesz"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 300.0
  });
  kpiRecords.push({
    itemId: items["WiFi access pointok (AP) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Optesz"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 302.0
  });
  kpiRecords.push({
    itemId: items["WiFi access pointok (AP) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Optesz"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 302.0
  });
  kpiRecords.push({
    itemId: items["WiFi access pointok (AP) száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Molnár József"].id,
    companyId: companies["Optesz"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 302.0
  });
  kpiRecords.push({
    itemId: items["Szerelői Raktár (SZR)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Molnár Viktória Diána"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6821"]?.id,
    date: new Date("2025-01-01"),
    value: 151.0
  });
  kpiRecords.push({
    itemId: items["Szerelői Raktár (SZR)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Molnár Viktória Diána"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6821"]?.id,
    date: new Date("2025-02-01"),
    value: 242.0
  });
  kpiRecords.push({
    itemId: items["Havonta átlagosan nyomtatott lapok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Olajos Imre"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 289412.0
  });
  kpiRecords.push({
    itemId: items["Havonta átlagosan nyomtatott lapok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Olajos Imre"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 270890.0
  });
  kpiRecords.push({
    itemId: items["Havonta átlagosan nyomtatott lapok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Olajos Imre"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 284405.0
  });
  kpiRecords.push({
    itemId: items["Havonta átlagosan nyomtatott lapok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Olajos Imre"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 267448.0
  });
  kpiRecords.push({
    itemId: items["Nyomtatók száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Olajos Imre"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 224.0
  });
  kpiRecords.push({
    itemId: items["Nyomtatók száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Olajos Imre"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 224.0
  });
  kpiRecords.push({
    itemId: items["Nyomtatók száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Olajos Imre"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 224.0
  });
  kpiRecords.push({
    itemId: items["Nyomtatók száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Olajos Imre"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 224.0
  });
  kpiRecords.push({
    itemId: items["Fizikai CPU magok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 2828.0
  });
  kpiRecords.push({
    itemId: items["Fizikai CPU magok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 2828.0
  });
  kpiRecords.push({
    itemId: items["Fizikai CPU magok száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 2828.0
  });
  kpiRecords.push({
    itemId: items["Fizikai memória összesen (GB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 38958.0
  });
  kpiRecords.push({
    itemId: items["Fizikai memória összesen (GB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 38958.0
  });
  kpiRecords.push({
    itemId: items["Fizikai memória összesen (GB)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 38958.0
  });
  kpiRecords.push({
    itemId: items["Fizikai szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 142.0
  });
  kpiRecords.push({
    itemId: items["Fizikai szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 142.0
  });
  kpiRecords.push({
    itemId: items["Fizikai szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 142.0
  });
  kpiRecords.push({
    itemId: items["Kiszolgált rendszerek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 116.0
  });
  kpiRecords.push({
    itemId: items["Kiszolgált rendszerek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 117.0
  });
  kpiRecords.push({
    itemId: items["Kiszolgált rendszerek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 119.0
  });
  kpiRecords.push({
    itemId: items["Virtuális CPU-k száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 2747.0
  });
  kpiRecords.push({
    itemId: items["Virtuális CPU-k száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 2755.0
  });
  kpiRecords.push({
    itemId: items["Virtuális CPU-k száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 2791.0
  });
  kpiRecords.push({
    itemId: items["Virtuális szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 715.0
  });
  kpiRecords.push({
    itemId: items["Virtuális szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 717.0
  });
  kpiRecords.push({
    itemId: items["Virtuális szerverek száma (db)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Rónyai Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 725.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6158"]?.id,
    date: new Date("2025-01-01"),
    value: 780.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6158"]?.id,
    date: new Date("2025-02-01"),
    value: 740.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6158"]?.id,
    date: new Date("2025-03-01"),
    value: 728.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6158"]?.id,
    date: new Date("2025-04-01"),
    value: 732.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6158"]?.id,
    date: new Date("2025-05-01"),
    value: 739.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS-BESZ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6159"]?.id,
    date: new Date("2025-01-01"),
    value: 190.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS-BESZ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6159"]?.id,
    date: new Date("2025-02-01"),
    value: 193.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS-BESZ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6159"]?.id,
    date: new Date("2025-03-01"),
    value: 193.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS-BESZ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6159"]?.id,
    date: new Date("2025-04-01"),
    value: 193.0
  });
  kpiRecords.push({
    itemId: items["ELO DMS-BESZ​"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6159"]?.id,
    date: new Date("2025-05-01"),
    value: 195.0
  });
  kpiRecords.push({
    itemId: items["NEXON"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6668"]?.id,
    date: new Date("2025-01-01"),
    value: 2481.0
  });
  kpiRecords.push({
    itemId: items["NEXON"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6669"]?.id,
    date: new Date("2025-02-01"),
    value: 2502.0
  });
  kpiRecords.push({
    itemId: items["NEXON"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6670"]?.id,
    date: new Date("2025-03-01"),
    value: 2520.0
  });
  kpiRecords.push({
    itemId: items["NEXON"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6670"]?.id,
    date: new Date("2025-04-01"),
    value: 2557.0
  });
  kpiRecords.push({
    itemId: items["NEXON"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Sólyom József"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6670"]?.id,
    date: new Date("2025-05-01"),
    value: 2541.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-01-01"),
    value: 411.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-01-01"),
    value: 562.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-02-01"),
    value: 404.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-02-01"),
    value: 558.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-03-01"),
    value: 557.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-03-01"),
    value: 400.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-04-01"),
    value: 393.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-04-01"),
    value: 541.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-05-01"),
    value: 342.0
  });
  kpiRecords.push({
    itemId: items["SAP S4HANA rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-05-01"),
    value: 484.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-01-01"),
    value: 707.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-01-01"),
    value: 199.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-02-01"),
    value: 710.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-02-01"),
    value: 202.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-03-01"),
    value: 714.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-03-01"),
    value: 204.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-04-01"),
    value: 716.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-04-01"),
    value: 240.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-28645"]?.id,
    date: new Date("2025-05-01"),
    value: 714.0
  });
  kpiRecords.push({
    itemId: items["SAP ECC rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["OPTESZ"].id,
    systemId: systems["REF-28644"]?.id,
    date: new Date("2025-05-01"),
    value: 241.0
  });
  kpiRecords.push({
    itemId: items["SAPERION számlaképnyilvántartó rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6161"]?.id,
    date: new Date("2025-01-01"),
    value: 85.0
  });
  kpiRecords.push({
    itemId: items["SAPERION számlaképnyilvántartó rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6161"]?.id,
    date: new Date("2025-02-01"),
    value: 85.0
  });
  kpiRecords.push({
    itemId: items["SAPERION számlaképnyilvántartó rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6161"]?.id,
    date: new Date("2025-03-01"),
    value: 85.0
  });
  kpiRecords.push({
    itemId: items["SAPERION számlaképnyilvántartó rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6161"]?.id,
    date: new Date("2025-04-01"),
    value: 85.0
  });
  kpiRecords.push({
    itemId: items["SAPERION számlaképnyilvántartó rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6161"]?.id,
    date: new Date("2025-04-01"),
    value: 85.0
  });
  kpiRecords.push({
    itemId: items["TVRR vonalkódos rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6773"]?.id,
    date: new Date("2025-01-01"),
    value: 51.0
  });
  kpiRecords.push({
    itemId: items["TVRR vonalkódos rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6773"]?.id,
    date: new Date("2025-02-01"),
    value: 51.0
  });
  kpiRecords.push({
    itemId: items["TVRR vonalkódos rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6773"]?.id,
    date: new Date("2025-03-01"),
    value: 51.0
  });
  kpiRecords.push({
    itemId: items["TVRR vonalkódos rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6773"]?.id,
    date: new Date("2025-04-01"),
    value: 51.0
  });
  kpiRecords.push({
    itemId: items["TVRR vonalkódos rendszer"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Szuromi József"].id,
    companyId: companies["TIGÁZ"].id,
    systemId: systems["REF-6773"]?.id,
    date: new Date("2025-04-01"),
    value: 51.0
  });
  kpiRecords.push({
    itemId: items["DMS - Szerződés nyilvántartás"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6734"]?.id,
    date: new Date("2025-01-01"),
    value: 135.0
  });
  kpiRecords.push({
    itemId: items["DMS - Szerződés nyilvántartás"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6734"]?.id,
    date: new Date("2025-02-01"),
    value: 135.0
  });
  kpiRecords.push({
    itemId: items["DMS - Szerződés nyilvántartás"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6734"]?.id,
    date: new Date("2025-03-01"),
    value: 183.0
  });
  kpiRecords.push({
    itemId: items["DMS - Szerződés nyilvántartás"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6734"]?.id,
    date: new Date("2025-04-01"),
    value: 181.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate - Ügyfélszolgálati modul"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6854"]?.id,
    date: new Date("2025-01-01"),
    value: 318.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate - Ügyfélszolgálati modul"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6854"]?.id,
    date: new Date("2025-02-01"),
    value: 319.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate - Ügyfélszolgálati modul"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6854"]?.id,
    date: new Date("2025-03-01"),
    value: 298.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate - Ügyfélszolgálati modul"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6854"]?.id,
    date: new Date("2025-04-01"),
    value: 305.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate- Általános"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6856"]?.id,
    date: new Date("2025-01-01"),
    value: 647.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate- Általános"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6856"]?.id,
    date: new Date("2025-02-01"),
    value: 643.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate- Általános"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6856"]?.id,
    date: new Date("2025-03-01"),
    value: 668.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate- Általános"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6856"]?.id,
    date: new Date("2025-04-01"),
    value: 675.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate- Számla"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6855"]?.id,
    date: new Date("2025-01-01"),
    value: 401.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate- Számla"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6855"]?.id,
    date: new Date("2025-02-01"),
    value: 417.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate- Számla"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6855"]?.id,
    date: new Date("2025-03-01"),
    value: 427.0
  });
  kpiRecords.push({
    itemId: items["DMS Ultimate- Számla"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6855"]?.id,
    date: new Date("2025-04-01"),
    value: 422.0
  });
  kpiRecords.push({
    itemId: items["DMS-DataCAP"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6857"]?.id,
    date: new Date("2025-01-01"),
    value: 44.0
  });
  kpiRecords.push({
    itemId: items["DMS-DataCAP"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6857"]?.id,
    date: new Date("2025-02-01"),
    value: 44.0
  });
  kpiRecords.push({
    itemId: items["DMS-DataCAP"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6857"]?.id,
    date: new Date("2025-03-01"),
    value: 44.0
  });
  kpiRecords.push({
    itemId: items["DMS-DataCAP"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6857"]?.id,
    date: new Date("2025-04-01"),
    value: 47.0
  });
  kpiRecords.push({
    itemId: items["DMS-Filenet"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6858"]?.id,
    date: new Date("2025-01-01"),
    value: 271.0
  });
  kpiRecords.push({
    itemId: items["DMS-Filenet"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6858"]?.id,
    date: new Date("2025-02-01"),
    value: 271.0
  });
  kpiRecords.push({
    itemId: items["DMS-Filenet"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6858"]?.id,
    date: new Date("2025-03-01"),
    value: 368.0
  });
  kpiRecords.push({
    itemId: items["DMS-Filenet"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6858"]?.id,
    date: new Date("2025-04-01"),
    value: 372.0
  });
  kpiRecords.push({
    itemId: items["Szállítói minősítés (IBM BAW Üzleti automatizáció)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6879"]?.id,
    date: new Date("2025-01-01"),
    value: 44.0
  });
  kpiRecords.push({
    itemId: items["Szállítói minősítés (IBM BAW Üzleti automatizáció)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6879"]?.id,
    date: new Date("2025-02-01"),
    value: 44.0
  });
  kpiRecords.push({
    itemId: items["Szállítói minősítés (IBM BAW Üzleti automatizáció)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6879"]?.id,
    date: new Date("2025-03-01"),
    value: 51.0
  });
  kpiRecords.push({
    itemId: items["Szállítói minősítés (IBM BAW Üzleti automatizáció)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Török Zsolt"].id,
    companyId: companies["TITÁSZ/OPTESZ"].id,
    systemId: systems["REF-6879"]?.id,
    date: new Date("2025-04-01"),
    value: 50.0
  });
  kpiRecords.push({
    itemId: items["Mobil telefonok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Vincze Csilla"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 2355.0
  });
  kpiRecords.push({
    itemId: items["Mobil telefonok száma (db)"].id,
    serviceId: services["Irodai eszközök szolgáltatás"].id,
    userId: users["Vincze Csilla"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 2360.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív eszközök száma (switch) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 206.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív eszközök száma (switch) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 207.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív eszközök száma (switch) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 208.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív eszközök száma (switch) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 208.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív eszközök száma (switch) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 208.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív portok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 2462.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív portok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 2462.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív portok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 2462.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív portok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 2462.0
  });
  kpiRecords.push({
    itemId: items["LAN aktív portok száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 2462.0
  });
  kpiRecords.push({
    itemId: items["LAN fali csatlakozók száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 10000.0
  });
  kpiRecords.push({
    itemId: items["LAN fali csatlakozók száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 10100.0
  });
  kpiRecords.push({
    itemId: items["LAN fali csatlakozók száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 10150.0
  });
  kpiRecords.push({
    itemId: items["LAN fali csatlakozók száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 10150.0
  });
  kpiRecords.push({
    itemId: items["LAN fali csatlakozók száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 10150.0
  });
  kpiRecords.push({
    itemId: items["Lecserélt WAN eszközök száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 2.0
  });
  kpiRecords.push({
    itemId: items["Lecserélt WAN eszközök száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 10.0
  });
  kpiRecords.push({
    itemId: items["Lecserélt WAN eszközök száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 3.0
  });
  kpiRecords.push({
    itemId: items["Lecserélt WAN eszközök száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 0.0
  });
  kpiRecords.push({
    itemId: items["Lecserélt WAN eszközök száma (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 0.0
  });
  kpiRecords.push({
    itemId: items["UPS kapacitás (?)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 240.0
  });
  kpiRecords.push({
    itemId: items["UPS kapacitás (?)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 240.0
  });
  kpiRecords.push({
    itemId: items["UPS kapacitás (?)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 240.0
  });
  kpiRecords.push({
    itemId: items["UPS kapacitás (?)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 240.0
  });
  kpiRecords.push({
    itemId: items["UPS kapacitás (?)"].id,
    serviceId: services["Adatközponti szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 240.0
  });
  kpiRecords.push({
    itemId: items["WAN eszközök száma (router) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-01-01"),
    value: 59.0
  });
  kpiRecords.push({
    itemId: items["WAN eszközök száma (router) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-02-01"),
    value: 61.0
  });
  kpiRecords.push({
    itemId: items["WAN eszközök száma (router) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-03-01"),
    value: 61.0
  });
  kpiRecords.push({
    itemId: items["WAN eszközök száma (router) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-04-01"),
    value: 61.0
  });
  kpiRecords.push({
    itemId: items["WAN eszközök száma (router) (db)"].id,
    serviceId: services["Adathálózati szolgáltatások"].id,
    userId: users["Zilahi Zoltán"].id,
    companyId: companies["Összesen"].id,
    systemId: null,
    date: new Date("2025-05-01"),
    value: 61.0
  });
  kpiRecords.push({
    itemId: items["Eventus"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Zsipiné Szabó Hajnalka"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6009"]?.id,
    date: new Date("2025-01-01"),
    value: 714.0
  });
  kpiRecords.push({
    itemId: items["Eventus"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Zsipiné Szabó Hajnalka"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6009"]?.id,
    date: new Date("2025-02-01"),
    value: 716.0
  });
  kpiRecords.push({
    itemId: items["KIFÜR"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6017"]?.id,
    date: new Date("2025-04-01"),
    value: 502.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-nyilvántartó (SeeFleat)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6747"]?.id,
    date: new Date("2025-04-01"),
    value: 21.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-követés (Webcontrol)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6746"]?.id,
    date: new Date("2025-04-01"),
    value: 321.0
  });
  kpiRecords.push({
    itemId: items["KIFÜR"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6017"]?.id,
    date: new Date("2025-05-01"),
    value: 503.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-nyilvántartó (SeeFleat)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6747"]?.id,
    date: new Date("2025-05-01"),
    value: 21.0
  });
  kpiRecords.push({
    itemId: items["Gépjármű-követés (Webcontrol)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Lipcsei István"].id,
    companyId: companies["OPTESZ/TIGÁZ/TITÁSZ"].id,
    systemId: systems["REF-6746"]?.id,
    date: new Date("2025-05-01"),
    value: 322.0
  });
  kpiRecords.push({
    itemId: items["Eventus"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Zsipiné Szabó Hajnalka"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6009"]?.id,
    date: new Date("2025-03-01"),
    value: 716.0
  });
  kpiRecords.push({
    itemId: items["Szerelői Raktár (SZR)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Molnár Viktória Diána"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6821"]?.id,
    date: new Date("2025-03-01"),
    value: 243.0
  });
  kpiRecords.push({
    itemId: items["Eventus"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Zsipiné Szabó Hajnalka"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6009"]?.id,
    date: new Date("2025-04-01"),
    value: 719.0
  });
  kpiRecords.push({
    itemId: items["Szerelői Raktár (SZR)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Molnár Viktória Diána"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6821"]?.id,
    date: new Date("2025-05-01"),
    value: 258.0
  });
  kpiRecords.push({
    itemId: items["Eventus"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Zsipiné Szabó Hajnalka"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6009"]?.id,
    date: new Date("2025-05-01"),
    value: 720.0
  });
  kpiRecords.push({
    itemId: items["Szerelői Raktár (SZR)"].id,
    serviceId: services["Felhasználók száma"].id,
    userId: users["Molnár Viktória Diána"].id,
    companyId: companies["TITÁSZ"].id,
    systemId: systems["REF-6821"]?.id,
    date: new Date("2025-04-01"),
    value: 243.0
  });

  if (kpiRecords.length) {
    await prisma.kPI_Data.createMany({ data: kpiRecords });
    console.log(`✅ KPI adatok beszúrva: ${kpiRecords.length} rekord`);
  } else {
    console.warn("⚠️ Nem volt érvényes KPI rekord");
  }
}

seed().then(() => {
  console.log("🎉 2025-ös seedelés systemekkel kész!");
  process.exit(0);
}).catch(e => {
  console.error("❌ Hiba:", e);
  process.exit(1);
});
