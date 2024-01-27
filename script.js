import { clearCanvas } from "./algorithm.js";
import { charecters } from "./charecter.js";
var input = document.getElementById("input");
input.addEventListener("change", (e) => {
  clearCanvas();
  const text = e.target.value;
  for (let i = 0; i < text.length; i++) {
    let index = text.charCodeAt(i);
    index = index < 97 ? index + 32 - 97 : index - 97;
    if (index < 0 || index > 25) continue;
    charecters[index](i);
  }
});
