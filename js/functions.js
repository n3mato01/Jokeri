document.addEventListener('DOMContentLoaded', function () {
    const uusiRiviBtn = document.getElementById('uusiRiviBtn');
    const arvotutRivitP = document.getElementById('arvotutRivit');
    const jokeriTaulukko = document.getElementById('jokeriTaulukko');

    let arvottujenRivienMaara = 0;

    uusiRiviBtn.addEventListener('click', function () {
        lisaaUusiRivi();
        paivitaArvotutRivit();
    });

    function lisaaUusiRivi() {
        const uusiRivi = document.createElement('tr');

        for (let i = 0; i < 7; i++) {
            const satunnaisluku = Math.floor(Math.random() * 10);
            const uusiSarake = document.createElement('td');
            uusiSarake.textContent = satunnaisluku;
            uusiRivi.appendChild(uusiSarake);
        }

        jokeriTaulukko.appendChild(uusiRivi);
        arvottujenRivienMaara++;
    }

    function paivitaArvotutRivit() {
        arvotutRivitP.textContent = `Valmiita rivejä: ${arvottujenRivienMaara}`;
    }
});
