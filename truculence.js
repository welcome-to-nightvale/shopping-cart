const items = [
    { name: "Jar",
      id: "jar",
      desc: "contains rocks",
      tags: ["decorative", "brings joy"],
      stock: 20,
      price: 20.00
    },
    { name: "Paper Crane",
      id: "crane",
      desc: "Paper Crane",
      tags: ["decorative","brings joy"],
      stock: 5,
      price: 2.50
    },
    { name: "Wasps' nest",
      id: "nest",
      desc: "perhaps it can soothe my itching soul",
      tags: ["brings joy", "potentially mind controlling","companion"],
      stock: 1,
      price: 329.99
    },
    { name: "Fish Lamp",
      id: "lamp",
      desc: "Radiates malice and hatred",
      tags: ["decorative", "brings misery"],
      stock: 1,
      price: 32.23
    },
    { name: "orb",
      id: "orb",
      desc: "On Friday, we will be peering into Orbs and Spheres",
      tags: ["for divining esoteric truths"],
      stock: 1,
      price: 10000000.00
    },
    { name: "Coconut husk fragment",
      id: "coconut",
      desc: "from that one time vicky brought a coconut to gym",
      tags: ["decorative"],
      stock: 1,
      price: 3.00
    },
    { name: "Harmonica",
      id: "harmonica",
      desc: "play some tunes",
      tags: ["brings joy"],
      stock: 1,
      price: 25.55
    },
    { name: "The Bag",
      id: "bag",
      desc: "don't look inside",
      tags: ["The Vast"],
      stock: 1,
      price: 59.99
    },
    { name: "James the Greater",
      id: "james",
      desc: "taxidermied pufferfish",
      tags: ["companion"],
      stock: 1,
      price: 16.00
    },
    { name: "Wizard hat",
      id: "wizar",
      desc: "bugs under there",
      tags: ["for divining esoteric truths", "accessory"],
      stock: 5,
      price: 42.68
    },
    { name: "whiteboard magnet",
      id: "magnets",
      desc: "snail-shaped",
      tags: ["companion", "brings joy"],
      stock: 2,
      price: 2.00
    },
    { name: "NYC Public Transit seating",
      id: "seat",
      desc: "build your very own basement train",
      tags: ["decorative"],
      stock: 5,
      price: 200.00
    },
    { name: "Forbidden Scripture",
      id: "notebook",
      desc: "remnants of a peculiar elementary schooler's writing journal. \nMarble notebook",
      tags: ["for divining esoteric truths", "brings misery"],
      stock: 1,
      price: 15.01
    },
    { name: "wooden boat",
      id: "boat",
      desc: "carved haphazardly with a box cutter",
      tags: ["brings joy"],
      stock: 1,
      price: 67000.67
    },
    { name: "Casette Tape",
      id: "tape",
      desc: "perhaps it contains a statement",
      tags: ["brings joy"],
      stock: 1,
      price: 19.99
    },
    { name: "Hat",
      id: "cap",
      desc: "as per the suggestion of my brother.\nNo particularly notable characteristics",
      tags: ["accessory"],
      stock: 5,
      price: 2.50
    },
    { name: "Cockroach",
      id: "cockroach",
      desc: "Named gertrude",
      tags: ["brings joy", "companion"],
      stock: 1,
      price: 0.00
    },
    { name: "Mold that makes you love Mold",
      id: "mold",
      desc: "put this in your House put this under your Bed",
      tags: ["potentially mind controlling", "companion"],
      stock: 10000,
      price: 0.00
    },
    { name: "Big Mouth Billy Bass",
      id: "billy",
      desc: "reprogrammed to now only sing La Carmagnole",
      tags: ["decorative", "brings joy"],
      stock: 1,
      price: 73.99
    },
    { name: "Cursed Amulet",
      id: "amulet",
      desc: "put this in your House put this under your Bed",
      tags: ["potentially mind controlling", "accessory"],
      stock: 3,
      price: 0.00
    },
]

let cart = {};
let cartTotal = 0;

//JS- ONLY VERSIONS
/* function filterBy(tag) {
  let filtered = [];
  for (let item of items) {
    if (item.tags.find((t)=> t === tag) !== undefined) {
      filtered.push(item.name);
    }
  }
  return filtered;
};

function addToCart(item) {
  if (item.stock > 0) {
    if (cart[item.name]) {
      cart[item.name].qty ++;
      cart[item.name].stock --;
      cartTotal += cart[item.name].price;
    } else {
      cart[item.name] = item;
      cart[item.name].qty = 1;
      cart[item.name].stock --;
      cartTotal += cart[item.name].price;
    }
  } else {
    console.log("item not in stock");
  }
};

function removeFromCart(item){
  if (cart[item.name].qty > 1) {
    cart[item.name].qty --;
    cart[item.name].stock ++;
    cartTotal -= cart[item.name].price;
  } else {
    cart[item.name].qty --;
    cart[item.name].stock ++;
    cartTotal += cart[item.name].price;
    delete cart[item.name];
  }
} 

function discount(code, total) {
  if (code === "iHeartAPCS") {
    return (total * 0.50).toFixed(2);
  } else if (code === "discountCode") {
    return (total * 0.80).toFixed(2);
  } else if (code === "darknessAndDespair") {
    return (total * 0.70).toFixed(2);
  } else {
    return "invalid code";
  }
};
 */

