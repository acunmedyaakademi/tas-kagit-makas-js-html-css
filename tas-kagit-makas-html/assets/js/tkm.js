let bodyGame = document.querySelector(".bodyGame");

bodyGame.innerHTML = `<div class="game-img">
<div class="game-img-box">
  <button id="kagit"><img src="assets/img/kagit-logo.svg" alt=""></button>
  <button id="makas"> <img src="assets/img/makas-logo.svg" alt=""></button>

</div>
<div class="tas-img">
  <button id="tas"><img src="assets/img/tas-logo.svg" alt=""></button>
</div>
</div>`;

let tas = document.querySelector("#tas");
let kagit = document.querySelector("#kagit");
let makas = document.querySelector("#makas");
let score = document.querySelector("#score");
let rules = document.querySelector(".rules-container");
let rulesBtn = document.querySelector("#rulesBtn");
let rulesClose = document.querySelector("#close");
let skor = 0;
score.innerText = 0;

rules.style.display = "none";

tas.addEventListener("click", handleClickTas);
kagit.addEventListener("click", handleClickKagit);
makas.addEventListener("click", handleClickMakas);

// rastgele sayi = 0 ? tas
// rastgele sayi = 1 ? makas
// rastgele sayi = 2 ? kagit

function handleRules() {
  rules.style.display = "block";
}

rulesBtn.addEventListener("click", handleRules);

window.onclick = function (e) {
  if (e.target == bodyGame) {
    rules.style.display = "none";
  }
};

rulesClose.onclick = function () {
  rules.style.display = "none";
};

function handleClickTas() {
  handle("assets/img/tas-logo.svg", 0);
}

function handleClickMakas() {
  handle("assets/img/makas-logo.svg", 1);
}

function handleClickKagit() {
  handle("assets/img/kagit-logo.svg", 2);
}

