const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const galleryList = document.querySelector(".gallery");

// const galleryItems = images.map(({ url, alt }) => {
//   const galleryItem = document.createElement("li");
//   const galleryImage = document.createElement("img");
//   galleryImage.src = url;
//   galleryImage.alt = alt;
//   galleryImage.width = 200;
//   galleryImage.height = 200;
//   galleryItem.append(galleryImage);
//   console.log(galleryItem);
//   return galleryItem;
// });

// galleryList.append(...galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryItems = images
  .map(({ url, alt }) => `<li><img src="${url} alt="${alt}" ></li>`)
  .join("");

console.log(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", galleryItems);
