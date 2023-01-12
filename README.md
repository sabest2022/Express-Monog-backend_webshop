# Webshop API

## Installation

Kör `npm install` för att installera alla dependencies följt av `npm test` för att komma igång.
Om du vill filtrera filka testfiler som körs, exempelvis enbart vg kraven kan du göra det såhär: `npm test -- .vg.` eller för en specifik resurs (order): `npm test -- orders`.
Det går också bra att start dev servern `npm run dev` och testa manuellt via ex: RestClient, Postman eller Curl.

## Uppgiftsbeskrivning

I den här uppgiften ska du bygga ett API för en enklare webshop. Projktet ska byggas med Express & Mongoose.

- Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet
- Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet
- All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, ordrar, användare mm)

## Kravlista

**G-krav**

- [] En användare ska kunna hämta alla produkter
- [] En användare ska kunna hämta produkter ifrån en specifik kategori
- [] En användare ska kunna skapa ett konto
- [] Lösenord ska krypteras innan de sparas i databasen
- [] En användare ska kunna kunna logga in sig
- [] En användare ska kunna skapa en order (produkter & leveransadress)
- [] En användare som gör en beställning måste vara inloggad - TODO: gäst checkout då?
- [] Lagersaldot ska minska när en användare skapar en order

**VG-krav:**

- [] En administratör ska kunna administrera produkter (CUD)
- [] Befintliga ordrar ska inte påverkas när produkter uppdateras eller tas bort.
- [] En administratör kan lägga till andra administratörer
- [] En användare ska kunna hämta sin egna orderhistorik
- [] En administratör ska kunna hämta all orderhistorik
- [] En administratör ska kunna administrera ordrar (CUD)
