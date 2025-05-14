const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedAll() {
  console.log("🚀 Teljes seedelés indul...");
  const hashedPassword = "$2b$10$DnFug9iFV2hMTgeKUmKHDOJbDqXMEQGevDvFvHwMjnnV496s6WjSy";

  await prisma.user.upsert({
    where: { email: "bir__csaba@example.com" },
    update: {}, 
    create: {
      name: "Biró Csaba",
      email: "bir__csaba@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "debr_di_simonn_@example.com" },
    update: {}, 
    create: {
      name: "Debrődi Simonné",
      email: "debr_di_simonn_@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "ecsedi_zolt_n@example.com" },
    update: {}, 
    create: {
      name: "Ecsedi Zoltán",
      email: "ecsedi_zolt_n@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "f_ldi_lajos@example.com" },
    update: {}, 
    create: {
      name: "Földi Lajos",
      email: "f_ldi_lajos@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "huszti_j_nos@example.com" },
    update: {}, 
    create: {
      name: "Huszti János",
      email: "huszti_j_nos@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "kelemen_zsolt@example.com" },
    update: {}, 
    create: {
      name: "Kelemen Zsolt",
      email: "kelemen_zsolt@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "kiss_ferenc@example.com" },
    update: {}, 
    create: {
      name: "Kiss Ferenc",
      email: "kiss_ferenc@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "kun_gy_rgy@example.com" },
    update: {}, 
    create: {
      name: "Kun György",
      email: "kun_gy_rgy@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "lipcsei_istv_n@example.com" },
    update: {}, 
    create: {
      name: "Lipcsei István",
      email: "lipcsei_istv_n@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "moln_r_vikt_ria_di_na@example.com" },
    update: {}, 
    create: {
      name: "Molnár Viktória Diána",
      email: "moln_r_vikt_ria_di_na@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "szuromi_j_zsef@example.com" },
    update: {}, 
    create: {
      name: "Szuromi József",
      email: "szuromi_j_zsef@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "s_lyom_j_zsef@example.com" },
    update: {}, 
    create: {
      name: "Sólyom József",
      email: "s_lyom_j_zsef@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "t_r_k_zsolt@example.com" },
    update: {}, 
    create: {
      name: "Török Zsolt",
      email: "t_r_k_zsolt@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.user.upsert({
    where: { email: "zsipin__szab__hajnalka@example.com" },
    update: {}, 
    create: {
      name: "Zsipiné Szabó Hajnalka",
      email: "zsipin__szab__hajnalka@example.com",
      hashedPassword,
      role: "REPORTER"
    }
  });
  await prisma.company.upsert({
    where: { name: "OPTESZ" },
    update: {}, 
    create: { name: "OPTESZ" }
  });
  await prisma.company.upsert({
    where: { name: "OPTESZ/TIGÁZ/TITÁSZ" },
    update: {}, 
    create: { name: "OPTESZ/TIGÁZ/TITÁSZ" }
  });
  await prisma.company.upsert({
    where: { name: "TIGÁZ" },
    update: {}, 
    create: { name: "TIGÁZ" }
  });
  await prisma.company.upsert({
    where: { name: "TITÁSZ" },
    update: {}, 
    create: { name: "TITÁSZ" }
  });
  await prisma.company.upsert({
    where: { name: "TITÁSZ/OPTESZ" },
    update: {}, 
    create: { name: "TITÁSZ/OPTESZ" }
  });
  await prisma.service.upsert({
    where: { name: "Felhasználók száma" },
    update: {}, 
    create: { name: "Felhasználók száma" }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "adatcsere___middleware__biztalk__" },
    update: {}, 
    create: {
      code: "adatcsere___middleware__biztalk__",
      name: "Adatcsere - Middleware (Biztalk)​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "csocso" },
    update: {}, 
    create: {
      code: "csocso",
      name: "CsoCso",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "dms___szerz_d_s_nyilv_ntart_s" },
    update: {}, 
    create: {
      code: "dms___szerz_d_s_nyilv_ntart_s",
      name: "DMS - Szerződés nyilvántartás",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "dms_ultimate____gyf_lszolg_lati_modul" },
    update: {}, 
    create: {
      code: "dms_ultimate____gyf_lszolg_lati_modul",
      name: "DMS Ultimate - Ügyfélszolgálati modul",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "dms_ultimate__sz_mla" },
    update: {}, 
    create: {
      code: "dms_ultimate__sz_mla",
      name: "DMS Ultimate- Számla",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "dms_ultimate___ltal_nos" },
    update: {}, 
    create: {
      code: "dms_ultimate___ltal_nos",
      name: "DMS Ultimate- Általános",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "dms_datacap" },
    update: {}, 
    create: {
      code: "dms_datacap",
      name: "DMS-DataCAP",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "dms_filenet" },
    update: {}, 
    create: {
      code: "dms_filenet",
      name: "DMS-Filenet",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "e_k_zm_" },
    update: {}, 
    create: {
      code: "e_k_zm_",
      name: "E-közmű",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "e_sz_mla_let_lt_s_" },
    update: {}, 
    create: {
      code: "e_sz_mla_let_lt_s_",
      name: "E-számla letöltés​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "elo_dms_besz_" },
    update: {}, 
    create: {
      code: "elo_dms_besz_",
      name: "ELO DMS-BESZ​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "elo_dms_" },
    update: {}, 
    create: {
      code: "elo_dms_",
      name: "ELO DMS​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "eventus" },
    update: {}, 
    create: {
      code: "eventus",
      name: "Eventus",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "fci_sz_mla_ocr_" },
    update: {}, 
    create: {
      code: "fci_sz_mla_ocr_",
      name: "FCI számla OCR​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "grass_digi_" },
    update: {}, 
    create: {
      code: "grass_digi_",
      name: "GRASS-Digi​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "google_earth" },
    update: {}, 
    create: {
      code: "google_earth",
      name: "Google Earth",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "g_pj_rm__k_vet_s__webcontrol_" },
    update: {}, 
    create: {
      code: "g_pj_rm__k_vet_s__webcontrol_",
      name: "Gépjármű-követés (Webcontrol)",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "g_pj_rm__nyilv_ntart___seefleat_" },
    update: {}, 
    create: {
      code: "g_pj_rm__nyilv_ntart___seefleat_",
      name: "Gépjármű-nyilvántartó (SeeFleat)",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "inis" },
    update: {}, 
    create: {
      code: "inis",
      name: "INIS",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "inis___dwg_bet_lt_" },
    update: {}, 
    create: {
      code: "inis___dwg_bet_lt_",
      name: "INIS - DWG betöltő",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "inis___vbr2" },
    update: {}, 
    create: {
      code: "inis___vbr2",
      name: "INIS - VBR2",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "kif_r" },
    update: {}, 
    create: {
      code: "kif_r",
      name: "KIFÜR",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "koala" },
    update: {}, 
    create: {
      code: "koala",
      name: "KOALA",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "kofax__" },
    update: {}, 
    create: {
      code: "kofax__",
      name: "Kofax ​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "leo_rendszer" },
    update: {}, 
    create: {
      code: "leo_rendszer",
      name: "LEO rendszer",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "maxszim_" },
    update: {}, 
    create: {
      code: "maxszim_",
      name: "MaxSzim​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "mysigno_hiteles_t_" },
    update: {}, 
    create: {
      code: "mysigno_hiteles_t_",
      name: "MySigno hitelesítő",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "m_r_si_k_zpont__s_port_l" },
    update: {}, 
    create: {
      code: "m_r_si_k_zpont__s_port_l",
      name: "Mérési központ és Portál",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "nexon" },
    update: {}, 
    create: {
      code: "nexon",
      name: "NEXON",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "neplan" },
    update: {}, 
    create: {
      code: "neplan",
      name: "Neplan",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "opal_opem_leolvas_si_rendszerek" },
    update: {}, 
    create: {
      code: "opal_opem_leolvas_si_rendszerek",
      name: "OPAL/OPEM Leolvasási rendszerek",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "post_z_ssal_kapcsolatos_szoftverek__" },
    update: {}, 
    create: {
      code: "post_z_ssal_kapcsolatos_szoftverek__",
      name: "Postázással kapcsolatos szoftverek ​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "powerbi_riporting" },
    update: {}, 
    create: {
      code: "powerbi_riporting",
      name: "PowerBI riporting",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "reginfo" },
    update: {}, 
    create: {
      code: "reginfo",
      name: "Reginfo",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "report_manager___inis" },
    update: {}, 
    create: {
      code: "report_manager___inis",
      name: "Report Manager - INIS",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "sap_ecc_rendszer" },
    update: {}, 
    create: {
      code: "sap_ecc_rendszer",
      name: "SAP ECC rendszer",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "sap_s4hana_rendszer" },
    update: {}, 
    create: {
      code: "sap_s4hana_rendszer",
      name: "SAP S4HANA rendszer",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "saperion_sz_mlak_pnyilv_ntart__rendszer" },
    update: {}, 
    create: {
      code: "saperion_sz_mlak_pnyilv_ntart__rendszer",
      name: "SAPERION számlaképnyilvántartó rendszer",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "sims__s_sims_web" },
    update: {}, 
    create: {
      code: "sims__s_sims_web",
      name: "SIMS és SIMS Web",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "szerel_i_rakt_r__szr_" },
    update: {}, 
    create: {
      code: "szerel_i_rakt_r__szr_",
      name: "Szerelői Raktár (SZR)",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "sz_ll_t_i_min_s_t_s__ibm_baw__zleti_automatiz_ci__" },
    update: {}, 
    create: {
      code: "sz_ll_t_i_min_s_t_s__ibm_baw__zleti_automatiz_ci__",
      name: "Szállítói minősítés (IBM BAW Üzleti automatizáció)",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "tvrr_vonalk_dos_rendszer" },
    update: {}, 
    create: {
      code: "tvrr_vonalk_dos_rendszer",
      name: "TVRR vonalkódos rendszer",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "ump_" },
    update: {}, 
    create: {
      code: "ump_",
      name: "UMP​",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "vezjog2" },
    update: {}, 
    create: {
      code: "vezjog2",
      name: "VezJog2",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "wera" },
    update: {}, 
    create: {
      code: "wera",
      name: "WERA",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "webbeny" },
    update: {}, 
    create: {
      code: "webbeny",
      name: "WebBeny",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const service_felhaszn_l_k_sz_ma = await prisma.service.findUnique({
    where: { name: "Felhasználók száma" }
  });

  await prisma.item.upsert({
    where: { code: "_vv" },
    update: {}, 
    create: {
      code: "_vv",
      name: "ÉVV",
      description: "Auto-importált",
      serviceId: service_felhaszn_l_k_sz_ma.id
    }
  });
  const company_optesz = await prisma.company.findUnique({
    where: { name: "OPTESZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-28644" },
    update: {}, 
    create: {
      name: "REF-28644",
      companyId: company_optesz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-28645" },
    update: {}, 
    create: {
      name: "REF-28645",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6009" },
    update: {}, 
    create: {
      name: "REF-6009",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6016" },
    update: {}, 
    create: {
      name: "REF-6016",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6017" },
    update: {}, 
    create: {
      name: "REF-6017",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6018" },
    update: {}, 
    create: {
      name: "REF-6018",
      companyId: company_tit_sz.id
    }
  });
  const company_optesz_tig_z_tit_sz = await prisma.company.findUnique({
    where: { name: "OPTESZ/TIGÁZ/TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6023" },
    update: {}, 
    create: {
      name: "REF-6023",
      companyId: company_optesz_tig_z_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6042" },
    update: {}, 
    create: {
      name: "REF-6042",
      companyId: company_tit_sz.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6154" },
    update: {}, 
    create: {
      name: "REF-6154",
      companyId: company_tig_z.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6156" },
    update: {}, 
    create: {
      name: "REF-6156",
      companyId: company_tig_z.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6157" },
    update: {}, 
    create: {
      name: "REF-6157",
      companyId: company_tig_z.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6158" },
    update: {}, 
    create: {
      name: "REF-6158",
      companyId: company_tig_z.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6159" },
    update: {}, 
    create: {
      name: "REF-6159",
      companyId: company_tig_z.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6161" },
    update: {}, 
    create: {
      name: "REF-6161",
      companyId: company_tig_z.id
    }
  });
  const company_optesz_tig_z_tit_sz = await prisma.company.findUnique({
    where: { name: "OPTESZ/TIGÁZ/TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6668" },
    update: {}, 
    create: {
      name: "REF-6668",
      companyId: company_optesz_tig_z_tit_sz.id
    }
  });
  const company_optesz_tig_z_tit_sz = await prisma.company.findUnique({
    where: { name: "OPTESZ/TIGÁZ/TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6669" },
    update: {}, 
    create: {
      name: "REF-6669",
      companyId: company_optesz_tig_z_tit_sz.id
    }
  });
  const company_optesz_tig_z_tit_sz = await prisma.company.findUnique({
    where: { name: "OPTESZ/TIGÁZ/TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6670" },
    update: {}, 
    create: {
      name: "REF-6670",
      companyId: company_optesz_tig_z_tit_sz.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6726" },
    update: {}, 
    create: {
      name: "REF-6726",
      companyId: company_tig_z.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6732" },
    update: {}, 
    create: {
      name: "REF-6732",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz_optesz = await prisma.company.findUnique({
    where: { name: "TITÁSZ/OPTESZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6734" },
    update: {}, 
    create: {
      name: "REF-6734",
      companyId: company_tit_sz_optesz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6740" },
    update: {}, 
    create: {
      name: "REF-6740",
      companyId: company_tit_sz.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6741" },
    update: {}, 
    create: {
      name: "REF-6741",
      companyId: company_tig_z.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6742" },
    update: {}, 
    create: {
      name: "REF-6742",
      companyId: company_tig_z.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6745" },
    update: {}, 
    create: {
      name: "REF-6745",
      companyId: company_tit_sz.id
    }
  });
  const company_optesz_tig_z_tit_sz = await prisma.company.findUnique({
    where: { name: "OPTESZ/TIGÁZ/TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6746" },
    update: {}, 
    create: {
      name: "REF-6746",
      companyId: company_optesz_tig_z_tit_sz.id
    }
  });
  const company_optesz_tig_z_tit_sz = await prisma.company.findUnique({
    where: { name: "OPTESZ/TIGÁZ/TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6747" },
    update: {}, 
    create: {
      name: "REF-6747",
      companyId: company_optesz_tig_z_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6748" },
    update: {}, 
    create: {
      name: "REF-6748",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6749" },
    update: {}, 
    create: {
      name: "REF-6749",
      companyId: company_tit_sz.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6751" },
    update: {}, 
    create: {
      name: "REF-6751",
      companyId: company_tig_z.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6756" },
    update: {}, 
    create: {
      name: "REF-6756",
      companyId: company_tig_z.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6759" },
    update: {}, 
    create: {
      name: "REF-6759",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6763" },
    update: {}, 
    create: {
      name: "REF-6763",
      companyId: company_tit_sz.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6770" },
    update: {}, 
    create: {
      name: "REF-6770",
      companyId: company_tig_z.id
    }
  });
  const company_tig_z = await prisma.company.findUnique({
    where: { name: "TIGÁZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6773" },
    update: {}, 
    create: {
      name: "REF-6773",
      companyId: company_tig_z.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6800" },
    update: {}, 
    create: {
      name: "REF-6800",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6805" },
    update: {}, 
    create: {
      name: "REF-6805",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6806" },
    update: {}, 
    create: {
      name: "REF-6806",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6818" },
    update: {}, 
    create: {
      name: "REF-6818",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6821" },
    update: {}, 
    create: {
      name: "REF-6821",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6854" },
    update: {}, 
    create: {
      name: "REF-6854",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz_optesz = await prisma.company.findUnique({
    where: { name: "TITÁSZ/OPTESZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6855" },
    update: {}, 
    create: {
      name: "REF-6855",
      companyId: company_tit_sz_optesz.id
    }
  });
  const company_tit_sz_optesz = await prisma.company.findUnique({
    where: { name: "TITÁSZ/OPTESZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6856" },
    update: {}, 
    create: {
      name: "REF-6856",
      companyId: company_tit_sz_optesz.id
    }
  });
  const company_tit_sz_optesz = await prisma.company.findUnique({
    where: { name: "TITÁSZ/OPTESZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6857" },
    update: {}, 
    create: {
      name: "REF-6857",
      companyId: company_tit_sz_optesz.id
    }
  });
  const company_tit_sz_optesz = await prisma.company.findUnique({
    where: { name: "TITÁSZ/OPTESZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6858" },
    update: {}, 
    create: {
      name: "REF-6858",
      companyId: company_tit_sz_optesz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6864" },
    update: {}, 
    create: {
      name: "REF-6864",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz_optesz = await prisma.company.findUnique({
    where: { name: "TITÁSZ/OPTESZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6865" },
    update: {}, 
    create: {
      name: "REF-6865",
      companyId: company_tit_sz_optesz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6866" },
    update: {}, 
    create: {
      name: "REF-6866",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz = await prisma.company.findUnique({
    where: { name: "TITÁSZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6867" },
    update: {}, 
    create: {
      name: "REF-6867",
      companyId: company_tit_sz.id
    }
  });
  const company_tit_sz_optesz = await prisma.company.findUnique({
    where: { name: "TITÁSZ/OPTESZ" }
  });

  await prisma.system.upsert({
    where: { name: "REF-6879" },
    update: {}, 
    create: {
      name: "REF-6879",
      companyId: company_tit_sz_optesz.id
    }
  });
  // KPI rekordok tömeges beszúrása
  const allUsers = await prisma.user.findMany();
  const allItems = await prisma.item.findMany();
  const allCompanies = await prisma.company.findMany();
  const allServices = await prisma.service.findMany();
  const allSystems = await prisma.system.findMany();

  const kpiData = [
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-01-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-02-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-03-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-04-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-05-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-06-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-07-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-08-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-09-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-10-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-11-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2024-12-01"),
      value: 50
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2025-01-01"),
      value: 50
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2025-02-01"),
      value: 50
    },
    {
      itemId: allItems.find(i => i.name === "PowerBI riporting")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Biró Csaba")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6865")?.id,
      date: new Date("2025-03-01"),
      value: 50
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-01-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-02-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-03-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-04-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-05-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-06-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-07-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-08-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-09-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-10-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-11-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Debrődi Simonné")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2024-12-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-01-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-02-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-03-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-04-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-05-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-06-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-07-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-08-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-09-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-10-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-11-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2024-12-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2025-01-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2025-02-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "E-számla letöltés​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6741")?.id,
      date: new Date("2025-03-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-01-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-02-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-03-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-04-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-05-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-06-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-07-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-08-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-09-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-10-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-11-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2024-12-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2025-01-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2025-02-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "FCI számla OCR​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6742")?.id,
      date: new Date("2025-03-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-01-01"),
      value: 253
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-02-01"),
      value: 253
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-03-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-04-01"),
      value: 254
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-05-01"),
      value: 256
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-06-01"),
      value: 256
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-07-01"),
      value: 256
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-08-01"),
      value: 255
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-09-01"),
      value: 252
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-10-01"),
      value: 251
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-11-01"),
      value: 249
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2024-12-01"),
      value: 245
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2025-01-01"),
      value: 236
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2025-02-01"),
      value: 232
    },
    {
      itemId: allItems.find(i => i.name === "GRASS-Digi​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6156")?.id,
      date: new Date("2025-03-01"),
      value: 233
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-01-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-02-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-03-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-04-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-05-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-06-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-07-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-08-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-09-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-10-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-11-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2024-12-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2025-01-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2025-02-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Kofax ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6751")?.id,
      date: new Date("2025-03-01"),
      value: 7
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-01-01"),
      value: 50
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-02-01"),
      value: 51
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-03-01"),
      value: 52
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-04-01"),
      value: 53
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-05-01"),
      value: 53
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-06-01"),
      value: 53
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-07-01"),
      value: 49
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-08-01"),
      value: 49
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-09-01"),
      value: 49
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-10-01"),
      value: 49
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-11-01"),
      value: 49
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2024-12-01"),
      value: 49
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2025-01-01"),
      value: 45
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2025-02-01"),
      value: 45
    },
    {
      itemId: allItems.find(i => i.name === "Postázással kapcsolatos szoftverek ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Ecsedi Zoltán")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6770")?.id,
      date: new Date("2025-03-01"),
      value: 44
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-01-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-02-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-03-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-04-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-05-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-06-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-07-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-08-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-09-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-10-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-11-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2024-12-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2025-01-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2025-02-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "MaxSzim​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6756")?.id,
      date: new Date("2025-03-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-01-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-02-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-03-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-04-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-05-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-06-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-07-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-08-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-09-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-10-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-11-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2024-12-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2025-01-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2025-02-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "UMP​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Földi Lajos")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6154")?.id,
      date: new Date("2025-03-01"),
      value: 650
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-01-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-02-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-03-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-04-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-05-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-06-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-07-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-08-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-09-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-10-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-11-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2024-12-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2025-01-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2025-02-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2025-03-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2025-04-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "Adatcsere - Middleware (Biztalk)​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6726")?.id,
      date: new Date("2025-05-01"),
      value: 1
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-01-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-02-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-03-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-04-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-05-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-06-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-07-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-08-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-09-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-10-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-11-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2024-12-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2025-01-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2025-02-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2025-03-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2025-04-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "MySigno hitelesítő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Huszti János")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6023")?.id,
      date: new Date("2025-05-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-01-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-02-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-03-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-04-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-05-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-06-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-07-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-08-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-09-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-10-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-11-01"),
      value: 22
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2024-12-01"),
      value: 22
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2025-01-01"),
      value: 30
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2025-02-01"),
      value: 30
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2025-03-01"),
      value: 31
    },
    {
      itemId: allItems.find(i => i.name === "Mérési központ és Portál")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6759")?.id,
      date: new Date("2025-04-01"),
      value: 31
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-01-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-02-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-03-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-04-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-05-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-06-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-07-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-08-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-09-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-10-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-11-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2024-12-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2025-01-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2025-02-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2025-03-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "OPAL/OPEM Leolvasási rendszerek")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6763")?.id,
      date: new Date("2025-04-01"),
      value: 71
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-01-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-02-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-03-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-04-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-05-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-06-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-07-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-08-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-09-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-10-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-11-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2024-12-01"),
      value: 127
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2025-01-01"),
      value: 146
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2025-02-01"),
      value: 150
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2025-03-01"),
      value: 149
    },
    {
      itemId: allItems.find(i => i.name === "Reginfo")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kelemen Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6866")?.id,
      date: new Date("2025-04-01"),
      value: 149
    },
    {
      itemId: allItems.find(i => i.name === "LEO rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kiss Ferenc")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6157")?.id,
      date: new Date("2025-01-01"),
      value: 77
    },
    {
      itemId: allItems.find(i => i.name === "LEO rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kiss Ferenc")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6157")?.id,
      date: new Date("2025-02-01"),
      value: 78
    },
    {
      itemId: allItems.find(i => i.name === "LEO rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kiss Ferenc")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6157")?.id,
      date: new Date("2025-03-01"),
      value: 82
    },
    {
      itemId: allItems.find(i => i.name === "LEO rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kiss Ferenc")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6157")?.id,
      date: new Date("2025-04-01"),
      value: 84
    },
    {
      itemId: allItems.find(i => i.name === "LEO rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kiss Ferenc")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6157")?.id,
      date: new Date("2025-05-01"),
      value: 84
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-01-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-02-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-03-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-04-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-05-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-06-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-07-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-08-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-09-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-10-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-11-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2024-12-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2025-01-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "CsoCso")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6732")?.id,
      date: new Date("2025-02-01"),
      value: 4
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-01-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-02-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-03-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-04-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-05-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-06-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-07-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-08-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-09-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-10-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-11-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2024-12-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2025-01-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "E-közmű")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6740")?.id,
      date: new Date("2025-02-01"),
      value: 5
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-01-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-02-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-03-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-04-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-05-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-06-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-07-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-08-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-09-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-10-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-11-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2024-12-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2025-01-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "ÉVV")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6818")?.id,
      date: new Date("2025-02-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-01-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-02-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-03-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-04-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-05-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-06-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-07-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-08-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-09-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-10-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-11-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2024-12-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2025-01-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Google Earth")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6745")?.id,
      date: new Date("2025-02-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-01-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-02-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-03-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-04-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-05-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-06-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-07-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-08-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-09-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-10-01"),
      value: 32
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-11-01"),
      value: 33
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2024-12-01"),
      value: 33
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2025-01-01"),
      value: 33
    },
    {
      itemId: allItems.find(i => i.name === "INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6016")?.id,
      date: new Date("2025-02-01"),
      value: 33
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-01-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-02-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-03-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-04-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-05-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-06-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-07-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-08-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-09-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-10-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-11-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2024-12-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2025-01-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - DWG betöltő")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6748")?.id,
      date: new Date("2025-02-01"),
      value: 6
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-02-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-03-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-04-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-05-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-06-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-07-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-08-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-09-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-10-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-11-01"),
      value: 146
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2024-12-01"),
      value: 146
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2025-01-01"),
      value: 146
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2025-02-01"),
      value: 147
    },
    {
      itemId: allItems.find(i => i.name === "INIS - VBR2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6749")?.id,
      date: new Date("2025-03-01"),
      value: 145
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2025-01-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2025-02-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2025-03-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-01-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-02-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-03-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-04-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-05-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-06-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-07-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-08-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-09-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-10-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-11-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "KOALA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6018")?.id,
      date: new Date("2024-12-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-01-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-02-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-03-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-04-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-05-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-06-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-07-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-08-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-09-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-10-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-11-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2024-12-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2025-01-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2025-02-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Neplan")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6864")?.id,
      date: new Date("2025-03-01"),
      value: 10
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-01-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-02-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-03-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-04-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-05-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-06-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-07-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-08-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-09-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-10-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-11-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2024-12-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2025-01-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "Report Manager - INIS")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6867")?.id,
      date: new Date("2025-02-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-01-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-02-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-03-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-04-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-05-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-06-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-07-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-08-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-09-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-10-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-11-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2024-12-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2025-01-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2025-02-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "SIMS és SIMS Web")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6800")?.id,
      date: new Date("2025-03-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-01-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-02-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-03-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-04-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-05-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-06-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-07-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-08-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-09-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-10-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-11-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2024-12-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2025-01-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "VezJog2")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6805")?.id,
      date: new Date("2025-02-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-01-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-02-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-03-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-04-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-05-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-06-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-07-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-08-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-09-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-10-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-11-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2024-12-01"),
      value: 46
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2025-01-01"),
      value: 46
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2025-02-01"),
      value: 46
    },
    {
      itemId: allItems.find(i => i.name === "WebBeny")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6042")?.id,
      date: new Date("2025-03-01"),
      value: 46
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-01-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-02-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-03-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-04-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-05-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-06-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-07-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-08-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-09-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-10-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-11-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2024-12-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2025-01-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "WERA")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Kun György")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6806")?.id,
      date: new Date("2025-02-01"),
      value: 463
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-01-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-02-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-03-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-04-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-05-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-06-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-07-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-08-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-09-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-10-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-11-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2024-12-01"),
      value: 317
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2025-01-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2025-02-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2025-03-01"),
      value: 320
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-01-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-02-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-03-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-04-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-05-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-06-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-07-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-08-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-09-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-10-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-11-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2024-12-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2025-01-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2025-02-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2025-03-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2025-01-01"),
      value: 501
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2025-02-01"),
      value: 501
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2025-03-01"),
      value: 502
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-01-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-02-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-03-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-04-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-05-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-06-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-07-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-08-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-09-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-10-01"),
      value: 499
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-11-01"),
      value: 501
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2024-12-01"),
      value: 501
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Molnár Viktória Diána")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2025-01-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Molnár Viktória Diána")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2025-02-01"),
      value: 242
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-01-01"),
      value: 805
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-02-01"),
      value: 810
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-03-01"),
      value: 812
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-04-01"),
      value: 812
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-05-01"),
      value: 810
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-06-01"),
      value: 812
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-07-01"),
      value: 812
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-08-01"),
      value: 812
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-09-01"),
      value: 811
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-10-01"),
      value: 830
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-11-01"),
      value: 850
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2024-12-01"),
      value: 827
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2025-01-01"),
      value: 780
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2025-02-01"),
      value: 740
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2025-03-01"),
      value: 728
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2025-04-01"),
      value: 732
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6158")?.id,
      date: new Date("2025-05-01"),
      value: 739
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-01-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-02-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-03-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-04-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-05-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-06-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-07-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-08-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-09-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-10-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-11-01"),
      value: 250
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2024-12-01"),
      value: 239
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2025-01-01"),
      value: 190
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2025-02-01"),
      value: 193
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2025-03-01"),
      value: 193
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2025-04-01"),
      value: 193
    },
    {
      itemId: allItems.find(i => i.name === "ELO DMS-BESZ​")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6159")?.id,
      date: new Date("2025-05-01"),
      value: 195
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-01-01"),
      value: 2460
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-02-01"),
      value: 2450
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-03-01"),
      value: 2453
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-04-01"),
      value: 2448
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-05-01"),
      value: 2445
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-06-01"),
      value: 2441
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-07-01"),
      value: 2443
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-08-01"),
      value: 2445
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-09-01"),
      value: 2440
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-10-01"),
      value: 2443
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-11-01"),
      value: 2453
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2024-12-01"),
      value: 2546
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6668")?.id,
      date: new Date("2025-01-01"),
      value: 2481
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6669")?.id,
      date: new Date("2025-02-01"),
      value: 2502
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6670")?.id,
      date: new Date("2025-03-01"),
      value: 2520
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6670")?.id,
      date: new Date("2025-04-01"),
      value: 2557
    },
    {
      itemId: allItems.find(i => i.name === "NEXON")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Sólyom József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6670")?.id,
      date: new Date("2025-05-01"),
      value: 2541
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-01-01"),
      value: 401
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-01-01"),
      value: 562
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-02-01"),
      value: 405
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-02-01"),
      value: 575
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-03-01"),
      value: 405
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-03-01"),
      value: 574
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-04-01"),
      value: 406
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-04-01"),
      value: 580
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-05-01"),
      value: 408
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-05-01"),
      value: 582
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-06-01"),
      value: 402
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-06-01"),
      value: 596
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-07-01"),
      value: 400
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-07-01"),
      value: 596
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-08-01"),
      value: 399
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-08-01"),
      value: 602
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-09-01"),
      value: 393
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-09-01"),
      value: 623
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-10-01"),
      value: 393
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-10-01"),
      value: 623
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-11-01"),
      value: 392
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-11-01"),
      value: 636
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-12-01"),
      value: 392
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-12-01"),
      value: 630
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-01-01"),
      value: 411
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-01-01"),
      value: 562
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-02-01"),
      value: 404
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-02-01"),
      value: 558
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-03-01"),
      value: 557
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-03-01"),
      value: 400
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-04-01"),
      value: 393
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-04-01"),
      value: 541
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-05-01"),
      value: 342
    },
    {
      itemId: allItems.find(i => i.name === "SAP S4HANA rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-05-01"),
      value: 484
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-01-01"),
      value: 764
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-01-01"),
      value: 205
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-02-01"),
      value: 762
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-02-01"),
      value: 205
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-03-01"),
      value: 768
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-03-01"),
      value: 205
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-04-01"),
      value: 776
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-04-01"),
      value: 205
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-05-01"),
      value: 760
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-05-01"),
      value: 229
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-06-01"),
      value: 762
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-06-01"),
      value: 228
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-07-01"),
      value: 765
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-07-01"),
      value: 230
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-08-01"),
      value: 771
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-08-01"),
      value: 232
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-09-01"),
      value: 771
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-09-01"),
      value: 234
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-10-01"),
      value: 778
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-10-01"),
      value: 234
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-11-01"),
      value: 782
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-11-01"),
      value: 236
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2024-12-01"),
      value: 783
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2024-12-01"),
      value: 237
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-01-01"),
      value: 707
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-01-01"),
      value: 199
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-02-01"),
      value: 710
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-02-01"),
      value: 202
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-03-01"),
      value: 714
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-03-01"),
      value: 204
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-04-01"),
      value: 716
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-04-01"),
      value: 240
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28645")?.id,
      date: new Date("2025-05-01"),
      value: 714
    },
    {
      itemId: allItems.find(i => i.name === "SAP ECC rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-28644")?.id,
      date: new Date("2025-05-01"),
      value: 241
    },
    {
      itemId: allItems.find(i => i.name === "SAPERION számlaképnyilvántartó rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6161")?.id,
      date: new Date("2025-01-01"),
      value: 85
    },
    {
      itemId: allItems.find(i => i.name === "SAPERION számlaképnyilvántartó rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6161")?.id,
      date: new Date("2025-02-01"),
      value: 85
    },
    {
      itemId: allItems.find(i => i.name === "SAPERION számlaképnyilvántartó rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6161")?.id,
      date: new Date("2025-03-01"),
      value: 85
    },
    {
      itemId: allItems.find(i => i.name === "SAPERION számlaképnyilvántartó rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6161")?.id,
      date: new Date("2025-04-01"),
      value: 85
    },
    {
      itemId: allItems.find(i => i.name === "SAPERION számlaképnyilvántartó rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6161")?.id,
      date: new Date("2025-04-01"),
      value: 85
    },
    {
      itemId: allItems.find(i => i.name === "TVRR vonalkódos rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6773")?.id,
      date: new Date("2025-01-01"),
      value: 51
    },
    {
      itemId: allItems.find(i => i.name === "TVRR vonalkódos rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6773")?.id,
      date: new Date("2025-02-01"),
      value: 51
    },
    {
      itemId: allItems.find(i => i.name === "TVRR vonalkódos rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6773")?.id,
      date: new Date("2025-03-01"),
      value: 51
    },
    {
      itemId: allItems.find(i => i.name === "TVRR vonalkódos rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6773")?.id,
      date: new Date("2025-04-01"),
      value: 51
    },
    {
      itemId: allItems.find(i => i.name === "TVRR vonalkódos rendszer")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Szuromi József")?.id,
      companyId: allCompanies.find(c => c.name === "TIGÁZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6773")?.id,
      date: new Date("2025-04-01"),
      value: 51
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-01-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-02-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-03-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-04-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-05-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-06-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-07-01"),
      value: 14
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-08-01"),
      value: 14
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-09-01"),
      value: 18
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-10-01"),
      value: 23
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-11-01"),
      value: 27
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2024-12-01"),
      value: 27
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2025-01-01"),
      value: 135
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2025-02-01"),
      value: 135
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2025-03-01"),
      value: 183
    },
    {
      itemId: allItems.find(i => i.name === "DMS - Szerződés nyilvántartás")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6734")?.id,
      date: new Date("2025-04-01"),
      value: 181
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-01-01"),
      value: 251
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-02-01"),
      value: 265
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-03-01"),
      value: 272
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-04-01"),
      value: 252
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-05-01"),
      value: 266
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-06-01"),
      value: 275
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-07-01"),
      value: 253
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-08-01"),
      value: 276
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-09-01"),
      value: 290
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-10-01"),
      value: 285
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-11-01"),
      value: 294
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2024-12-01"),
      value: 315
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2025-01-01"),
      value: 318
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2025-02-01"),
      value: 319
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2025-03-01"),
      value: 298
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate - Ügyfélszolgálati modul")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6854")?.id,
      date: new Date("2025-04-01"),
      value: 305
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-01-01"),
      value: 443
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-02-01"),
      value: 458
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-03-01"),
      value: 471
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-04-01"),
      value: 452
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-05-01"),
      value: 477
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-06-01"),
      value: 488
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-07-01"),
      value: 462
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-08-01"),
      value: 506
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-09-01"),
      value: 526
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-10-01"),
      value: 576
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-11-01"),
      value: 620
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2024-12-01"),
      value: 643
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2025-01-01"),
      value: 647
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2025-02-01"),
      value: 643
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2025-03-01"),
      value: 668
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Általános")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6856")?.id,
      date: new Date("2025-04-01"),
      value: 675
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-01-01"),
      value: 231
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-02-01"),
      value: 236
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-03-01"),
      value: 244
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-04-01"),
      value: 248
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-05-01"),
      value: 264
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-06-01"),
      value: 271
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-07-01"),
      value: 269
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-08-01"),
      value: 291
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-09-01"),
      value: 300
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-10-01"),
      value: 352
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-11-01"),
      value: 389
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2024-12-01"),
      value: 397
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2025-01-01"),
      value: 401
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2025-02-01"),
      value: 417
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2025-03-01"),
      value: 427
    },
    {
      itemId: allItems.find(i => i.name === "DMS Ultimate- Számla")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6855")?.id,
      date: new Date("2025-04-01"),
      value: 422
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-01-01"),
      value: 37
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-02-01"),
      value: 37
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-03-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-04-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-05-01"),
      value: 39
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-06-01"),
      value: 40
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-07-01"),
      value: 42
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-08-01"),
      value: 41
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-09-01"),
      value: 42
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-10-01"),
      value: 42
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-11-01"),
      value: 42
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2024-12-01"),
      value: 42
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2025-01-01"),
      value: 44
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2025-02-01"),
      value: 44
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2025-03-01"),
      value: 44
    },
    {
      itemId: allItems.find(i => i.name === "DMS-DataCAP")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6857")?.id,
      date: new Date("2025-04-01"),
      value: 47
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-01-01"),
      value: 121
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-02-01"),
      value: 121
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-03-01"),
      value: 121
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-04-01"),
      value: 121
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-05-01"),
      value: 132
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-06-01"),
      value: 132
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-07-01"),
      value: 132
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-08-01"),
      value: 151
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-09-01"),
      value: 163
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-10-01"),
      value: 212
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-11-01"),
      value: 257
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2024-12-01"),
      value: 260
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2025-01-01"),
      value: 271
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2025-02-01"),
      value: 271
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2025-03-01"),
      value: 368
    },
    {
      itemId: allItems.find(i => i.name === "DMS-Filenet")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6858")?.id,
      date: new Date("2025-04-01"),
      value: 372
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-01-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-02-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-03-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-04-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-05-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-06-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-07-01"),
      value: 0
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-08-01"),
      value: 19
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-09-01"),
      value: 25
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-10-01"),
      value: 30
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-11-01"),
      value: 34
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2024-12-01"),
      value: 37
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2025-01-01"),
      value: 44
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2025-02-01"),
      value: 44
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2025-03-01"),
      value: 51
    },
    {
      itemId: allItems.find(i => i.name === "Szállítói minősítés (IBM BAW Üzleti automatizáció)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Török Zsolt")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ/OPTESZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6879")?.id,
      date: new Date("2025-04-01"),
      value: 50
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-01-01"),
      value: 725
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-02-01"),
      value: 728
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-03-01"),
      value: 726
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-04-01"),
      value: 723
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-05-01"),
      value: 711
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-06-01"),
      value: 713
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-07-01"),
      value: 711
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-08-01"),
      value: 713
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-09-01"),
      value: 712
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-10-01"),
      value: 712
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-11-01"),
      value: 715
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2024-12-01"),
      value: 714
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2025-01-01"),
      value: 714
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2025-02-01"),
      value: 716
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2025-04-01"),
      value: 502
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2025-04-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2025-04-01"),
      value: 321
    },
    {
      itemId: allItems.find(i => i.name === "KIFÜR")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6017")?.id,
      date: new Date("2025-05-01"),
      value: 503
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-nyilvántartó (SeeFleat)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6747")?.id,
      date: new Date("2025-05-01"),
      value: 21
    },
    {
      itemId: allItems.find(i => i.name === "Gépjármű-követés (Webcontrol)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Lipcsei István")?.id,
      companyId: allCompanies.find(c => c.name === "OPTESZ/TIGÁZ/TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6746")?.id,
      date: new Date("2025-05-01"),
      value: 322
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2025-03-01"),
      value: 716
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Molnár Viktória Diána")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2025-03-01"),
      value: 243
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2025-04-01"),
      value: 719
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Molnár Viktória Diána")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2025-05-01"),
      value: 258
    },
    {
      itemId: allItems.find(i => i.name === "Eventus")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Zsipiné Szabó Hajnalka")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6009")?.id,
      date: new Date("2025-05-01"),
      value: 720
    },
    {
      itemId: allItems.find(i => i.name === "Szerelői Raktár (SZR)")?.id,
      serviceId: allServices.find(s => s.name === "Felhasználók száma")?.id,
      userId: allUsers.find(u => u.name === "Molnár Viktória Diána")?.id,
      companyId: allCompanies.find(c => c.name === "TITÁSZ")?.id,
      systemId: allSystems.find(s => s.name === "REF-6821")?.id,
      date: new Date("2025-04-01"),
      value: 243
    },
  ].filter(k => k.itemId && k.serviceId && k.userId && k.companyId && k.systemId);

  await prisma.kPI_Data.createMany({ data: kpiData });
  console.log("✅ KPI adatok beszúrva");

  await prisma.$disconnect();
}

seedAll().catch(e => {
  console.error("❌ Hiba:", e);
  process.exit(1);
});
