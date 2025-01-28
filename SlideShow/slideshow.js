var pics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

var slideShowInterval = null;
var isStartedSlideShow = false;

function startSlideShow() {
  slideShowInterval = setInterval(() => {
    isStartedSlideShow = true;

    const currentImageIndex = getIndexOfCurrentImage();
    if (currentImageIndex >= pics.length - 1) {
      setImageSrc(0);
    } else {
      setImageSrc(currentImageIndex + 1);
    }
  }, 1000);
}

function stopSlideShow() {
  isStartedSlideShow = false;
  clearInterval(slideShowInterval);
}

function next() {
  const currentImageIndex = getIndexOfCurrentImage();

  if (currentImageIndex >= pics.length - 1) {
    return;
  }

  setImageSrc(currentImageIndex + 1);
}

function previous() {
  const currentImageIndex = getIndexOfCurrentImage();

  if (currentImageIndex <= 0) {
    return;
  }

  setImageSrc(currentImageIndex - 1);
}

function getIndexOfCurrentImage() {
  const imageElement = document.getElementById("image");

  const imgSrc = imageElement.src;
  const lastIndexForBackSlash = imgSrc.lastIndexOf("/");
  const imageName = imgSrc.substring(lastIndexForBackSlash + 1);

  const indexOfCurrent = pics.indexOf(imageName);

  return indexOfCurrent;
}

function setImageSrc(targetIndex) {
  const imageElement = document.getElementById("image");

  imageElement.src = pics[targetIndex];
}
