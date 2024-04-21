// import { accountData } from './data.js';

//Search
document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("searchInput");
  var searchBtn = document.getElementById("searchBtn");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", function (event) {
      event.preventDefault();

      var searchItem = searchInput.value.trim().toLowerCase();

      var cards = document.querySelectorAll(".card-list");
      cards.forEach(function (card) {
        var cardTitle = card
          .querySelector(".card-title")
          .textContent.toLowerCase();
        if (cardTitle.includes(searchItem)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  } else {
    console.log("Search button or input element not found."); 
  }
});


//===========================================

//Paging
const itemsPerPage = 8;
const totalPages = Math.ceil(carData.length / itemsPerPage);

function displayPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = carData.slice(startIndex, endIndex);

  const cardListContainer = document.querySelector(".row");
  cardListContainer.innerHTML = "";

  slicedData.forEach((car) => {
    const cardListItem = document.createElement("div");
    cardListItem.classList.add("card-list", "col-lg-3", "col-md-4", "col-12");

    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("mx-auto", "img-thumbnail");
    image.src = car.carPicture;
    image.alt = car.carName;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center", "mx-auto");

    const cvp = document.createElement("div");
    cvp.classList.add("cvp");

    const title = document.createElement("h5");
    title.classList.add("card-title", "font-weight-bold");
    title.textContent = car.carName;

    const price = document.createElement("p");
    price.classList.add("card-text");
    price.textContent = `$${car.carPrice}`;

    const detailsLink = document.createElement("a");
    detailsLink.href = car.carLink;
    detailsLink.target = "_blank";
    detailsLink.classList.add("btn", "details", "px-auto");
    detailsLink.textContent = "View Details";

    const addToCartLink = document.createElement("a");
    addToCartLink.href = "#";
    addToCartLink.classList.add("btn", "cart", "px-auto");
    addToCartLink.textContent = "ADD TO CART";

    cvp.appendChild(title);
    cvp.appendChild(price);
    cvp.appendChild(detailsLink);
    cvp.appendChild(document.createElement("br"));
    cvp.appendChild(addToCartLink);

    cardBody.appendChild(cvp);
    card.appendChild(image);
    card.appendChild(cardBody);
    cardListItem.appendChild(card);

    cardListContainer.appendChild(cardListItem);
  });
}

const paginationContainer = document.querySelector(".pagination");
for (let i = 1; i <= totalPages; i++) {
  const pageButton = document.createElement("button");
  // pageButton.classList.add('col-lg-2 col-md-4 col-12');
  pageButton.textContent = i;
  pageButton.addEventListener("click", () => {
    displayPage(i);
  });
  paginationContainer.appendChild(pageButton);
}

displayPage(1);

//===========================================
