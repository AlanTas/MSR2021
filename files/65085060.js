* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
    min-height: 200vh;
    background-color: #d7a4d9;
    overflow: hidden;
}
h3 {
    color: #3F69CA
}

 /* Preloader Code */ 

  .preload {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #77b3d4;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5 ease;
    z-index: 9999;
  }
  
  .cloud1,
  .cloud2,
  .cloud3{
    height: 100px;
    position: absolute;
    right: 0%;
    z-index: -1;
  }
  
  .cloud1 {
    top: 25%;
    transform: translate(100%, -25%);
    animation: clouds 3s ease infinite;
  }
  
  .cloud2 {
    top: 50%;
    transform: translate(100%, -50%);
    animation: clouds 3s ease infinite 2s;
  }
  
  .cloud3 {
    top: 75%;
    transform: translate(100%, -75%);
    animation: clouds 3s ease infinite 4s;
  }

  
  .airplane {
    height: 200px;
    animation: airplane 1s ease infinite alternate;
  }
  
  @keyframes airplane {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(50px);
    }
  }
  
  @keyframes clouds {
    from {
      right: 0%;
    }
    to {
      right: 130%;
    }
  }
  
  .preload .land {
    position: absolute;
    top: 75%;
    transform: translateY(-75%);
    color: white;
    font-size: 30px;
    font-family: sans-serif;
  }

/* Navbar */

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding: 40px 100px;
    z-index: 9990;
    font-family: "Hind";
}
header.sticky {
    padding: 5px 100px;
    background: #F5F5F5;
    font-family: "Hind";
}
header .logo {
    position: relative;
    font-weight: 700;
    color: #F5F5F5;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.6s;
    font-family: "Hind";
}
header ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Hind";
}
header ul li {
    position: relative;
    list-style: none;
    font-family: "Hind";
}
header ul li a {
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: #F5F5F5;
    letter-spacing: 2px;
    font-weight: 500px;
    transition: 0.6s;
    font-family: "Hind";
    font-size: 20px;
}
header ul li a:hover {
    text-decoration: underline;
    color: black;
}
header.sticky .logo, header.sticky ul li a {
    color: #000;
    font-family: "Hind";
}
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    max-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
.dropdown:hover .dropdown-content {
    display: block;
}
.ddtext1 {
    position: relative;
    left: -5px;
}
.ddtext1:hover {
    color: #00B800;
}
.ddtext2 {
    position: relative;
    left: -15px;
}
.ddtext2:hover {
    color: #14adb3
}
.ddtext3 {
    position: relative;
    left: -20px;
}
.ddtext3:hover {
    color: #E0A800;
}
.information {
    background: linear-gradient( rgb(24, 23, 23, 0.4), rgb(24, 23, 23, 0.4)), url("blackbg.jpg");
    background-size: cover;
    height: 100vh;
}
.name {
    position: relative;
    top: 300px;
    right: 200px;
    text-align: center;
    color: #20A4F3;
    font-family: "Hind";
    animation: fadeIn ease 4s;
    font-size: 80px;
}
.text {
    position: relative;
    top: 300px;
    text-align: center;
    font-family: "Hind";
    text-transform: uppercase;
}
.text h1 {
    font-size: 50px;
    color: #222;
}
.text span {
    font-size: 50px;
    animation: light 2s linear infinite;
}
/* Carousel */

