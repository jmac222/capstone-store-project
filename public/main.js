

const url = "/api/v1";
const container = document.querySelector(".container");

async function fetchProducts() {
  try {
    const {
      data: { products }
      
    } = await axios.get(`${url}/upload`);
    
    const tempProducts = products.map(each => {
      return `<article class="product">
      <img src="${each.image}" alt="${each.name}" class="img" />
      <footer>
      <p>${each.name}</p>
      <span>${each.price}</span>
      </footer>
      </article>`;
    })
    .join("");
    container.innerHTML = tempProducts;
  } catch (error) {
   console.log(error);
  }
}

fetchProducts();