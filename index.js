//TODO
//Creare sezione Dipendente del mese con nome, cognome, articoli venduti, sede negozio, frase motivazionale

/*
usare bootstrap col, ed usare le label per la visualizzazione. Le label devono avere bg grigio.
NOME | COGNOME
N° ARTICOLI VENDUTI | SEDE NEGOZIO | FUMETTO PREFERITO
FRASE MOTIVAZIONALE (text area)

BOTTONE "POPOLA DATI DIPENDENTE MESE"
*/

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

let listaFumetti = [];

// Funzione per popolare i dati riguardanti il dipendente

//Questa l'ho fatta in due modi, il secondo è quello più pulito e carino da vedere rispetto al primo e comunque ottimale
//semplicemtne un foreach che va ad inserire all'interno del json che mi so creato tutti i valori che sono stati dati ai campi
//che abbiamo scorrendoli uno ad uno

function onClickPopolaDatiDipendenteMese(){
  /*
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const numArticoli = document.getElementById('ArticoliVenduti').value;
    const nomeNeg = document.getElementById('nomeNeg').value;
    const fumetto = document.getElementById('fumetto').value;
    const frase = document.getElementById('frase').value;
    
    console.log('nome: '+nome);
    console.log('cognome: '+cognome);
    console.log('ArticoliVenduti: '+ArticoliVenduti);
    console.log('nomeNeg: '+nomeNeg);
    console.log('fumetto: '+fumetto);
    console.log('frase: '+frase);

    console.log(document.getElementById('nome').value = '');
    console.log(document.getElementById('cognome').value = '');
    console.log(document.getElementById('ArticoliVenduti').value = '');
    console.log(document.getElementById('nomeNeg').value = '');
    console.log(document.getElementById('fumetto').value = '');
    console.log(document.getElementById('frase').value = '');
*/
 
    
    const dati = ['nome','cognome','ArticoliVenduti','nomeNeg','fumetto','frase'];
    
    let datiInseriti = {};

    dati.forEach(id => {
        const idDati = document.getElementById(id);
        datiInseriti[id] = idDati.value;
        idDati.value = '';
        }
    );

    console.log('DAti dipendente: ', datiInseriti);
    
}

function onSetDatiPersonaliDipendenteMese(){
    const nome = document.getElementById('nome');
    const cognome = document.getElementById('cognome');

    nome.value = '';
    cognome.value = '';


    nome.classList.add('bordo-verde');
    cognome.classList.add('bordo-verde');

    setTimeout(()=>{
        nome.classList.remove('bordo-verde');
        cognome.classList.remove('bordo-verde');
    },1500);
}

document.addEventListener('DOMContentLoaded',(event)=>{
    setTimeout(onSetDatiPersonaliDipendenteMese(),10000);
})

//Quest'altra ad ogni click di inserisci fumetto va ad inserire dentro la lista fumetti che abbiamo i fumetti che andiamo a scrivere
// sae uno dei due campi tra nome e autore è vuoto non viene inserito nulla ed esce l'alert

function creaFumetto(){
    const nomeFumetto = document.getElementById('fumettonome').value;
    const nomeAutore = document.getElementById('autore').value;

    if(nomeFumetto === '' || nomeAutore === '' ){
        alert("Riempi prima i campi");
        return;
    }

    const fumetto = {
        nome: nomeFumetto,
        autore: nomeAutore
    };

    listaFumetti.push(fumetto);
    console.log(fumetto);

    console.log(listaFumetti);

    document.getElementById('fumettonome').value = '';
    document.getElementById('autore').value = '';
}

//Quest'altra invece mostra a schermo i vari fumetti aggiunti e l'ho fatta come mi hai detto con il for, quindi ad ogni fumetti aggiunto
//la lista aumenta di uno e viene creato un elemento della lista ul e aggiunto tramite un append

function visualizzaFumetti(){
    const bxFumetti = document.getElementById('bxFumetti');
    bxFumetti.innerHTML = '';

    const ul = document.createElement('ul');

    for(let i = 0; i < listaFumetti.length; i++){
        const li = document.createElement('li');
        li.textContent = listaFumetti[i].nome;
        ul.appendChild(li);
    }

    bxFumetti.appendChild(ul);
}