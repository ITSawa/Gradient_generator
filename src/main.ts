document
  .getElementById("generate-gradient")
  .addEventListener("click", function () {
    const type = document.getElementById("gradient-type").value;
    const element = document.getElementById("gradient-element").value;
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const angle = document.getElementById("angle").value;

    let gradient = "";
    if (type === "linear") {
      gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    } else if (type === "radial") {
      gradient = `radial-gradient(${color1}, ${color2})`;
    }

    const previewBox = document.getElementById("gradient-preview-box");
    if (element === "text") {
      previewBox.style.background = "none";
      previewBox.style.color = "transparent";
      previewBox.style.backgroundImage = gradient;
      previewBox.style.webkitBackgroundClip = "text";
      previewBox.style.backgroundClip = "text";
    } else if (element === "div") {
      previewBox.style.background = gradient;
      previewBox.style.color = "initial";
      previewBox.style.backgroundImage = "none";
    }

    const cssCode = document.getElementById("css-code");
    cssCode.textContent = `background: ${gradient};`;
  });
