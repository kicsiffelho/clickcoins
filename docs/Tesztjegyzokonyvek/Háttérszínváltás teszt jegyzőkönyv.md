# Teszt Jegyzőkönyv - Háttérszín Váltás

##### Tesztelést végezte: Polonkai Olivér
##### Dátum: 2024. 12. 23.
##### Tesztkörnyezet: Windows 11, Microsoft Edge
##### Tesztelt funkció: Háttérszín váltás

---

## Tesztek

### **Cél**

Ellenőrizni, hogy a háttérszín váltás funkció megfelel-e a felhasználói elvárásoknak, beleértve a valuta levonását, a tulajdonjog ellenőrzését, és a gombfelirat megfelelő működését.

---

## Teszt esetek

### **1. Háttérszín megvásárlása**

- **Leírás**: Felhasználó elegendő valuta birtokában próbál meg vásárolni egy új háttérszínt.
- **Elvárt viselkedés**:
  - A rendszer levonja a megfelelő mennyiségű valutát.
  - A háttérszín sikeresen megváltozik.
  - Az egyenleg frissül.
  - A gomb felirata "Change"-re változik.
- **Teszt eljárás**:
  1. Bejelentkezés egy olyan felhasználóként, akinek elegendő valutája van.
  2. Kattintson egy háttérszín gombra, amely még nincs megvásárolva.
- **Teszt eredmény**:
  - A valuta levonása sikeresen megtörtént.
  - A háttérszín megváltozott.
  - Az egyenleg frissült.
  - A gomb felirata nem frissült azonnal.

---

### **2. Háttérszín megvásárlása - Nem elegendő valuta**

- **Leírás**: Felhasználó nem rendelkezik elegendő valutával egy háttérszín megvásárlásához.
- **Elvárt viselkedés**:
  - A rendszer nem von le valutát.
  - A háttérszín nem változik meg.
  - Megjelenik egy hibaüzenet: "Not enough currency! Earn more coins!"
- **Teszt eljárás**:
  1. Bejelentkezés egy olyan felhasználóként, akinek nincs elegendő valutája.
  2. Kattintson egy háttérszín gombra.
- **Teszt eredmény**:
  - A valuta levonása nem történt meg.
  - A háttérszín nem változott meg.
  - Megjelent a hibaüzenet.

---

### **3. Már megvásárolt háttérszín használata**

- **Leírás**: Felhasználó egy már megvásárolt háttérszínt szeretne használni.
- **Elvárt viselkedés**:
  - A rendszer nem von le valutát.
  - A háttérszín sikeresen megváltozik.
- **Teszt eljárás**:
  1. Bejelentkezés egy olyan felhasználóként, aki már megvásárolt egy háttérszínt.
  2. Kattintson a "Change" gombra a megvásárolt szín aktiválásához.
- **Teszt eredmény**:
  - A valuta levonása nem történt meg.
  - A háttérszín sikeresen megváltozott.

---

### **4. Gomb felirat frissítése**

- **Leírás**: Ellenőrizni, hogy a gomb felirata azonnal frissül-e a háttérszín megvásárlása vagy használata után.
- **Elvárt viselkedés**:
  - A gomb felirata azonnal frissül ("Add" → "Change").
- **Teszt eljárás**:
  1. Bejelentkezés egy olyan felhasználóként, aki megvásárolt egy háttérszínt.
  2. Vásároljon meg egy másik háttérszínt.
- **Teszt eredmény**:
  - A gomb felirata nem frissült azonnal, csak az oldal újratöltése után.

---

## Megállapítások

### **Pozitívumok**
- A háttérszín váltás funkció alapvetően működik.
- A valuta levonása és a tulajdonjogok ellenőrzése helyesen történik.

### **Negatívumok**
- A gomb felirata nem frissül azonnal a háttérszín megváltozása után.

### **Javaslatok**
- Javítani kell a gomb feliratának azonnali frissítését a vásárlások után.

