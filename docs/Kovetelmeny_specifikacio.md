# Követelmény specifikáció
## 1. Áttekintés
A **ClickCoins** egy interaktív, webalapú játék, amelynek célja a játékosok szórakoztatása miközben különféle kézségeket fejlesztenek. A projekt a következő technológiákat alkalmazza:
- **Frontend**: HTML, CSS, JavaScript(Vite használatával)
- **Backend**: Node.js (Express), MongoDB adatbázis
- **Autentikáció**: Clerk.js
- **Deployment**: Render
- **Fő funkciók**:
    - Érmék gyűjtése és a játékbeli valuta menedzselése
    - Egyedi háttérszínek választása, mentése és alkalmazása
    - Pontszámok tárolása és megjelenítése
## 2. Jelenlegi helyzet
A modern webes játékok között kezés olyan található, amely egyszerű technológiákra épül, miközben játékos élményt kínál. A **ClickCoins* ezen hiányosságot hivatott orvosolni:
- **Egyszerű fejlesztési modell**: JavaScript és MongoDB integrációjával gyorsan fejleszthető és bővíthető rendszer.
- **Játékosok igényei**: Testreszabható vizuális élmény és pontszámok nyilvántartása, amely fokozza az interakciót és motivációt.
- **Hiányosságok**: Jelenleg nincs hasonló, könnyen bővíthető játékos platform.
## 3. Vágyalom rendszer
Az ideális **ClickCoins* rendszer:
- **Interaktív játékmechanikát** kínál, ahol a játékosok valós időben gyűjthetnek érméket.
- **Személyre szabható felület**: a felhasználók különboző háttérszíneket választhatnak.
- **Pontszámkezelés**: Az összesített eredmények megosztása a TOP 10-es ranglistán.
- **Felhasználói profilok**: Egyéni bejelentkezési lehetőség Clerk.js segítségével.
- **Biztonságos adattárolás**: MongoDB és Mongoose technológiával.
- **Skálázhatóság**: Több ezer felhasználó kezelésére alkalmas rendszer, Renderen keresztül történő deploymenttel.
## 4. Funkcionális követelmények
#### Felhasználói funkciók:
- ##### Bejelentkezés/Regisztráció:
    - Felhasználók Clerk.js-en keresztül regisztrálhatnak és jelentkezhetnek be.
    - Az adatok (pl. jelszó) titkosítás.
- ##### Játékkezelés:
    - Érmék kattintással történő gyűjtése.
    - A háttérszín testreszabása.
    - Pontszámok valós idejű frissítése.
- ##### Eredmények tárolása:
    - Minden játék végén a pontszám az adatbázisba kerül tárolása.
    - Ranglista generálása a 10 legjobb eredmény alapján.
#### Egyéb funkciók:
- Reszponzív design különböző eszközökre való optimalizálás érdekében.
## 5. Rendszerre vonatkozó törvények, szabványok, ajánlások
- GDPR megfelelőség biztosítása a felhasználói adatok kezelésénél.
- OWASP irányelvek betartása a biztonság érdekében.
## 6. Jelenlegi üzleti folyamatok modellje
Jelenleg nincs olyan platform, amely interaktív módon kombinálná a következő funkciókat:

- Pontszámok nyilvántartása.
- Egyéni bejelentkezési lehetőség.
- Adatok biztonságos tárolása és felhasználói testreszabás egyszerű kezelése.

A meglévő rendszerek bonyolultabb technológiákon alapulnak, amelyek a kisebb fejlesztőcsapatok számára elérhetetlenek.
## 7. Igényelt üzleti folyamatok
Az új rendszer:
1. **Felhasználóbarát UI**: Egyszerű és intuitív felület a bejelentkezéshez, játékmenethez és testreszabáshoz.
2. **Pontszámok és testreszabás tárolása**: A MongoDB biztosítja a biztonságos adattárolást és gyors adatlekérést.
3. **Skálázhatóság**: A rendszer több száz egyidejű felhasználót is képes kiszolgálni Render segítségével.
## 8. Követelménylista
| Modul | ID | Név | v. | Kifejtés |
|-------|----|-----|----|----------|
| Jogosultság | K1 | Bejelentkezési felület | 1.0 | A felhasználó az email címe vagy felhasználóneve és a jelszava segítségével bejelentkezhet. Ha a megadott email cím vagy felhasználónév vagy jelszó nem megfelelő, akkor a felhasználó hibaüzenetet kap. |
| Jogosultság | K2 | Regisztráció | 1.0 | A felhasználó a felhasználói nevének, email címének és jelszavának megadásával regisztrálja magát. A jelszó tárolása kódolva történik az adatbázisban. Ha valamelyik adat ezek közül hiányzik vagy nem felel meg a követelményeknek,akkor a rendszer értesíti erről a felhasználót. |
| Jogosultság | K3 | Jogosultsági szint | 1.0 | Felhasználó: Játék indítása, store felület használata. |
| Modifikáció | K4 | Felhasználó módosítása | 1.0 | A felhasználó módosítani tudja saját Felhasználónevét. Ehhez szükséges az új felhasználók megadása. |
| Modifikáció | K5 | Jelszó módosítása | 1.0 | A felhasználó módosítani tudja saját jelszavát.Ehhez szükséges a régi és az új jelszavának megadása, valamint az új megerősítése. Biztonság miatt kilépteti minden eszközről. |
| Feladattípus | K6 | Játék | 1.0 | A játék felületen kattintással érmék gyűjtése 30 másodpercen keresztül. |
| Statisztika | K7 | Ranglista | 1.0 | Egy lista a játékosok pontszámairól, a lista elején a legtöbb pontot elért felhasználó található. |
| Felület | K8 | Vásárlás | 1.0 | Játékon belüli valuta használata a játék felületének háttérszínét megváltoztató színek vásárlására. |
## 9. Fogalomtár
- **Reszponvíz design**: Képernyő mérettől függően igazotik a felület mérete, azaz több eszközök is probléma nélkül üzemelhet.
- **GDPR**: Az Európai Unió általános adatvédelmi rendelete.
- **OWASP**: Az OWASP (Open Web Application Security Project) egy nyílt forráskódú közösségi projekt, amely a webalkalmazások biztonságának javítását célozza.
- **Coin**: A játékban gyűjthető virtuális valuta.