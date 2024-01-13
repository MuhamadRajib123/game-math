let itemCount = 0;
let number1 = Math.floor(Math.random() * 7)
let number2 = Math.floor(Math.random() * 7)
const soal = `${number1} + ${number2}`
const soalhtml = document.querySelector(".soal")
soalhtml.innerHTML = soal
const sound = new Audio(
	"https://assets.mixkit.co/active_storage/sfx/3005/3005-preview.mp3"
);
const winsound = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3"
)
const bgm = new Audio (
    "https://www.chosic.com/wp-content/uploads/2021/01/sb_wanderlust(chosic.com).mp3"
)

bgm.play()

function check(url){
  let scoreValue = localStorage.getItem('score');
  scoreValue = parseInt(scoreValue, 10) || 0;
  if(itemCount == number1+number2){
    winsound.play()
    alert("kamu menang!")
    localStorage.setItem('score', scoreValue + 1);
    window.location.href = url
  }else{
    alert("salah!")
    localStorage.setItem('score', scoreValue - 1);
  }
}

function addName() {
  let name = document.getElementById("name").value
  localStorage.setItem("name", name)
  alert("Hai, " + name + "!")
  window.location.href = "lv1.html"
}


  document.addEventListener("DOMContentLoaded", function () {
    const basket = document.getElementById("basket");

    basket.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    basket.addEventListener("drop", function (event) {
      event.preventDefault();
      const item = document.getElementById(event.dataTransfer.getData("text/plain"));
      if (item && !item.classList.contains("in-basket")) {
        sound.play();
        item.classList.add("in-basket");
        item.style.position = "static";
        item.style.gridRow = "span 1";
        item.style.gridColumn = "span 1";
        basket.appendChild(item);
        itemCount++
      }
    });

    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
      item.setAttribute("draggable", true);
      item.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", event.target.id);
      });
    });
  });