const addButton = document.getElementById("add");
const enterButton = document.getElementById("enter");
const popup = document.getElementById("popup-container");

var readingButton, finishedButton, allButton, tbrButton;

addButton.addEventListener("click", () => {
    popup.classList.add("show");
});

enterButton.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "#9EA9B1";
});