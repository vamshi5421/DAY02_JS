const count = document.querySelector(".count");
const btn = document.querySelector(".reset");


getHexCode = () => {
    const color = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#"+color;
    count.innerHTML = "#" + color;
}

btn.addEventListener("click", getHexCode);