const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function seedKPI() {
  const items = await prisma.item.findMany();
  const services = await prisma.service.findMany();
  const companies = await prisma.company.findMany();
  const systems = await prisma.system.findMany();
  const users = await prisma.user.findMany();

  const kpis = [
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2460.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2450.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2453.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2448.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2445.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2441.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2443.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2445.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2440.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2443.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2453.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2546.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "NEXON")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6668")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 2481.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 419.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 422.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 425.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 454.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 460.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 410.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 457.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 524.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 525.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 579.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 632.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- \u00c1ltal\u00e1nos")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6856")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 632.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 419.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 422.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 425.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 454.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 460.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 410.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 457.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 524.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 525.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 579.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 632.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate- Sz\u00e1mla")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6855")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 632.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 14.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 14.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 18.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 23.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 27.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "DMS - Szerz\u0151d\u00e9s nyilv\u00e1ntart\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6734")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 27.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 17.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 17.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 18.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 18.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 20.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 20.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 20.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 19.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 19.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 19.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 19.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6858")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 19.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 37.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 37.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 39.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 39.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 39.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 40.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 42.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 41.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 42.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 42.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 42.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6857")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 42.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "MySigno hiteles\u00edt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIG\u00c1Z/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6023")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "Adatcsere -\u00a0Middleware\u00a0(Biztalk)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6726")?.id,
      userId: users.find(u => u.name === "Huszti J\u00e1nos")?.id,
      value: 1.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "UMP")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6154")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 650.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 805.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 810.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 812.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 812.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 810.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 812.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 812.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 812.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 811.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 830.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 850.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 827.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6158")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 780.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 250.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 239.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "ELO DMS-BESZ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6159")?.id,
      userId: users.find(u => u.name === "S\u00f3lyom J\u00f3zsef")?.id,
      value: 190.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "MaxSzim")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6756")?.id,
      userId: users.find(u => u.name === "F\u00f6ldi Lajos")?.id,
      value: 5.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAPERION sz\u00e1mlak\u00e9pnyilv\u00e1ntart\u00f3 rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6161")?.id,
      userId: users.find(u => u.name === "Goda P\u00e9ter")?.id,
      value: 85.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAPERION sz\u00e1mlak\u00e9pnyilv\u00e1ntart\u00f3 rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6161")?.id,
      userId: users.find(u => u.name === "Goda P\u00e9ter")?.id,
      value: 85.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-28645")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 707.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-28645")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 710.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-28644")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 199.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-28644")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 202.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-28644")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 562.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-28644")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 558.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-28645")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 411.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-28645")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 404.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "TVRR vonalk\u00f3dos rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 51.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "TVRR vonalk\u00f3dos rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "Szuromi J\u00f3zsef")?.id,
      value: 51.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "LEO rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6157")?.id,
      userId: users.find(u => u.name === "Kiss Ferenc")?.id,
      value: 77.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "LEO rendszer")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6157")?.id,
      userId: users.find(u => u.name === "Kiss Ferenc")?.id,
      value: 78.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 725.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 728.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 726.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 723.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 711.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 713.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 711.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 713.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 712.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 712.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 715.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "Eventus")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6009")?.id,
      userId: users.find(u => u.name === "Zsipin\u00e9 Szab\u00f3 Hajnalka")?.id,
      value: 714.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 32.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 33.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 33.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 33.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6016")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 33.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2025-03-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 145.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 146.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 146.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 146.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6749")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 147.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "CsoCso")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6732")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 4.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6867")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 23.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "Google Earth")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6745")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 320.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "INIS - DWG bet\u00f6lt\u0151")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6748")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 6.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "E-k\u00f6zm\u0171")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6740")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 5.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "\u00c9VV")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6818")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 318.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "VezJog2")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6805")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 40.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 462.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "WERA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6806")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 463.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 0.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 19.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 25.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 30.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 34.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "Sz\u00e1ll\u00edt\u00f3i min\u0151s\u00edt\u00e9s (IBM BAW \u00dczleti automatiz\u00e1ci\u00f3)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ/OPTESZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6879")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 37.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 419.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 422.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 425.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 454.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 460.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 410.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 457.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 524.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 525.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 579.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 632.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "DMS Ultimate - \u00dcgyf\u00e9lszolg\u00e1lati modul")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6854")?.id,
      userId: users.find(u => u.name === "T\u00f6r\u00f6k Zsolt")?.id,
      value: 632.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "OPAL/OPEM Leolvas\u00e1si rendszerek")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6763")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 71.0,
      date: new Date("2025-02-02")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 47.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "WebBeny")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6042")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 46.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SIMS \u00e9s SIMS Web")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6800")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 39.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "KOALA")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6018")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 0.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 127.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 146.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "Reginfo")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6866")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 150.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "Neplan")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6864")?.id,
      userId: users.find(u => u.name === "Kun Gy\u00f6rgy")?.id,
      value: 10.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 21.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 22.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 22.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 30.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "M\u00e9r\u00e9si k\u00f6zpont \u00e9s Port\u00e1l")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6759")?.id,
      userId: users.find(u => u.name === "Kelemen Zsolt")?.id,
      value: 30.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 253.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 253.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 250.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 254.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 256.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 256.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 256.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 255.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 252.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 251.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 249.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 245.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 236.0,
      date: new Date("2025-01-01")
    },
    {
      itemId: items.find(i => i.name === "GRASS-Digi")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "TIG\u00c1Z")?.id,
      systemId: systems.find(sy => sy.name === "REF-6156")?.id,
      userId: users.find(u => u.name === "Ecsedi Zolt\u00e1n")?.id,
      value: 232.0,
      date: new Date("2025-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 48.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 66.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 68.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 10.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 369.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 19.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 160.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 38.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 107.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 107.0,
      date: new Date("2024-01-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 48.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 70.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 67.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 10.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 371.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 21.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 168.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 40.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 108.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 108.0,
      date: new Date("2024-02-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 48.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 21.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 70.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 67.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 10.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 369.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 21.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 165.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 40.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 108.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 108.0,
      date: new Date("2024-03-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 48.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 68.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 67.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 10.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 373.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 21.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 166.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 39.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 108.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 108.0,
      date: new Date("2024-04-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 48.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 69.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 67.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 10.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 370.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 25.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 168.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 22.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 40.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 108.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 108.0,
      date: new Date("2024-05-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 50.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 30.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 70.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 69.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 11.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 361.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 21.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 171.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 23.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 42.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 114.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 114.0,
      date: new Date("2024-06-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 51.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 30.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 71.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 69.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 11.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 361.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 21.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 176.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 23.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 42.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 114.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 114.0,
      date: new Date("2024-07-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 51.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 31.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 70.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 69.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 11.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 365.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 21.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 183.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 21.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 42.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 114.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 114.0,
      date: new Date("2024-08-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 25.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 51.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 70.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 72.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 11.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 350.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 19.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 201.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 23.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 41.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 113.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 113.0,
      date: new Date("2024-09-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 25.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 51.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 70.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 72.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 12.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 350.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 19.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 200.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 23.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 40.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 113.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 113.0,
      date: new Date("2024-10-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 50.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 69.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 73.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 11.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 349.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 19.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 202.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 24.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 42.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 112.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 113.0,
      date: new Date("2024-11-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC, SAP PO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "CIP-2414")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 26.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP BC - jogosults\u00e1gok")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6868")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 5.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI (GL, BL, AA, BP, AP, AR)")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6871")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 50.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP CO")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6776")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP IM/PS")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6782")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 28.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM Beszerz\u00e9s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 68.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP MM - K\u00e9szletvezet\u00e9s, SAP EWM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6773")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 74.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP SD")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6793")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 11.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP PM/SM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6791")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 352.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-DM-MR")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6785")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 27.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-BI/IN Elsz\u00e1mol\u00e1s \u00e9s sz\u00e1ml\u00e1z\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6784")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 29.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-EDM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6786")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 19.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-CRM ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6783")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 205.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP FI-CA ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6781")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 24.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP ISU-IDE ")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6780")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 41.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP NAV Online")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6790")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 112.0,
      date: new Date("2024-12-01")
    },
    {
      itemId: items.find(i => i.name === "SAP Egyedi \u00e9s t\u00f6meges nyomtat\u00e1s")?.id,
      serviceId: services.find(s => s.name === "Felhaszn\u00e1l\u00f3k sz\u00e1ma")?.id,
      companyId: companies.find(c => c.name === "OPTESZ/TIT\u00c1SZ")?.id,
      systemId: systems.find(sy => sy.name === "REF-6797")?.id,
      userId: users.find(u => u.name === "P\u00e1l\u00f3czi Krisztina")?.id,
      value: 112.0,
      date: new Date("2024-12-01")
    },
  ].filter(kpi => kpi.itemId && kpi.serviceId && kpi.companyId && kpi.systemId && kpi.userId);

  if (kpis.length > 0) {
    await prisma.kPI_Data.createMany({ data: kpis });
    console.log(`✅ ${kpis.length} KPI rekord betöltve`);
  } else {
    console.warn("⚠️ Nem volt érvényes KPI rekord a seedhez");
  }
};

if (require.main === module) {
  module.exports()
    .then(() => console.log("🎯 KPI createMany seed kész"))
    .catch((e) => {
      console.error("❌ Hiba:", e);
      process.exit(1);
    });
}
