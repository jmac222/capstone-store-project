// const url = "/api/v1";
// const fileFormDOM = document.querySelector(".file-form");
 
// const nameInput = document.querySelector("#name");
// const priceInput = document.querySelector("#price");
// const imageInput = document.querySelector("#image");
// const fileForm = document.querySelector('.file-form')
// const container = document.querySelector(".container");
// let imageValue;
 
// fileForm.addEventListener('submit', async (e) => {
//     e.preventDefault()
//     const nameValue = nameInput.value
//     const priceValue = priceInput.value
//     try {
//         const product = {name: nameValue, price: priceValue, image: imageValue}
//         console.log(product);

//         await axios.post(`${url}/products`, product)
//         fetchProducts();
//     } catch (error) {
        
//     }
// })

// imageInput.addEventListener("change", async (e) => {
//   const imageFile = e.target.files[0];
//   const formData = new FormData();
//   formData.append("image", imageFile);
 
//   try {
//     const {
//       data: {
//         image: { src },
//       },
//     } = await axios.post(`${url}/upload/uploadPicture`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     imageValue = src;
//   } catch (err) {
//     imageValue = null;
//     console.log(err);
//   }
// });
 
// async function fetchProducts() {
//   try {
//     const {
//       data: { products }
//     } = await axios.get(`${url}/cart`);
//     const tempProducts = products.map(each => {
//       return `<article class="product">
//       <img src="${each.image}" alt="${each.name}" class="img" />
//       <footer>
//       <p>${each.name}</p>
//       <span>${each.price}</span>
//       </footer>
//       </article>`;
//     })
//     .join("");
//     container.innerHTML = tempProducts;
//   } catch (error) {
//    console.log(error);
//   }
// }

// fetchProducts();