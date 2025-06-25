/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/
const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we look for.
   ===================
*/
addEventListener("DOMContentLoaded", ()=>{

const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links"]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getVideo = document.querySelectorAll("video"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1 element", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of 'Main Site Links'", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is at least one embedded video", () => {
  const videoElementCount = 
      getIFrame.length + getVideo.length;
  expect(videoElementCount).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
  
test("There are at least 100 words on the page", () => {
  const wordsArray = getWords.split(/\s+/).filter(
    word => word.length > 0
  );
  expect(wordsArray.length).toBeGreaterThanOrEqual(100);
});

injectAsideAndStyle();
const console = document.getElementById("tests");
prettify.toHTML(run(), console);

});

function injectAsideAndStyle() {
  const aside = document.createElement("aside");
    aside.setAttribute("id", "tests");
    aside.setAttribute("aria-label", "Test Readout.");
    aside.setAttribute("aria-live", "polite");
    aside.setAttribute("style", "overflow:auto");

  const style = document.createElement("style");
  style.innerText = `
    .jest-lite-report__status--pass {
      background: var(--color-pass);
    }
    .jest-lite-report__errors { display:none }
  `;
  
   document.body.appendChild(aside);
   document.body.appendChild(style);
}