const galleryEl = document.querySelector(".gallery");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let newImage = [];
images.forEach(({ url, alt }) => {
  const newItem = `<li><img src="${url}, alt=${alt}"></li>`;
  newImage += newItem;
});
// newImage.classList.add("item");
galleryEl.insertAdjacentHTML("afterbegin", newImage);

console.log(galleryEl);
