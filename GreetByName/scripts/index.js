"use strict";
console.log("Hello from index.js");

window.onload = init;

function init(){
    console.log("Hello from inside init")
    const theGreetButton= document.getElementById("greetBtn3");
    theGreetButton.onclick = onGreetUserBtnClicked;


}

function onGreetUserBtnClicked() {
  const textField = document.getElementById("nameField");

  let theValue = textField.value;

  let theValueInString = `Hello ${theValue}`;
    // either line 19 or line 20 both works fine
  let theValueInStringAnotherWay = "Hello " + theValue;

  console.log(theValue);

  console.log(theValueInString);

  alert(theValueInString);

}