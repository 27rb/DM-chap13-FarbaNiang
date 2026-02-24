let phrase = document.getElementById("citation").textContent;
phrase = phrase.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
let mots = phrase.split(" ");
let motPlusLong = "";
for (let i = 0; i < mots.length; i++) {
    if (mots[i].length > motPlusLong.length) {
        motPlusLong = mots[i];
        }
}
document.getElementById("motPlusLong").textContent = "Le mot le plus long est : " + motPlusLong;