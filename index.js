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
async function onClickPopolaDatiDipendenteMese() {
    const dati = ['nome', 'cognome', 'ArticoliVenduti', 'nomeNeg', 'fumetto', 'frase'];
    let datiInseriti = {};

    dati.forEach(id => {
        const idDati = document.getElementById(id);
        datiInseriti[id] = idDati.value;
    });

    console.log('Dati dipendente da inviare:', datiInseriti);

    try {
        const response = await fetch('http://localhost:3000/api/employees', { // Make sure this URL matches your backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datiInseriti)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Dipendente salvato con successo:', result);
            // Clear fields after successful save
            dati.forEach(id => {
                document.getElementById(id).value = '';
            });
            alert('Dati dipendente salvati con successo!');
        } else {
            console.error('Errore durante il salvataggio del dipendente:', response.statusText);
            alert('Errore durante il salvataggio del dipendente.');
        }
    } catch (error) {
        console.error('Errore di rete o del server:', error);
        alert('Errore di connessione al server.');
    }
}

/*
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

async function creaFumetto() {
    const nomeFumetto = document.getElementById('fumettonome').value;
    const nomeAutore = document.getElementById('autore').value;

    if (nomeFumetto === '' || nomeAutore === '') {
        alert("Riempi prima i campi");
        return;
    }

    const fumettoData = {
        nomeFumetto: nomeFumetto,
        nomeAutore: nomeAutore
    };

    try {
        const response = await fetch('http://localhost:3000/api/comics', { // Make sure this URL matches your backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fumettoData)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Fumetto salvato con successo:', result);
            // Add to local list after successful save (optional, you could re-fetch from DB)
            listaFumetti.push({ nome: nomeFumetto, autore: nomeAutore }); // Update local list
            document.getElementById('fumettonome').value = '';
            document.getElementById('autore').value = '';
            alert('Fumetto inserito con successo!');
        } else {
            console.error('Errore durante il salvataggio del fumetto:', response.statusText);
            alert('Errore durante il salvataggio del fumetto.');
        }
    } catch (error) {
        console.error('Errore di rete o del server:', error);
        alert('Errore di connessione al server.');
    }
}
/*
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
*/
//Quest'altra invece mostra a schermo i vari fumetti aggiunti e l'ho fatta come mi hai detto con il for, quindi ad ogni fumetti aggiunto
//la lista aumenta di uno e viene creato un elemento della lista ul e aggiunto tramite un append
/*
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
}*/

async function visualizzaFumetti() {
    const bxFumetti = document.getElementById('bxFumetti');
    bxFumetti.innerHTML = ''; // Clear existing list

    try {
        const response = await fetch('http://localhost:3000/api/comics'); // Fetch from your backend
        if (response.ok) {
            const comics = await response.json();
            
            const ul = document.createElement('ul');
            comics.forEach(comic => {
                const li = document.createElement('li');
                li.textContent = comic.comic_name; // Assuming your API returns 'comic_name'
                ul.appendChild(li);
            });
            bxFumetti.appendChild(ul);
        } else {
            console.error('Errore durante il recupero dei fumetti:', response.statusText);
            alert('Errore durante il recupero dei fumetti.');
        }
    } catch (error) {
        console.error('Errore di rete o del server:', error);
        alert('Errore di connessione al server.');
    }
}