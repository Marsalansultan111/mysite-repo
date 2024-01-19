import React from 'react'
import './site.css'

const Site = () => {
  return (
    <div className="container">
        <nav>
<img src='images/logo.png' className='logo' alt='logo'/>
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact us</a></li>
</ul>
<div className='close_btn'>
  <span class="material-symbols-outlined">school</span> &nbsp;HEC Portal
  </div>
</nav>


{/* header content  */}
<div className='content'>
<h1>Beautiful<br/>place to explore your higher education</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <form>
      <input type='text' placeholder='Enter department name'/>
      <button type='submit'className='btn'>Search</button>
    </form>
    </div>
    </div>
  )
}

export default Site