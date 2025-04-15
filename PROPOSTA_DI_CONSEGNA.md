# Proposta di Consegna

## Descrizione

Ho sviluppato un sito web che contiene una libreria di videogame, presa da un API esterna.
Al sito ci si può registrare, loggare, cercare giochi filtrando per generi o per nome, ed entrare nella pagina dettaglio di ogni singolo gioco, dove è possibile anche usare una chatbox in realtime e dove c'è la possibilità di inserire quelli che più si gradiscono tra i preferiti che finiranno nella vostra pagina Profilo.
Inoltre è anche possibile modificare i propri dati da un form che ci permette di cambiare avatar, indirizzo mail, e altri dati.

## API

API: https://rawg.io/
BaaS: https://supabase.com/

## Stile

- TAILWIND
- BOOTSTRAP
- CSS

## Pagine

1. Pagina 1 - Home page con lista game
2. Pagina 2 - Pagina dettaglio prodotto
3. Pagina 3 - Pagina Registrazione utente
4. Pagina 4 - Pagina Login utente
5. Pagina 5 - Pagina modifica dati utente
6. Pagina 6 - Pagina con giochi favoriti dell'utente.

## User Interactions

Lista di interazioni che utenti autenticati e non posso fare nell'applicazione:

1. Utente non autenticato puo scrollare sui giochi in piattaforma
2. Utente non autenticato puo filtrare per nome del gioco
3. Utente non autenticato puo filtrare per genere i giochi
4. Utente non autenicato puo registrarsi con email e password in piattaforma
5. Utente autenticato puo creare una lista di giochi favoriti
6. Utente autenticato può modificare i suoi dati profilo

## Context

Ho usato il context per creare:

- La sessione utente (autenticazione)
- I giochi preferiti (FavoritesContext)

## Deployment

https://rehacktor-specializzazione.vercel.app/