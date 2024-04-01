console.log("Hello");

const cookieBtn = document.getElementById("cookieBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const cookieSpan = document.getElementById("cookieSpan");
const cpsSpan = document.getElementById("cpsSpan");
const autoClick = document.getElementById("autoClick");
const autoClickTextPrice = document.getElementById("autoClick .price span");

const stats = {
  cookieCount: 0,
  cps: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

function buyCookie() {
  stats.cookieCount++;
  updatePage();
  updateStorage();
}

function buyUpgrade() {
  stats.cps++;
  stats.cookieCount -= 10;
  updatePage();
  updateStorage();
}
cookieBtn.addEventListener("click", buyCookie);
upgradeBtn.addEventListener("click", buyUpgrade);

function updatePage() {
  cpsSpan.textContent = stats.cps;
  cookieSpan.textContent = stats.cookieCount;
}
function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}
if (storageStats !== null) {
  stats.cookieCount = storageStats.cookieCount;
  stats.cps = storageStats.cps;
  updatePage();
}

setInterval(function () {
  stats.cookieCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);
