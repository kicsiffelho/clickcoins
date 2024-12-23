# Rendszerterv - ClickCoins Projekt

## 1. A rendszer célja

A ClickCoins projekt célja, hogy interaktív platformot biztosítson a felhasználók számára, amely lehetővé teszi virtuális érmék gyűjtését, kezelését és ezekkel való interakciókat. A rendszer játékos környezetben nyújt szórakozást, miközben modern technológiák alkalmazásával garantálja a biztonságot és a skálázhatóságot.

---

## 2. Projektterv

### 2.1 Szerepkörök és Felelősségek

- **Projektvezető**: Felelős a projekt ütemezéséért, a csapat koordinálásáért és a főbb döntések meghozataláért.
- **Fejlesztők**:
  - Frontend csapat: Felületfejlesztés HTML, CSS, JavaScript segítségével.
  - Backend csapat: API fejlesztés és adatbáziskezelés Node.js és MongoDB használatával.
- **Tesztelők**: Felelősek az alkalmazás hibáinak feltárásáért és az egyes funkciók teszteléséért.
- **Adminisztrátorok**: A rendszer üzemeltetéséért és karbantartásáért felelős személyek.

### 2.2 Ütemterv és Mérföldkövek

| Mérföldkő             | Feladat                       | Határidő       |
|-----------------------|-------------------------------|----------------|
| Követelmény-specifikáció elkészítése | Dokumentum elkészítése            | 1. hét         |
| Alaprendszer fejlesztése           | Frontend és Backend alapok létrehozása | 3. hét         |
| Funkcionális modulok implementálása | API és érmék kezelése             | 5. hét         |
| Tesztelés és hibajavítás           | Alfa- és bétatesztek              | 7. hét         |
| Véglegesítés és telepítés          | Éles rendszer indítása            | 8. hét         |

---

## 3. Üzleti folyamatok modellje

### Jelenlegi helyzet
A felhasználók nem rendelkeznek egységes platformmal az érmék gyűjtésére és kezelésére. A folyamatok manuálisak vagy különböző, nem integrált megoldásokkal történnek.

### Igényelt folyamatok
Az új rendszer:
- Lehetővé teszi a felhasználók számára, hogy regisztráljanak és bejelentkezzenek.
- Az érméket valós időben követhetően kezelje.
- Adminisztrációs funkciókat nyújtson a hibajavítások kezelésére.

---

## 4. Fizikai környezet

### Fejlesztési eszközök
- **Frontend**: HTML, CSS, BootStrap, JavaScript, Vite
- **Backend**: Node.js, Express.js
- **Adatbázis**: MongoDB Mongoose
- **Verziókövetés**: Git, GitHub
- **Tesztelés**: Manuális

### Rendszerkörnyezet
- Szerver: Szerver hostolása Renderen
- Böngészők: Google Chrome, Mozilla Firefox, Microsoft Edge
- Támogatott eszközök: Asztali gép, tablet, okostelefon

---

## 5. Logikai rendszerterv

### 5.1 Felhasználói szerepkörök
- **Regisztrált Felhasználó**:
  - Érmék gyűjtése
  - Saját profil módosítása
- **Adminisztrátor**:
  - Hibák és bugok kezelése

### 5.2 Fő funkciók
- **Regisztráció és Bejelentkezés**
  - Felhasználók e-mail címmel és jelszóval történő regisztrációja.
  - Felhasználók e-mail címmel vagy felhasználónévvel és jelszóval történő bejelentkezése.
- **Érmék kezelése**
  - Valós idejű frissítések az érmék állapotáról.
  - Adatbázis alapú tárolás.
- **Adminisztráció**
  - Hozzáférés a rendszer teljesítménymutatóihoz.

---

## 6. Adatbázis terv

| Tábla neve | Mezők                    | Leírás                        |
|------------|--------------------------|-------------------------------|
| users | id, email, password, username | Felhasználók alapadatai |
| backgrouncolors | id, userId, color, owned, timestamp | Háttérszínek tárolása |
| currencies | id, userId, amount | Felhasználó egyenlege |
| currencytransactions | id, userId, amount, type, timestamp | Valuta tranzakciók |
| scores | id, userId, score, username | Felhasználók pontszáma |

### 6.1 Users tábla
| Mező neve | Típus | Leírás |
|-----------|-------|--------|
| id | String | Clerk által generált felhasználó egyedi azonosítója |
| emailAddresses | Array | A felhasználóhoz társított e-mail címek listája |
| username | String | Felhasználó felhasználóneve |
| password | String | Felhasználó jelszava |
| createdAt | Date | Felhasználó regisztrációjának a dátuma |

