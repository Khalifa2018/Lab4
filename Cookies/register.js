onload = function(){
  deleteCookie("image");
  deleteCookie("name");
  deleteCookie("color");
  deleteCookie("visitCount");
}

document.getElementById("btn").onclick = function () {
  var gender = document.getElementsByName("gender");

  var selectedGender = null;
  gender.forEach((radio) => {
    if (radio.checked) {
      selectedGender = radio.value;
    }
  });

  setCookie("image", selectedGender);

  var name = document.getElementById("name").value;

  setCookie("name", name);

  var color = document.getElementById("colorOpt").value;

  setCookie("color", color);


  setCookie("visitCount", 0);

  window.location.href = "./welcome.html";

};
