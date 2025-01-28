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
};
