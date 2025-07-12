let listaFumetti = [];

function onClickButtonCreaOggetto(){

    let persona = {};
    persona.nome = "Franco";
    persona.cognome = "Gennaio";
    persona.eta = 45;

    console.log("Stampiamo la persona!", persona)
}

//TODO
//Creare sezione Dipendente del mese con nome, cognome, articoli venduti, sede negozio, frase motivazionale

/*
usare bootstrap col, ed usare le label per la visualizzazione. Le label devono avere bg grigio.
NOME | COGNOME
N° ARTICOLI VENDUTI | SEDE NEGOZIO | FUMETTO PREFERITO
FRASE MOTIVAZIONALE (text area)

BOTTONE "POPOLA DATI DIPENDENTE MESE"
*/

function onClickPopolaDatiDipendenteMese(){
    // popolare campi del dipendente.
}

function onSetDatiPersonaliDipendenteMese(){
    // cambiare nome e cognome dopo 10 secondi che il ready è stato caricato.
    // quando cambi nome e cognome dipendente mi devi colorare di verde il bordo degli elementi cambiati. Il verde deve durare 1.5 secondi.
}


//CREARE FUNZIONE CHE:
/**
 * Crea anagrafica inserimento fumetto
 * 
    FUMETTO | AUTORE
    -- | -- | --
    BOTTONE "INSERISCI FUMETTO"


    Al click di inserisci fumetto, deve partire una funzione che:
    - Crea oggetto fumetto.
    - popoli proprieta oggetto fumetto
    - una volta popolate le metti dentro listaFumetti.

 */

/*
    CREARE BOTTONE "VISUALIZZA FUMETTI INSEIRITI"

    Creare funzione collegata al bottone che al click crea una lista puntata con solo il nome del fumetto
    <ul>
    <li>

    E la mette dentro #bxFumetti. | Esiste il metodo jquery.

    ATTENZIONE, AD OGNI CLICK NON VOGLIO CHE VENGA RIPETUTA ALL'infinito la lista.

    Voglio vedere un ciclo for. Ma non in jquery

    CLICK 1
    - PIPPO
    - PLUTO

    CLICK 2
    Non voglio vedere questo.
    - PIPPO
    - PLUTO
    - PIPPO
    - PLUTO

    Voglio vedere questo se non hai aggiunto alri fumetti. Devo vedere solo quello che sta dentro lista fumetti
    - PIPPO
    - PLUTO

*/

/* 
    OVVIAMENTE QUANDO FINISCI DI INSERIRE QUALSIASI ANAGRAFICA, I CAMPI DEVONO ESSERE SVUOTATI
*/


$(document).ready(function(){

    $("#storeForm").on("submit", function(e){
      
      // Validazione semplice del formato del telefono
      let telefono = $("#telefono").val();

      console.log("Telefono casa:", telefono)

      let regexTelefono = /^[0-9\s\+\-]+$/;
      if (!regexTelefono.test(telefono)) {
        alert("Il numero di telefono non è valido. Inserisci solo numeri, spazi, + o -.");
        return; // Esce dallo script se il telefono non è valido
      }
  
      // Raccogliamo i dati del form
      let nome = $("#nome").val();
      let indirizzo = $("#indirizzo").val();
      let citta = $("#citta").val();
      let email = $("#email").val();
  
      // Costruiamo una stringa HTML per visualizzare i dati
      let resultHtml = "<h2>Dati del Negozio Inseriti:</h2>" +
        "<p><strong>Nome:</strong> " + nome + "<br>" +
        "<strong>Indirizzo:</strong> " + indirizzo + "<br>" +
        "<strong>Città:</strong> " + citta + "<br>" +
        "<strong>Telefono:</strong> " + telefono + "<br>" +
        "<strong>Email:</strong> " + email + "</p>";
  
      // Mostriamo il risultato nella sezione apposita
      $("#result").html(resultHtml);
    });
});
  