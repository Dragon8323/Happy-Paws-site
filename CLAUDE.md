# Happy Paws Animal Clinic — projekat

## Šta se pravi
Sajt za Happy Paws Animal Clinic, veterinarsku kliniku u Il-Marsi, na Malti.
Glavni cilj sajta: da posetilac KONTAKTIRA kliniku ili ZAKAŽE termin (nema
online prodavnice proizvoda — "kupovina" ovde znači zakazivanje pregleda).

## Za koga je sajt
Vlasnici kućnih ljubimaca (uglavnom psi i mačke) u okolini Il-Marse, Malta,
koji traže veterinarsku negu za svog ljubimca.

## Vizuelni stil
Čist, moderan, prijateljski ali profesionalan izgled (medicinsko poverenje +
topla briga o životinjama). Brend boje:
- #0984E3 — plava (glavna, dugmad, akcenti)
- #1E272E — tamno siva/antracit (tekst, header/footer pozadina)
- #00CEC9 — tirkizna (sekundarni akcent, hover efekti)
- #F5F6FA — svetlo siva (naizmenične pozadine sekcija)
Zaobljeni uglovi, dosta belog prostora, kartice usluga sa slikom/ikonicom na
vrhu + naslov + kratak opis (po uzoru na screenshot-ove koje je klijent poslao).

## Tehnologije (proverene u projektu)
- Next.js 16.3.0, App Router, bez `src/` foldera, Turbopack za `next dev`
- React 19.2.8
- TypeScript 5
- Tailwind CSS v4 (tema definisana kroz `@theme` u `app/globals.css`, nema
  posebnog `tailwind.config.js`)
- ESLint 9 (`eslint-config-next`)
- Paket menadžer: npm

## Pravila ponašanja (VAŽNO)
- Uvek prvo objasni plan izmene pre nego što promeniš kod — ne kreni direktno
  da menjaš dok korisnik ne odobri pristup.
- Ne diraj delove sajta koji već rade bez izričitog odobrenja korisnika.
- Nikad ne briši fajlove bez da prvo pitaš.
- Korisnik ne zna da programira — sve objašnjenja moraju biti jednostavnim,
  ne-tehničkim jezikom, bez pretpostavke da razume kod.
