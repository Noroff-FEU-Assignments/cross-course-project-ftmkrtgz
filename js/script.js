import { message } from "./components/message.js";

const resultsContainer = document.querySelector(".products");
const categories = document.querySelector(".kinds");
const baseUrl = "https://cors.noroff.dev/www.gulce.no/wp-json/wc/store/products?per_page=100";


async function getProducts(url) {
    try {
        const response = await fetch(url);
        const products = await response.json();
        products.forEach(function (product) {
            resultsContainer.innerHTML +=
                `<a href="video-page-showing.html?id=${product.id}">
                <div class="product">
                <h2>${product.name}</h2>
                <img src="${product.images[0].src}" alt="${product.name}">
                <div>${product.price_html}</div>
                </div>
                </a>`;
        })
    }
    catch (error) {
        postersMenu.innerHTML = message("error", error);
        }
}
getProducts(baseUrl);


categories.onchange = function (event) {
            let newUrl;
            if (event.target.value === "true") {
                newUrl = "https://cors.noroff.dev/www.gulce.no/wp-json/wc/store/products?featured=true";
            }
            else {
                const categoryChosen = event.target.value;
                newUrl = `https://cors.noroff.dev/www.gulce.no/wp-json/wc/store/products?category=${categoryChosen}`
            }
            resultsContainer.innerHTML = "";
            getProducts(newUrl);
        
    }


window.addEventListener("load", ()=> {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader")
    })
})



