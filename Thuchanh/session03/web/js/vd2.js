const LIST_USER_CARD = [
    {
      name: "Carlos Wilkinson",
      avatar:
      "https://i.pinimg.com/originals/61/8f/f0/618ff04916f98da7f31ddeaac072e26e.jpg",
      city: "Nigelshire",
      id: "45",
    },
    {
      name: "Lorraine Zemlak",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg",
      city: "Amiyachester",
      id: "46",
    },
    {
      name: "Dr. Lola Goodwin Jr.",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/373.jpg",
      city: "Leannonbury",
      id: "47",
    },
    {
      name: "Jonathon Wehner",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg",
      city: "Sincerefort",
      id: "48",
    },
    {
      name: "Gertrude Nienow",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
      city: "Draper",
      id: "49",
    },
    {
        name: "Gertrude Nienow",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
        city: "Draper",
        id: "49",
      },
  ];

  let elm = document.getElementById("div__content");

  function formatUICard(user) {
    return `
    <div class="card col-4">
        <img
            src="${user.avatar}"
            ,
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
  }
  
  let resUI = "";
  for (let index = 0; index < LIST_USER_CARD.length; index++) {
    resUI += formatUICard(LIST_USER_CARD[index]);
  }

  elm.innerHTML = resUI;
