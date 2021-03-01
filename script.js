"use strict";

document.addEventListener("DOMContentLoaded", start);

function start() {
    document.querySelector("#flower").addEventListener("click", clickFlower);
}

function clickFlower() {
    document.querySelector("#flower").classList.add("pulse");
}