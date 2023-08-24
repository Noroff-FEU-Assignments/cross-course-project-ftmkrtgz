import { message } from "./components/message.js";
const detailContainer = document.querySelector(".movie-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://cors.noroff.dev/www.gulce.no/wp-json/wc/store/products" + "/" + id + "?per_page=100";

async function getSingleProduct() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        createHtml(details);
      
    }
    catch(error) {
        detailContainer.innerHTML = message("error", error);
    }
    
}

getSingleProduct();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="film-show" style="background-image:url('${details.images[0].src}')"></div>
    <div class="film-name"><h1>${details.name}</h1>
                                    <button class="buy">
                                        <a href="checkout-page.html">BUY</a>
                                    </button>
                                 <div class="trailer">
                                 <h3><i class="fa-brands fa-imdb"></i> ${details.attributes[0].terms[0].name} | ${details.categories[0].name} | ${details.attributes[1].terms[0].name}</h3>
                                        <p>${details.description}<br />
                                            <span class="price"> ${details.price_html}</span>
                                        </p>
                                        </div>
                                 </div>
    `
}