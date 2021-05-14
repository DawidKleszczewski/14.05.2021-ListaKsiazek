const grid = document.getElementById('grid')
grid.setAttribute('class','grid')

const div = document.createElement('div')
const h1 = document.createElement('h2')
const p1 = document.createElement('p')
const btn = document.createElement('button')
const btn2 = document.createElement('button')
div.setAttribute('class','grid-item')
p1.setAttribute('class','f-c')
btn2.setAttribute('onclick','del()')
btn.setAttribute('class','btn')
btn2.setAttribute('class','btn')
btn.innerText = 'Edytuj'
btn2.innerText = 'Usuń'
h1.innerText = 'Book1'
p1.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam nam impedit odit dicta ipsam aspernatur porro possimus dolorem vel, maxime ex minima quos modi, eaque illum nulla optio molestiae? Doloribus tenetur vero assumenda, beatae officia at doloremque veritatis est.'
div.appendChild(h1)
div.appendChild(p1)
div.appendChild(btn2)
div.appendChild(btn)
grid.appendChild(div)

const div2 = document.createElement('div')
const h2 = document.createElement('h2')
const p2 = document.createElement('p')
const btn3 = document.createElement('button')
const btn4 = document.createElement('button')
div2.setAttribute('class','grid-item')
p2.setAttribute('class','f-c')
btn4.setAttribute('onclick','del2()')
btn3.setAttribute('class','btn')
btn4.setAttribute('class','btn')
btn3.innerText = 'Edytuj'
btn4.innerText = 'Usuń'
h2.innerText = 'Book2'
p2.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam nam impedit odit dicta ipsam aspernatur porro possimus dolorem vel, maxime ex minima quos modi, eaque illum nulla optio molestiae? Doloribus tenetur vero assumenda, beatae officia at doloremque veritatis est.'
div2.appendChild(h2)
div2.appendChild(p2)
div2.appendChild(btn4)
div2.appendChild(btn3)
grid.appendChild(div2)

const div3 = document.createElement('div')
const h3 = document.createElement('h2')
const p3 = document.createElement('p')
const btn5 = document.createElement('button')
const btn6 = document.createElement('button')
div3.setAttribute('class','grid-item')
p3.setAttribute('class','f-c')
btn6.setAttribute('onclick','del3()')
btn5.setAttribute('class','btn')
btn6.setAttribute('class','btn')
btn5.innerText = 'Edytuj'
btn6.innerText = 'Usuń'
h3.innerText = 'Book3'
p3.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam nam impedit odit dicta ipsam aspernatur porro possimus dolorem vel, maxime ex minima quos modi, eaque illum nulla optio molestiae? Doloribus tenetur vero assumenda, beatae officia at doloremque veritatis est.'
div3.appendChild(h3)
div3.appendChild(p3)
div3.appendChild(btn6)
div3.appendChild(btn5)
grid.appendChild(div3)

const div4 = document.createElement('div')
const h4 = document.createElement('h2')
const p4 = document.createElement('p')
const btn7 = document.createElement('button')
const btn8 = document.createElement('button')
div4.setAttribute('class','grid-item')
p4.setAttribute('class','f-c')
btn8.setAttribute('onclick','del4()')
btn7.setAttribute('class','btn')
btn8.setAttribute('class','btn')
btn7.innerText = 'Edytuj'
btn8.innerText = 'Usuń'
h4.innerText = 'Book4'
p4.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam nam impedit odit dicta ipsam aspernatur porro possimus dolorem vel, maxime ex minima quos modi, eaque illum nulla optio molestiae? Doloribus tenetur vero assumenda, beatae officia at doloremque veritatis est.'
div4.appendChild(h4)
div4.appendChild(p4)
div4.appendChild(btn8)
div4.appendChild(btn7)
grid.appendChild(div4)

const div5 = document.createElement('div')
const h5 = document.createElement('h2')
const p5 = document.createElement('p')
const btn9 = document.createElement('button')
const btn10 = document.createElement('button')
div5.setAttribute('class','grid-item')
p5.setAttribute('class','f-c')
btn10.setAttribute('onclick','del5()')
btn9.setAttribute('class','btn')
btn10.setAttribute('class','btn')
btn9.innerText = 'Edytuj'
btn10.innerText = 'Usuń'
h5.innerText = 'Book5'
p5.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam nam impedit odit dicta ipsam aspernatur porro possimus dolorem vel, maxime ex minima quos modi, eaque illum nulla optio molestiae? Doloribus tenetur vero assumenda, beatae officia at doloremque veritatis est.'
div5.appendChild(h5)
div5.appendChild(p5)
div5.appendChild(btn10)
div5.appendChild(btn9)
grid.appendChild(div5)

const div6 = document.createElement('div')
const h6 = document.createElement('h2')
const p6 = document.createElement('p')
const btn11 = document.createElement('button')
const btn12 = document.createElement('button')
div6.setAttribute('class','grid-item')
p6.setAttribute('class','f-c')
btn12.setAttribute('onclick','del6()')
btn11.setAttribute('class','btn')
btn12.setAttribute('class','btn')
btn11.innerText = 'Edytuj'
btn12.innerText = 'Usuń'
h6.innerText = 'Book6'
p6.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, veniam nam impedit odit dicta ipsam aspernatur porro possimus dolorem vel, maxime ex minima quos modi, eaque illum nulla optio molestiae? Doloribus tenetur vero assumenda, beatae officia at doloremque veritatis est.'
div6.appendChild(h6)
div6.appendChild(p6)
div6.appendChild(btn12)
div6.appendChild(btn11)
grid.appendChild(div6)

function del() {
    grid.removeChild(div)
}
function del2() {
    grid.removeChild(div2)
}
function del3() {
    grid.removeChild(div3)
}
function del4() {
    grid.removeChild(div4)
}
function del5() {
    grid.removeChild(div5)
}
function del6() {
    grid.removeChild(div6)
}
function add() {
    grid.appendChild(div)
    grid.appendChild(div2)
    grid.appendChild(div3)
    grid.appendChild(div4)
    grid.appendChild(div5)
    grid.appendChild(div6)
}