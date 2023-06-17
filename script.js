const aboutUs = document.getElementById("about")
const inspo = document.getElementById("inspiration")
const contact = document.getElementById("contactInfo")



const about = () => {
    if (aboutUs.style.display === "block") {
      aboutUs.style.display = "none"
    } else {
      aboutUs.style.display = "block"
    }
  }

const inspiration = () => {
    if (inspo.style.display === "block") {
      inspo.style.display = "none"
    } else {
      inspo.style.display = "block"
    }
  }

const contactMe = () => {
    if (contact.style.display === "block") {
      contact.style.display = "none"
    } else {
      contact.style.display = "block"
    }
  }

let clicks = 0
let donutClickers = 0
let amount = 0
let price = 100


donutClicker();

// Functions


function donutClicker() {
    tracker.innerHTML =clicks 
    autoTracker.innerHTML = donutClickers
    cost.innerHTML = price
    removeDisable(clicks >= price, autoClicker);
}

function Increase() {
    clicks = clicks + 1
    donutClicker()
    }

submit.addEventListener("click",Increase)


function IncreaseClicks() {
    if (donutClickers >= 0){
        donutClickers = donutClickers + 1
        setInterval(function() {
            submit.click()
        },1000);
    } else {
        end
    }
    donutClicker();
    }

autoClicker.addEventListener("click",() => {

    IncreaseClicks();
    subtractAmount();
    updatePrice();
    autoClickerCost();
    IncreaseClicks();
    donutClicker();
})

function subtractAmount() {
    if(clicks >= price) {
        clicks = clicks - price
        amount++
        autoClickerCost()
    }
}

function updatePrice (price, donutClickers) {
    const upgradeCost = document.querySelector('cost');
    const upgradeAmount = document.querySelector('autoTracker')
    upgradeCost.innerHTML = price
    upgradeAmount.innerHTML = donutClickers
    donutClickers++
}

function autoClickerCost() {
    price = Math.round(price + (price * 0.1))
}

function removeDisable(allowed,btn){
    if(allowed){
        btn.removeAttribute("disabled", btn)
    }
    else {
        btn.setAttribute("disabled", btn)
    }
}

function resetAll(){
    location.reload()
}


clear.addEventListener("click",resetAll)