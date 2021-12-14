

const url = "/api/v1";
const container = document.querySelector(".container");




async function quantityAdd(id, quant, money) {
    try{
        let x = +quant + 1
        let y = money * x
        console.log(y);
        // document.location.reload(true)
       await axios.put(`${url}/upload`, {id: id, quantity: x, price: y});
       fetchProducts()
    } catch(error){
      console.log(error);
    }
  }
  async function quantitySubtract(id, quant, money) {
    try{
        console.log(money);
        let x = +quant - 1
        let y = money / x
        if (y == money){
            y = money/ quant
        }
        console.log(y);
        // document.location.reload(true)
       await axios.put(`${url}/upload`, {id: id, quantity: x, price: y});
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
        <button onclick = "quantitySubtract('${each._id}', '${each.quantity}', '${each.price}')">-</button>
        <p>${each.quantity}</p>
        <button onclick = "quantityAdd('${each._id}', '${each.quantity}', '${each.price}')">+</button>
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
