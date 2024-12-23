# Teszt Jegyzőkönyv - Felhasználói Regisztráció és Bejelentkezés

##### Tesztelést végezte: Polonkai Olivér
##### Dátum: 2024. 12. 23.
##### Tesztkörnyezet: Windows 11, Microsoft Edge
##### Tesztelt funkció: Felhasználói regisztráció és bejelentkezés

---

## Tesztek

### **Cél**

Ellenőrizni, hogy a felhasználói regisztráció és bejelentkezés funkciók megfelelően működnek, biztosítva a felhasználói adatok helyes tárolását és a rendszerbe történő biztonságos hozzáférést.

---

## Teszt esetek

### **1. Sikeres regisztráció**

- **Leírás**: Egy új felhasználó sikeresen regisztrál a rendszerbe érvényes adatok megadásával.
- **Elvárt viselkedés**:
  - A rendszer eltárolja a felhasználó adatait (pl. e-mail, jelszó).
  - A regisztráció sikerességéről visszajelzés érkezik.
- **Teszt eljárás**:
  1. Navigáljon a regisztrációs oldalra.
  2. Adjon meg egy érvényes e-mail címet és jelszót.
  3. Kattintson a "Register" gombra.
- **Teszt eredmény**:
  - A regisztráció sikeres volt.
  - A felhasználói adatok elmentésre kerültek az adatbázisba.

---

### **2. Regisztráció hibás adatokkal**

- **Leírás**: A felhasználó hibás vagy hiányos adatokat ad meg regisztráció során.
- **Elvárt viselkedés**:
  - A rendszer nem engedélyezi a regisztrációt.
  - Hibaüzenet jelenik meg (pl. "Invalid email address").
- **Teszt eljárás**:
  1. Navigáljon a regisztrációs oldalra.
  2. Adjon meg egy érvénytelen e-mail címet (pl. "user@domain").
  3. Kattintson a "Register" gombra.
- **Teszt eredmény**:
  - A regisztráció meghiúsult.
  - Megjelent a megfelelő hibaüzenet.

---

### **3. Sikeres bejelentkezés**

- **Leírás**: Egy regisztrált felhasználó sikeresen bejelentkezik a rendszerbe.
- **Elvárt viselkedés**:
  - A rendszer engedélyezi a hozzáférést.
  - A felhasználó átirányításra kerül a főoldalra.
- **Teszt eljárás**:
  1. Navigáljon a bejelentkezési oldalra.
  2. Adja meg a regisztráció során használt e-mail címet és jelszót.
  3. Kattintson a "Login" gombra.
- **Teszt eredmény**:
  - A bejelentkezés sikeres volt.
  - A felhasználó átirányításra került a főoldalra.

---

### **4. Bejelentkezés hibás adatokkal**

- **Leírás**: A felhasználó hibás e-mail címet vagy jelszót ad meg bejelentkezéskor.
- **Elvárt viselkedés**:
  - A rendszer nem engedélyezi a hozzáférést.
  - Hibaüzenet jelenik meg (pl. "Invalid credentials").
- **Teszt eljárás**:
  1. Navigáljon a bejelentkezési oldalra.
  2. Adjon meg egy helytelen e-mail címet vagy jelszót.
  3. Kattintson a "Login" gombra.
- **Teszt eredmény**:
  - A bejelentkezés meghiúsult.
  - Megjelent a megfelelő hibaüzenet.

---

## Megállapítások

### **Pozitívumok**
- A regisztráció és bejelentkezés funkciók alapvetően megfelelően működnek.
- A felhasználói adatok biztonságos tárolása biztosított.

### **Negatívumok**
- Hibás adatbevitel esetén a hibaüzenetek javítása szükséges (pl. pontosabb szövegezés).

### **Javaslatok**
- Javítani kell a hibás adatbevitelre adott hibaüzeneteket a jobb felhasználói élmény érdekében.