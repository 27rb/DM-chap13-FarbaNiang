function palindrome() {
    let mot = document.getElementById("id-mot-saisi").value;
    let motMinuscule = mot.toLowerCase();
    let motInverse = motMinuscule.split("").reverse().join("");
    if (motMinuscule === motInverse) {
        document.getElementById("resultat").textContent = mot + "est un palindrome";
    } 
    else {
        document.getElementById("resultat").textContent = mot + "n'est pas un palindrome";
    }
}