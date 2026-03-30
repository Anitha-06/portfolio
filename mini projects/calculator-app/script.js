function addValue(val) {
    document.getElementById("result").value += val;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value.slice(0, -1);
}

function calculate() {
    let exp = document.getElementById("result").value;

    try {
        document.getElementById("result").value = eval(exp);
    } catch {
        alert("Invalid Input");
    }
}