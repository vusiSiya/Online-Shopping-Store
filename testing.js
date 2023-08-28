const data = {
    items: [{
        id: 1,
        img: "./src/Images/Watches/Heuer-SilverSnoe.jpg",
        name: "Heuer Silver Snoe",
        price: 6000,
        category: "watches"
    }, {
        id: 2,
        img: "./src/Images/Watches/omega-automatic-seamaster.jpg",
        name: "Omega Automatic",
        price: 6000,
        category: "watches"
    }, {
        id: 3,
        img: "./src/Images/Watches/omega-de-ville-watch.jpg",
        name: "Omega De Ville",
        price: 6000,
        category: "watches"
    }, {
        id: 4,
        img: "./src/Images/Watches/schawffhausen-watch.jpg",
        name: "IWC SCHAWFFHUSEN",
        price: 6000,
        category: "watches"
    }, {
        id: 5,
        img: "./src/Images/Men/AmaXhosa/the-xhosa-man-in-blue-and-white.png",
        name: "Xhosa Attire",
        price: 15000,
        category: "guys"
    }, {
        id: 6,
        img: "./src/Images/Men/EmaSwati/swati-man-at-mountain.png",
        name: "Swati Attire",
        price: 15000,
        category: "guys"
    }, {
        id: 7,
        img: './src/Images/Men/EmaSwati/swati-man-in-traditional-attire.jpg',
        name: "Siswati Attire",
        price: 15000,
        category: "guys"
    }, {
        id: 8,
        img: "./src/Images/Men/BaSotho/sotho-guy-at-entrande.png",
        name: "Morden Sotho Attire",
        price: 6000
    }, {
        id: 9,
        img: "./src/Images/Men/BaSotho/sotho-man-in-sotho-blanket.png",
        name: "Sotho Blanket",
        price: 1200
    }, {
        id: 10,
        img: "./src/Images/Men/AmaXhosa/xhosa-man-in-white.png",
        name: "Xhosa Attire",
        price: 15000,
        category: "guys"
    }, {
        id: 11,
        img: "./src/Images/Men/AmaXhosa/xhosa-guy-in-white.jpg",
        name: "Xhosa Attire",
        price: 15000,
        category: "guys"
    }, {
        id: 12,
        img: "./src/Images/Women/Basotho/woman-blanket-jacket.png",
        name: "Sotho blacket",
        price: 15000,
        category: "girls"
    }, {
        id: 13,
        img: "./src/Images/Women/EmaSwati/swati-woman-in-blue-dress.png",
        name: "Swati traditional dress",
        price: 15000,
        category: "girls"
    }, {
        id: 14,
        img: "./src/Images/Women/Basotho/sotho-woman-in-seshweshwe.png",
        name: "Seshweshwe dress",
        price: 15000,
        category: "girls"
    }, {
        id: 15,
        img: "./src/Images/Women/AmaXhosa/xhosa-lady.jpg",
        name: "Xhosa white dress",
        price: 15000,
        category: "girls"
    }, {
        id: 16,
        img: "./src/Images/Women/EmaSwati/swati-woman-in-white-wedding-dress.png",
        name: "Swati wedding dress",
        price: 15000,
        category: "girls"
    }, {
        id: 17,
        img: "./src/Images/Women/AmaXhosa/xhosa-woman-in-blknwht.png",
        name: "Xhosa white dress",
        price: 15000,
        category: "girls"
    }, {
        id: 19,
        img: "./src/Images/Women/AmaXhosa/little-xhosa-girl.png",
        name: "Xhosa beads work",
        price: 15000,
        category: "girls"
    }, {
        id: 20,
        img: "./src/Images/Women/AmaXhosa/xhosa-lady.png",
        name: "Xhosa Yellow dress",
        price: 15000,
        category: "girls"
    }, {
        id: 21,
        img: "./src/Images/Women/EmaSwati/swati-lady-in-green.png",
        name: "Green Swati dress",
        price: 15000,
        category: "girls"
    }, {
        id: 22,
        img: "./src/Images/Women/AmaXhosa/xhosa-woman-in-white-attire.png",
        name: "Xhosa attire",
        price: 15000,
        category: "girls"
    }, {
        id: 23,
        img: "./src/Images/Women/Basotho/4b8273e27d70a288a77c7a763cc7eef1.jpg",
        name: "Brown Seshweshwe dress",
        price: 15000,
        category: "girls"
    }]
}
const {items} = data;
const girls = items.filter(item=>item.category === "girls");
const guys = items.filter(item=>item.category === "guys");
const watches = items.filter(item=>item.category === "watches");
const getImgName = (id)=>{
	/*switch(id){
    case "Home":
        return "black-white-triangles2.jpg"
        break;
    case "Men":
        return "pebbles.jpg"
        break;
    case "Women":
        return "grass.jpg"
        break;
    case "Watches":
        return "broken-glass2.jpg"
        break;
    }
	*/
}
let count = 0;
const itemsOnCart = [];
const root = document.getElementById("root");
root.innerHTML = MainPage(getOutlet("Home"))

