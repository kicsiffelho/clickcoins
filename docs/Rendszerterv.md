# Rendszerterv - ClickCoins Projekt

## 1. A rendszer célja

A ClickCoins projekt célja, hogy interaktív platformot biztosítson a felhasználók számára, amely lehetővé teszi virtuális érmék gyűjtését, kezelését és ezekkel való interakciókat. A rendszer játékos környezetben nyújt szórakozást, miközben modern technológiák alkalmazásával garantálja a biztonságot és a skálázhatóságot.

---

## 2. Projektterv

### 2.1 Szerepkörök és Felelősségek

- **Projektvezető**: Felelős a projekt ütemezéséért, a csapat koordinálásáért és a főbb döntések meghozataláért.
- **Fejlesztők**:
  - Frontend csapat: Felületfejlesztés React.js segítségével.
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
- Adminisztrációs funkciókat nyújtson a statisztikák és hibajavítások kezelésére.

---

## 4. Fizikai környezet

### Fejlesztési eszközök
- **Frontend**: Visual Studio Code, React.js, Vite
- **Backend**: Node.js, Express.js
- **Adatbázis**: MongoDB Atlas
- **Verziókövetés**: Git, GitHub
- **Tesztelés**: Postman, Jest

### Rendszerkörnyezet
- Szerver: Linux alapú hosztolás (Ubuntu Server 20.04)
- Böngészők: Google Chrome, Mozilla Firefox, Microsoft Edge
- Támogatott eszközök: Asztali gép, tablet, okostelefon

---

## 5. Logikai rendszerterv

### 5.1 Felhasználói szerepkörök
- **Regisztrált Felhasználó**:
  - Érmék gyűjtése
  - Saját profil módosítása
- **Adminisztrátor**:
  - Felhasználói statisztikák megtekintése
  - Hibák és bugok kezelése

### 5.2 Fő funkciók
- **Regisztráció és Bejelentkezés**
  - Felhasználók e-mail címmel és jelszóval történő regisztrációja.
  - Jelszó-visszaállítási lehetőség.
- **Érmék kezelése**
  - Valós idejű frissítések az érmék állapotáról.
  - Adatbázis alapú tárolás.
- **Adminisztráció**
  - Hozzáférés a rendszer teljesítménymutatóihoz.

---

## 6. Adatbázis terv

| Tábla neve | Mezők                    | Leírás                        |
|------------|--------------------------|-------------------------------|
| users      | id, email, password      | Felhasználók alapadatai       |
| coins      | id, user_id, amount      | Érmék felhasználónként        |
| logs       | id, user_id, action, timestamp | Felhasználói aktivitások naplózása |

### Példa Adatbázis Lekérdezések
- **Felhasználók listázása**:
  ```sql
  SELECT * FROM users;
  ```
- **Felhasználó érméinek lekérése**:
  ```sql
  SELECT amount FROM coins WHERE user_id = ?;
  ```

---

## 7. Architekturális terv

### 7.1 Backend architektúra
- **Node.js**: API végpontok kiszolgálása.
- **Express.js**: RESTful szolgáltatások implementálása.
- **MongoDB**: Adatbázis-kezelés.

### 7.2 Frontend architektúra
- **React.js**: Komponens alapú felépítés.
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
- Adminisztrációs felület

---

## 9. Telepítési terv

### Telepítés lépései
1. **Kódbázis klónozása**:
   ```bash
   git clone [repository-url]
   ```
2. **Backend függőségek telepítése**:
   ```bash
   cd backend && npm install
   ```
3. **Frontend függőségek telepítése**:
   ```bash
   cd frontend && npm install
   ```
4. **Adatbázis konfiguráció**:
   - MongoDB URI hozzáadása a `.env` fájlhoz.
5. **Alkalmazás indítása**:
   - Backend:
     ```bash
     cd backend && npm run dev
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

