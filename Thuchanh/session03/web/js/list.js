const URL = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/user";

  fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // dam bao users no co data
      _renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

// (users : Array<object>) => void
function _renderUI(users) {
  let elmBody = document.getElementById("tbody__user");

  function formatRow(user) {
    return `
    <tr onclick="handleClickRow(${user.id})">
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.city}</td>
      <td>${user.avatar}</td>
      <td>
      <button class="btn btn-success" onclick="goToDetail(${user.id})">Detail</button>
      <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
      </td>
    </tr>
    `;
  }

  let bodyTable = "";

  for (let index = 0; index < users.length; index++) {
    bodyTable += formatRow(users[index]);
  }

  elmBody.innerHTML = bodyTable;
}

// function handleClickRow(userId) {
//   console.log("handleClickRow", userId);
//   window.location.href = `./detail.html?id=${userId}`;
// }
function gotoDetail(userId) {
  console.log("gotoDetail", userId);
  window.location.href = ` ./detail.html?id=${userId}`;
}
function deleteUser(userId) {
  let user_delete = URL + "/" + userId;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // dam bao users no co data
      getListUser();
    })
    .catch((error) => {
      console.error("Error:", error);
    });


    fetch(URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // dam bao users no co data
        _renderUI(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}

// let listUser = [];
// const URL ="https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/ ";
// fetch(URL,{
//     mehtod:"GET",
// })
//      .then((reponse) => reponse.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//         return error;
//     });
// const methodGetAsync = async (endpoint) => {
//     try{
//         const res = await fetch(URL + endpoint,{
//             method: "GET",
//         });
//         console.log(res);
//         return res;

//     }catch (err) {
//         console.error(err);
//         return err;
//     }
// };
// // const LIST_USER_CARD = [
// //     {
// //       name: "Carlos Wilkinson",
// //       avatar:
// //       "https://i.pinimg.com/originals/61/8f/f0/618ff04916f98da7f31ddeaac072e26e.jpg",
// //       city: "Nigelshire",
// //       id: "45",
// //     },
// //     {
// //       name: "Lorraine Zemlak",
// //       avatar:
// //       src="https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-one-piece-kiem-si-zoro-chat.jpg",
// //       city: "Amiyachester",
// //       id: "46",
// //     },
// //     {
// //       name: "Dr. Lola Goodwin Jr.",
// //       avatar:
// //       src="https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-one-piece-day-du-nhat.jpg",
// //       city: "Leannonbury",
// //       id: "47",
// //     },
// //     {
// //       name: "Jonathon Wehner",
// //       avatar:
// //       "https://3.bp.blogspot.com/-aiWHF_waSxY/V62CyO8HwEI/AAAAAAAAAH8/mmWf3cEQCLcSWtrl-GZGav4hdE-JIxq1ACLcB/s1600/hinh-nen-one-piece-dep-hd-5.jpg",
// //       city: "Sincerefort",
// //       id: "48",
// //     },
// //     {
// //       name: "Gertrude Nienow",
// //       avatar:
// //         "https://tse1.mm.bing.net/th?id=OIP.V3vygF6T8Z1jikp_JLkoKQHaGG&pid=Api&P=0",
// //       city: "Draper",
// //       id: "49",
// //     },
// //     {
// //         name: "Gertrude Nienow",
// //         avatar:
// //         "https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-one-piece-cuc-dep.jpg",
// //         city: "Draper",
// //         id: "49",
// //       },
// //   ];

// //   let elm = document.getElementById("div__content");

// //   function formatUICard(user) {
// //     return `
// //     <div class="card col-4">
// //         <img
// //             src="${user.avatar}"
// //             ,
// //             class="card-img-top"
// //             alt="..."
// //         />
// //         <div class="card-body">
// //             <h5 class="card-title">${user.name}</h5>
// //             <p class="card-text">
// //            One Piece
// //             </p>
// //             <a href="#" class="btn btn-primary">Go somewhere</a>
// //         </div>
// //     </div>
// //     `;
// //   }

// //   let resUI = "";
// //   for (let index = 0; index < LIST_USER_CARD.length; index++) {
// //     resUI += formatUICard(LIST_USER_CARD[index]);
// //   }

// //   elm.innerHTML = resUI;
