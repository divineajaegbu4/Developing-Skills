console.log("Another customer approaching")

fetch("https://randomuser.me/api/?result=1")
    .then((response) => response.json())
    .then(data => console.log("data", data))

console.log("Our valued customer, please give us a moment while I get some information task from the records debts")