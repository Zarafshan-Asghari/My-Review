"use strict";
// -----------------( selecting elements )--------------

let nextBtn = document.getElementById("next-btn");
let preBtn = document.getElementById("pre-btn");
let fullNames = document.getElementById("name");
let job = document.getElementById("job");
let reviwe = document.getElementById("description");
let img = document.getElementById("image");
let randomBtn = document.getElementById("random-btn");
let currentItem = 0;

let newName = "";
let newJob = "";
let newDescrip = "";
let newImg = "";
// -----------------( declare an array containes data )--------------
let arr = [
  {
    firstName: "susan smith",
    job: "the boss",
    img: "images/customer-3.jpg",
    description:
      " sit amet consectetur adipisicing elit. Blanditiis recusandae facere aspernatur fugit velit consequuntur inventore aperiam consequatur temporibus suscipit perspiciatis, nesciunt vitae minus, aliquid harum odio dolorum. Quas, quo",
  },
  {
    firstName: "steve johnson",
    job: "the tester",
    img: "images/customer-2.jpg",
    description:
      "  consectetur adipisicing elit. Blanditiis recusandae facere aspernatur fugit velit consequuntur inventore aperiam consequatur temporibus suscipit perspiciatis, nesciunt vitae minus, aliquid harum odio dolorum. Quas, quo",
  },
  {
    firstName: "sara jones",
    job: "ui desighner",
    img: "images/customer-1.jpg",

    description:
      "amet  adipisicing elit. Blanditiis recusandae facere aspernatur fugit velit consequuntur inventore aperiam consequatur temporibus suscipit perspiciatis, nesciunt vitae minus, aliquid harum odio dolorum. Quas, quo",
  },
  {
    firstName: "bill parker",
    job: "backend developer",
    img: "images/customer-7.jpg",
    description:
      " adipisicing elit. Blanditiis recusandae facere aspernatur fugit velit consequuntur inventore aperiam consequatur temporibus suscipit perspiciatis, nesciunt vitae minus, aliquid harum odio dolorum. Quas, quo",
  },
  {
    firstName: "isabila anderson ",
    job: "front developer",
    img: "images/customer-6.jpg",
    description:
      " adipisicing elit. Blanditiis recusandae facere aspernatur fugit velit consequuntur inventore aperiam consequatur temporibus suscipit perspiciatis, nesciunt vitae minus, aliquid harum odio dolorum. Quas, quo",
  },
];

function setValue(index) {
  let myReview = arr[index];
  fullNames.textContent = myReview.firstName;
  job.textContent = myReview.job;
  reviwe.textContent = myReview.description;
  image.src = myReview.img;
}
window.addEventListener("DOMContentLoaded", function () {
  setValue(currentItem);
});

// -----------------------------(next btn)---------------------

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem == arr.length) currentItem = 0;
  setValue(currentItem);
});
// -----------------------( pre btn  )-------------------------

preBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) currentItem = arr.length;
  setValue(currentItem);
});
// ---------------------(display cards random)---------------------
function random() {
  return Math.floor(Math.random() * arr.length);
}

randomBtn.addEventListener("click", function () {
  setValue(random());
});
