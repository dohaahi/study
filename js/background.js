const image = [
  "1.jpg",
  "2.jpg",
  "5.jpg",
  "6.jpg",
];

const chosenImage = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//image를 appendChild를 이용해 HTML에 넣어줌
document.body.appendChild(bgImage);