//
//define product objects
//
// COMMENT: Please remove all console.log()
console.log("snarf");

var prodsCat1 = {
  navName: "Catagory 1",

  eventId: "cat1", //gets assigned to html for nav link as id as key ref to prod obj

  products: [
    { name: "Catagory 1 Product 1",
      price: "$1.99"
    },
    { name: "Catagory 1 Product 2",
      price: "$2.99"
    },
    { name: "Catagory 1 Product 3",
      price: "$3.99"
    },
    { name: "Catagory 1 Product 4",
      price: "$4.99"
    },
    { name: "Catagory 1 Product 5",
      price: "$5.99"
    },
    { name: "Catagory 1 Product 6",
      price: "$6.99"
    },
    { name: "Catagory 1 Product 7",
      price: "$7.99"
    }
  ]
};

var prodsCat2 = {
  navName: "Catagory 2",

  eventId: "cat2",

  products: [
    { name: "Catagory 2 Product 1",
      price: "$10.99"
    },
    { name: "Catagory 2 Product 2",
      price: "$20.99"
    },
    { name: "Catagory 2 Product 3",
      price: "$30.99"
    },
    { name: "Catagory 2 Product 4",
      price: "$40.99"
    },
    { name: "Catagory 2 Product 5",
      price: "$50.99"
    }
  ]
};

var prodsCat3 = {
  navName: "Catagory 3",

  eventId: "cat3", //gets assigned to html for nav link as id as key ref to prod obj

  products: [
    { name: "Catagory 3 Product 1",
      price: "$1.99"
    },
    { name: "Catagory 3 Product 2",
      price: "$12.99"
    },
    { name: "Catagory 3 Product 3",
      price: "$13.99"
    },
    { name: "Catagory 3 Product 4",
      price: "$14.99"
    },
    { name: "Catagory 3 Product 5",
      price: "$15.99"
    },
    { name: "Catagory 3 Product 6",
      price: "$16.99"
    },
    { name: "Catagory 3 Product 7",
      price: "$17.99"
    },
    { name: "Catagory 3 Product 8",
      price: "$17.99"
    },
    { name: "Catagory 3 Product 9",
      price: "$17.99"
    }
  ]
};



var products = [prodsCat1, prodsCat2, prodsCat3];

//
//generate nav for product catagories
//
var $ul = $("#nav-links");
var $productView = $("#product");

var cartTotal = 0.00;
var cartCount = 0;
$("#cart-count").text(cartCount);

for(var productCatagoryObject of products) {
  //example: <li class="right-align">Catagory 1</li>
  $navLink = $("<li>").addClass("right-align").text(productCatagoryObject.navName);
  $navLink.attr("id", productCatagoryObject.eventId);
  $ul.append($navLink[0]);
}



//
//assign event handler to ul to select catagory
//
$ul.on("mousedown", function(event) {
  //highlight selection
  $(event.target).parent().children().removeClass("catagory-navlink-highlit");
  $(event.target).addClass("catagory-navlink-highlit");

  //determine which catagory's product to show in product display area
  //and show the cards in display area
  catagoryId = event.target.id;
  switch(catagoryId) {
    case "cat1":
      createImageCard(prodsCat1.products);
      break;
    case "cat2":
      createImageCard(prodsCat2.products);
      break;
    case "cat3":
      createImageCard(prodsCat3.products);
      break;
    }
});

//
//display catagory 1 by default
//
//$("#product li:nth-child(1)").addClass("catagory-navlink-highlit");
$("#catagories li:nth-child(1)").addClass("catagory-navlink-highlit");
createImageCard(prodsCat1.products);

//create image card
function createImageCard(products) {
  console.log("snarf this", products);
  /* example image card html:

  <div class="col s4 m4 l4">
    <div class="card">
      <div class="card-image">
        <img src="http://lorempixel.com/output/abstract-q-c-640-480-7.jpg">
        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
      <div class="card-content">
        <span class="card-title">Card Title</span>
        <p>$00.00</p>
      </div>
    </div>
  </div>

  */
  $("#product").empty();

  for(var product of products) {
    console.log(product)

    $imageCardDiv1 = $("<div>").addClass("col s4 m4 l4");
    $imageCardDiv2 = $("<div>").addClass("card");
    $imageCardDiv3 = $("<div>").addClass("card-image");
    $imageCardDiv3.append($("<img>").attr("src", "http://lorempixel.com/output/abstract-q-c-640-480-7.jpg"));
    $imageCardDiv3.append($("<a>").addClass("btn-floating halfway-fab waves-effect waves-light red>").append($("<i>").addClass("material-icons verifyButton").text("add")));
    $imageCardDiv2.append($imageCardDiv3);
    $imageCardDiv1.append($imageCardDiv2);
    $imageCardDiv4 = $("<div>").addClass("card-content");
    $imageCardDiv4.append($("<span>").addClass("card-title font-size-mod getName").text(`${product.name}`));
    $imageCardDiv4.append($("<p>").addClass("card-price getPrice").text(`${product.price}`));
    $imageCardDiv2.append($imageCardDiv4);

    $("#product").append($imageCardDiv1);
  }
}
//
//assign event handler to product display area
//
$productView.on("click", function(event) {
    if (event.target.className === "material-icons verifyButton") {
    let strPrice = $(event.target).parents(".card").find(".getPrice").text();
    cartTotal+= parseFloat(strPrice.substring(1,strPrice.length));
    $("#cart-count").text(cartCount+=1)
    $("#cart-total").text("$"+cartTotal.toFixed(2));
  }
});
