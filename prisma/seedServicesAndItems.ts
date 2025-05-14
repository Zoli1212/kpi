const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const services = [
  {
    "name": "Adathálózati szolgáltatások",
    "items": [
      {
        "code": "apn__gsm_halozatok_szama_db",
        "name": "APN - GSM hálózatok száma (db)"
      },
      {
        "code": "apn_be_kotott_iot_eszkozok_szama_db",
        "name": "APN-be kötött (IOT eszközök) száma (db)"
      },
      {
        "code": "adatvonalak_szama_db",
        "name": "Adatvonalak száma (db)"
      },
      {
        "code": "cserelt_lan_eszkozok_szama_db",
        "name": "Cserélt LAN eszközök száma (db)"
      },
      {
        "code": "cserelt_access_pointok_szama_db",
        "name": "Cserélt access pointok száma (db)"
      },
      {
        "code": "lan_aktiv_eszkozok_szama_switch_db",
        "name": "LAN aktív eszközök száma (switch) (db)"
      },
      {
        "code": "lan_aktiv_portok_szama_db",
        "name": "LAN aktív portok száma (db)"
      },
      {
        "code": "lan_fali_csatlakozok_szama_db",
        "name": "LAN fali csatlakozók száma (db)"
      },
      {
        "code": "lecserelt_wan_eszkozok_szama_db",
        "name": "Lecserélt WAN eszközök száma (db)"
      },
      {
        "code": "telephelyek_szama_db",
        "name": "Telephelyek száma (db)"
      },
      {
        "code": "tuzfal_szabalyok_szama_db",
        "name": "Tuzfal szabályok száma (db)"
      },
      {
        "code": "tamadasok_szama_db",
        "name": "Támadások száma (db)"
      },
      {
        "code": "wan_eszkozok_szama_router_db",
        "name": "WAN eszközök száma (router) (db)"
      },
      {
        "code": "wifi_access_pointok_ap_szama_db",
        "name": "WiFi access pointok (AP) száma (db)"
      }
    ]
  },
  {
    "name": "Adatközponti szolgáltatások",
    "items": [
      {
        "code": "adatbazisok_szama_db",
        "name": "Adatbázisok száma (db)"
      },
      {
        "code": "archive_storage_hasznalat_lefoglalt_tb",
        "name": "Archive storage használat (lefoglalt) (TB)"
      },
      {
        "code": "archive_storage_kapacitas_teljes_tb",
        "name": "Archive storage kapacitás (teljes) (TB)"
      },
      {
        "code": "egyeb_storage_kapacitas_tb",
        "name": "Egyéb storage kapacitás (TB)"
      },
      {
        "code": "fizikai_cpu_magok_szama_db",
        "name": "Fizikai CPU magok száma (db)"
      },
      {
        "code": "fizikai_memoria_osszesen_gb",
        "name": "Fizikai memória összesen (GB)"
      },
      {
        "code": "fizikai_szerverek_szama_db",
        "name": "Fizikai szerverek száma (db)"
      },
      {
        "code": "infra_management_alkalmazasok_szama_db",
        "name": "Infra management alkalmazások száma (db)"
      },
      {
        "code": "kiszolgalt_rendszerek_szama_db",
        "name": "Kiszolgált rendszerek száma (db)"
      },
      {
        "code": "magas_rendelkezesre_allasu_storage_hasznalat_lefoglalt_tb",
        "name": "Magas rendelkezésre állású storage használat (lefoglalt) (TB)"
      },
      {
        "code": "magas_rendelkezesre_allasu_storage_kapacitas_teljes_tb",
        "name": "Magas rendelkezésre állású storage kapacitás (teljes) (TB)"
      },
      {
        "code": "mentesi_storage_hasznalat_lefoglalt_tb",
        "name": "Mentési  storage használat (lefoglalt) (TB)"
      },
      {
        "code": "mentesi_storage_kapacitas_teljes_tb",
        "name": "Mentési storage kapacitás (teljes) (TB)"
      },
      {
        "code": "riasztasi_szabalyok_szama_db",
        "name": "Riasztási szabályok száma (db)"
      },
      {
        "code": "storage_felhasznalt_kapacitas_tb",
        "name": "Storage felhasznált kapacitás (TB)"
      },
      {
        "code": "storage_rendelkezesre_allo_osszes_kapacitas_tb",
        "name": "Storage rendelkezésre álló összes kapacitás (TB)"
      },
      {
        "code": "ups_kapacitas_?",
        "name": "UPS kapacitás (?)"
      },
      {
        "code": "virtualis_cpu_k_szama_db",
        "name": "Virtuális CPU-k száma (db)"
      },
      {
        "code": "virtualis_szerverek_szama_db",
        "name": "Virtuális szerverek száma (db)"
      },
      {
        "code": "zabbix_ba_bevont_windows_szerverek_szama_db",
        "name": "Zabbix-ba bevont Windows szerverek száma (db)"
      },
      {
        "code": "zabbix_ba_bevont_alkalmazasok_szama_db",
        "name": "Zabbix-ba bevont alkalmazások száma (db)"
      }
    ]
  },
  {
    "name": "Felhasználók száma",
    "items": [
      {
        "code": "adatcsere_ middleware biztalk​",
        "name": "Adatcsere - Middleware (Biztalk)​"
      },
      {
        "code": "csocso",
        "name": "CsoCso"
      },
      {
        "code": "dms__szerzodes_nyilvantartas",
        "name": "DMS - Szerződés nyilvántartás"
      },
      {
        "code": "dms_ultimate__ugyfelszolgalati_modul",
        "name": "DMS Ultimate - Ügyfélszolgálati modul"
      },
      {
        "code": "dms_ultimate_szamla",
        "name": "DMS Ultimate- Számla"
      },
      {
        "code": "dms_ultimate_altalanos",
        "name": "DMS Ultimate- Általános"
      },
      {
        "code": "dms_datacap",
        "name": "DMS-DataCAP"
      },
      {
        "code": "dms_filenet",
        "name": "DMS-Filenet"
      },
      {
        "code": "e_kozmu",
        "name": "E-közmű"
      },
      {
        "code": "e_szamla letoltes​",
        "name": "E-számla letöltés​"
      },
      {
        "code": "elo_dms_besz​",
        "name": "ELO DMS-BESZ​"
      },
      {
        "code": "elo_dms​",
        "name": "ELO DMS​"
      },
      {
        "code": "eventus",
        "name": "Eventus"
      },
      {
        "code": "grass_digi​",
        "name": "GRASS-Digi​"
      },
      {
        "code": "google_earth",
        "name": "Google Earth"
      },
      {
        "code": "gepjarmu_kovetes_webcontrol",
        "name": "Gépjármű-követés (Webcontrol)"
      },
      {
        "code": "gepjarmu_nyilvantarto_seefleat",
        "name": "Gépjármű-nyilvántartó (SeeFleat)"
      },
      {
        "code": "inis",
        "name": "INIS"
      },
      {
        "code": "inis__dwg_betolto",
        "name": "INIS - DWG betöltő"
      },
      {
        "code": "inis__vbr2",
        "name": "INIS - VBR2"
      },
      {
        "code": "kifur",
        "name": "KIFÜR"
      },
      {
        "code": "koala",
        "name": "KOALA"
      },
      {
        "code": "leo_rendszer",
        "name": "LEO rendszer"
      },
      {
        "code": "maxszim​",
        "name": "MaxSzim​"
      },
      {
        "code": "mysigno_hitelesito",
        "name": "MySigno hitelesítő"
      },
      {
        "code": "meresi_kozpont_es_portal",
        "name": "Mérési központ és Portál"
      },
      {
        "code": "nexon",
        "name": "NEXON"
      },
      {
        "code": "neplan",
        "name": "Neplan"
      },
      {
        "code": "opal_opem_leolvasasi_rendszerek",
        "name": "OPAL/OPEM Leolvasási rendszerek"
      },
      {
        "code": "powerbi_riporting",
        "name": "PowerBI riporting"
      },
      {
        "code": "reginfo",
        "name": "Reginfo"
      },
      {
        "code": "report_manager__inis",
        "name": "Report Manager - INIS"
      },
      {
        "code": "sap_bc__jogosultsagok",
        "name": "SAP BC - jogosultságok"
      },
      {
        "code": "sap_bc_sap_po",
        "name": "SAP BC, SAP PO"
      },
      {
        "code": "sap_co",
        "name": "SAP CO"
      },
      {
        "code": "sap_ecc_rendszer",
        "name": "SAP ECC rendszer"
      },
      {
        "code": "sap_egyedi_es_tomeges_nyomtatas",
        "name": "SAP Egyedi és tömeges nyomtatás"
      },
      {
        "code": "sap_fi_gl_bl_aa_bp_ap_ar",
        "name": "SAP FI (GL, BL, AA, BP, AP, AR)"
      },
      {
        "code": "sap_fi_ca_",
        "name": "SAP FI-CA "
      },
      {
        "code": "sap_im_ps",
        "name": "SAP IM/PS"
      },
      {
        "code": "sap_isu_bi_in_elszamolas_es_szamlazas",
        "name": "SAP ISU-BI/IN Elszámolás és számlázás"
      },
      {
        "code": "sap_isu_crm_",
        "name": "SAP ISU-CRM "
      },
      {
        "code": "sap_isu_dm",
        "name": "SAP ISU-DM"
      },
      {
        "code": "sap_isu_dm_mr",
        "name": "SAP ISU-DM-MR"
      },
      {
        "code": "sap_isu_edm_",
        "name": "SAP ISU-EDM "
      },
      {
        "code": "sap_isu_ide_",
        "name": "SAP ISU-IDE "
      },
      {
        "code": "sap_mm__keszletvezetes_sap_ewm",
        "name": "SAP MM - Készletvezetés, SAP EWM"
      },
      {
        "code": "sap_mm_beszerzes",
        "name": "SAP MM Beszerzés"
      },
      {
        "code": "sap_nav_online",
        "name": "SAP NAV Online"
      },
      {
        "code": "sap_pm_sm",
        "name": "SAP PM/SM"
      },
      {
        "code": "sap_s4hana_rendszer",
        "name": "SAP S4HANA rendszer"
      },
      {
        "code": "sap_sd",
        "name": "SAP SD"
      },
      {
        "code": "saperion_szamlakepnyilvantarto_rendszer",
        "name": "SAPERION számlaképnyilvántartó rendszer"
      },
      {
        "code": "sims_es_sims_web",
        "name": "SIMS és SIMS Web"
      },
      {
        "code": "szereloi_raktar_szr",
        "name": "Szerelői Raktár (SZR)"
      },
      {
        "code": "szallitoi_minosites_ibm_baw_uzleti_automatizacio",
        "name": "Szállítói minősítés (IBM BAW Üzleti automatizáció)"
      },
      {
        "code": "tvrr_vonalkodos_rendszer",
        "name": "TVRR vonalkódos rendszer"
      },
      {
        "code": "ump​",
        "name": "UMP​"
      },
      {
        "code": "vezjog2",
        "name": "VezJog2"
      },
      {
        "code": "wera",
        "name": "WERA"
      },
      {
        "code": "webbeny",
        "name": "WebBeny"
      },
      {
        "code": "evv",
        "name": "ÉVV"
      }
    ]
  },
  {
    "name": "Irodai eszközök szolgáltatás",
    "items": [
      {
        "code": "havonta_atlagosan_nyomtatott_lapok_szama_db",
        "name": "Havonta átlagosan nyomtatott lapok száma (db)"
      },
      {
        "code": "laptopok_szama_db",
        "name": "Laptopok száma (db)"
      },
      {
        "code": "mobil_telefonok_szama_db",
        "name": "Mobil telefonok száma (db)"
      },
      {
        "code": "nyomtatok_szama_db",
        "name": "Nyomtatók száma (db)"
      },
      {
        "code": "pc_k_szama_db",
        "name": "PC-k száma (db)"
      },
      {
        "code": "pda_k_szama_db",
        "name": "PDA-k száma (db)"
      }
    ]
  },
  {
    "name": "Kollaborációs szolgáltatások",
    "items": [
      {
        "code": "azure_eroforras_mutato_db",
        "name": "Azure eroforrás mutató (db)"
      },
      {
        "code": "cimtar_felhasznalok_aktiv_db",
        "name": "Címtár felhasználók (aktív) (db)"
      },
      {
        "code": "cimtar_felhasznalok_letiltott_db",
        "name": "Címtár felhasználók (letiltott) (db)"
      },
      {
        "code": "cimtar_felhasznalok_szama_osszesen_db",
        "name": "Címtár felhasználók száma összesen (db)"
      },
      {
        "code": "cimtar_jogosultsagi_csoportok_szama_db",
        "name": "Címtár jogosultsági csoportok száma (db)"
      },
      {
        "code": "cimtar_objektumok_osszesen_db",
        "name": "Címtár objektumok összesen (db)"
      },
      {
        "code": "hasznos_email_szam_db",
        "name": "Hasznos email szám (db)"
      },
      {
        "code": "levelezesi_objektumok_szama_db",
        "name": "Levelezési objektumok száma (db)"
      },
      {
        "code": "postafiokok_szama_db",
        "name": "Postafiókok száma (db)"
      },
      {
        "code": "spam_email_szama_db",
        "name": "SPAM email száma (db)"
      },
      {
        "code": "sharepoint_online_site_ok_szama_db",
        "name": "SharePoint Online site-ok száma (db)"
      }
    ]
  },
  {
    "name": "Mentés helyreállítási szolgáltatások",
    "items": [
      {
        "code": "mentett_adatbazisok_szama_db",
        "name": "Mentett adatbázisok száma (db)"
      },
      {
        "code": "mentett_adatok_mennyisege_tb",
        "name": "Mentett adatok mennyisége (TB)"
      },
      {
        "code": "mentett_rendszerek_szama_db",
        "name": "Mentett rendszerek száma (db)"
      },
      {
        "code": "mentesi_storage_kapacitas_tb",
        "name": "Mentési Storage kapacitás (TB)"
      },
      {
        "code": "mentesi_szalagos_kapacitas_tb",
        "name": "Mentési Szalagos kapacitás (TB)"
      },
      {
        "code": "mentessel_kapcsolatos_feladatok_szamossaga_db",
        "name": "Mentéssel kapcsolatos feladatok számossága (db)"
      }
    ]
  }
];


module.exports = async function seedServicesAndItems() {
  for (const serviceData of services) {
    const service = await prisma.service.upsert({
      where: { name: serviceData.name },
      update: {},
      create: {
        name: serviceData.name,
      },
    });

    for (const itemData of serviceData.items) {
      await prisma.item.upsert({
        where: { code: itemData.code },
        update: {},
        create: {
          code: itemData.code,
          name: itemData.name,
          serviceId: service.id,
        },
      });
    }
  }

  console.log("✅ Service + Item rekordok kapcsolattal betöltve");
};

if (require.main === module) {
  module.exports()
    .then(() => {
      console.log("✅ Teljes seed lefutott");
    })
    .catch((e: any) => {
      console.error("❌ Hiba a seedben:", e);
      process.exit(1);
    });
}