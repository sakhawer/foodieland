let navber = document.querySelector("#navber")
let back2top =document.querySelector(".back2top")
let side_menu = document.querySelector('.side_menu')
let bers = document.querySelector(".bers")
let up = document.querySelector(".top")
let middle = document.querySelector(".middle")
let bottom = document.querySelector(".bottom")
let love = document.querySelector("#loves")




window.addEventListener('scroll', function(){
  let value = this.window.scrollY;

  if( value  > 150){
    navber.classList.add("sticky")
    back2top.classList.add("hide")
  }
  else{
    navber.classList.remove("sticky")
    back2top.classList.remove("hide")
  }
})

bers.addEventListener("click", function(){
  side_menu.classList.toggle("side_menu_show")
  up.classList.toggle("top_ber")
  middle.classList.toggle("middle_ber")
  bottom.classList.toggle("bottom_ber")
  
}) 

love.addEventListener("click", function(){
  love.classList.toggle("love_ber")
  

} )


let slider = document.querySelector("#banner")

window.addEventListener('mouseenter', function(){
  let value = this.window.scrollX;

  if( value){
    slider.classList.add("slider")
    setTimeout("slider()", 2500)
  }
  else{
    slider.classList.remove("slider")
  
  }
})
