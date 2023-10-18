import { getNews } from "./server.js";

const newsDisplay = document.querySelector("#contentDisplay");
const resetButton = document.querySelector("#resetButton");
const loadingDisplay = document.querySelector("#loadingDisplay");
const errorDisplay = document.querySelector("#errorDisplay");

resetButton.addEventListener("click", renderToHtml);

renderToHtml();

async function renderToHtml() {
  loadingDisplay.classList.remove("hide");
  errorDisplay.classList.add("hide");
  newsDisplay.innerHTML = "";
  try {
    const response = await getNews();

    if (response.status) {
      response.data.forEach((report) => {
        const div = document.createElement("div");
        div.classList.add("content");
        div.innerHTML = `
      <h2>${report.title}</h2>
      <p class="description">
      ${report.description}
      </p>
      <p class="date">${report.date}</p>
      `;
        newsDisplay.appendChild(div);
      });
    }
  } catch (error) {
    errorDisplay.classList.remove("hide");
  }
  loadingDisplay.classList.add("hide");
}
