<!DOCTYPE html>
<html>
<head>
    <title>Hitung Nilai y</title>
</head>
<body>
    <h1>Hitung Nilai y</h1>

    <label for="a">Nilai a:</label>
    <input type="number" id="a" required>
    <br><br>

    <label for="b">Nilai b:</label>
    <input type="number" id="b" required>
    <br><br>

    <label for="t">Nilai t:</label>
    <input type="number" id="t" required>
    <br><br>

    <label for="p">Nilai p:</label>
    <input type="number" id="p" required>
    <br><br>

    <button onclick="hitungNilaiY()">Hitung</button>

    <h2>Hasil:</h2>
    <p id="hasil"></p>

    <script>
        function hitungNilaiY() {
            // Mengambil nilai dari input
            let a = parseFloat(document.getElementById('a').value);
            let b = parseFloat(document.getElementById('b').value);
            let t = parseFloat(document.getElementById('t').value);
            let p = parseFloat(document.getElementById('p').value);

            // Menghitung nilai dalam tanda kurung pertama
            let sqrtValue = Math.sqrt(Math.pw(a, 2) + Math.pow(b, 2));
            let nilaiPertama = sqrtValue / 2;

            // Menghitung nilai dalam tandan kurung kedua
            let nilaiKedua = t / p;

            // Menghitung nilai y
            let y = nilaiPertama + nilaiKedua;

            // Menampilkan hasil
            document.getElementById('hasil').innerHTML = "Nilai y: " + y;
        }
    </script>
</body>
</html>