const items = [
    { name: "Jar",
      desc: "contains rocks",
      tags: ["decorative", "brings joy"],
      stock: 2,
      price: 20.00
    },
    { name: "Paper Crane",
      desc: "Paper Crane",
      tags: ["decorative","brings joy"],
      stock: 1,
      price: 2.50
    },
    { name: "Wasps' nest",
      desc: "perhaps it can soothe my itching soul",
      tags: ["brings joy", "potentially mind controlling","companion"],
      stock: 1,
      price: 329.99
    },
    { name: "Fish Lamp",
      desc: "Radiates malice and hatred",
      tags: ["decorative", "brings misery"],
      stock: 1,
      price: 32.23
    },
    { name: "orb",
      desc: "On Friday, we will be peering into Orbs and Spheres",
      tags: ["for divining esoteric truths"],
      stock: 1,
      price: 10000000.00
    },
    { name: "Coconut husk fragment",
      desc: "from that one time vicky brought a coconut to gym",
      tags: ["decorative"],
      stock: 1,
      price: 3.00
    },
    { name: "Harmonica",
      desc: "play some tunes",
      tags: ["brings joy"],
      stock: 1,
      price: 25.55
    },
    { name: "The Bag",
      desc: "don't look inside",
      tags: ["The Vast"],
      stock: 1,
      price: 59.99
    },
    { name: "James the Greater",
      desc: "taxidermied pufferfish",
      tags: ["companion"],
      stock: 1,
      price: 16.00
    },
    { name: "Wizard hat",
      desc: "bugs under there",
      tags: ["for divining esoteric truths", "accessory"],
      stock: 1,
      price: 42.68
    },
    { name: "whiteboard magnet",
      desc: "snail-shaped",
      tags: ["companion", "brings joy"],
      stock: 1,
      price: 2.00
    },
    { name: "NYC Public Transit seating",
      desc: "build your very own basement train",
      tags: ["decorative"],
      stock: 1,
      price: 200
    },
    { name: "Forbidden Scripture",
      desc: "remnants of a peculiar elementary schooler's writing journal. \nMarble notebook",
      tags: ["for divining esoteric truths", "brings misery", "not for sale"],
      stock: 1,
      price: 15.01
    },
    { name: "wooden boat",
      desc: "carved haphazardly with a box cutter",
      tags: ["brings joy"],
      stock: 1,
      price: 67000.67
    },
    { name: "Casette Tape",
      desc: "perhaps it contains a statement",
      tags: ["brings joy"],
      stock: 1,
      price: 19.99
    },
    { name: "Hat",
      desc: "as per the suggestion of my brother.\nNo particularly notable characteristics",
      tags: ["accessory"],
      stock: 1,
      price: 2.50
    },
    { name: "Cockroach",
      desc: "Named gertrude",
      tags: ["not for sale", "brings joy", "companion"],
      stock: 1,
      price: 0
    },
    { name: "Mold that makes you love Mold",
      desc: "put this in your House put this under your Bed",
      tags: ["potentially mind controlling", "companion"],
      stock: 1,
      price: 0
    },
    { name: "Big Mouth Billy Bass",
      desc: "reprogrammed to now only sing La Carmagnole",
      tags: ["decorative", "brings joy"],
      stock: 1,
      price: 73.99
    },
    { name: "Cursed Amulet",
      desc: "put this in your House put this under your Bed",
      tags: ["potentially mind controlling", "accessory"],
      stock: 1,
      price: 0
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

//HTML INCLUDED
function filterBy(tag) {
  //let filtered = [];
  let section = document.getElementById("section");
  for (let item of items) {
    if (item.tags.find((t)=> t === tag) !== undefined) {
      //filtered.push(item.name);
      section.remove();
      document.insertAdjacentHTML("afterbegin", `<section id = "section"></section>`)
      let section = document.getElementById("section");
      section.insertAdjacentHTML(
        "afterbegin",
        `<div class = card>
          <h2>${item.name}</h2>
          <image src = "" alt = ""></image>
          <p>${item.price}</p>
          <button>add to cart</button>
        </div>`
      )

    }
  }
  //return filtered;
};

const filter = document.getElementById("#filter");
document.addEventListener("click", function() {
  console.log("clicked");
  filterBy("decorative");
  // console.log(event.target.closest(".card").getAttribute("data-item"));
});