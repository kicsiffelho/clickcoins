# Teszt jegyzőkönyv - Valuta tranzakciók kezelése
##### Tesztelést végezte: Kiss Virág
##### Dátum: 2024. 10. 18.
##### Tesztkörnyezet: Windows 10, Brave
##### Tesztelt funkció: Játék során kapott valuta kezelése
## Tesztek:
- **Cél**:  Ellenőrizni, hogy a játék során gyűjtött valutát megfelelő mennyiségben és megfelelő felhasznához be kerülnek-e az adatbázis megfelelő tábláiba. És, hogy a vásárlások során felhasznált valuták helyesen kerülnek kezelésre.
- **Teszt esetek**: 
    1. **Játék után valuta gyűjtése**:
        - Leírás: Felhasználó megfelelő mennyiségű valutát kapott.
        - Elvárt viselkedés:
            - A rendszer hozzáadja a felhasználó egyenlegéhez a gyűjtött valutát.
            - Amennyiben nagyobb mint a felhasználó legnagyobb pontszáma, az frissül.
            - Frissül a felhasználó egyenlege.
        - Teszt eljárás:
            - Bejelentkezés egy felhasználóként.
            - Elindítja a játékot, a "Start game" gombbal.
            - Kattint legalább egy érmére.
            - Nem vált oldalt mielőtt a játék véget ér.
        - Teszt eredmény:
            - A rendszer hozzáadta a megfelelő valutát a felhasználó egyenlegéhez.
            - A felhasználó legnagyobb pontszáma frissült.
            - Frissült a felhasználó egyenlege.
    2. **Játék indítása, majd oldal váltás**:
        - Leírás: Felhasználó elindítja a játékot, legalább egy érmét gyűjt és bezárja az oldalt.
        - Elvárt viselkedés:
            - A rendszer nem adja hozzá a gyűjtött valutát a felhasználó egyenlegéhez.
            - A játék alaphelyzetbe áll, az oldal újbúlili megnyitása után.
            - A rendszer nem tárolja el a felhasználó által kapott pontszámot.
        - Teszt eljárás:
            - Bejelentkezés egy felhasználóként.
            - Elindítja a játékot, a "Start game" gombbal.
            - Kattint legalább egy érmére.
            - Bezárja az oldalt.
        - Teszt eredmény:
            - A rendszer nem módosított a felhasználó egyenlegét.
            - A játék alaphelyzetbe állt, az oldal újbúlili megnyitása után.
            - A rendszer nem tárolta a felhaszáló által kapott pontszámot.
## Megállapítások:
**Pozitív:** A játékhoz tartozó valuta tranzakciók elképzelés szerint működnek.

**Negatív:** Nincs, mivel minden teszt sikeres volt.

**Javaslatok:** Oldal elhagyása után egy játék folytatása opció, ami elmenti az előző játék státuszát és onnan lehet folytatni.