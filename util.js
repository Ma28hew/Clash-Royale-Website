// Quiz

// Variables to Store HTML Elements


let searchBtnElement = document.getElementById("btn");
let AnsEl = document.getElementById("Ans");
let Q1El = document.getElementById("Q1");
let Q2El = document.getElementById("Q2");
let Q3El = document.getElementById("Q3");
let Q4El = document.getElementById("Q4");

// Event Listeners
searchBtnElement.addEventListener("click", results);

// Event Functions
function results() {
    let w = 0;
    let Q1 = Q1El.value
    let Q2 = Q2El.value
    let Q3 = Q3El.value
    let Q4 = Q4El.value
    Q1 = Q1.toLowerCase();
    Q2 = Q2.toLowerCase();
    Q3 = Q3.toLowerCase();
    Q4 = Q4.toLowerCase();

    if (Q1 === "fireball" || Q1 === "big spell") {
        w++
        Q1El.style.borderColor = "green";
        Q1El.style.borderWidth = "6px";

    } else {
        Q1El.style.borderColor = "red";
        Q1El.style.borderWidth = "6px";
    }

    if (Q2 === "hogs" || Q2 === "royal hogs") {
        w++
        Q2El.style.borderColor = "green";
        Q2El.style.borderWidth = "6px";
    } else {
        Q2El.style.borderColor = "red";
        Q2El.style.borderWidth = "6px";
    }

    if (Q3 === "split lane push") {
        w++
        Q3El.style.borderColor = "green";
        Q3El.style.borderWidth = "6px";
    } else {
        Q3El.style.borderColor = "red";
        Q3El.style.borderWidth = "6px";
    }

    if (Q4 === "magic archer") {
        w++
        Q4El.style.borderColor = "green";
        Q4El.style.borderWidth = "6px";
    } else {
        Q4El.style.borderColor = "red";
        Q4El.style.borderWidth = "6px";
    }
    AnsEl.innerHTML = w / 4 * 100 + "%";

}