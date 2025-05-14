const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedAll() {
  console.log("🚀 Seed indítása...");

  // 1. Users
  const users = [
    {
      name: "Moln\u00e1r J\u00f3zsef",
      email: "moln\u00e1r_j\u00f3zsef@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Kelemen Zsolt",
      email: "kelemen_zsolt@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Zilahi Zolt\u00e1n",
      email: "zilahi_zolt\u00e1n@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Kevei M\u00e1rk",
      email: "kevei_m\u00e1rk@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Bende Zsolt",
      email: "bende_zsolt@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "F\u00f6ldi Lajos",
      email: "f\u00f6ldi_lajos@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "K\u00e1llai Tam\u00e1s",
      email: "k\u00e1llai_tam\u00e1s@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "R\u00f3nyai Zolt\u00e1n",
      email: "r\u00f3nyai_zolt\u00e1n@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Ducsi Szil\u00e1rd",
      email: "ducsi_szil\u00e1rd@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Olajos Imre",
      email: "olajos_imre@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "B\u00edr\u00f3-Zs",
      email: "b\u00edr\u00f3-zs@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Vincze Csilla",
      email: "vincze_csilla@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "S\u00f3lyom J\u00f3zsef",
      email: "s\u00f3lyom_j\u00f3zsef@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "T\u00f6r\u00f6k Zsolt",
      email: "t\u00f6r\u00f6k_zsolt@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Huszti J\u00e1nos",
      email: "huszti_j\u00e1nos@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Goda P\u00e9ter",
      email: "goda_p\u00e9ter@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Szuromi J\u00f3zsef",
      email: "szuromi_j\u00f3zsef@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Kiss Ferenc",
      email: "kiss_ferenc@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Zsipin\u00e9 Szab\u00f3 Hajnalka",
      email: "zsipin\u00e9_szab\u00f3_hajnalka@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Kun Gy\u00f6rgy",
      email: "kun_gy\u00f6rgy@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "Ecsedi Zolt\u00e1n",
      email: "ecsedi_zolt\u00e1n@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
    {
      name: "P\u00e1l\u00f3czi Krisztina",
      email: "p\u00e1l\u00f3czi_krisztina@example.com",
      role: "REPORTER",
      hashedPassword: "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy"
    },
  ];
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user
    });
  }

  // 2. Companies
  const companies = [
    { name: "egy\u00e9b db" },
    { name: "mssql" },
    { name: "optesz" },
    { name: "optesz/tig\u00e1z/tit\u00e1sz" },
    { name: "optesz/tit\u00e1sz" },
    { name: "oracle" },
    { name: "tig\u00e1z" },
    { name: "tit\u00e1sz" },
    { name: "tit\u00e1sz amr" },
    { name: "tit\u00e1sz smart" },
    { name: "tit\u00e1sz/optesz" },
    { name: "\u00f6sszesen" },
  ];
  for (const company of companies) {
    await prisma.company.upsert({
      where: { name: company.name },
      update: {},
      create: company
    });
  }

  // 3. Services
  const services = [
    { name: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok" },
    { name: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok" },
    { name: "Irodai eszk\u00f6z\u00f6k szolg\u00e1ltat\u00e1s" },
    { name: "Kollabor\u00e1ci\u00f3s szolg\u00e1ltat\u00e1sok" },
    { name: "Ment\u00e9s helyre\u00e1ll\u00edt\u00e1si szolg\u00e1ltat\u00e1sok" },
  ];
  for (const service of services) {
    await prisma.service.upsert({
      where: { name: service.name },
      update: {},
      create: service
    });
  }

  // 4. Items + Descriptions
  const items = [
    {
      code: "adatvonalak_sz\u00e1ma_db",
      name: "Adatvonalak sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "lan_akt\u00edv_eszk\u00f6z\u00f6k_sz\u00e1ma_switch_db",
      name: "LAN akt\u00edv eszk\u00f6z\u00f6k sz\u00e1ma (switch) (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "lan_akt\u00edv_portok_sz\u00e1ma_db",
      name: "LAN akt\u00edv portok sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "t\u00e1mad\u00e1sok_sz\u00e1ma_db",
      name: "T\u00e1mad\u00e1sok sz\u00e1ma (db)",
      description: "grafikon",
      serviceName: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "telephelyek_sz\u00e1ma_db",
      name: "Telephelyek sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "tuzfal_szab\u00e1lyok_sz\u00e1ma_db",
      name: "Tuzfal szab\u00e1lyok sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "wan_eszk\u00f6z\u00f6k_sz\u00e1ma_router_db",
      name: "WAN eszk\u00f6z\u00f6k sz\u00e1ma (router) (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "wifi_access_pointok_ap_sz\u00e1ma_db",
      name: "WiFi access pointok (AP) sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adath\u00e1l\u00f3zati szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "adatb\u00e1zisok_sz\u00e1ma_db",
      name: "Adatb\u00e1zisok sz\u00e1ma (db)",
      description: "oszlop diagrammban mind a 3",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "archive_storage_haszn\u00e1lat_lefoglalt_tb",
      name: "Archive storage haszn\u00e1lat (lefoglalt) (TB)",
      description: "oszlop diagramm",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "archive_storage_kapacit\u00e1s_teljes_tb",
      name: "Archive storage kapacit\u00e1s (teljes) (TB)",
      description: "oszlop diagramm",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "egy\u00e9b_storage_kapacit\u00e1s_tb",
      name: "Egy\u00e9b storage kapacit\u00e1s (TB)",
      description: "oszlop diagramm",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "fizikai_szerverek_sz\u00e1ma_db",
      name: "Fizikai szerverek sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "kiszolg\u00e1lt_rendszerek_sz\u00e1ma_db",
      name: "Kiszolg\u00e1lt rendszerek sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "magas_rendelkez\u00e9sre_\u00e1ll\u00e1s\u00fa_storage_haszn\u00e1lat_lefoglalt_tb",
      name: "Magas rendelkez\u00e9sre \u00e1ll\u00e1s\u00fa storage haszn\u00e1lat (lefoglalt) (TB)",
      description: "oszlop diagramm",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "magas_rendelkez\u00e9sre_\u00e1ll\u00e1s\u00fa_storage_kapacit\u00e1s_teljes_tb",
      name: "Magas rendelkez\u00e9sre \u00e1ll\u00e1s\u00fa storage kapacit\u00e1s (teljes) (TB)",
      description: "oszlop diagramm",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "ment\u00e9si__storage_haszn\u00e1lat_lefoglalt_tb",
      name: "Ment\u00e9si  storage haszn\u00e1lat (lefoglalt) (TB)",
      description: "oszlop diagramm",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "ment\u00e9si_storage_kapacit\u00e1s_teljes_tb",
      name: "Ment\u00e9si storage kapacit\u00e1s (teljes) (TB)",
      description: "oszlop diagramm",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "storage_felhaszn\u00e1lt_kapacit\u00e1s_tb",
      name: "Storage felhaszn\u00e1lt kapacit\u00e1s (TB)",
      description: "oszlop diagramm",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "storage_rendelkez\u00e9sre_\u00e1ll\u00f3_\u00f6sszes_kapacit\u00e1s_tb",
      name: "Storage rendelkez\u00e9sre \u00e1ll\u00f3 \u00f6sszes kapacit\u00e1s (TB)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "virtu\u00e1lis_szerverek_sz\u00e1ma_db",
      name: "Virtu\u00e1lis szerverek sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "zabbix-ba_bevont_alkalmaz\u00e1sok_sz\u00e1ma_db",
      name: "Zabbix-ba bevont alkalmaz\u00e1sok sz\u00e1ma (db)",
      description: "grafikon",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "zabbix-ba_bevont_windows_szerverek_sz\u00e1ma_db",
      name: "Zabbix-ba bevont Windows szerverek sz\u00e1ma (db)",
      description: "grafikon",
      serviceName: "Adatk\u00f6zponti szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "havonta_\u00e1tlagosan_nyomtatott_lapok_sz\u00e1ma_db",
      name: "Havonta \u00e1tlagosan nyomtatott lapok sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Irodai eszk\u00f6z\u00f6k szolg\u00e1ltat\u00e1s"
    },
    {
      code: "laptopok_sz\u00e1ma_db",
      name: "Laptopok sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Irodai eszk\u00f6z\u00f6k szolg\u00e1ltat\u00e1s"
    },
    {
      code: "mobil_telefonok_sz\u00e1ma_db",
      name: "Mobil telefonok sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Irodai eszk\u00f6z\u00f6k szolg\u00e1ltat\u00e1s"
    },
    {
      code: "nyomtat\u00f3k_sz\u00e1ma_db",
      name: "Nyomtat\u00f3k sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Irodai eszk\u00f6z\u00f6k szolg\u00e1ltat\u00e1s"
    },
    {
      code: "pc-k_sz\u00e1ma_db",
      name: "PC-k sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Irodai eszk\u00f6z\u00f6k szolg\u00e1ltat\u00e1s"
    },
    {
      code: "pda-k_sz\u00e1ma_db",
      name: "PDA-k sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Irodai eszk\u00f6z\u00f6k szolg\u00e1ltat\u00e1s"
    },
    {
      code: "c\u00edmt\u00e1r_felhaszn\u00e1l\u00f3k_akt\u00edv_db",
      name: "C\u00edmt\u00e1r felhaszn\u00e1l\u00f3k (akt\u00edv) (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Kollabor\u00e1ci\u00f3s szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "hasznos_email_sz\u00e1m_db",
      name: "Hasznos email sz\u00e1m (db)",
      description: "oszlop diagrammban mind a 2",
      serviceName: "Kollabor\u00e1ci\u00f3s szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "postafi\u00f3kok_sz\u00e1ma_db",
      name: "Postafi\u00f3kok sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Kollabor\u00e1ci\u00f3s szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "sharepoint_online_site-ok_sz\u00e1ma_db",
      name: "SharePoint Online site-ok sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Kollabor\u00e1ci\u00f3s szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "spam_email_sz\u00e1ma_db",
      name: "SPAM email sz\u00e1ma (db)",
      description: "grafikon",
      serviceName: "Kollabor\u00e1ci\u00f3s szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "ment\u00e9si_szalagos_kapacit\u00e1s_tb",
      name: "Ment\u00e9si Szalagos kapacit\u00e1s (TB)",
      description: "csak adatk\u00e9nt",
      serviceName: "Ment\u00e9s helyre\u00e1ll\u00edt\u00e1si szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "mentett_adatb\u00e1zisok_sz\u00e1ma_db",
      name: "Mentett adatb\u00e1zisok sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Ment\u00e9s helyre\u00e1ll\u00edt\u00e1si szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "mentett_adatok_mennyis\u00e9ge_tb",
      name: "Mentett adatok mennyis\u00e9ge (TB)",
      description: "oszlop diagrammban mind a 2",
      serviceName: "Ment\u00e9s helyre\u00e1ll\u00edt\u00e1si szolg\u00e1ltat\u00e1sok"
    },
    {
      code: "mentett_rendszerek_sz\u00e1ma_db",
      name: "Mentett rendszerek sz\u00e1ma (db)",
      description: "csak adatk\u00e9nt",
      serviceName: "Ment\u00e9s helyre\u00e1ll\u00edt\u00e1si szolg\u00e1ltat\u00e1sok"
    },
  ];
  for (const item of items) {
    const service = await prisma.service.findFirst({ where: { name: item.serviceName } });
    if (!service) continue;

    const createdItem = await prisma.item.upsert({
      where: { code: item.code },
      update: {},
      create: {
        code: item.code,
        name: item.name,
        description: item.description,
        service: { connect: { id: service.id } }
      }
    });

    await prisma.description.upsert({
      where: { itemId: createdItem.id },
      update: { text: item.description },
      create: {
        text: item.description,
        item: { connect: { id: createdItem.id } }
      }
    });
  }

  // 5. KPI_Data
  const allItems = await prisma.item.findMany();
  const allServices = await prisma.service.findMany();
  const allCompanies = await prisma.company.findMany();
  const allSystems = await prisma.system.findMany();
  const allUsers = await prisma.user.findMany();

  const itemMap = Object.fromEntries(allItems.map(i => [i.name.trim().toLowerCase(), i.id]));
  const serviceMap = Object.fromEntries(allServices.map(s => [s.name.trim().toLowerCase(), s.id]));
  const companyMap = Object.fromEntries(allCompanies.map(c => [c.name.trim().toLowerCase(), c.id]));
  const systemMap = Object.fromEntries(allSystems.map(s => [s.name.trim().toLowerCase(), s.id]));
  const userMap = Object.fromEntries(allUsers.map(u => [u.name.trim().toLowerCase(), u.id]));

  const data = [
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2460.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2450.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2453.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2448.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2445.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2441.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2443.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2445.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2440.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2443.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2453.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2546.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["nexon"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6668"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 2481.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 419.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 422.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 425.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 454.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 460.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 410.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 457.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 524.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 525.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 579.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 632.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["dms ultimate- \u00e1ltal\u00e1nos"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6856"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 632.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 419.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 422.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 425.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 454.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 460.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 410.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 457.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 524.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 525.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 579.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 632.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["dms ultimate- sz\u00e1mla"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6855"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 632.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 14.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 14.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 18.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 23.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 27.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["dms - szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6734"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 27.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 17.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 17.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 18.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 18.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 20.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 20.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 20.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 19.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 19.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 19.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 19.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["dms-filenet"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6858"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 19.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 37.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 37.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 39.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 39.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 39.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 40.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 42.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 41.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 42.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 42.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 42.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["dms-datacap"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6857"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 42.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["mysigno hiteles\u00edt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tig\u00e1z/tit\u00e1sz"],
      systemId: systemMap["ref-6023"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["adatcsere -\u00a0middleware\u00a0(biztalk)\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6726"],
      userId: userMap["huszti j\u00e1nos"],
      value: 1.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["ump\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6154"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 650.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 805.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 810.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 812.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 812.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 810.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 812.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 812.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 812.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 811.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 830.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 850.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 827.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["elo dms\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6158"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 780.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 250.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 239.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["elo dms-besz\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6159"],
      userId: userMap["s\u00f3lyom j\u00f3zsef"],
      value: 190.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["maxszim\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6756"],
      userId: userMap["f\u00f6ldi lajos"],
      value: 5.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["saperion sz\u00e1mlak\u00e9pnyilv\u00e1ntart\u00f3 rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6161"],
      userId: userMap["goda p\u00e9ter"],
      value: 85.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["saperion sz\u00e1mlak\u00e9pnyilv\u00e1ntart\u00f3 rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6161"],
      userId: userMap["goda p\u00e9ter"],
      value: 85.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["sap ecc rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-28645"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 707.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["sap ecc rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-28645"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 710.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["sap ecc rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz"],
      systemId: systemMap["ref-28644"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 199.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["sap ecc rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz"],
      systemId: systemMap["ref-28644"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 202.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["sap s4hana rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz"],
      systemId: systemMap["ref-28644"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 562.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["sap s4hana rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz"],
      systemId: systemMap["ref-28644"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 558.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["sap s4hana rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-28645"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 411.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["sap s4hana rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-28645"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 404.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["tvrr vonalk\u00f3dos rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6773"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 51.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["tvrr vonalk\u00f3dos rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6773"],
      userId: userMap["szuromi j\u00f3zsef"],
      value: 51.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["leo rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6157"],
      userId: userMap["kiss ferenc"],
      value: 77.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["leo rendszer"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6157"],
      userId: userMap["kiss ferenc"],
      value: 78.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 725.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 728.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 726.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 723.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 711.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 713.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 711.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 713.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 712.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 712.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 715.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["eventus"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6009"],
      userId: userMap["zsipin\u00e9 szab\u00f3 hajnalka"],
      value: 714.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 32.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 33.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 33.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 33.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6016"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 33.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2025-03-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 145.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 146.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 146.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 146.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["inis - vbr2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6749"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 147.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["csocso"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6732"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 4.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["report manager - inis"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6867"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 23.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["google earth"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6745"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 320.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["inis - dwg bet\u00f6lt\u0151"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6748"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 6.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["e-k\u00f6zm\u0171"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6740"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 5.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["\u00e9vv"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6818"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 318.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["vezjog2"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6805"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 40.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 462.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["wera"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6806"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 463.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 0.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 19.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 25.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 30.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 34.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (ibm baw \u00fczleti automatiz\u00e1ci\u00f3)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz/optesz"],
      systemId: systemMap["ref-6879"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 37.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 419.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 422.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 425.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 454.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 460.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 410.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 457.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 524.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 525.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 579.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 632.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["dms ultimate - \u00fcgyf\u00e9lszolg\u00e1lati modul"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6854"],
      userId: userMap["t\u00f6r\u00f6k zsolt"],
      value: 632.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["opal/opem leolvas\u00e1si rendszerek"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6763"],
      userId: userMap["kelemen zsolt"],
      value: 71.0,
      date: new Date("2025-02-02")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 47.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["webbeny"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6042"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 46.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sims \u00e9s sims web"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6800"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 39.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["koala"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6018"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 0.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 127.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 146.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["reginfo"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6866"],
      userId: userMap["kelemen zsolt"],
      value: 150.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["neplan"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6864"],
      userId: userMap["kun gy\u00f6rgy"],
      value: 10.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 21.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 22.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 22.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 30.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["m\u00e9r\u00e9si k\u00f6zpont \u00e9s port\u00e1l"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tit\u00e1sz"],
      systemId: systemMap["ref-6759"],
      userId: userMap["kelemen zsolt"],
      value: 30.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 253.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 253.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 250.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 254.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 256.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 256.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 256.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 255.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 252.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 251.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 249.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 245.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 236.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: itemMap["grass-digi\u200b"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["tig\u00e1z"],
      systemId: systemMap["ref-6156"],
      userId: userMap["ecsedi zolt\u00e1n"],
      value: 232.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 48.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 66.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 68.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 10.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 369.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 19.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 160.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 38.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 107.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 107.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 48.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 70.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 67.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 10.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 371.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 21.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 168.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 40.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 108.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 108.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 48.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 21.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 70.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 67.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 10.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 369.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 21.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 165.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 40.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 108.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 108.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 48.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 68.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 67.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 10.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 373.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 21.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 166.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 39.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 108.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 108.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 48.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 69.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 67.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 10.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 370.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 25.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 168.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 22.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 40.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 108.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 108.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 50.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 30.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 70.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 69.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 11.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 361.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 21.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 171.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 23.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 42.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 114.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 114.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 51.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 30.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 71.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 69.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 11.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 361.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 21.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 176.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 23.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 42.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 114.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 114.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 51.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 31.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 70.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 69.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 11.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 365.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 21.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 183.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 21.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 42.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 114.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 114.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 25.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 51.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 70.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 72.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 11.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 350.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 19.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 201.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 23.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 41.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 113.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 113.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 25.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 51.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 70.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 72.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 12.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 350.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 19.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 200.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 23.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 40.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 113.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 113.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 50.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 69.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 73.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 11.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 349.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 19.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 202.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 24.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 42.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 112.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 113.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: itemMap["sap bc, sap po"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["cip-2414"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 26.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap bc - jogosults\u00e1gok"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6868"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 5.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap fi (gl, bl, aa, bp, ap, ar)"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6871"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 50.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap co"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6776"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap im/ps"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6782"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 28.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap mm beszerz\u00e9s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 68.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap mm - k\u00e9szletvezet\u00e9s, sap ewm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6773"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 74.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap sd"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6793"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 11.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap pm/sm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6791"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 352.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap isu-dm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap isu-dm-mr"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6785"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 27.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap isu-bi/in elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6784"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 29.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap isu-edm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6786"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 19.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap isu-crm"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6783"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 205.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap fi-ca"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6781"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 24.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap isu-ide"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6780"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 41.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap nav online"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6790"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 112.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: itemMap["sap egyedi \u00e9s t\u00f6meges nyomtat\u00e1s"],
      serviceId: serviceMap["felhaszn\u00e1l\u00f3k sz\u00e1ma"],
      companyId: companyMap["optesz/tit\u00e1sz"],
      systemId: systemMap["ref-6797"],
      userId: userMap["p\u00e1l\u00f3czi krisztina"],
      value: 112.0,
      date: new Date("2024-12-01")
    },
  ].filter(k => k.itemId && k.serviceId && k.companyId && k.systemId && k.userId);

  if (data.length > 0) {
    await prisma.kPI_Data.createMany({ data });
    console.log(`✅ ${data.length} KPI rekord sikeresen beszúrva`);
  } else {
    console.warn("⚠️ Nem volt érvényes KPI rekord a beszúráshoz");
  }

  console.log("🎉 TELJES SEED sikeres.");
}

seedAll()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error("❌ Hiba:", e);
    prisma.$disconnect();
    process.exit(1);
  });
