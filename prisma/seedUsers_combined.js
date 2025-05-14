const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedUsers() {
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

  console.log(`✅ ${users.length} user betöltve`);
}

seedUsers()
  .then(() => {
    console.log("🎯 User seed kész");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("❌ Hiba:", e);
    prisma.$disconnect();
    process.exit(1);
  });
