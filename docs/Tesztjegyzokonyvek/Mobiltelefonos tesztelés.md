# Teszt jegyzőkönyv - Mobiltelefonos tesztelés

##### Tesztelést végezte: Novák Máté
##### Dátum: 2025. 01. 12.
##### Tesztkörnyezet: iPhone 13, Safari
##### Tesztelt funkció: ClickCoins webalkalmazás mobiltelefonos használhatósága

## Tesztek:

### 1. **Bejelentkezési felületek tesztelése**
- **Cél**: Ellenőrizni, hogy az alkalmazás bejelentkezési lehetőségei helyesen működnek mobiltelefonon.
- **Teszt eljárás**:
  - Nyisd meg a bejelentkezési felületet.
  - Próbáld ki a különböző bejelentkezési opciókat (GitHub, Gmail, és manuális regisztrációval).
- **Elvárt viselkedés**: Minden bejelentkezési opció hibamentesen működik, és a felhasználó belép az alkalmazásba.
- **Teszt eredmény**: A bejelentkezés sikeres volt mind GitHubbal, mind Gmaillel, valamint manuális regisztrációval.

---

### 2. **Főoldal működése és igazítottsága**
- **Cél**: Ellenőrizni, hogy az alkalmazás főoldala megfelelően működik és dinamikusan alkalmazkodik a képernyőméretekhez.
- **Teszt eljárás**:
  - Nyisd meg a főoldalt.
  - Ellenőrizd a tartalom igazítását és a dinamikus méretváltozásokat.
  - Teszteld a "Játék" gombot, valamint a menü elérhetőségét és működését.
  - Nyisd meg a menüből a "Game", "Leaderboard", és "Store" oldalakat.
- **Elvárt viselkedés**: Az oldal dinamikusan igazodik a különböző képernyőméretekhez, minden navigációs funkció működik.
- **Teszt eredmény**: A főoldal hibamentesen alkalmazkodott a képernyőméretekhez, a menüből navigálható opciók működőképesek voltak.

---

### 3. **Játék funkció tesztelése**
- **Cél**: Ellenőrizni, hogy a játék mechanikái hibamentesen működnek mobiltelefonon.
- **Teszt eljárás**:
  - Indítsd el a játékot.
  - Ellenőrizd a pontgyűjtést, valamint a játék mechanikáit.
  - Próbáld ki a dupla kattintást és a gyorsítást.
  - Figyeld meg a "Game Over" felugró ablak megjelenését.
- **Elvárt viselkedés**: A játék akadásmentesen működik, a "Game Over" felugró ablak olvasható és esztétikusan elrendezett.
- **Teszt eredmény**:
  - A játékmenet alapvetően zökkenőmentes volt.
  - Dupla kattintásnál beleközelítési hiba tapasztalható, amely nem befolyásolta a játékélményt.
  - A gyorsítás hirtelen történik, ami a játék későbbi szakaszában megnehezíti a coinok gyűjtését.
  - A "Game Over" felugró ablak kissé összehúzott, a "Try Again" gomb pedig túl kicsi, de funkcionálisan működik.

---

### 4. **Pontszámok kezelése és megjelenítése**
- **Cél**: Ellenőrizni, hogy a megszerzett coinok megfelelően eltárolódnak és felhasználhatók.
- **Teszt eljárás**:
  - Játék végén ellenőrizd, hogy a coinok helyesen rögzültek-e.
  - Nyisd meg a "Leaderboard" és "Store" oldalakat.
  - Ellenőrizd, hogy a coinok megjelennek-e a leaderboardon, és el tudod-e költeni azokat a store-ban.
- **Elvárt viselkedés**: A coinok pontosan eltárolódnak, megjelennek a leaderboardon és felhasználhatók a store-ban.
- **Teszt eredmény**: A coinok rendeltetésszerűen eltárolódtak, megjelentek a leaderboardon, és megfelelően felhasználhatók voltak a store-ban.

---

## Megállapítások:

**Pozitív:** 
- Az alkalmazás minden alapvető funkciója hibamentesen működött mobiltelefonról.
- A felhasználói felületek reszponzívak és jól kezelhetőek.
- A pontszámok megfelelően kezelhetők és nyomon követhetők.

**Negatív:**
- A "Game Over" felugró ablak formázása nem optimális.
- A gyorsítás működése a játékmenet későbbi szakaszaiban nehézségeket okozhat.
- Dupla kattintásnál előfordulhat beleközelítési hiba.

**Javaslatok:**
- Javítsd a "Game Over" ablak formázását és a "Try Again" gomb méretét.
- Finomhangold a gyorsítás mechanikáját a játék kiegyensúlyozottabb működése érdekében.
- Vizsgáld meg a dupla kattintásnál jelentkező beleközelítési hibát.
