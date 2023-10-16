import { news, resetLoad } from "./server.js";

const display = document.querySelector("#contentDisplay");
const resetButton = document.querySelector("#resetButton");
const loadingDisplay = document.querySelector("#loadingDisplay");
renderToHtml();

resetButton.addEventListener("click", resetLoad);

export function renderToHtml() {
  news.forEach((report) => {
    const divElement = document.createElement("div");
    divElement.classList.add("content");
    divElement.innerHTML = `
      <h2>${report.title}</h2>
        <p class="description">
         ${report.description}
        </p>
        <p class="date">${report.date}</p>
    `;
    display.appendChild(divElement);
  });
}