const buttons = document.querySelectorAll("button");
const container = document.querySelector(".products--parent");
const products = ()=>document.querySelectorAll(".product");

const searchForItem = (_id)=>{
    let wantedArray = [];
    [watches, guys, girls].forEach(obj=>obj.forEach(item=>{
        if (item.id === parseInt(_id))
            return wantedArray.push(item);
    }));
    return wantedArray;
}
allowClick();

buttons.forEach(btn=>btn.addEventListener("click", (e)=>{
    let {id} = e.target
    if (id == "on-cart") {
        return itemsList();
    }
    container.innerHTML = getOutlet(id);
	container.style.backgroundImage = `url(./background/${getImgName(id)})`;
    allowClick();
}));

function allowClick() {
    products().forEach(item=>item.addEventListener("click", (e)=>{
        const {id} = event.currentTarget;
        const [item] = searchForItem(id)
        let s = `
			<div id="${item.id}" class='product details'>
					<div class="selected-product">
						<img src=${item.img} class='product--img' />
						<div class="content">
							<p id="details" class='product--name'>${item.name}</p>
							<p id="details" class='price'>Price: R ${item.price}</p>
							<button id="${item.id}" class='btn--cart'>
								Add to Cart
							</button>
						</div>
					</div>
					<section class = "description">
						<h4>Details</h4>
						<p class="description">
							lorem ipsum ipsum lorem ipusm lorem
							ipsum ipsum lorem ipusm<br/>
							lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem<br/>ipusm
							lorem ipsum ipsum lorem ipusm lorem ipsum ipsum lorem ipusm<br/>			
						</p>
					</section>
			  </div>
			</div>`
        container.innerHTML = s;
        const cartBtn = document.querySelector(".btn--cart");
        cartBtn.addEventListener("click", (e)=>handleClick(e));
    }
    ))
}
function handleClick(e) {
    const {id} = e.target;
    let[item] = searchForItem(id);
    updateCount(item);
}
function updateCount(item) {
    count++;
    itemsOnCart.push(item);
    document.getElementById("count").innerText = count;
    document.querySelector(".div-cart-icon").style.display = "block";
}

function itemsList() {
    if (count) {
        //const list = pageItems(itemsOnCart);
        //let differentItems= itemsOnCart.filter(item => itemsOnCart.includes(item) === false);
        let list = itemsOnCart.reduce((acc,item)=>{
            return acc + (`<div id="${item.id}" class='product cart'>
					<img src=${item.img} class='product--img' />
					<p class='product--name crt'>${item.name}</p>
					<p class='price crt'>R ${item.price}</p>
				</div>`);
        }
        , "")
        container.style = `display: flex; flex-direction: column;`
        container.innerHTML = list;
    }
}

function getOutlet(name) {
    let array
    const {products} = data
    switch (name) {
    case "Home":
        array = randomItemsArray();
        break;
    case "Men":
       array = guys
        break;
    case "Women":
        array = girls
        break;
    case "Watches":
        array = watches;
        break;
    }
    return pageItems(array, name);
}

function pageItems(clothesArray, name) {

    const baseString = clothesArray.reduce((acc,item)=>{
        let changeColor = true;
        let s = item && (`<div id="${item.id}"
			class='product ${(name === "Watches") ? "watches" : ""}'
			>
			<img src=${item.img} class='product--img' />
			<p class='product--name'>${item.name}</p>
		  </div>`) || "";
        return acc + s;
    }
    , "");
    return baseString
}

function MainPage(func) {
    return (` 
		<header>
			<nav>
				<div class="container">
					<img src="./background/site-logo-2.png" class="site-logo">
				</div>
				<div class="pages">
					<button id="Home" >Home</button>
					<button id="Men" >Men</button>
					<button id="Women" >Women</button>
					<button id="Watches" >Watches</button>
					<div class="div-cart-icon"style="display:none;">
						<button id="on-cart"
							style="font: 0.5rem white helvetica; font-weight: bold;"
							class="items-count"
							>
							Cart
						</button>
						<p id="count"></p>
					 </div>
				</div>
			</nav>
		</header>
		<main>
		   <div class="products--parent">${func}</div>
		</main>
		<footer>
			<p className='p--footer'>© 2023 Siyabonga Mahlalela</p>
		</footer>
	`)
}

function randomItemsArray() {
    let allProducts = [];
    let selectedProducts = [];
    const randomArray = ()=>{
        let randomNum = Math.floor(Math.random() * 3) + 1;
        return randomNum < 2 ? girls : randomNum === 2 ? watches : guys;
    }

    for (let i = 0; i < 9; i++) {

        let selectedArray = randomArray()
        let randomImage = (i === 0) ? 0 : Math.floor(Math.random() * selectedArray.length) + 1
        let item = selectedArray[randomImage];
        //setSelectedProducts( (prevItems) => [...prevItems, item] ); 
        selectedProducts.push(item);
    }
    return selectedProducts
}
