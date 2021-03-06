
var txtUtente = "";
var ar_voti=[];

function loginUser() {
    // acquisisco nome e cognome
    let txtNome = document.getElementById("in_nome").value;
    let txtCognome = document.getElementById("in_cognome").value;

    txtUtente = txtNome + " " + txtCognome;
    
    // se i dati sono stati inseriti abilito do benvenuto ed abilito div esame
    if (txtUtente > " ") {
        document.getElementById("sp_utente").innerHTML = "Hello " + txtUtente;
        document.title = "Hello " + txtUtente;
        document.getElementById("esame").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
}

function getValutazione() {
    // acquisisco voto e il voto di riferimento
    let txtVoto = parseInt(document.getElementById("in_voto").value);
    let txtRif = parseInt(document.getElementById("in_riferimento").value);

    // verifico se esame è stato superato
    if (txtVoto >= txtRif) {
        // Scrivo il giudizio in nero
        document.getElementById("sp_giudizio").style.color="black";
        document.getElementById("sp_giudizio").innerHTML = txtUtente + " sei stato promosso";
        
    } else {
        // Scrivo il giudizio in rosso
        document.getElementById("sp_giudizio").style.color="red";  
        document.getElementById("sp_giudizio").innerHTML = txtUtente + " sei stato bocciato";
    }
    //visualizzo il DIV per scriverlo in maiuscolo
    document.getElementById("inMaiuscolo").style.display = "block";
}

function getMaiuscolo(){
    let giudizio =document.getElementById("sp_giudizio").innerHTML;
    
    // richiamo la mia funzione che trasforma il giudizio in maiuscolo e poi lo visualizza nello span
    document.getElementById("sp_giudizioUPPER").innerHTML=getUpperCase(giudizio);
}

// funzione per trasformare in maiuscolo il testo passato a parametro
function getUpperCase(testo){
    let maiuscolo="";
    
    maiuscolo=testo.toUpperCase();
    
    return maiuscolo;
}

function addVoto(){
    var media=0;
    
    ar_voti.push(document.getElementById("in_voto").value*1);
    
    for (i=0; i<ar_voti.length;i++){
        media+=ar_voti[i];
    }
    document.getElementById("sp_media").innerHTML="Inseriti " + ar_voti.length + " - " + "media " + media/ar_voti.length;
    
}