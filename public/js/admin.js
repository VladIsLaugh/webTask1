
let img = document.querySelector(".new-img");
let title = document.querySelector(".input-title");
let textArea = document.querySelector(".input-body");
let submit = document.querySelector(".submit");
let warning = document.querySelector(".warning");

let titleAr = [];
let bodyAr = [];

document.addEventListener("DOMContentLoaded", function() {
  updateOnlineStatus();
});

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

function updateOnlineStatus() {
    if (navigator.onLine && localStorage.getItem("adminTitle")!== null) {
      clearLocalStorage();
      successAlert("Новина була успішно опублікована");
    }
  }

submit.onclick = function(e){
    if (validation(e)) {
        if ((isOnline())) {
          pushOnServer();
          successAlert("Новина була успішно опублікована");
        } else {
          setInLocalStorage();
          noInternetAlert("Відсутній інтернет. Новина буде публікована після підключення інтернету");
        }
      }
      else{
        noValidAlert("Введіть дані");
      }
}

function validation(e) {
    e.preventDefault();
    title.value = title.value.trim();
    textArea.value = textArea.value.trim();
    if (title.value && textArea.value){
        success();
        return true;
    }
    else{
        failed();
        return false;
    }
  }

function success(){
    warning.textContent = "";
    title.classList.remove("warning-field");
    textArea.classList.remove("warning-field");
}

function failed(){
    warning.textContent = "Oops";
    if (!title.value) title.classList.add("warning-field");
    else title.classList.remove("warning-field");
    if (!textArea.value) textArea.classList.add("warning-field");
    else textArea.classList.remove("warning-field"); 
}


const getData = async title => {
  try {
    return await axios.get(
      `http://localhost:3012/api/${title}`
    );
  } catch (error) {
    console.log(error);
  }
};

const sendData = async (title, data) => {
  console.log(data);
  try {
    return await axios.post(
      `http://localhost:3012/api/${title}`,
      data
    ).then(function (response) {
      console.log(response);
    })
  } catch (error) {
    console.log(error);
  }
};



function pushOnServer() {
  let temp = {
    title: title.value,
    text: textArea.value
  }
  sendData('news', temp).then((req, res)=>{
    console.log(res)  
  })
    title.value = "";
    textArea.value = "";
  }

  function setInLocalStorage() {
    titleAr.push(title.value);
    bodyAr.push(textArea.value);
    localStorage.setItem("adminTitle", JSON.stringify(titleAr));
    localStorage.setItem("adminBody", JSON.stringify(bodyAr));
    title.value = "";
    textArea.value = "";
  }
  function clearLocalStorage() {
    localStorage.removeItem('adminTitle');
    localStorage.removeItem('adminBody');
    titleAr = [];
    bodyAr = [];
  }

function isOnline() {
    return window.navigator.onLine;
  }
  
