onload = function () {
  var images = document.getElementsByTagName("img");

  let currentLightingGroup = 0;
  var interval = setInterval(() => {
    currentLightingGroup = nextMarble(currentLightingGroup);
  }, 1000);

  for (let index = 0; index < images.length; index++) {
    const img = images[index];
    img.onmouseover = function () {
      clearInterval(interval);
    };

    img.onmouseleave = function () {
      interval = setInterval(() => {
        currentLightingGroup = nextMarble(currentLightingGroup);
      }, 1000);
    };
  }
};

function nextMarble(currentLightingGroup) {
  if (currentLightingGroup === 0) {
    changeGroup(1, true);
    changeGroup(0, false);

    currentLightingGroup = 1;
  } else {
    changeGroup(1, false);
    changeGroup(0, true);

    currentLightingGroup = 0;
  }

  return currentLightingGroup;
}

function changeGroup(targetGroup, toLighting) {
  var imageSrc = "./marble1.jpg";
  if (toLighting) {
    imageSrc = "./marble3.jpg";
  }
  var images = document.getElementsByClassName(targetGroup);
  for (let index = 0; index < images.length; index++) {
    images[index].src = imageSrc;
  }
}
