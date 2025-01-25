import './style.css'

let input = document.getElementById("input");
let btns = document.getElementsByClassName("btn");
let btnResult = document.getElementById("btn-equal");

const operation = () => {
  for (let btn of btns) {
    btn.addEventListener("click", () => {
      if (
        btn.textContent !== "=" && input.textContent.length < 13 && input.textContent != 0
      ) {
        input.textContent += btn.textContent;
      } else if (btn.textContent !== "=" && input.textContent.length < 13) {
        input.textContent = btn.textContent;
      }
    });
  }
};
operation();

btnResult.addEventListener("click", () => {
  let replacement = "";
  if (input.textContent.includes("x")) {
    replacement = input.textContent.replace("x", "*");
    input.textContent = eval(replacement);
  } else{
    let result = eval(input.textContent);
    input.textContent = result;
  }
  
});





// btnResult.addEventListener("click", () => {
  
//     if (input.textContent.includes("x")) {
//       replacement = input.textContent.replace("x", "*");
//       let result = new Function("return" + input.textContent.trim())();
//       input.textContent = result;
//     } else {
//       let result = new Function("return " + input.textContent.trim())();
//       input.textContent = result;
//     }
//   });




input.addEventListener("click", () => {
  input.textContent = 0;
});
