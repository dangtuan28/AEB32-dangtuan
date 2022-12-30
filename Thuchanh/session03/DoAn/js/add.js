const URL_USER = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/users";
let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if (id) {
  getUser();
}

function getUser() {
  fetch(`${URL_USER}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmName = document.getElementById("inputName");
      let elmName2 = document.getElementById("inputName2");
      let elmAvatar = document.getElementById("inputAvatar");

      elmName.value = data.name;
      elmName2.value = data.city;
      elmAvatar.value = data.avatar;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubmit() {
  let elmName = document.getElementById("inputName");
  let elmName2 = document.getElementById("inputName2");
  let elmAvatar = document.getElementById("inputAvatar");

  let user = {
    name: elmName.value,
    name2: elmName2.value,
    avatar: elmAvatar.value,
  };
  if (id) {
    updateUser(user);
  } else {
    postUser(user);
  }
}

function postUser(user) {
  console.log("postUser");
  fetch(URL_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateUser(user) {
  fetch(`${URL_USER}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
