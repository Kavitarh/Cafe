import React from 'react'
import './Cafeone.css'
function Cafefirst() {
  return (
    <div>
    <a class="navbar">
      <a href="#" class="one">Home</a>
      <a href="#" class="one">Order</a>
      <a href="#" class="one">Food</a>
      <a href="#" class="one">Restaurant</a>
      <a href="#" class="one">Testimonials</a>
      <a href="#" class="one">Contact Us</a>
      <label for="menu" class="one">&#9776;</label>
    </a>
  

    <section class="first">
    <div class="section">
      <h1>LOREM IPSUM</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id est vitae dolor rhoncus tristique. 
        Maecenas metus quam, rhoncus euismod lorem in, sollicitudin viverra eros. Donec dictum luctus quam ut 
        tristique. Curabitur nec faucibus purus.
      </p>
      <button>Click Me</button>
    </div>

    <div class="image">
      <img src="/burger.jpg" alt="Burgerimage"  id='burger'/>
    </div>
  </section>
  <div className='one1'>
  <div id='imgone'>
   <img src="/stage.jpg"  id='imgone' alt="StagImage"/>
   
   <img src="/street.jpg" id='imgtwo' alt="street"/>
   <img src="/food.jpg" id='imgthree' alt="food"/>
  </div>
   <div class="textbox">
      <p id='stext'>LOREM IPSUM</p>
      <h1 id='textone'>LOREM IPSUM<br/>SET ADEMIR</h1>
      <a id='anchor' href="#">Click ➜</a> 
      
    </div>
  </div>
    </div>
  )
}

export default Cafefirst