function handle(secimim, secimNumarasi) {
  bodyGame.innerHTML = `<div class="picked">
  <div class="picked-box">
    <button> <img src=${secimim} alt=""></button>
    <p>SEÇİMİNİZ</p>
  </div>
  <div class="picked-box">
    <button><img src="assets/img/secim-background-oval.svg" alt=""></button>
    <p>KARŞI SEÇİM</p>

  </div>
</div>`;

  let bilgisayarRastgeleSayi = Math.round(Math.random() * 2);

  setTimeout(() => {
    console.log("rastgele sayi: " + bilgisayarRastgeleSayi);

    let imageSrc = "";

    if (bilgisayarRastgeleSayi === 0) {
      imageSrc = "assets/img/tas-logo.svg";
    } else if (bilgisayarRastgeleSayi === 1) {
      imageSrc = "assets/img/makas-logo.svg";
    } else if (bilgisayarRastgeleSayi === 2) {
      imageSrc = "assets/img/kagit-logo.svg";
    }

    bodyGame.innerHTML = `<div class="step2-picked">
    <div class="step2-picked-box">
      <button> <img src=${secimim} alt=""></button>
      <p>SEÇİMİNİZ</p>
    </div>
    <div class="step2-picked-box">
    <button>
    <img src="${imageSrc}" alt="">
</button>
      <p>KARŞI SEÇİM</p>
    </div>
  </div>`;

    setTimeout(() => {
      if (secimNumarasi === 0) {
        if (bilgisayarRastgeleSayi === 0) {
          console.log("berabere");
          bodyGame.innerHTML = `
      <div class="step3-lose-picked">
        <div class="step3-lose-picked-box">
          <button> <img src=${secimim} alt=""></button>
          <p>SEÇİMİNİZ</p>
        </div>
        <div class="step3-lose-picked-box">
          <button><img src="${imageSrc}" alt=""></button>
          <p>KARŞI SEÇİM</p>
  
        </div>
      </div>
      <div class="result">
        <h1>BERABERE</h1>
        <a id='playAgain'>TEKRAR OYNA</a>
      </div>`;
          let playAgain = document.querySelector("#playAgain");
          playAgain.addEventListener("click", handleScore);
        } else if (bilgisayarRastgeleSayi === 1) {
          console.log("kazandiniz");
          score.innerText = "";
          skor++;
          score.innerText += skor;
          bodyGame.innerHTML = `
        <div class="step3-win-picked">
          <div class="step3-win-picked-box">
            <button> <img src=${secimim} alt=""></button>
            <p>SEÇİMİNİZ</p>
          </div>
          <div class="step3-win-picked-box">
            <button><img src="${imageSrc}" alt=""></button>
            <p>KARŞI SEÇİM</p>
          </div>
        </div>
        <div class="result">
          <h1>KAZANDINIZ</h1>
          <a id='playAgain'>TEKRAR OYNA</a>
        </div>`;
          let playAgain = document.querySelector("#playAgain");
          playAgain.addEventListener("click", handleScore);
        } else if (bilgisayarRastgeleSayi === 2) {
          bodyGame.innerHTML = `
        <div class="step3-lose-picked">
          <div class="step3-lose-picked-box">
            <button> <img src=${secimim} alt=""></button>
            <p>SEÇİMİNİZ</p>
          </div>
          <div class="step3-lose-picked-box">
            <button><img src="${imageSrc}" alt=""></button>
            <p>KARŞI SEÇİM</p>
          </div>
        </div>
        <div class="result">
          <h1>KAYBETTİNİZ</h1>
          <a id='playAgain'>TEKRAR OYNA</a>
        </div>`;
          let playAgain = document.querySelector("#playAgain");
          playAgain.addEventListener("click", handleScore);
        } else {
          console.log("bir sorun olustu");
        }
      } else if (secimNumarasi === 1) {
        if (bilgisayarRastgeleSayi === 1) {
          console.log("berabere");
          bodyGame.innerHTML = `
        <div class="step3-lose-picked">
          <div class="step3-lose-picked-box">
            <button> <img src=${secimim} alt=""></button>
            <p>SEÇİMİNİZ</p>
          </div>
          <div class="step3-lose-picked-box">
            <button><img src="${imageSrc}" alt=""></button>
            <p>KARŞI SEÇİM</p>
          </div>
        </div>
        <div class="result">
          <h1>BERABERE</h1>
          <a href="tkmStep1.html">TEKRAR OYNA</a>
        </div>`;
        } else if (bilgisayarRastgeleSayi === 2) {
          console.log("kazandiniz");
          score.innerText = "";

          skor++;
          score.innerText += skor;
          bodyGame.innerHTML = `
        <div class="step3-win-picked">
          <div class="step3-win-picked-box">
            <button> <img src=${secimim} alt=""></button>
            <p>SEÇİMİNİZ</p>
          </div>
          <div class="step3-win-picked-box">
            <button><img src="${imageSrc}" alt=""></button>
            <p>KARŞI SEÇİM</p>
          </div>
        </div>
        <div class="result">
          <h1>KAZANDINIZ</h1>
          <a href="tkmStep1.html">TEKRAR OYNA</a>
        </div>`;
        } else if (bilgisayarRastgeleSayi === 0) {
          bodyGame.innerHTML = `
        <div class="step3-lose-picked">
          <div class="step3-lose-picked-box">
            <button> <img src=${secimim} alt=""></button>
            <p>SEÇİMİNİZ</p>
          </div>
          <div class="step3-lose-picked-box">
            <button><img src="${imageSrc}" alt=""></button>
            <p>KARŞI SEÇİM</p>
    
          </div>
        </div>
        <div class="result">
          <h1>KAYBETTİNİZ</h1>
          <a href="tkmStep1.html">TEKRAR OYNA</a>
        </div>`;
        } else {
          console.log("bir sorun olustu");
        }
      } else if (secimNumarasi === 2) {
        if (bilgisayarRastgeleSayi === 2) {
          console.log("berabere");
          bodyGame.innerHTML = `
        <div class="step3-lose-picked">
          <div class="step3-lose-picked-box">
            <button> <img src=${secimim} alt=""></button>
            <p>SEÇİMİNİZ</p>
          </div>
          <div class="step3-lose-picked-box">
            <button><img src="${imageSrc}" alt=""></button>
            <p>KARŞI SEÇİM</p>
          </div>
        </div>
        <div class="result">
          <h1>BERABERE</h1>
          <a href="tkmStep1.html">TEKRAR OYNA</a>
        </div>`;
        } else if (bilgisayarRastgeleSayi === 0) {
          console.log("kazandiniz");
          score.innerText = "";

          skor++;
          score.innerText += skor;
          bodyGame.innerHTML = `
        <div class="step3-win-picked">
          <div class="step3-win-picked-box">
            <button> <img src=${secimim} alt=""></button>
            <p>SEÇİMİNİZ</p>
          </div>
          <div class="step3-win-picked-box">
            <button><img src="${imageSrc}" alt=""></button>
            <p>KARŞI SEÇİM</p>
    
          </div>
        </div>
        <div class="result">
          <h1>KAZANDINIZ</h1>
          <a href="tkmStep1.html">TEKRAR OYNA</a>
        </div>`;
        } else if (bilgisayarRastgeleSayi === 1) {
          bodyGame.innerHTML = `
        <div class="step3-lose-picked">
          <div class="step3-lose-picked-box">
            <button> <img src=${secimim} alt=""></button>
            <p>SEÇİMİNİZ</p>
          </div>
          <div class="step3-lose-picked-box">
            <button><img src="${imageSrc}" alt=""></button>
            <p>KARŞI SEÇİM</p>
    
          </div>
        </div>
        <div class="result">
          <h1>KAYBETTİNİZ</h1>
          <a href="tkmStep1.html">TEKRAR OYNA</a>
        </div>`;
        } else {
          console.log("bir sorun olustu");
        }
      } else {
        console.log("bir sorun olustu");
      }
    }, 1000);
  }, 1000);
}

function handleScore() {
  let newScore = skor;
  window.location.href = "tkmStep1.html";
  score.innerText = newScore;
}
