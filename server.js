import { renderToHtml } from "./app.js";
export const news = [
  {
    title: "Customizable encompassing extranet",
    description:
      "Truth part experience clear responsibility. Edge hot discover military other. It long sister.",
    date: "2020-01-01T06:30:30",
  },
  {
    title: "Multi-lateral uniform hierarchy",
    description:
      "American get little program foot write. Any end charge cause become idea. Wife no myself much young.",
    date: "2020-01-03T02:50:50",
  },
  {
    title: "Proactive attitude-oriented portal",
    description:
      "Together this national fund sign. Write one program.\nForget news quickly report focus. Production she finish listen return hold hot politics. Natural ten one these.",
    date: "2020-01-05T22:34:34",
  },
  {
    title: "Versatile explicit orchestration",
    description:
      "Drug think assume Mr. Off crime participant popular treatment.\nPlant around purpose step remember stand toward. Tv weight go.",
    date: "2020-01-12T14:41:41",
  },
];

export async function resetLoad() {
  return new Promise((resolve, reject) => {
    if (news)
      resolve(() => {
        loadingDisplay.classList.remove("hide");
        display.innerHTML = ``;
        setTimeout(() => {
          loadingDisplay.classList.add("hide");
          renderToHtml();
        }, 5000);
      });
    else
      reject(() => {
        loadingDisplay.classList.remove("hide");
        display.innerHTML = ``;
        setTimeout(() => {
          loadingDisplay.classList.add("hide");
          display.innerHTML = ``;
        }, 5000);
      });
  });
}
