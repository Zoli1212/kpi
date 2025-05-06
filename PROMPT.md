# 📊 IT-KPI kliens DB v1.0

Ez az adatbázismodell egy IT szolgáltatásmenedzsment rendszer KPI (Key Performance Indicator) adatainak kezelésére szolgál. Tartalmazza a felhasználókat, jogosultságokat, szolgáltatásokat, rendszereket, incidenseket és azok kapcsolódó metaadatait.

---

## 🎯 Központi entitás: `User`

A **User** tábla a rendszer **legkritikusabb entitása**, mivel:
- Minden fontos esemény (KPI rögzítés, incidens létrehozás, módosítás, naplózás) a felhasználókhoz kötődik.
- Szinte minden más entitás valamilyen formában hivatkozik rá.
- A jogosultságkezelés (RBAC) is ezen keresztül történik.
- Minden KPI adat beküldője és jóváhagyója is egy-egy `User`.

---

### 🖥️ `Systems`
A másik **központi entitás** a `Systems`, mivel:
- Ez kapcsolja össze a szolgáltatásokat (`Service`) és a KPI adatokat (`KPI_Data`).
- A legtöbb incidens egy rendszerhez kapcsolódik.
- Szerepeihez (`Analyst`, `Operator`, stb.) különböző felhasználók rendelhetők.
- Egy rendszer egy vállalathoz tartozik, tehát az üzleti szinten is kulcselem.


## 🧩 Kapcsolatok összefoglalója

### Jogosultságkezelés:
- `User` ⇄ `Roles` kapcsoló entitással: `UserRoles`
- `Roles` ⇄ `Rights` kapcsoló entitással: `RolesRights`
- `User` ⇄ `Rights`: `UserRights` egyéni jogosultságokra

### Szolgáltatások és kapcsolataik:
- `Service` → `KPI_Data`: egy szolgáltatáshoz több KPI adat tartozhat
- `Service` ⇄ `Systems`: kapcsolótábla `Relations` (pl. melyik rendszer szolgál ki egy szolgáltatást, és milyen időszakban)

### Rendszerek és kapcsolódásaik:
- `Systems` → `Company`: minden rendszer egy céghez tartozik
- `Systems` → `KPI_Data`: rendszerhez KPI értékek rögzíthetők
- `Systems` → `Incidents`: incidensek kapcsolódhatnak a rendszerhez
- `Systems` → `User`: több szerepkörhöz is tartozhatnak felhasználók (`Analyst`, `Operator`, stb.)

### KPI adatok:
- `KPI_Data` → `Item`: a KPI típusa (mit mérünk)
- `KPI_Data` → `User`: aki rögzítette, illetve aki jóváhagyta
- `KPI_Data` → `Service`, `System`, `Company`: kapcsolódó üzleti elemek

### Incidensek:
- `Incidents` → `Systems`, `Company`: hova tartozik az esemény
- `Incidents` → `User`: ki jelentette, ki hozta létre, ki kezeli
- További jellemzői: időpontok, típus, leírás, ok, megoldás

---

## 🏗️ Entitások részletesen

➡️ *Lásd a korábban listázott szekciókat táblázatokkal és kapcsolatokkal (ld. fent)*

---

## 🔄 Összefoglaló kapcsolatdiagram-szerű logika


## 🧑‍💼 User

### Fields
| Field      | Description          |
|------------|----------------------|
| Id         |                      |
| Login      |                      |
| Name       |                      |
| Description|                      |
| Email      |                      |
| Created    |                      |
| Modified   |                      |
| Expired    |                      |

### Relations
- Many-to-many with **Roles** via `UserRoles`
- Many-to-many with **Rights** via `UserRights`
- One-to-many to **Log** (`UserId`)
- One-to-many to **KPI_Data** (`UserId`, `ApproverId`)
- One-to-many to **Incidents** as `Reporter`, `Creator`, `Handler`
- One-to-many to **Systems** as `Analyst`, `ApplicationOperator`, `PlatformOperator`, `InfrastructureOperator`

---

## 🧩 Roles

### Fields
| Field      | Description          |
|------------|----------------------|
| Id         |                      |
| Name       |                      |
| Description|                      |
| Created    |                      |
| Modified   |                      |
| Expired    |                      |

### Relations
- Many-to-many with **Users** via `UserRoles`
- Many-to-many with **Rights** via `RolesRights`

---

## 🧾 UserRoles

### Fields
| Field   | Description       |
|---------|-------------------|
| Id      |                   |
| UserId  | FK → User         |
| RoleId  | FK → Roles        |
| Created |                   |
| Modified|                   |
| Expired |                   |

