<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zahlen addieren</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            text-align: center;
        }

        .form-group {
            width: 100%;
            max-width: 400px;
            margin: 0 auto 10px; /* Hinzugefügter Abstand unten */
        }

        input[type="number"] {
            width: 100%;
            height: 50px;
            padding: 10px;
            box-sizing: border-box; /* Wichtig, um das Padding in die Berechnung einzubeziehen */
        }

        button {
            width: 100%;
            max-width: 400px;
            height: 50px;
            margin-bottom: 10px;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="form-group">
            <input class="numberIn" type="number" id="inputNum1" placeholder="Zahl 1 eingeben">
        </div>
        <div class="form-group">
            <input class="numberIn" type="number" id="inputNum2" placeholder="Zahl 2 eingeben">
        </div>
        <button id="addButton">Addieren</button>
        <div class="form-group">
            <input class="numberOut" type="text" id="resultText" readonly>
        </div>
    </div>

    <script>
        const inputNum1 = document.getElementById('inputNum1');
        const inputNum2 = document.getElementById('inputNum2');
        const resultText = document.getElementById('resultText');
        const addButton = document.getElementById('addButton');

        addButton.addEventListener('click', function () {
            const num1 = parseFloat(inputNum1.value);
            const num2 = parseFloat(inputNum2.value);
            const sum = num1 + num2;
            resultText.value = isNaN(sum) ? "Ungültige Eingabe" : sum;

            // Erstelle das Smiley-Element und füge es hinzu
            const smiley = document.createElement('span');
            smiley.className = 'smiley';
            smiley.textContent = '😊';
            addButton.appendChild(smiley);
        });
    </script>
</body>
</html>
