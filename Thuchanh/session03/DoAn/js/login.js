function handleShowBtn() {
    // get param url
    let urlDetail = new URLSearchParams(window.location.search);
    let isLogin = urlDetail.get("isLogin");
  
    let btnLogin = document.getElementById("btnLogin");
    let btnLogout = document.getElementById("btnLogout");
    
    if (isLogin) {
      // btnLogin?.classList.add("d-none");
      // btnLogout?.classList.remove("d-none");
  
      btnLogin.style.display = 'none'
      btnLogout.style.display = 'block'
    } else {
      btnLogout?.classList.add("d-none");
      btnLogin?.classList.remove("d-none");
    }
  }