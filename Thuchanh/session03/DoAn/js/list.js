const URL = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/users";
getListUser();
function _renderUICard(listUser) {
  let elmBody = document.getElementById("div_card");
  function fomatUICard(comments) {
    return `
    <div class="row p-2 bg-white border rounded " >
    <div class="col-md-3 mt-1">
      <img
        class="img-fluid img-responsive rounded product-image"
        src="${comments.avatar}"
      />
    </div>
    <div class="col-md-6 mt-1">
      <h5>${comments.name}</h5>
      <div class="d-flex flex-row">
        <div class="ratings mr-2">
          <i class="fa fa-star"></i><i class="fa fa-star"></i
          ><i class="fa fa-star"></i><i class="fa fa-star"></i>
        </div>
        <span>${comments.name2}</span>
      </div>
      <div class="mt-1 mb-1 spec-1">
        <span>100% Nhựa cứng</span><span class="dot"></span
        ><span>Trọng lượng nhẹ</span><span class="dot"></span
        ><span><br /></span>
      </div>
      <div class="mt-1 mb-1 spec-1">
        <span>Thiết kế độc đáo</span><span class="dot"></span
        ><span>Sang trọng</span><span class="dot"></span
        ><span>Bền bỉ<br /></span>
      </div>
      
    </div>
    <div
      class="align-items-center align-content-center col-md-3 border-left mt-1"
    >
      <div class="d-flex flex-row align-items-center">
        <h4 class="mr-1">99.000đ</h4>
        <span class="strike-text">299.000đ</span>
      </div>
      <h6 class="text-success">Free shipping</h6>
      <div class="d-flex flex-column mt-4">
        <button class="btn btn-primary btn-sm" type="button" onclick="handleEdit()" >Mua
        </button
        ><button
          class="btn btn-outline-primary btn-sm mt-2"
          type="button" onclick="handleEdit()"
        >
          Thêm vào giỏ hàng
        </button>
        <button
          class="btn btn-outline-primary btn-sm mt-2"
          type="button" onclick="deleteUser(${comments.id})"
        >
          Xoá
        </button>
      </div>
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
function deleteUser(userId) {
  console.log("deleteUser");
  let user_delete = URL + "/" + userId;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListUser();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleEdit(commentsID) {
  console.log("handleEdit", commentsID);
  window.location.href = `./cart.html?id=${commentsID}`;
}
