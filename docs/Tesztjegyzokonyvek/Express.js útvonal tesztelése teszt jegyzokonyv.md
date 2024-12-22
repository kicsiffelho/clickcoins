# Teszt jegyzőkönyv - Express.js útvonal tesztelése
---
##### Tesztelést végezte: Kiss Virág
##### Dátum: 2024. 09. 29.
##### Tesztkörnyezet: Windows 10, Brave
##### Tesztelt funkció: Express.js útvonalak elérése
---
## Tesztek:
- **Cél**:  Ellenőrizni, hogy az Express.js alkalmazás útvonalai megfelelően kezeljék a kéréseket és válaszoljanak a várt módon.
- **Teszt esetek**: 
    1. **GET /store-score**:
        - Leírás: Ellenőrizni, hogy a /store-score útvonal helyesen fogadja-e a POST kérést, eltárolja-e az eredményt az adatbázisban és sikeres választ ad-e vissza.
        - Elvárt viselkedés:
            - A válasz JSON formátumban tartalmazza az üzenetet: "Score added successfully".
            - Az eredmény sikeresen el lesz tárolva az adatbázisban.
        - Teszt eljárás:
            - Küldj egy POST kérést a /store-score útvonalra érvényes adatokkal (userId, score, username).
            - Ellenőrizd a válasz státuszkódot és a válasz üzenetét.
            - Ellenőrizd az adatbázisban, hogy az eredmény megfelelően el lett-e tárolva.
        - Teszt eredmény:
            - A válasz JSON formátumban tartalmazta az üzenetet: "Score added successfully".
            - Az eredmény sikeresen el lett tárolva az adatbázisban.
    2. **GET /scores**:
        - Leírás: Ellenőrizni, hogy a /scores útvonal helyesen adja-e vissza a legjobb 10 pontszámot.
        - Elvárt viselkedés:
            - A válasz JSON formátumban tartalmazza a legjobb 10 pontszámot csökkenő sorrendben.
        - Teszt eljárás:
            - Küldj egy GET kérést a /scores útvonalra.
            - Ellenőrizd a válasz státuszkódot és a válaszban szereplő eredményeket.
        - Teszt eredmény:
            - A válasz JSON formátumban tartalmazta a legjobb 10 pontszámot csökkenő sorrendben.
    3. **GET /highscore/:userId**:
        - Leírás: Ellenőrizni, hogy a /highscore/:userId útvonal helyesen adja-e vissza a megadott felhasználó legmagasabb pontszámát.
        - Elvárt viselkedés:
            - Ha a felhasználónak van rögzített pontszáma a válasz JSON formátumban tartalmazza a felhasználó legmagasabb pontszámát.
            - Ha a felhasználónak nincs rögzített pontszáma a válasz JSON formátumban tartalmazza a {score: 0} értéket.
        - Teszt eljárás:
            - Küldj egy GET kérést a /highscore/:userId útvonalra user_2pqtJ4sNvbV3K0nbjzFXGcFFSvm userId-val.
            - Ellenőrizd a válasz státuszkódot és a válaszban szereplő pontszámot.
        - Teszt eredmény:
            - {"_id":"67676842a8327f45dc7cea16","userId":"user_2pqtJ4sNvbV3K0nbjzFXGcFFSvm","score":36,"username":"kicsiffelho","__v":0}
    4. **Statikus fájlok kiszolgálása**:
        - Leírás: Ellenőrizni, hogy az alkalmazás helyesen szolgálja-e ki a statikus fájlokat (index.html, reg.html, stb.).
        - Elvárt viselkedés:
            - A megfelelő HTML fájl sikeresen betöltődik a böngészőben.
        - Teszt eljárás:
            - Küldj GET kéréseket a /register, /game, /score és /store útvonalakra.
            - Ellenőrizd, hogy a megfelelő HTML fájlok betöltődnek-e a böngészőben.
        - Teszt eredmény:
            - A megfelelő oldalak töltődtek be.
    5. **Statikus fájlok kiszolgálása - Nem létező útvonalra**:
        - Leírás: Ellenőrizni, hogy az alkalmazás megfelelően kezeli a nem létező útvonalakhoz tartozó kéréseket.
        - Elvárt viselkedés:
            - A válasz tartalmazza az index.html fájlt.
        - Teszt eljárás:
            - Küldj egy GET kérést egy olyan útvonalra, amely nem szerepel a definiált útvonalak között (pl. /nonexistent)
        - Teszt eredmény:
            - A válasz tartalmazza az index.html fájl tartalmát.
---
## Megállapítások:
**Pozitív:** Minden teszt sikeres volt.
**Negatív:** A kérések nem térnek vissza státuszkódokkal.
**Javaslatok:** Státuszkódok hozzáadása.