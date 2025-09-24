let note;  
let somme = 0;      
let counter = 0;

do {
    note = +prompt("Entrer un nombre (-1 pour arrêter)");

    if (note >= 0 && note <= 20) {
        somme += note;
        counter++;
    } else if (note == -1) {
        break;
    } else {
        alert("Note non valide !");
    }

} while (true);

let moyenne = (counter > 0) ? somme / counter : 0;

alert(`La moyenne est ${moyenne}`);

 