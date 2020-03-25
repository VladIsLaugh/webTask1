const getData = async title => {
  try {
    return await axios.get(`http://localhost:3012/api/${title}`);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("online", updateOnlineStatus);

function updateOnlineStatus() {
  if (localStorage.getItem("adminTitle") !== null) {
    createBlock();
    clearLocalStorage();
    successAlert("Новина була успішно опублікована");
  } else {
    getData("news").then(res => {
      res.data.map(item => {
        console.log(item.text);
        createBlock(item.text);
      });
    });
  }
}
getData("news").then(res => {
   res.data.map(item => {
        console.log(item.text);
        createBlock(item.title, item.text);
      });
});

function createBlock(title, text) {
  let titleAr = JSON.parse(localStorage.getItem("adminTitle"));
  let bodyAr = JSON.parse(localStorage.getItem("adminBody"));
    let figure = document.createElement("figure");
    figure.classList.add("figure-item");
    figure.innerHTML = `
        <img src="./../img/arsenal-logo-32048.png" alt="">
        <div class="figure-text-block">
            <h2>${title}</h2>
            <p>${text}</p>
        </div>`;
    document.getElementById("news").appendChild(figure);
}

function clearLocalStorage() {
  localStorage.removeItem("adminTitle");
  localStorage.removeItem("adminBody");
}
