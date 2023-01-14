const image = [
  "1.jpg",
  "2.jpg",
  "7.jpg",
  "12.jpg",
  "13.jpg",
];

const chosenImage = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
