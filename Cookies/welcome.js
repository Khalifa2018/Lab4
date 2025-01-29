onload = function () {



  var name = getCookie("name");

  var color = getCookie("color");

  var visitCount = Number(getCookie("visitCount"));
  setCookie("visitCount", visitCount + 1);

  var display = (document.getElementById(
    "display"
  ).innerHTML = `Welcome <span style="color:${color}">${name}</span>  you have visited this site ${
    visitCount + 1
  } times.`);

  var image = getCookie("image");

  var imageElement = document.getElementById("img");

  imageElement.src = image;
};