### 6.2 Háttérszín kezelő tábla - backgroundcolors
| Mező neve | Típus | Kötelező | Alapérték | Leírás |
|-----------|-------|----------|-----------|--------|
| id | String | x | - | MongoDB által generált ObjectId |
| userId | String | x | - | Clerk által generált felhasználó egyedi azonosítója |
| color | String | x | - | Háttérszín hex értéke |
| owned | Boolean | - | false | Felhasználó már megvette-e a háttérszínt |
| timestamp | Date | - | Date.now | Bejegyzés dátuma és ideje |

### 6.3 Felhasználó egyenlegét kezelő tábla - currency
| Mező neve | Típus | Kötelező | Alapérték | Leírás |
|-----------|-------|----------|-----------|--------|
| id | String | x | - | MongoDB által generált ObjectId |
| userId | String | x | - | Clerk által generált felhasználó egyedi azonosítója |
| amount | Number | x | - | A felhasználó egyenlege |

### 6.4 Felhasználó tranzakcióit kezelő tábla - currencytransactions
| Mező neve | Típus | Kötelező | Alapérték | Leírás |
|-----------|-------|----------|-----------|--------|
| id | String | x | - | MongoDB által generált ObjectId |
| userId | String | x | - | Clerk által generált felhasználó egyedi azonosítója |
| amount | Number | x | - | A felhasználó által kapott vagy költött érték |
| type | Strig | x | - | Tranzakció típusa: earn, spend |
| timestamp | Date | - | Date.now | Bejegyzés dátuma és ideje |

### 6.5 Felhasználó pontszámát kezelő tábla - scores
| Mező neve | Típus | Kötelező | Alapérték | Leírás |
|-----------|-------|----------|-----------|--------|
| id | String | x | - | MongoDB által generált ObjectId |
| userId | String | x | - | Clerk által generált felhasználó egyedi azonosítója |
| score | Number | x | - | A felhasználó pontszáma |
| username | String | x | - | Clerkből lekérdezett érték |

### Adatbázis Lekérdezések
- **Utolsó felhasznált háttérszín**:
  ```
  BackgroundColor.findOne({userId: userId}).sort({timestamp: -1});
  ```
- **Felhasználó által vásárolt összes háttérszín**:
  ```
  BackgroundColor.find({ userId });
  ```
- **Felhasználó egyenlege**:
  ```
  Currency.findOne({ userId });
  ```
- **TOP 10 pontszámok a ranglistához**:
  ```
  Score.find().sort({ score: -1 }).limit(10);
  ```
- **Felhasználó legnagyobb pontszáma**:
  ```
  Score.find().sort({ score: -1 }).limit(10);
  ```

---

## 7. Architekturális terv

### 7.1 Backend architektúra
- **Node.js**: API végpontok kiszolgálása.
- **Express.js**: RESTful szolgáltatások implementálása.
- **MongoDB**: Adatbázis-kezelés.

### 7.2 Frontend architektúra
- **HTML**: Statikus weboldal.
- **CSS**: Egyedi és reszponzív design.
- **BootStrap**: Komponensek, grid rendszer.
- **JavaScript**: Játék mechanika.
- **Vite**: Gyors fejlesztői környezet.

### 7.3 Rendszerkapcsolatok
- Felhasználó -> Böngésző -> Frontend -> Backend -> Adatbázis

---

## 8. Tesztterv

### Tesztelési eljárások
- **Unit tesztelés**: Backend funkciók különálló tesztelése (pl. API endpointok).
- **Integrációs tesztelés**: Frontend és backend közötti kommunikáció tesztelése.
- **Béta tesztelés**: Valós felhasználókkal végzett tesztek.

### Tesztelendő funkciók
- Regisztráció és bejelentkezés
- Érmék gyűjtése
- Valuta tranzakciók
- API endpointok

---

## 9. Telepítési terv

### Telepítés lépései
1. **Kódbázis klónozása**:
   ```bash
   git clone https://github.com/kicsiffelho/clickcoins
   ```
2. **Backend és frontend függőségek telepítése**:
   ```bash
   npm install && npm run build
   ```
3. **Alkalmazás build-elése**:
   ```bash
   npm run build
   ```
4. **Adatbázis konfiguráció**:
   - MongoDB URI hozzáadása a Render titkos fáljaihoz (.env).
5. **Clerk konfiguráció**:
   - Clerk key hozzáadása a Render környezeti változókhoz.
5. **Alkalmazás indítása**:
   - Backend:
     ```bash
     node backend/server.js
     ```
   - Frontend:
     ```bash
     cd frontend && npm run dev
     ```

---

## 10. Karbantartási terv

### Karbantartási eljárások
- **Preventív karbantartás**: Rendszeres biztonsági mentések és szoftverfrissítések.
- **Hibajavítás**: Bejelentett hibák gyors elhárítása.
- **Funkcióbővítés**: Új igények alapján modulok hozzáadása.

