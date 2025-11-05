const input = document.getElementById("txt");
const btn = document.getElementById("btn");
const list = document.querySelector("ul");


btn.addEventListener("click", function () {
  if (input.value.trim()) {
    let li = document.createElement("li");
    li.textContent = input.value;
    input.value = "";
    list.appendChild(li);
  } else {
    document.body.appendChild(msg);
    msg.innerText = "Try Writing Somthing";
  }
});
