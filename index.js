const button = document.getElementById("btn");
const btncontinue = document.getElementsByName("continuebtn");
const cardnumstrng = /[a-z]/;
const nameInput = document.getElementById("nameinput");
const cardNumInput = document.getElementById("cardnuminput");
const MonthInput = document.getElementById("monthinput");
const yearInput = document.getElementById("yearinput");
const cvcInput = document.getElementById("cvcinput");
const right = document.getElementById("right");
const check = document.getElementById("check");
const thankyouCard = document.getElementById("thankyou-card");

//error checks
const nameError = document.getElementById("nameerror");
const cardNumError = document.getElementById("cardnumerror");
const myYearError = document.getElementById("mmyyerror");
const cvcError = document.getElementById("cvcerror");

button.addEventListener("click", main);

function main() {
    if (nameOnCard.value == "") {
        nameError.style.display = "block";
        nameInput.style.display = "red";
    }

    if (cardNumInput.value == "") {
        nameError.style.display = "block";
        nameInput.style.display = "red";
    }

    if (MonthInput.value == "") {
        myYearError.style.display = "block";
        MonthInput.style.borderColor = "red";
    }

    if (yearInput.value == "") {
        myYearError.style.display = "block";
        yearInput.style.borderColor = "red";
    }

    if (cvcInput.value == "") {
        cvcError.style.display = "block";
        cvcInput.style.borderColor = "red";
      } 
    else {
    right.style.display = "none";

    check.src = "./images/icon-complete.svg";
    check.style.display = "block";
    thankyouCard.style.display = "block";
    }
}



nameInput.addEventListener("input", removeError);
cardNumInput.addEventListener("input", removeError);
MonthInput.addEventListener("input", removeError);
yearInput.addEventListener("input", removeError);
cvcInput.addEventListener("input", removeError);

function removeError() {
    if (nameInput.value !== "") {
      nameError.style.display = "none";
      nameInput.style.borderColor = "hsl(279, 6%, 55%)";
    }
  
    if (cardNumInput.value !== "") {
      cardNumError.style.display = "none";
      cardNumInput.style.borderColor = "hsl(279, 6%, 55%)";
    }
  
    if (MonthInput.value !== "") {
      myYearError.style.display = "none";
      MonthInput.style.borderColor = "hsl(279, 6%, 55%)";
    }
  
    if (yearInput.value !== "") {
      myYearError.style.display = "none";
      yearInput.style.borderColor = "hsl(279, 6%, 55%)";
    }
  
    if (cvcInput.value !== "") {
      cvcError.style.display = "none";
      cardNumInput.style.borderColor = "hsl(279, 6%, 55%)";
    }
}