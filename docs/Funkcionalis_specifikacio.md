# Funkcionális specifikáció

## 1. A rendszer céljai és nem céljai
A fejlesztés célja egy olyan informatikai rendszer készítése, amely a ClickCoins nevű játék hatékony működését biztosítja. A rendszer segítségével a felhasználók játékbeli eredményei, az általuk választott hátterek, valamint az általuk gyűjtött és felhasznált játékpénzek nyilvántartása valósul meg. A rendszer a játékban gyűjtött adatok feldolgozására és megjelenítésére összpontosít.

A rendszer célja a következő:
- A játék eredményeinek és a felhasználók által választott hátterek nyilvántartása.
- A felhasználók által gyűjtött és felhasznált játékpénzek nyomon követése.
- Felhasználóbarát felület biztosítása a játékosok számára.

Nem cél:
- Vendég felhasználók vagy adminisztrátorok kezelése.
- A rendszer kiterjesztése más játékokra vagy platformokra.
- Többnyelvű támogatás az első verzióban.

## 2. Használati esetek
A rendszer használói:
- Regisztrált játékosok

A rendszer fő funkciói:
- Felhasználók regisztrálása és bejelentkezése.
- Játék indulásakor a játékállapot mentése és betöltése.
- Játékpontok és érmék gyűjtése a játék során.
- Felhasználó által választott háttér szín mentése és visszaállítása.
- Játékpontok, érmék és hátterek kezelése adatbázisban.

Előfeltételek:
- A rendszerhez való hozzáféréshez regisztrált felhasználói fiók és jelszó szükséges.

## 3. Megfeleltetés, hogyan fedik le a használati esetek a követelményeket
| ID  | Verzió | Követelmény | Funkció |
|-----|--------|-------------|---------|
| K1  | V1.0    | Bejelentkezési felület | Az alkalmazás biztosítja a felhasználók bejelentkezési lehetőségét, ahol a felhasználók email címük vagy felhasználónevük és jelszavuk megadásával léphetnek be. Hibás adatok esetén hibaüzenetet kapnak. |
| K2  | V1.0    | Regisztráció        | A felhasználók regisztrálhatják magukat felhasználónév, email cím és jelszó megadásával. A jelszavak titkosítva tárolódnak az adatbázisban, és a hiányzó vagy hibás adatok esetén a rendszer értesíti a felhasználót. |
| K3  | V1.0    | Jogosultsági szint  | A rendszer biztosítja a felhasználók számára a játék indítását és a store felület használatát. |
| K4  | V1.0    | Felhasználó módosítása | A felhasználók módosíthatják felhasználónevüket, új név megadásával. |
| K5  | V1.0    | Jelszó módosítása   | A felhasználók módosíthatják jelszavukat, amelyhez meg kell adniuk régi és új jelszavukat, valamint az új jelszó megerősítését. A változtatás után a rendszer minden eszközről kilépteti őket. |
| K6  | V1.0    | Játék               | A játék során a felhasználók érméket gyűjtenek 30 másodpercig tartó kattintással. |
| K7  | V1.0    | Ranglista           | A rendszer ranglistát készít a játékosok pontszámairól, ahol a legtöbb pontot elért felhasználók kerülnek az élre. |
| K8  | V1.0    | Vásárlás            | A felhasználók játékon belüli valutával vásárolhatnak háttérszíneket a játékfelülethez. |

## 4. Képernyőtervek
A képernyőtervek bemutatják a játék különböző felhasználói felületeit. A tervek tartalmazzák a főbb funkciók, mint a játékkezdés, pontok megjelenítése és a háttér váltás folyamatának lépéseit.

Főbb oldalak:
- **Kezdőlap**: A játék főoldala, ahol a játékosok bejelentkezhetnek vagy elkezdhetik a játékot.
- **Játékfelület**: Az érmegyűjtő játékfelület, ahol a játékosok pontokat szerezhetnek.
- **Felhasználói profil**: A játékosok személyes adatai és pontszámai itt tekinthetők meg.
- **Vásárlási felület**: A játékosok itt vásárolhatnak és testreszabhatják a játékelemeket.
- **Ranglista**: A felhasználók megtekinthetik a játékosok ranglistáját, amely a legmagasabb pontszámokat elért felhasználókat jeleníti meg.

## 5. Forgatókönyvek
- **Játék indítása**: A játékos a kezdőlapon indítja el a játékot, majd az érmegyűjtő felület jelenik meg, ahol egy időkorlát alatt gyűjthet pontokat.
- **Fiók létrehozása**: Az új játékos a regisztrációs oldalon megadja adatait, és létrehozza a fiókját.
- **Bejelentkezés**: A játékos a bejelentkezési oldalon megadja adatait, és belép a rendszerbe, ahol megtekintheti korábbi eredményeit és vásárlásait.
- **Pontszám mentése**: A játék végeztével a rendszer automatikusan elmenti a játékos pontszámát, amely a profiloldalon megtekinthető.