---

## 🧾 RolesRights

### Fields
| Field     | Description   |
|-----------|---------------|
| Id        |               |
| RoleId    | FK → Roles    |
| RightId   |               |
| Permission|               |
| Created   |               |
| Modified  |               |
| Expired   |               |

---

## 🧾 UserRights

### Fields
| Field     | Description   |
|-----------|---------------|
| Id        |               |
| UserId    | FK → User     |
| RightId   |               |
| Permission|               |
| Created   |               |
| Modified  |               |
| Expired   |               |

---

## 🪵 Log

### Fields
| Field       | Description   |
|-------------|---------------|
| Id          |               |
| UserId      | FK → User     |
| RelationId  |               |
| ValueFrom   |               |
| ValueTo     |               |
| Created     |               |

---

## 🛎️ Service

### Fields
| Field     | Description |
|-----------|-------------|
| Id        |             |
| Name      |             |
| Description|            |
| Created   |             |
| Modified  |             |
| Expired   |             |

### Relations
- One-to-many to **KPI_Data**
- One-to-many to **Relations**

---

## 📈 KPI_Data

### Fields
| Field        | Description        |
|--------------|--------------------|
| Id           |                    |
| ItemId       | FK → Item          |
| ServiceId    | FK → Service       |
| UserId       | FK → User          |
| CompanyId    | FK → Company       |
| SystemId     | FK → Systems       |
| Date         |                    |
| Value        |                    |
| Approved     |                    |
| ApproverId   | FK → User          |
| ApprovalDate |                    |
| Created      |                    |
| Modified     |                    |
| Expired      |                    |

---

## 🎯 Item

### Fields
| Field      | Description |
|------------|-------------|
| Id         |             |
| Code       |             |
| Name       |             |
| Description|             |
| Created    |             |
| Modified   |             |
| Expired    |             |

---

## 🏢 Company

### Fields
| Field      | Description |
|------------|-------------|
| Id         |             |
| Name       |             |
| Description|             |
| Created    |             |
| Modified   |             |
| Expired    |             |

### Relations
- One-to-many to **KPI_Data**
- One-to-many to **Systems**
- One-to-many to **Incidents**

---

## 🖥️ Systems

### Fields
| Field                  | Description      |
|------------------------|------------------|
| Id                     |                  |
| Name                   |                  |
| Description            |                  |
| Criticality            |                  |
| Availability           |                  |
| Recoverability         |                  |
| Maintainability        |                  |
| Integrity              |                  |
| Confidentiality        |                  |
| Analyst                | FK → User        |
| ApplicationOperator    | FK → User        |
| PlatformOperator       | FK → User        |
| InfrastructureOperator | FK → User        |
| CompanyId              | FK → Company     |
| Created                |                  |
| Modified               |                  |
| Expired                |                  |

### Relations
- One-to-many to **KPI_Data**
- One-to-many to **Incidents**

---

## 🔗 Relations

### Fields
| Field     | Description    |
|-----------|----------------|
| Id        |                |
| ServiceId | FK → Service   |
| SystemId  | FK → Systems   |
| ValidFrom |                |
| ValidTo   |                |
| Created   |                |
| Modified  |                |
| Expired   |                |

---

## ⚠️ Incidents

### Fields
| Field           | Description        |
|-----------------|--------------------|
| Id              |                    |
| Ready           |                    |
| Reporter        | FK → User          |
| DetectionTime   |                    |
| NotificationId  |                    |
| Beginning       |                    |
| End             |                    |
| Type            |                    |
| SystemId        | FK → Systems       |
| CompanyId       | FK → Company       |
| Urgency         |                    |
| Criticality     |                    |
| Description     |                    |
| Creator         | FK → User          |
| Handler         | FK → User          |
| Cause           |                    |
| Measure         |                    |
| Notification    |                    |
| Created         |                    |
| Modified        |                    |
| Expired         |                    |

---

## 📚 Guide

### Fields
| Field      | Description |
|------------|-------------|
| Id         |             |
| Column     |             |
| Description|             |
| Responsible|             |
| Created    |             |
| Modified   |             |
| Expired    |             |



---

## 📌 Megjegyzések

- Minden fő entitás tartalmaz `Created`, `Modified`, `Expired` mezőket – ezek alkalmasak **verziókövetésre** vagy **törlés helyetti archiválásra**.
- A kapcsolatok jól skálázhatók, a rendszer moduláris.
- A rendszer előkészített RBAC (Role-Based Access Control) megvalósítással rendelkezik.
- A `Guide` tábla egyedi, struktúra leírásra vagy dokumentációs célokra használható.