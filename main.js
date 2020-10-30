$(document).ready(function() {


  var studente = {
          'nome': 'Luca',
          'cognome': 'Rossi',
          'eta': 17
      };


  var studenti = [
      {
        'nome': 'Mario',
        'cognome': 'Bianchi',
        'eta': 15
      },
      {
        'nome': 'Gabriele',
        'cognome': 'Esposito',
        'eta': 16
        },
        ];

  for (var key in studente) {
    console.log(key);
    console.log(studente[key]);
   }



 var nome_utente = prompt("Inserisci il tuo nome")
 var cognome_utente = prompt("Inserisci il tuo cognome")
 var eta_utente = parseInt(prompt("Inserisci la tua età"))
 //console.log("nome " + nome_utente);
 //console.log("cognome " + cognome_utente);
 //console.log("età " + eta_utente);

    studenti.push(nome_utente)
    studenti.push(cognome_utente)
    studenti.push(eta_utente)

    for (var key in studenti) {
      console.log(key);
      console.log(studenti[key]);
     }





























});
