// generate Button Event Handler
const generateBtn = document.getElementById("generate-pin")
generateBtn.addEventListener("click", function () {
  const generateRandomNumber = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("pin-output").value = generateRandomNumber;

  optimize(); //new function for better look
});

// Submit Button Event Handler
document.getElementById("submit").addEventListener("click", function () {
  const generatedPin = document.getElementById("pin-output").value;
  const inputNumber = document.getElementById("numberOutput").value;
  if (generatedPin == inputNumber && generatedPin != 0) {
    const submitOutput = document.getElementById("matched");
    submitOutput.style.display = "block";
    document.getElementById("numberOutput").value = "";
    document.getElementById("pin-output").value = "";
    // when pin is matched then 3 try left removed...
    const errorCounter = document.getElementById("errorCounter");
    errorCounter.style.display = "none";
    // when pin is matched then error message will remove...
    const removeErrorMsg = document.getElementById("error");
    removeErrorMsg.style.display = 'none';
  }
  if (generatedPin != inputNumber || generatedPin == 0) {
    const submitOutput = document.getElementById("error");
    submitOutput.style.display = "block";
    document.getElementById("numberOutput").value = "";
    chanceCounter();  //new function for 3 try left
  }
});

function chanceCounter() {
  const chance = document.getElementById('count');
  const count = parseInt(chance.innerText);
  const reduceChance = count - 1;
  chance.innerText = reduceChance;
  if (chance.innerText == 0) {
    var removeSubmitBtn = document.getElementById('submit');
    removeSubmitBtn.style.display = "none";
    const errorCounter = document.getElementById("errorCounter");
    errorCounter.style.display = "none";
    const specialMessage = document.getElementById('extra-message'); //just for better look
    specialMessage.style.display = "block";
  }
  if (chance.innerText == 1) {
    alert('Hey! You have only one chance left. So becareful!');
  }
}

function optimize() {
  const removeSuccessMsg = document.getElementById("matched");
  removeSuccessMsg.style.display = "none";
  // for remove error message
  const removeErrorMsg = document.getElementById("error");
  removeErrorMsg.style.display = "none";
  // for show error Counter
  const showTry = document.getElementById("errorCounter");
  showTry.style.display = "block";
};