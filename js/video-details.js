import { message } from "./components/message.js";
const detailContainer = document.querySelector(".movie-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.noroff.dev/api/v1/square-eyes/" + id + "?key=352ba432-5b5d-4ccc-9aba-f2704c500cf3";

async function fetchMovie() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        createHtml(details);
    }
    catch(error) {
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchMovie();

function createHtml(details) {
    if (details.price != details.discountedPrice) {
        detailContainer.innerHTML = `
        <div class="film-show" style="background-image: url('${details.image}')"></div>
                                 <div class="film-name"><h1>${details.title}</h1>
                                    <button class="buy">
                                        <a href="checkout-page.html">BUY</a>
                                    </button>
                                 <div class="trailer">
                                 <p class="discountperiod">Last 3 days on sale!</p>
                                    <h3><i class="fa-brands fa-imdb"></i> ${details.rating} | ${details.genre} | ${details.released}</h3>
                                        <p>${details.description}<br />
                                        <span class="price"><strike>${details.price} $</strike></span>
                                        </p>
                                        <p><span class="discountprice">${details.discountedPrice} $</span></p>
                                        </div>
                                 </div>
        `
    }

    else{    detailContainer.innerHTML = `<div class="film-show" style="background-image: url('${details.image}')"></div>
                                 <div class="film-name"><h1>${details.title}</h1>
                                    <button class="buy">
                                        <a href="checkout-page.html">BUY</a>
                                    </button>
                                 <div class="trailer">
                                    <h3><i class="fa-brands fa-imdb"></i> ${details.rating} | ${details.genre} | ${details.released}</h3>
                                        <p>${details.description}<br />
                                            <span class="price">${details.price} $</span>
                                        </p>
                                        </div>
                                 </div>`;
    }
}