# Incident Tábla Módosítások Összefoglalója

## Dátum: 2025-09-15

### Változtatások áttekintése

Az incident Excel betöltése miatt szükségessé vált az incident tábla szerkezetének módosítása az ORM-ben (Prisma schema). Az alábbi változtatások kerültek implementálásra:

---

## 1. Módosított fájlok

### `c:\Users\mzolt\Desktop\KPI\kpinext\kpinext\prisma\schema.prisma`

#### A. Mező hosszúság módosítások
- **`cause` mező**: `String?` → `String? @db.VarChar(300)`
- **`description` mező**: `String` → `String @db.VarChar(300)`

#### B. NULL értékek engedélyezése
A következő mezőknél engedélyezett lett a NULL érték:
- **`reporterId`**: `Int` → `Int?`
- **`systemId`**: `Int` → `Int?`
- **`companyId`**: `Int` → `Int?`

#### C. Típus módosítások (ID-ról név-re)
- **`creatorId`**: `Int` → `String? @db.VarChar(200)`
- **`handlerId`**: `Int` → `String? @db.VarChar(200)`

#### D. Kapcsolatok (Relations) frissítése
A típus módosítások miatt a következő kapcsolatok kerültek frissítésre:
- **`reporter`**: `User @relation(...)` → `User? @relation(...)`
- **`system`**: `System @relation(...)` → `System? @relation(...)`
- **`company`**: `Company @relation(...)` → `Company? @relation(...)`
- **Eltávolított kapcsolatok**: `creator` és `handler` kapcsolatok eltávolítva, mivel ezek már nem foreign key-k, hanem szöveges mezők

#### E. User model frissítése
A User modellből eltávolított kapcsolatok:
- `createdIncidents` kapcsolat eltávolítva
- `handledIncidents` kapcsolat eltávolítva

---

## 2. Részletes változtatások

### Előtte (eredeti):
```prisma
model Incident {
  // ...
  reporterId      Int
  systemId        Int
  companyId       Int
  description     String
  creatorId       Int
  handlerId       Int
  cause           String?
  // ...
  
  // Relations
  reporter        User      @relation("Incident_Reporter", fields: [reporterId], references: [id])
  system          System    @relation(fields: [systemId], references: [id])
  company         Company   @relation(fields: [companyId], references: [id])
  creator         User      @relation("Incident_Creator", fields: [creatorId], references: [id])
  handler         User      @relation("Incident_Handler", fields: [handlerId], references: [id])
}
```

### Utána (módosított):
```prisma
model Incident {
  // ...
  reporterId      Int?
  systemId        Int?
  companyId       Int?
  description     String    @db.VarChar(300)
  creatorId       String?   @db.VarChar(200)
  handlerId       String?   @db.VarChar(200)
  cause           String?   @db.VarChar(300)
  // ...
  
  // Relations
  reporter        User?     @relation("Incident_Reporter", fields: [reporterId], references: [id])
  system          System?   @relation(fields: [systemId], references: [id])
  company         Company?  @relation(fields: [companyId], references: [id])
}
```

---

## 3. Következő lépések

### Szükséges további műveletek:
1. **Prisma migrálás futtatása**: `npx prisma migrate dev --name incident_schema_update`
2. **TypeScript fájlok frissítése**: Az `src/app/actions/incidents.ts` fájlban a `createIncidentAction` függvény frissítése szükséges
3. **Frontend komponensek ellenőrzése**: Az `IncidentForm.tsx` komponens esetlegesen frissítendő a új mezőtípusokhoz

### Figyelmeztetések:
- A `creatorId` és `handlerId` mezők mostantól szöveges értékeket tárolnak (felhasználó nevek), nem ID-kat
- A NULL értékek engedélyezése miatt a frontend validációk felülvizsgálata javasolt
- Az adatbázis migrálás előtt biztonsági mentés készítése ajánlott

---

## 4. Érintett funkciók

- Incident létrehozás
- Incident szerkesztés  
- Incident megjelenítés
- Excel import funkció
- Reporting és statisztikák

---

*Dokumentum létrehozva: 2025-09-15 14:44*
*Módosította: Cascade AI Assistant*
