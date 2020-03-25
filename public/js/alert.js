var alertButton = document.querySelector(".funs-btn");
var alertElem = document.querySelector('.alert')
let alertTitle = document.querySelector('.alert__title');

function closeAlert() {
    alertElem.classList.remove("active");
}

function successAlert(msg){
    alertElem.classList.add("active");
    alertTitle.textContent = msg;
    alertElem.style.backgroundColor = "#00C851"; 
    setTimeout(closeAlert, 1500);
}

function noInternetAlert(msg){
    alertElem.classList.add("active");
    alertTitle.textContent = msg;
    alertElem.style.backgroundColor = "#ffbb33";
    setTimeout(closeAlert, 1500);
}

function noValidAlert(msg){
    alertElem.classList.add("active");
    alertTitle.textContent = msg;
    alertElem.style.backgroundColor = "#ff4444";
    setTimeout(closeAlert, 1500);
}
