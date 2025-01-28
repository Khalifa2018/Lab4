onload = function () {
  const images = document.getElementsByTagName("img");

  let currentMovingIndex = 0;
  var interval = setInterval(() => {
    currentMovingIndex = nextMarble(currentMovingIndex);
  }, 1000);

  for (let index = 0; index < images.length; index++) {
    const img = images[index];
    img.onmouseover = function () {
      clearInterval(interval);
    };

    img.onmouseleave = function () {
      interval = setInterval(() => {
        currentMovingIndex = nextMarble(currentMovingIndex);
      }, 1000);
    };
  }
};

function nextMarble(currentMovingIndex) {
  const images = document.getElementsByTagName("img");

  if (currentMovingIndex >= images.length - 1) {
    images[0].src = "./marble3.jpg";
    images[images.length - 1].src = "./marble1.jpg";

    currentMovingIndex = 0;
  } else {
    images[currentMovingIndex].src = "./marble1.jpg";

    images[currentMovingIndex + 1].src = "./marble3.jpg";
    currentMovingIndex += 1;
  }

  return currentMovingIndex;
}
