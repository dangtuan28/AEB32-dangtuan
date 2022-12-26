let ListUserCard = [
  {
    image:
      "https://st.quantrimang.com/photos/image/2022/04/08/Hinh-nen-Luffy-Sun-God-Nika-1.jpg",
    tennv: " Monkey D. Luffy",
    text: "Thần mặt trời Nika",
  },
  {
    image:
      "https://thuthuatnhanh.com/wp-content/uploads/2022/03/Anh-Zoro-ngau-4K-1-800x450.jpg",
    tennv: " Roronoa Zoro",
    text: "Thợ săn hài tặc",
  },
  {
    image:
      "https://i.pinimg.com/736x/10/01/f7/1001f7c1ca3a6fba9cfb8ffa00e44f69.jpg",
    tennv: " Sanji",
    text: "Chân đen",
  },
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.VS973Ss4o_nUwWa-o-11gwHaEK&pid=Api&P=0",
    tennv: " jimbe",
    text: "Người cá",
  },
  {
    image:
      "https://i.pinimg.com/736x/59/73/a9/5973a94bef3c398503359581c56aacae.jpg",
    tennv: "Nami",
    text: "Hoa tiêu",
  },
  {
    image:
      "https://tse2.mm.bing.net/th?id=OIP.N5-dy17QzFn0z0zcO55NIAHaEK&pid=Api&P=0",
    tennv: " Usopp",
    text: "Vua bắn tỉa",
  },
  {
    image:
      "https://i.pinimg.com/originals/69/5f/f4/695ff42b6e01cd09517cc38cb68a182e.jpg",
    tennv: " Tony Tony Chopper",
    text: "Thuyền y",
  },
  {
    image:
      "https://fandom.vn/wp-content/uploads/2019/04/one-piece-nico-robin-1.jpg",
    tennv: " Nico Robin ",
    text: "Đứa con của quỷ",
  },
  {
    image:
      "https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-nen-franky.jpg",
    tennv: " Franky",
    text: "Người máy",
  },
  {
    image:
      "https://i.pinimg.com/originals/0b/e2/0e/0be20e17425ab2c43386287539d88a99.png",
    tennv: " Brook",
    text: "Brook ngân nga",
  },
  {
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2020/9/4/bmr4-1599189564290713771053.jpg",
    tennv: "Băng mũ rơm",
    text: "Hải tặc",
  },
];
let elmBody = document.getElementById("div_card");
function fomatUICard(comments) {
  return `
  <div class="row p-2 bg-white border rounded " >
  <div class="col-md-3 mt-1">
    <img
      class="img-fluid img-responsive rounded product-image"
      src="${comments.image}"
    />
  </div>
  <div class="col-md-6 mt-1">
    <h5>${comments.tennv}</h5>
    <div class="d-flex flex-row">
      <div class="ratings mr-2">
        <i class="fa fa-star"></i><i class="fa fa-star"></i
        ><i class="fa fa-star"></i><i class="fa fa-star"></i>
      </div>
      <span>${comments.text}</span>
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
      <button class="btn btn-primary btn-sm" type="button">
       Mua</button
      ><button
        class="btn btn-outline-primary btn-sm mt-2"
        type="button"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  </div>
</div>
  
       `;
}
let resUI = "";
for (let index = 0; index < ListUserCard.length; index++) {
  resUI += fomatUICard(ListUserCard[index]);
}
elmBody.innerHTML = resUI;
window.onload = function(){
  loadHeader();

};
function loadHeader(){
  let elm = document.getElementById("header");
  fetch("./header.html")
  .then((response) => response.text())
  .then((data) =>{
      elm.innerHTML = data;
      console.log(data);
  });
}