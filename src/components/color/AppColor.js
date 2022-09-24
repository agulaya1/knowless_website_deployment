const changeColor = (toggleValue, id, index) => {
  // console.log(toggleValue[index]);

  let appPage = document.getElementById("app-page");
  let navBar = document.getElementById("navbar-id");

  if (toggleValue[index] === true) {
    appPage.style.background = "rgb(232, 223, 209)";
    navBar.style.background = "rgb(232, 223, 209)";
  } else if (id === "ghostId") {
    // appPage.style.backgroundImage = "linear-gradient(20deg, rgb(115, 143, 209), 40%, rgb(245, 203, 225))";
    appPage.style.backgroundColor = "rgb(178, 186, 221)";
    navBar.style.backgroundColor = "rgb(133, 149, 219)";
  } else if (id === "seasonsId") {
    appPage.style.backgroundColor = "rgb(158, 195, 144)";
    navBar.style.backgroundColor = "rgb(116, 168, 98)";
  } else if (id === "fluorescentId") {
    appPage.style.backgroundColor = "rgb(179, 178, 239)";
    navBar.style.backgroundColor = "rgb(125, 124, 214)";
  } else if (id === "flutterId") {
    // document.body.style.background = "linear-gradient(205deg, rgba(130, 71, 245, 0.5), 10%, rgb(220, 152, 167), rgba(255, 165, 88, 0.8))";
    appPage.style.backgroundColor = "rgb(224, 193, 154)";
    navBar.style.backgroundColor = "rgb(216, 163, 98)";
  } else if (id === "spaceId") {
    appPage.style.backgroundColor = "rgb(186, 202, 218)";
    navBar.style.backgroundColor = "rgb(131, 157, 205)";
  } else if (id === "thoughtsId") {
    appPage.style.backgroundColor = "rgb(209, 206, 249)";
    navBar.style.backgroundColor = "rgb(143, 136, 224)";
  } else if (id === "pink_hoodieId") {
    appPage.style.backgroundColor = "rgb(223, 197, 230)";
    navBar.style.backgroundColor = "rgb(215, 158, 231)";
  } else if (id === "pushId") {
    appPage.style.backgroundColor = "rgb(178, 167, 196)";
    navBar.style.backgroundColor = "rgb(151, 131, 181)";
  }
};


export default changeColor;