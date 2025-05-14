const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedOnlyKPI() {
  const items = await prisma.item.findMany();
  const services = await prisma.service.findMany();
  const companies = await prisma.company.findMany();
  const systems = await prisma.system.findMany();
  const users = await prisma.user.findMany();

  const itemMap = Object.fromEntries(items.map(i => [i.name.trim().toLowerCase(), i.id]));
  const serviceMap = Object.fromEntries(services.map(s => [s.name.trim().toLowerCase(), s.id]));
  const companyMap = Object.fromEntries(companies.map(c => [c.name.trim().toLowerCase(), c.id]));
  const systemMap = Object.fromEntries(systems.map(s => [s.name.trim().toLowerCase(), s.id]));
  const userMap = Object.fromEntries(users.map(u => [u.name.trim().toLowerCase(), u.id]));

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
  ].filter(k => {
    const valid = k.itemId && k.serviceId && k.companyId && k.systemId && k.userId;
    if (!valid) console.warn("❌ Érvénytelen rekord:", k);
    return valid;
  });

  if (data.length > 0) {
    await prisma.kPI_Data.createMany({ data });
    console.log(`✅ ${data.length} KPI rekord sikeresen beszúrva`);
  } else {
    console.warn("⚠️ Nem volt érvényes KPI rekord a beszúráshoz");
  }
}

seedOnlyKPI()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error("❌ Hiba:", e);
    prisma.$disconnect();
    process.exit(1);
  });
