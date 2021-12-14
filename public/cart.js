

const url = "/api/v1";
const container = document.querySelector(".container");




async function quantityAdd(id, quant) {
    try{
        let x = +quant + 1
        
        // document.location.reload(true)
       await axios.put(`${url}/upload`, {id: id, quantity: x});
       fetchProducts()
    } catch(error){
      console.log(error);
    }
  }
  async function quantitySubtract(id, quant) {
    try{
        let x = +quant - 1
        
        // document.location.reload(true)
       await axios.put(`${url}/upload`, {id: id, quantity: x});
       fetchProducts()
    } catch(error){
      console.log(error);
    }
  }




async function fetchProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(`${url}/upload`);

    const tempProducts = products
      .map((each) => {
        if (each.quantity >= 1) {
          return `<article class="product">
        <img src="${each.image}" alt="${each.name}" class="img" />
        <footer>
        <p>${each.name}</p>
        <span>$${each.price}</span>
        <button onclick = "quantitySubtract('${each._id}', '${each.quantity}')">-</button>
        <p>${each.quantity}</p>
        <button onclick = "quantityAdd('${each._id}', '${each.quantity}')">+</button>
        </footer>
        </article>`;
        }
      })

      .join("");
    container.innerHTML = tempProducts;
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
