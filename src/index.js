import "./index.css";
import logo from "../logo/js-logo.png";

const Imge = document.createElement("img");
Imge.src = logo;

let des = document.createElement("textarea");
des.style.width = "300px";
des.style.height = "140px";

let btn = document.createElement("elem");
btn.innerHTML = "Print";
btn.style.width = "100px";
btn.style.fontSize = "20px";
btn.style.marginLeft = "10px";
btn.style.cursor = "pointer";

btn.onclick = function () {
  content.innerHTML = null;

  let h1 = document.createElement("h1");

  h1.innerText = des.value;
  h1.style.textAlign = "center";

  document.getElementById("content").append(h1);
};

document.getElementById("root").appendChild(Imge);
document.getElementById("foot").append(des, btn);
