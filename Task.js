let Designsection = document.querySelector(".Designsection");
let isShow = true;

function showHideDesignsection() {
  if (isShow) {
    Designsection.style.display = "none";
    isShow = false;
  } else {
    Designsection.style.display = "block";
    isShow = true;
  }
}
// let Designsection = document.querySelector(".Designsection");
// function showHideDesignsection() {
//   Designsection.classList.toggle("hide");
// }
// *********************************************************************************************************
let Ordersection = document.querySelector(".Ordersection");
let isShow1 = true;

function showHideOrdersection() {
  if (isShow1) {
    Ordersection.style.display = "none";
    isShow1 = false;
  } else {
    Ordersection.style.display = "block";
    isShow1 = true;
  }
}


// *********************************************************************************************************
let Proofsection = document.querySelector(".Proofsection");
let isShow2 = true;

function showHideProofsection() {
  if (isShow2) {
    Proofsection.style.display = "none";
    isShow2 = false;
  } else {
    Proofsection.style.display = "block";
    isShow2 = true;
  }
}


// *********************************************************************************************************
let Revisionsection = document.querySelector(".Revisionsection");
let isShow3 = true;
function showHideRevisionsection() {
  if (isShow3) {
   Revisionsection.style.display = "none";
    isShow3 = false;
  } else {
    Revisionsection.style.display = "block";
    isShow3 = true;
  }
}