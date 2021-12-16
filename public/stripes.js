// const purchase = [
//   { id: "1", name: "t-shirt", price: 1999 },
//   { id: "2", name: "shoes", price: 4999 },
// ];
const url = "/api/v1";
const receipt = document.querySelector('#submit')
async function quantityRemove(id) {
  try{
    
    
     await axios.put(`${url}/upload`, {id: id, quantity: 0});
  } catch(error){
    console.log(error);
  }
}
let total_amount = 0;
async function moneyPrice() {
  try {
    const {
      data: { products },
    } = await axios.get(`${url}/upload`);

    products.map((each) => {
      if (each.quantity >= 1) {
        total_amount += each.price;
        quantityRemove(each._id)
        return `${each.price}`;
      }
    });
    console.log(total_amount);
    total_amount = total_amount *100
    start()

    

  } catch (error) {
    console.log(error);
  }
}
moneyPrice();


const shipping_fee = 1099;

var stripe = Stripe(
  "pk_test_51K4A9WCGwkOplFQD3PBpnfla3FqY2UINoPrFr7MYpj9E3mXTNqlKHl4zyZeagJcDYAq6JJaZpc2Huod5OEx13TYh00sUz2RxMB"
);
const start = () => {
document.querySelector("button").disabled = true;
fetch("/stripe", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ total_amount, shipping_fee }),
})
  .then(function (result) {
    return result.json();
  })
  .then(function (data) {
    var elements = stripe.elements();

    var style = {
      base: {
        color: "32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },

      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    };

    var card = elements.create("card", { style: style });
    card.mount("#card-element");
    card.on("change", function (event) {
      document.querySelector("button").disabled = event.empty;
      document.querySelector("#card-error").textContent = event.error
        ? event.error.message
        : "";
    });

    var form = document.getElementById("payment-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      payWithCard(stripe, card, data.clientSecret);
    });
  });
  receipt.addEventListener('click', async (e) => {
    
   
    await axios.get('/email')
  })

}
const payWithCard = function (stripe, card, clientSecret) {
  loading(true);
  stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
      },
    })
    .then(function (result) {
      if (result.error) {
        showError(result.error.message);
      } else {
        orderComplete(result.paymentIntent.id);
      }
    });
};

const orderComplete = function (paymentIntentId) {
  loading(false);
  document
    .querySelector(".result-message a")
    .setAttribute(
      "href",
      "https://dashboard.stripe.com/test/dashboard" + paymentIntentId
    );
  document.querySelector(".result-message").classList.remove("hidden");
  document.querySelector("button").disabled = true;
};

const showError = function (errorMsgText) {
  loading(false);
  const errMsg = document.querySelector("#card-error");
  errMsg.textContent = errorMsgText;
  setTimeout(() => {
    errMsg.textContent = "";
  }, 4000);
};

const loading = function (isLoading) {
  if (isLoading) {
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};



