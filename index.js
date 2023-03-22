const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementById("menu");
const logoBtn = document.getElementById("logo-btn");

let temp = false;

const handleClick = () => {
  temp = !temp;

  if (temp) {
    btnMobile.classList =
      "cursor-pointer desktop:hidden animate__animated animate__heartBeat text-[calc(1rem+0.5em)]";
    logoBtn.className = "bi bi-x-lg";
    menu.style.cssText = "transition: linear 0.3s; right: 0px";
  } else {
    btnMobile.classList =
      "cursor-pointer desktop:hidden animate__animated animate__fadeIn text-[calc(1rem+0.5em)]";
    logoBtn.className = "bi bi-list";
    menu.style.cssText = "transition: linear 0.3s; right: -100%";
  }
};

btnMobile.addEventListener("click", handleClick);
