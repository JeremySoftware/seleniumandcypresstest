// Grundlegendes Jump-and-Run-Spiel mit JavaScript

// Canvas und Kontext erstellen
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Spieler-Objekt
const player = {
    x: 50,
    y: canvas.height - 50,
    width: 40,
    height: 40,
    speed: 5,
    jumpPower: 10,
    isJumping: false,
};

// Plattformen
const platforms = [
    { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
    { x: 200, y: canvas.height - 50, width: 100, height: 20 },
    { x: 400, y: canvas.height - 80, width: 100, height: 20 },
];

// Funktion zum Bewegen des Spielers
function movePlayer() {
    // Bodenkollision überprüfen
    if (player.y < canvas.height - player.height) {
        player.y += 2; // Gravitation
    } else {
        player.isJumping = false; // Spieler ist auf dem Boden

        // Leertaste für das Springen
        document.addEventListener("keydown", function(event) {
            if (event.key === " " && !player.isJumping) {
                player.isJumping = true;
                playerJump();
            }
        });
    }

    if (player.isJumping) {
        player.y -= player.jumpPower;
    }

    // Hier kannst du die Bewegungslogik anpassen
    // Zum Beispiel Tastatursteuerung oder Kollisionserkennung mit Plattformen

    // Beispiel: Spieler springt nicht, wenn er die Oberseite erreicht
    if (player.y < 0) {
        player.isJumping = false;
    }
}

// Funktion zum Initiieren des Sprungvorgangs
function playerJump() {
    // Hier kannst du die Sprunglogik anpassen, z. B. die Sprunghöhe oder die Schwerkraft
}

// Funktion zum Bewegen des Spielers
function movePlayer() {
    // Bodenkollision überprüfen
    if (player.y < canvas.height - player.height) {
        player.y += 2; // Gravitation
    } else {
        player.isJumping = false; // Spieler ist auf dem Boden
    }

    if (player.isJumping) {
        player.y -= player.jumpPower;
    }

    // Hier kannst du die Bewegungslogik anpassen
    // Zum Beispiel Tastatursteuerung oder Kollisionserkennung mit Plattformen

    // Beispiel: Spieler springt nicht, wenn er die Oberseite erreicht
    if (player.y < 0) {
        player.isJumping = false;
    }
}

// Funktion zum Zeichnen des Spielers
function drawPlayer() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Funktion zum Zeichnen der Plattformen
function drawPlatforms() {
    ctx.fillStyle = "green";
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

// Eventlistener für Tastatursteuerung
document.addEventListener("keydown", function(event) {
    if (event.key === " ") { // Leertaste für das Springen
        if (!player.isJumping) {
            player.isJumping = true;
        }
    }
});

// Schleife für das Zeichnen des Spiels
function gameLoop() {
    // Hintergrund löschen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spieler bewegen
    movePlayer();

    // Plattformen zeichnen
    drawPlatforms();

    // Spieler zeichnen
    drawPlayer();

    // Schleife wiederholen
    requestAnimationFrame(gameLoop);
}

// Spielstart
gameLoop();
