
const data =  {
  watches: [
    {
      id: 1,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Watches/Heuer-SilverSnoe.jpg",
      name: "Heuer Silver Snoe",
      price: 6000
    },
     {
      id: 2,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Watches/omega-automatic-seamaster.jpg",
      name: "Omega Automatic",
      price: 6000
    },
    {
      id: 3,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Watches/omega-de-ville-watch.jpg",
      name: "Omega De Ville",
      price: 6000
    },
    {
      id: 4,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Watches/schawffhausen-watch.jpg",
      name: "IWC SCHAWFFHUSEN",
      price: 6000
    },
  ],
  guys: [
	    {
      id: 5,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Men/AmaXhosa/the-xhosa-man-in-blue-and-white.png",
      name: "Xhosa Attire",
      price: 15000
    },
    {
      id: 6,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Men/EmaSwati/swati-man-at-mountain.png",
      name: "Swati Attire",
      price: 15000
    },
    {
      id: 7,
      img: 'file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Men/EmaSwati/swati-man-in-traditional-attire.jpg',
      name: "Siswati Attire",
      price: 15000
    },
    {
      id: 8,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Men/BaSotho/sotho-guy-at-entrande.png",
      name: "Morden Sotho Attire",
      price: 60
    },
    {
      id: 9,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Men/BaSotho/sotho-man-in-sotho-blanket.png",
      name: "Sotho Blanket",
      price: 1200
    },
    {
      id: 10,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Men/AmaXhosa/xhosa-man-in-white.png",
      name: "Xhosa Attire",
      price: 15000
    },
    {
      id: 11,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Men/AmaXhosa/xhosa-guy-in-white.jpg",
      name: "Xhosa Attire",
      price: 15000
    }
  ],
  girls: [
    {
      id: 12,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/Basotho/woman-blanket-jacket.png",
      name: "Sotho blacket",
      price: 15000
    },
    {
      id: 13,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/EmaSwati/swati-woman-in-blue-dress.png",
      name: "Swati traditional dress",
      price: 15000
    },
    {
      id: 14,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/Basotho/sotho-woman-in-seshweshwe.png",
      name: "Seshweshwe dress",
      price: 15000
    },
    {
      id: 15,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/AmaXhosa/xhosa-lady.jpg",
      name: "Xhosa white dress",
      price: 15000
    },
    {
      id: 16,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/EmaSwati/swati-woman-in-white-wedding-dress.png",
      name: "Swati wedding dress",
      price: 15000
    },
    {
      id: 17,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/AmaXhosa/xhosa-woman-in-blknwht.png",
      name: "Xhosa white dress",
      price: 15000
    },
    {
      id: 19,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/AmaXhosa/little-xhosa-girl.png",
      name: "Xhosa beads work",
      price: 15000
    },
    {
      id: 20,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/AmaXhosa/xhosa-lady.png",
      name: "Xhosa Yellow dress",
      price: 15000
    },
    {
      id: 21,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/EmaSwati/swati-lady-in-green.png",
      name: "Green Swati dress",
      price: 15000
    },
    {
      id: 22,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/AmaXhosa/xhosa-woman-in-white-attire.png",
      name: "Xhosa attire",
      price: 15000
    },
    {
      id: 23,
      img: "file:///C:/Users/siyabonga/Documents/GitHub/Online-Shopping-Store/src/Images/Women/Basotho/4b8273e27d70a288a77c7a763cc7eef1.jpg",
      name: "Brown Seshweshwe dress",
      price: 15000
    }
  ]
}

const count = 0;
const itemsOnCart = [];
let outlet;
function getOutlet(name) {
	let array = []
	switch(name){
		case "Home":
			array = randomItemsArray();
			break;
		case "Men":
			array = data.guys
			break;
		case "Women":
			array = data.girls;
			break;
		case "Watches":
			array = data.watches;
			break;	
	}
	return pageItems(array);
}

function handleClick(e) {
console.log(e)
const {id} = e.target;
setCount(prevCount => prevCount + 1)
//localStorage.setItem(`${data}`)
}

function pageItems(clothesArray) {
	let baseString = ""
	clothesArray.forEach( item =>{
	  baseString += !item ? 
		  ""
		  : 
		  `<div  class='product'>
		<img src=${item.img} class='product--img' />
		<div class="content">
		  <p 
			class='product--name'>
			${item.name}
		  </p>
		  <p 
			class='price'>
			R${item.price}
		  </p>
		</div>
	  </div>`
	})
	return baseString;
}

function MainPage(){
	return(` 
		<header>
			<nav>
				<h3 class="storeName">Logo Here</h3>
				<p 
				  style="font: 0.5rem white helvetica; font-weight: bold;"
				  class="items-count">Cart
				  <span id="count">${count}</span>
				</p>
				<div className="pages">
					<button className="link">Home</button>
					<button className="link">Men</button>
					<button className="link">Women</button>
					<button className="link">Watches</button>
				</div>
			</nav>
		</header>
		<main>
		   <div class="products--parent">${getOutlet("Home")}</div>
		</main>
		<footer>
			<p className='p--footer'>2023 @ Siyabonga Mahlalela</p>
		</footer>
	`)
}

const root = document.getElementById("root");
root.innerHTML = MainPage();
document.addEventListener("click",(e)=>{
	const main = document.querySelector("main")
	let btnName =  e.target.textContent
	main.innerHTML = `<div class="products--parent">${getOutlet(btnName)}</div>`
});


function randomItemsArray() {
  let allProducts = [];
  let selectedProducts= [];
	
  const getArray = (_num) =>{
    let array = _num < 2 ?
      data.girls
      : _num === 2 ? data.watches : data.guys; 
    return array;
  }
  
  for (let i = 0; i < 9; i++) {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let selectedArray = getArray(randomNum)
    let randomImage = i === 0 ? 0: Math.floor(Math.random() * selectedArray.length) + 1
    let item = selectedArray[randomImage];
    //setSelectedProducts( (prevItems) => [...prevItems, item] ); 
	selectedProducts.push(item)
  }
  	return selectedProducts
}