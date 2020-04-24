const $indianRs = document.getElementById("indianRs");
const $dong = document.getElementById("dong");
const $lankanRs = document.getElementById("lankanRs");
const $yuan = document.getElementById("yuan");

const $sgdInd = document.getElementById("sgdInd");
const $sgdViet = document.getElementById("sgdViet");
const $sgdLankan = document.getElementById("sgdLankan");
const $sgdYuan = document.getElementById("sgdYuan");

$indianRs.addEventListener("input", function () {
  const ind = parseInt($indianRs.value);
  const sgInd = 1867.68 * ind;
  $sgdInd.value = sgInd;
});

$dong.addEventListener("input", function () {
  const don = parseInt($dong.value);
  const sgViet = 0.000061 * don;
  $sgdViet.value = sgViet;
});

$lankanRs.addEventListener("input", function () {
  const lan = parseInt($lankanRs.value);
  const sgLan = 0.0074 * lan;
  $sgdLankan.value = sgLan;
});

$yuan.addEventListener("input", function () {
  const yuan = parseInt($yuan.value);
  const sgYuan = 0.2 * yuan;
  $sgdYuan.value = sgYuan;
});
