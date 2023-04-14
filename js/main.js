// Handling clicking on the sidebar icon
let sidebarLinks = document.querySelectorAll(".sidebar ul li");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    sidebarLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    setTimeout(() => {
      window.location.href = link.querySelector("a").href;
    }, 0);
  });
});

let mainInput = document.querySelector(".info input");
let cancelIcon = document.querySelector(".info .fa-solid");

// Handling The Main Input
mainInput.addEventListener("focus", (e) => {
  e.target.placeholder = "";
});
mainInput.addEventListener("blur", (e) => {
  e.target.placeholder = "Type a Keyword";
});
mainInput.addEventListener("input", (e) => {
  cancelIcon.style.display = e.target.value === "" ? "none" : "inline-block";
});
cancelIcon.addEventListener("click", () => (mainInput.value = ""));

// Handle switch Div

document.addEventListener("click", (e) => {
  let switchContainer = e.target.closest(".icon-switch");
  if (!switchContainer) return;

  let switchDiv = switchContainer.querySelector(".switch");
  let icon = switchDiv.querySelector("i");

  switchDiv.classList.toggle("move");
  icon.classList.toggle("fa-check");
  icon.classList.toggle("fa-xmark");
  if (switchDiv.classList.contains("move")) {
    switchContainer.style.backgroundColor = "#ccc";
  } else {
    switchContainer.style.backgroundColor = "#0d69d5";
  }
});

// When focus on the Input
let settingsInput = document.querySelectorAll(
  ".settings-container .input input"
);

settingsInput.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.target.parentElement.querySelector("i").style.color = "#000";
  });
  input.addEventListener("blur", (e) => {
    e.target.parentElement.querySelector("i").style.color = "#888";
  });
});

// Handle Clicking on the label and the div border
let planInput = document.querySelectorAll(".plans label");

planInput.forEach((input) => {
  input.addEventListener("click", (e) => {
    let input = e.target.parentElement.querySelector("input");
    input.checked = true;
  });
});

let boxBordersDiv = document.querySelectorAll(".boxBorder .box");

boxBordersDiv.forEach((div) => {
  div.addEventListener("click", (e) => {
    boxBordersDiv.forEach((div) => {
      div.classList.remove("boxBorder");
    });
    div.classList.add("boxBorder");
  });
});

// Handling the widget input
let widgetsInput = document.querySelectorAll(".showWidget label");

widgetsInput.forEach((label) => {
  label.addEventListener("click", (e) => {
    let input = e.target.parentElement.querySelector("input");
    if (input.checked) {
      input.checked = false;
    } else {
      input.checked = true;
    }
  });
});
