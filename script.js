let detik = 10;
let jalan = false;

function mulaiPrank() {
    if (jalan) return;
    jalan = true;

    // 1. Fullscreen Otomatis
    let doc = document.documentElement;
    if (doc.requestFullscreen) doc.requestFullscreen();
    else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen();

    // 2. Kunci Tombol Back
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = () => window.history.go(1);

    // 3. Alarm Panik
    document.getElementById('alarm').play();

    // 4. Hitung Mundur + GETARAN MAUT
    let hitung = setInterval(() => {
        detik--;
        document.getElementById('timer').innerText = detik;

        // EFEK GETAR (Vibrate) - Tiap detik HP getar 200 milidetik
        if (navigator.vibrate) {
            navigator.vibrate(200); 
        }

        if (detik === 5) {
            clearInterval(hitung);
            
            // Getar panjang pas kena prank 🗿
            if (navigator.vibrate) {
                navigator.vibrate([500, 200, 500]);
            }

            document.getElementById('judul').innerText = "AWOKAWOKAWOK!! 😂";
            document.getElementById('teks').innerText = "KENAK PRANK ANTUM!!";
            document.getElementById('timer').innerText = "🗿🗿🗿";
            document.getElementById('timer').style.color = "#00ff00";
            document.body.style.backgroundColor = "#1a1a1a";

            setTimeout(() => {
                alert("HP lo aman, tapi jantung lo copot! 🗿");
                alert("Ciee panik ya babi? 😂🖕");
            }, 500);
        }
    }, 1000);
}

document.addEventListener('contextmenu', e => e.preventDefault());
