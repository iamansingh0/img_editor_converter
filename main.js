var img;
window.onload = function () {
  img = new Foto();
};

var input = document.getElementById("foto-file");
const uploadFile = function () {
  const fileUpload = document.getElementById("fileUpload");
  if (fileUpload) {
    fileUpload.addEventListener("click", () => {
      input.click();
    });
  }
};

function makeGrayScale() {
    img.grayscale();
}
function makeBrighter() {
    img.makeBright();
}
function makeDark() {
    img.makeDark();
}
function makeBlur() {
    img.applyBlurFilter();
}
function makeEmboss() {
    img.applyEmbossFilter();
}
function makeSharp() {
    img.applySharpFilter();
}
function download() {
    img.export();
}

function main() {
    uploadFile();
}

main();