/* addToCart(items[0]);
addToCart(items[0]);
//addToCart(items[0]);
addToCart(items[4]);
addToCart(items[2]);
//console.log(cart);

//removeFromCart(items[0]);
console.log(cart);
console.log(cartTotal);
console.log(discount("iHeartAPCS", cartTotal)) */

//HTML VERSIONs
/* function filterBy(tag) {
  let section = document.getElementById("cards");
  section.remove();
  content = document.getElementById("content");
  content.insertAdjacentHTML("beforeend", `<section id = "cards"></section>`)
  for (let item of items) {
    if (item.tags.find((t)=> t === tag) !== undefined) {
      let sectionn = document.getElementById("cards");
      sectionn.insertAdjacentHTML(
        "afterbegin",
        `<div class = card>
          <h2>${item.name}</h2>
          <image src = "" alt = "image of ${item.name}"></image>
          <p>${item.price}</p>
          <button>add to cart</button>
        </div>`
      )
    }
  }
}; */
function filterBy(tag) {
    displayItems();
    let section = document.getElementById("cards");
    displayed = section.querySelectorAll("div");
    for (let card of displayed) {
      for (let item of items) {
        if (item.id === card.getAttribute("data-item")) {
          if (item.tags.find((t) => t === tag) === undefined) {
            card.remove();
          };
        };
      };
    };
};

function displayItems() {
  let section = document.getElementById("cards");
  section.remove();
  content = document.getElementById("content");
  content.insertAdjacentHTML("beforeend", `<section id = "cards"></section>`);
  for (let item of items) {
    section = document.getElementById("cards");
    section.insertAdjacentHTML(
      "beforeend",
      `<div class = card data-item = ${item.id}>
        <h2>${item.name}</h2>
        <image class = "card-image" src = "images/${item.id}.png" alt = "image of ${item.name}"></image>
        <p>${item.desc}</p>
        <p>$${(item.price).toFixed(2)}</p>
        <button class = "add" >add to cart</button>
      </div>`
    )
  };
  const buttons = document.querySelectorAll(".add");
  buttons.forEach((button) => 
    button.addEventListener("click", function(event) {
      let dataItem = event.target.closest(".card").getAttribute("data-item");
      let object = items.find((item) => item.id === dataItem);
      console.log(object);
      addToCart(object);
    }),
  );
 /////// 
};

function addToCart(item) {
  const entries = document.getElementById("entries")
  if (item.stock > 0) {
    if (cart[item.id]) {
      cart[item.id].qty ++;
      cart[item.id].stock --;
      cartTotal += cart[item.id].price;
      let entryAmt = document.getElementById(`${item.id}amt`);
      let entry = document.getElementById(item.id);
      entryAmt.remove();
      entry.insertAdjacentHTML("beforeend", `<p id= ${item.id}amt>x${item.qty}</p>`
      )
    } else {
      cart[item.id] = item;
      cart[item.id].qty = 1;
      cart[item.id].stock --;
      cartTotal += cart[item.id].price;
      entries.insertAdjacentHTML(
        "beforeend",
        `<div id = ${item.id} class = "entry">
          <h2>${item.name}</h2>
          <p id = ${item.id}amt >x${item.qty}</p>
        </div>`
      );
    }
  } else {
    console.log("item not in stock");
    

  }
  let total = document.getElementById("total");
  let totalPrice = document.getElementById("total-price");
  totalPrice.remove();
  total.insertAdjacentHTML("beforeend", `<p id = "total-price">$${(cartTotal).toFixed(2)}</p>`);
};

function discount(code) {
  if (code === "iHeartAPCS") {
    cartTotal = (cartTotal * 0.50).toFixed(2);
  } else if (code === "discountCode") {
    cartTotal = (cartTotal * 0.80).toFixed(2);
  } else if (code === "darknessAndDespair") {
    cartTotal = (cartTotal * 0.70).toFixed(2);
  } else {
    console.log("invalid code");
  }
  console.log(cartTotal);
  let total = document.getElementById("total");
  let totalPrice = document.getElementById("total-price");
  totalPrice.remove();
  total.insertAdjacentHTML("beforeend", `<p id = "total-price">$${cartTotal}</p>`);
};

const filter = document.getElementById("filter");
filter.addEventListener("change", function() {
  //console.log("clicked filter");
  console.log(filter.value);
  filterBy(filter.value);
});

/* const home = document.getElementById("home");
shop.addEventListener("click", function() {
  console.log("clicked home");
  let section = document.getElementById("cards");
  section.remove();
}); */

const shop = document.getElementById("shop");
shop.addEventListener("click", function() {
  console.log("clicked shop");
  displayItems();
});

const checkout = document.getElementById("checkout");
checkout.addEventListener("click", function() {
  console.log("clicked checkout");
  console.log(cart);
  const cartBox = document.getElementById("cart")
  if (cartBox.style.display !== "flex") {
    cartBox.style.display = "flex";
  } else {
    cartBox.style.display = "none";
  }
});

const checkoutForReal = document.getElementById("checkout-btn");
checkoutForReal.addEventListener("click", function() {
  console.log("clicked real checkout");
  let discountCode = document.getElementById("discount-code").value;
  discount(discountCode);
})
