let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];
function tirage() {
    let nombreAleatoire = Math.floor(Math.random() * mangas.length);
    let mangaTire = mangas[nombreAleatoire];
    document.getElementById("affichage").textContent = "Voici le manga tiré au sort : " + mangaTire;
    document.getElementById("aleatoire").textContent = "Numéro tiré : " + nombreAleatoire;
}