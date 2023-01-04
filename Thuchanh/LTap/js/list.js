
 let products = [
    {
      image: "https://loremflickr.com/640/480/technics",
      name: "Clothing & Apparel1",
      detail1: "Accessories",
      detail2: "Bags",
      detail3: "Kid's Fashion",
      detail4: "M",
    },
    {
      image: "https://loremflickr.com/640/480/technics",
      name: "Clothing & Apparel2",
      detail1: "Accessories",
      detail2: "Bags",
      detail3: "Kid's Fashion",
      detail4: "Mens",
    },
    {
      image: "https://loremflickr.com/640/480/technics",
      name: "Clothing & Apparel3",
      detail1: "Accessories",
      detail2: "Bags",
      detail3: "Kid's Fashion",
      detail4: "Mens",
    },
];
  
     
const URL = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments"
getListUser();
 function _renderUICard(listUser) {
   let elmBody = document.getElementById("view__content");
   function fomatUICard(comments) {
     return `
     <div class="d-flex border order-3 p-2 mx-1">
<div class="px-4 align-self-center flex__05">
<img
    src="${comments.image}"
    alt=""
/>
</div>
<div class="py-3 flex__05">
<h5>${comments.name}</h5>
<p class="fw-light">${comments.detail1}</p>
<p class="fw-light">${comments.detail2}</p>
<p class="fw-light">${comments.detail3}</p>
<p class="fw-light">${comments.detail4}</p>
</div>
</div>
`;
  }
   let resUI = "";
   for (let index = 0; index < listUser.length; index++) {
     resUI += fomatUICard(listUser[index]);
   }
   elmBody.innerHTML = resUI;
 }
function getListUser() {
    fetch(URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        _renderUICard(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function dumpDataAPI(data) {
    const URL_PRODUCTS ="https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments";
    data.map((comments) => {
      fetch(URL_PRODUCTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comments),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
  function getDataAPI() {
    const URL_PRODUCTS =
      "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments";
    fetch(URL_PRODUCTS, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
      //   console.log(data);
        _renderUI(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }