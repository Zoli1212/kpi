# IT KPI Rendszer Dokumentáció

## 📋 Tartalomjegyzék
1. [Bevezetés](#bevezetés)
2. [Rendszer Áttekintés](#rendszer-áttekintés)
3. [Adatbázis Modell](#adatbázis-modell)
   - [Felhasználói Kezelés](#felhasználói-kezelés)
   - [Jogosultságkezelés](#jogosultságkezelés)
   - [Szolgáltatások és Rendszerek](#szolgáltatások-és-rendszerek)
   - [KPI Adatkezelés](#kpi-adatkezelés)
   - [Incidens Kezelés](#incidens-kezelés)
4. [Kapcsolatok és Függőségek](#kapcsolatok-és-függőségek)
5. [Technikai Specifikációk](#technikai-specifikációk)

## Bevezetés

Ez az IT KPI (Kulcsteljesítmény-mutató) rendszer egy átfogó megoldás a vállalati informatikai szolgáltatások teljesítményének nyomon követésére, elemzésére és jelentéskészítésére. A rendszer segítségével nyomon követhetők a szolgáltatások rendelkezésre állása, teljesítménye és minősége, valamint kezelhetők az azokkal kapcsolatos incidensek.

## Rendszer Áttekintés

A rendszer főbb jellemzői:
- Felhasználó- és jogosultságkezelés (RBAC)
- Szolgáltatás- és rendszerkatalógus
- KPI adatok rögzítése és nyomon követése
- Incidenskezelés és -nyomonkövetés
- Részletes naplózás és audit
- Vállalati szintű jelentéskészítés

## Adatbázis Modell

### Felhasználói Kezelés

#### User Modell
A rendszer központi eleme a felhasználói modell, amely a következőket tartalmazza:
- Alapvető adatok (név, email, bejelentkezési adatok)
- Szerepkörök és jogosultságok
- Kapcsolódó entitások (rendszerek, KPI-k, incidensek)
- Létrehozási és módosítási információk

### Jogosultságkezelés

#### Role és Right modellek
- **Role**: Felhasználói szerepkörök meghatározása (pl. admin, operátor, elemző)
- **Right**: Egyedi jogosultságok kezelése
- **UserRole**: Felhasználók és szerepkörök közötti kapcsolat
- **RoleRight**: Szerepkörök és jogosultságok közötti kapcsolat
- **UserRight**: Felhasználói szintű egyéni jogosultságok

### Szolgáltatások és Rendszerek

#### Service Modell
- Szolgáltatások nyilvántartása
- Kapcsolódó KPI adatok
- Rendszerkapcsolatok

#### System Modell
- Rendszerek nyilvántartása
- Kritikussági szintek
- Felelősök meghatározása (elemző, operátorok)
- Kapcsolódó szolgáltatások

#### Company Modell
- Vállalati egységek kezelése
- Kapcsolódó rendszerek és incidensek

### KPI Adatkezelés

#### KPI_Data Modell
- KPI mérések tárolása
- Jóváhagyási folyamat
- Kapcsolódó entitások (szolgáltatás, rendszer, cég)
- Történeti adatok nyomon követése

#### Item Modell
- KPI típusok és kategóriák
- Kódolt azonosítók a jelentéskészítéshez

### Incidens Kezelés

#### Incident Modell
- Incidens nyilvántartás
- Életciklus kezelés (észlelés, kezelés, lezárás)
- Kapcsolódó rendszerek és felelősök
- Kivizsgálási információk

## Kapcsolatok és Függőségek

### Felhasználói Kapcsolatok
- Felhasználókhoz rendszerek rendelhetők különböző szerepkörökben
- Minden KPI adat és incidens egyértelműen hozzárendelhető egy felhasználóhoz

### Szolgáltatási Kapcsolatok
- Szolgáltatások kapcsolódhatnak több rendszerhez
- Rendszerek több szolgáltatást is támogathatnak

### Vállalati Hierarchia
- Cégek alá rendszerek tartozhatnak
- KPI-k és incidensek vállalati szinten is követhetők

## Technikai Specifikációk

### Adatbázis
- MySQL adatbázis
- Prisma ORM használata
- Migrációs rendszer a sémaverziózáshoz

### Biztonság
- Jelszó titkosítás
- Jogosultságkezelés
- Részletes naplózás

### Skálázhatóság
- Moduláris tervezés
- Hatékony indexelés
- Többnyelvű támogatás

Ez a dokumentáció folyamatosan bővül és frissül a rendszer fejlődésével párhuzamosan. További kérdések vagy pontosítások esetén kérjük, fordulj a rendszer adminisztrátorához.