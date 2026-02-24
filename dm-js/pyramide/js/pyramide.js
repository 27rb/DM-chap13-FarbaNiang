function construirePyramide() {
    let nombre = parseInt(document.getElementById("ligne-pyramide").value);
    let pyramide = "";
    let etoiles = "*";
    for (let i = 1; i <= nombre; i++) {
        pyramide = pyramide + etoiles.slice(0, i) + "\n";
        etoiles = etoiles + "*";
    }
    document.getElementById("pyramide").textContent = pyramide;
}