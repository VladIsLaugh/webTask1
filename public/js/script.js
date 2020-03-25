let burger = document.querySelector(".burger");
let modal = document.querySelector(".modal");
let container = document.querySelector(".modal-container");
let btn = document.querySelector(".menu-btn");

burger.addEventListener("click", function() {
    
  if (!modal.classList.contains("modal-active")) {
    container.classList.add("container-active");
    modal.classList.add("modal-active");
    btn.classList.add("translate-burger");
    btn.classList.add("menu-btn-delete");  
  } else {
    container.classList.remove("container-active");
    modal.classList.remove("modal-active");
    btn.classList.remove("translate-burger");
    btn.classList.remove("menu-btn-delete");  
  }
});




