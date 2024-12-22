# Teszt jegyzőkönyv - Háttérszín váltás funkció
##### Tesztelést végezte: Kiss Virág
##### Dátum: 2024. 12. 21.
##### Tesztkörnyezet: Windows 10, Brave
##### Tesztelt funkció: Háttérszín váltás
## Tesztek:
- **Cél**:  Ellenőrizni, hogy a háttérszín váltás funkció a felhasználói elvárásoknak megfelelően működik-e, beleértve a tulajdonjog ellenőrzését, a valuta levonást és a felhasználói felület megfelelő reagálását.
- **Teszt esetek**: 
    1. **Háttérszín megvásárlása**:
        - Leírás: Felhasználó elegendő valuta birtokában próbál meg vásárolni egy új háttérszínt.
        - Elvárt viselkedés:
            - A rendszer levonja a megfelelő mennyiségű valutát a felhasználó egyenlegéből.
            - A háttérszín sikeresen megváltozik.
            - A felhasználó egyenlege frissül.
            - A gomb szövege "Change"-re változik.
        - Teszt eljárás:
            - Bejelentkezés egy felhasználóként, aki rendelkezik elegendő valutával.
            - Kattintson egy háttérszín gombra, amelyet még nem vásárolt meg.
        - Teszt eredmény:
            - A rendszer levonta a megfelelő mennyiségű valutát.
            - A gomb szövege nem változott.
            - A felhasználó egyenlege frissült.
            - A háttérszín megváltozott.
    2. **Háttérszín megvásárlása - Nem elegendő valuta**:
        - Leírás: Felhasználó nem rendelkezik elegendő valutával egy háttérszín megvásárlásához.
        - Elvárt viselkedés:
            - A rendszer nem von le valutát.
            - A háttérszín nem változik meg.
            - Megjelenik egy hibaüzenet ("Not enough currency! Earn more coins!").
        - Teszt eljárás:
            - Bejelentkezés egy felhasználóként, aki nem rendelkezik elegendő valutával.
            - Kattintson egy háttérszín gombra.
        - Teszt eredmény:
            - A rendszer nem volt le valutát.
            - A háttérszín nem változott meg.
            - Megjelent a hibaüzenet.
    3. **Már megvásárolt háttérszín használata:**
        - Leírás: Felhasználó egy már megvásárolt háttérszínt szeretne használni.
        - Elvárt viselkedés:
            - A rendszer nem von le valutát.
            - A háttérszín sikeresen megváltozik.
        - Teszt eljárás:
            - Bejelentkezés egy felhasználóként, aki már megvásárolta a világoskék háttérszínt.
            - Kattintson a gombra (amelynek szövege most "Change").
        - Teszt eredmény:
            - A rendszer nem vont le valutát.
            - A háttérszín sikeresen megváltozott.
    4. **Gomb felirat frissítése:**:
        - Leírás: Ellenőrizni, hogy a gomb felirata (pl. "Change" vagy "Add") megfelelően frissül-e a háttér szín megvásárlása vagy használata után.
        - Elvárt viselkedés:
            - A gomb felirata azonnal frissül a megfelelő értékre.
        - Teszt eljárás: 
            - Bejelentkezés egy felhasználóként, aki már megvásárolta a világoskék háttérszínt.
            - Kattintson az "Add" gombra.
        - Teszt eredmény:
            - A gomb felirata nem frissült azonnal, csak oldal frissítés után.
## Megállapítások:
**Pozitív:** A háttérszín váltás funkció alapvetően működik, a valuta levonás és a tulajdonjog ellenőrzése megfelelő.

**Negatív:** A gomb felirata nem frissül azonnal a háttérszín megváltozása után.

**Javaslatok:** A gomb felirat frissítését javítani kell.