#slider {
    overflow: hidden;
}
#slider figure {
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    animation: 25s slider infinite;
}
#slider figure img {
    width: 20%;
    float: left;
}
@keyframes slider {
    0% {
        left: 0;
    }
    20% {
        left: 0;
    }
    25% {
        left: -100%;
    }
    45% {
        left: -100%;
    }
    50% {
        left: -200%;
    }
    70% {
        left: -200%;
    }
    75% {
        left: -300%;
    }
    95% {
        left: -300%;
    }
    100% {
        left: -400%;
    }
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Home</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css2?family=Hind&display=swap" rel="stylesheet">
  </head>
  <body>
   <div class = "load">
      <div class="preload">
        <img class="airplane" src="https://uce0f26a244f3c0cca3e7d07a830.previews.dropboxusercontent.com/p/thumb/AA-n6na-kOCtw8Bb8oYMYS7ujTjaqw6NiVJNq9sN_9JhpI8IQpbBvBOqyHRHI_05vuXhm-wajT-mh3XDkby6-4ModecGbJfeDEhXSRXt964rcuz4HhhTPGfQb0WJEEQuL0UuRXmzMm57ErG0SqIdWwLad21j_AglpMM8xfsMhXC-NzLfAoH7O9xsXhpzshhB3dsWYG--obRcwjaCpRh7eDxmxvRrXfa86VS3cmyh0a69vAPc8C6GFSje2oYY-M7Qykor8-mgfLHjLk3V42CvKyhiawUJKzcLwiNkyAW_veON8JZ0iBOcAGlL9429_3TcjwPTJQpn2Vk64ZfTjtBtZhDgtki9HqYz7CUCYeMAZIaEAQ/p.png?size=178x178&size_mode=1" alt="airplane" />
        <h3 class = "land">Landing on the website...</h3>
        <img src="https://uced21f913a097d93229a4d305a6.previews.dropboxusercontent.com/p/thumb/AA-h9fXSjZiT_JeqBnoUIIjfqcAs8QJIGSX9cUfQv2MKpJvn4EEnaxZGTgfUHiP2sgqoFLtVMOddWJLpjovKwNycGuBsSTPvfVi4-rT4Vl7pI55sfCwYAwFhRpYTuDarv0cYMXvt_rqNuN5XO63h_Ko44v4vGPs0WNlD_UrD-59-5xSYd4ve5BGwwXqI8U1iOb1ieoqSRPsv6CZApkWlD4GERrmewKAwnubLsONTyT3SG60kHd490r9pBmHkjok6a4YD4fcviIMsFJl25THm7JmEYkK-LbMamygbnpPXOc_p3VX-WhkS7w1Pz97e5XqrpM9VoxXulwMZhRpDcun6-lHNO0J7ehREbwLJzjfluce3Cw/p.png?size=178x178&size_mode=1" alt="cloud1" class="cloud1" />
        <img src="https://uced21f913a097d93229a4d305a6.previews.dropboxusercontent.com/p/thumb/AA-h9fXSjZiT_JeqBnoUIIjfqcAs8QJIGSX9cUfQv2MKpJvn4EEnaxZGTgfUHiP2sgqoFLtVMOddWJLpjovKwNycGuBsSTPvfVi4-rT4Vl7pI55sfCwYAwFhRpYTuDarv0cYMXvt_rqNuN5XO63h_Ko44v4vGPs0WNlD_UrD-59-5xSYd4ve5BGwwXqI8U1iOb1ieoqSRPsv6CZApkWlD4GERrmewKAwnubLsONTyT3SG60kHd490r9pBmHkjok6a4YD4fcviIMsFJl25THm7JmEYkK-LbMamygbnpPXOc_p3VX-WhkS7w1Pz97e5XqrpM9VoxXulwMZhRpDcun6-lHNO0J7ehREbwLJzjfluce3Cw/p.png?size=178x178&size_mode=1" alt="cloud2" class="cloud2" />
        <img src="https://uced21f913a097d93229a4d305a6.previews.dropboxusercontent.com/p/thumb/AA-h9fXSjZiT_JeqBnoUIIjfqcAs8QJIGSX9cUfQv2MKpJvn4EEnaxZGTgfUHiP2sgqoFLtVMOddWJLpjovKwNycGuBsSTPvfVi4-rT4Vl7pI55sfCwYAwFhRpYTuDarv0cYMXvt_rqNuN5XO63h_Ko44v4vGPs0WNlD_UrD-59-5xSYd4ve5BGwwXqI8U1iOb1ieoqSRPsv6CZApkWlD4GERrmewKAwnubLsONTyT3SG60kHd490r9pBmHkjok6a4YD4fcviIMsFJl25THm7JmEYkK-LbMamygbnpPXOc_p3VX-WhkS7w1Pz97e5XqrpM9VoxXulwMZhRpDcun6-lHNO0J7ehREbwLJzjfluce3Cw/p.png?size=178x178&size_mode=1" alt="cloud3" class="cloud3" />
      </div>
   </div>
    <!--Navbar-->
    <header>
      <a class="" href="#"></a>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <div class="dropdown">
            <a class="dropbtn" href="gallery.html">Gallery</a>
            <div class="dropdown-content">
              <a class="ddtext1" href="asia.html">Asia</a> <a class="ddtext2" href="europe.html">Europe</a> <a class="ddtext3" href="na.html">America</a>
            </div>
          </div>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </header>
    
  <!--Home Page-->
    <div id="information">
        <div id="slider">
    <figure>
      <img src="https://c4.wallpaperflare.com/wallpaper/906/767/707/polygon-triangles-geometric-patterns-wallpaper-preview.jpg">
      <img src="https://c4.wallpaperflare.com/wallpaper/906/767/707/polygon-triangles-geometric-patterns-wallpaper-preview.jpg">
      <img src="https://c4.wallpaperflare.com/wallpaper/906/767/707/polygon-triangles-geometric-patterns-wallpaper-preview.jpg">
      <img src="https://c4.wallpaperflare.com/wallpaper/906/767/707/polygon-triangles-geometric-patterns-wallpaper-preview.jpg">
      <img src="https://c4.wallpaperflare.com/wallpaper/906/767/707/polygon-triangles-geometric-patterns-wallpaper-preview.jpg">
    </figure>
  </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>