let savedWords = [];

function saveWord() {
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value.trim();

    if (word === "") {
        document.getElementById('status').innerText = "Kérlek írj be egy szót!";
        return;
    }

    savedWords.push(word);
    wordInput.value = "";  // Törli a beírt szót
    updateSavedWords();
}

function updateSavedWords() {
    const savedWordsList = document.getElementById('savedWords');
    savedWordsList.innerHTML = "";  // Ürítjük a listát

    savedWords.forEach((word) => {
        const li = document.createElement('li');
        li.textContent = word;
        savedWordsList.appendChild(li);
    });

    document.getElementById('status').innerText = `${savedWords.length} szó mentve!`;
}
