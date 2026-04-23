const words = [
    "котка",
    "училище",
    "дете",
    "приятел",
    "книга",
    "молив",
    "учител",
    "слънце",
    "река",
    "птица"
];

let currentIndex = 0;
let score = 0;
let player = "";

function startGame() {
    player = document.getElementById("playerName").value;

    if (player === "") {
        alert("Въведи име!");
        return;
    }

    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");

    showWord();
}

function showWord() {
    document.getElementById("question").textContent =
        `Дума №${currentIndex + 1}: (учителят я прочита)`;

    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();

    if (answer === words[currentIndex]) {
        score++;
        document.getElementById("feedback").textContent = "✅ Вярно!";
    } else {
        document.getElementById("feedback").textContent =
            "❌ Грешно! Правилно: " + words[currentIndex];
    }

    document.getElementById("score").textContent = score;

    currentIndex++;

    if (currentIndex < words.length) {
        setTimeout(showWord, 1500);
    } else {
        endGame();
    }
}

function useHint() {
    document.getElementById("feedback").textContent =
        "Жокер: " + words[currentIndex];
}

function endGame() {
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("endScreen").classList.remove("hidden");

    document.getElementById("finalScore").textContent =
        `${player}, твоят резултат е: ${score} от ${words.length}`;
}