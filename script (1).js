function findResult() {
let roll = document.getElementById("roll").value;
let number = document.getElementById("number").value;
let reg = document.getElementById("reg").value;

let student = students.find(s =>
s.roll === roll &&
s.number === number &&
s.reg === reg
);

if (student) {
localStorage.setItem("student", JSON.stringify(student));
window.location.href = "result.html";
} else {
alert("Result not found");
}
}
