
let body = document.body





for (let i = 0; i < 10; i++){
   
    
    // let container = document.querySelector("#container")
let container = document.createElement('div')
container.classList.add('container')

let prodBox = document.createElement('div')
prodBox.classList.add('prod_box')

let item = document.createElement('div')
item.classList.add('prod_item')

let bag = document.createElement('div')
bag.classList.add('img_el')

let text = document.createElement('div')
let text_h3 = document.createElement('h3')
let text_p = document.createElement('p')
text.classList.add('title')
text_h3.innerHTML = "MEN’S CLOTHING (120)"
text_p.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

let option = document.createElement('div')
option.classList.add('option')

for (let i = 0; i <= 2; i++) {
    let elem = document.createElement('div')
    elem.classList.add('el')
  
    let img = document.createElement('img')
    let span = document.createElement('span')
    
    if (i === 0) {
        img.src = "img/dollar.svg"
        img.alt = "dollar"
        span.innerHTML = ' 190'
    } else if (i === 1) {
      img.src = "img/star.png"
      img.alt = "star"
      span.innerHTML = ' 3.9'
    } else if (i === 2) {
      img.src = "img/box.png"
      img.alt = "box"
      span.innerHTML = ' 210'
    }
  
    elem.append(img)
    elem.append(span)
    option.append(elem)
  }

let btn = document.createElement('button')
btn.classList.add('fav')
btn.innerHTML = "В избраное"

let isActive = false

btn.onclick = () => {
  if (!isActive) {
    btn.classList.add("active_fav")
    btn.innerHTML = "Добавлено"
    isActive = true
  } else {
    btn.classList.remove("active_fav")
    btn.innerHTML = "В избранное"
    isActive = false
  }
}

text.append(text_h3)
text.append(text_p)

item.append(bag)
item.append(text)
item.append(option)
item.append(btn)

prodBox.append(item)
container.append(prodBox)

body.append(prodBox)


}