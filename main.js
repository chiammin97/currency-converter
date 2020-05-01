const $indianRs = document.getElementById("indianRs");
const $dong = document.getElementById("dong");
const $lankanRs = document.getElementById("lankanRs");
const $yuan = document.getElementById("yuan");

const $sgdInd = document.getElementById("sgdInd");
const $sgdViet = document.getElementById("sgdViet");
const $sgdLankan = document.getElementById("sgdLankan");
const $sgdYuan = document.getElementById("sgdYuan");

const $sgdIndMth = document.getElementById("sgdIndMth");
const $sgdVietMth = document.getElementById("sgdVietMth");
const $sgdLankanMth = document.getElementById("sgdLankanMth");
const $sgdYuanMth = document.getElementById("sgdYuanMth");

//Find out how to shorten above^

$indianRs.addEventListener("input", function () {
  const ind = parseInt($indianRs.value);
  const sgInd = parseInt(1867.68 * ind);
  const indMth = parseInt(sgInd / 12);

  $sgdInd.value = sgInd;
  $sgdIndMth.value = indMth;
});

$dong.addEventListener("input", function () {
  const don = parseInt($dong.value);
  const sgViet = parseInt(0.000061 * don);
  const vietMth = parseInt(sgViet / 12);

  $sgdViet.value = sgViet;
  $sgdVietMth.value = vietMth;
});

$lankanRs.addEventListener("input", function () {
  const lan = parseInt($lankanRs.value);
  const sgLan = 0.0074 * lan;
  const lanMth = parseInt(sgLan / 12);

  $sgdLankan.value = sgLan;
  $sgdLankanMth.value = lanMth;
});

$yuan.addEventListener("input", function () {
  const yuan = parseInt($yuan.value);
  const sgYuan = 0.2 * yuan;
  const yuanMth = parseInt(sgYuan / 12);

  $sgdYuan.value = sgYuan;
  $sgdYuanMth.value = yuanMth;
});
