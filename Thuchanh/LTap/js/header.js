window.onload = function () {
    loadHeader();
  };
  
  function loadHeader() {
    let elm = document.querySelector("header");
    if (elm) {
      fetch("./header.html", {
        method: "GET",
      })
        .then((response) => response.text())
        .then((data) => {
          elm.innerHTML = data;
          handleShowBtn();
          // console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }