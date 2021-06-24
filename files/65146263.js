nav {
  overflow: hidden;
}

.nav-links {
  opacity: 1; /* only to show when class is added */
  background-color: orange;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: transform 1s;
  transform: translateY(-100%);
}

.nav-links.is-active {
  opacity: 1; /* only to show when class is added */
  transform: translateY(0);
}
<header>
  <button class="hamburger hamburger--squeeze" type="button">
    <span class="hamburger-box">
        <span class="hamburger-inner">hamburger</span>
    </span>
  </button>
  <nav>
    <ul class="nav-links">
      <li><a href="index.html">home</a></li>
      <li><a href="shop.html">shop</a></li>
      <li><a href="sport.html">sport</a></li>
      <li><a href="read.html">read</a></li>
      <li><a href="about.html">about</a></li>
    </ul>
  </nav>
</header>