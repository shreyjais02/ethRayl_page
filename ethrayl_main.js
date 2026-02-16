let dateElement = document.getElementById("currentDate");
let options = {day: 'numeric', month: 'short'};
dateElement.textContent = new Date().toLocaleDateString('en-US', options);