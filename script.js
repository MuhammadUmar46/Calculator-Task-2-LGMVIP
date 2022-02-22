let outputNumber = document.getElementById("output-number");

function displayNum(number) {
    outputNumber.value += number;
}

function calculate() {
    try {
        outputNumber.value = eval(outputNumber.value);
    }
    catch (err) {
        alert("Invalid");
    }
}

function Clear() {
    outputNumber.value = "";
}

function del() {
    outputNumber.value = outputNumber.value.slice(0, -1)
}