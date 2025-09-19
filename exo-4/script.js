let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
let operateur = prompt("Entrez un opérateur (+, -, *, /) :");

switch (operateur) {
    case "+":
        alert("Résultat : " + (nombre1 + nombre2));
        break;
    case "-":
        alert("Résultat : " + (nombre1 - nombre2));
        break;
    case "*":
        alert("Résultat : " + (nombre1 * nombre2));
        break;
    case "/":
        if (nombre2 === 0) {
            alert("Division par zéro interdite !");
        } else {
            alert("Résultat : " + (nombre1 / nombre2));
        }
        break;
    default:
        alert("Opérateur invalide !");
}
