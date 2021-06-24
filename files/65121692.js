$(window).on('scroll', function() {
  var sections = $('.timeline_article'),
    nav = $('.scroll_navigation_section'),
    header_height = $('.header').outerHeight(),
    cur_pos = $(this).scrollTop();
  sections.each(function() {
    var top = $(this).offset().top - header_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      $(this).addClass('active');
      var aElement = nav.find('a[href="#' + $(this).attr('id') + '"]')
      aElement.addClass('active');
      if(aElement && $(aElement) && $(aElement)[0]){
        $(aElement)[0].scrollIntoView();
      }
    }
  });
});
.header {
  position: fixed;
  background-color: #fff;
  height: 50px;
  z-index: 10;
  width: 100%;
  top: 0;
}
.nav {
  list-style: none;
}
.nav li {
  float: left;
  padding-bottom: 1rem;
  margin-left: 15px;
}

.vertical_timeline_section {
  margin-top: 50px;
  position: relative;
}

.scroll_navigation_section {
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 1;
  background-color: #FFF;
}

.scroll_navigation_section .scroll_navigation_year {
  max-height: 150px;
  overflow: auto;
  padding: 5px 0px;
}

.scroll_navigation_section .scroll_navigation_year li {
  list-style-type: none;
  position: relative;
  margin-left: 0;
  margin-top: 15px;
}

.scroll_navigation_section .scroll_navigation_year li>a.active {
  color:red;
}

.wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0.6rem;
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div class="header">
  <ul class="nav">
    <li><a href="btn1">Header btn1</a></li>
    <li><a href="btn2">Header btn2</a></li>
    <li><a href="btn3">Header btn3</a></li>
  </ul>
</div>
<section class="vertical_timeline_section">
  <section class="scroll_navigation_section">
    <div class="scroll_navigation_year">
      <ul>
        <li><a href="#1964">1964</a></li>
        <li><a href="#1984">1984</a></li>
        <li><a href="#2000">2000</a></li>
        <li><a href="#2002">2002</a></li>
        <li><a href="#2009">2009</a></li>
        <li><a href="#2012">2012</a></li>
        <li><a href="#2015">2015</a></li>
        <li><a href="#2016">2016</a></li>
        <li><a href="#2019">2019</a></li>
        <li><a href="#2020">2020</a></li>
        <li><a href="#2021">2021</a></li>
        <li><a href="#2023">2023</a></li>
        <li><a href="#2025">2025</a></li>
      </ul>
    </div>
  </section>

  <section class="timeline_section">
    <div class="wrapper">
      <div class="timeline_article" id="1964">
        <div class="meta_date">
          <span class="year">1964</span>
        </div>
        <div class="timeline_article">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
      <div class="timeline_article" id="1984">
        <div class="meta_date">
          <span class="year">1984</span>
        </div>
        <div class="timeline_article">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div class="timeline_article" id="2000">
        <div class="meta_date">
          <span class="year">2000</span>
        </div>
        <div class="timeline_article">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div class="timeline_article" id="2002">
        <div class="meta_date">
          <span class="year">2002</span>
        </div>
        <div class="timeline_article">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div class="timeline_article" id="2009">
        <div class="meta_date">
          <span class="year">2009</span>
        </div>
        <div class="timeline_article">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
      <div class="timeline_article" id="2012">
        <div class="meta_date">
          <span class="year">2012</span>
        </div>
        <div class="timeline_article">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
      <div class="timeline_article" id="2015">
        <div class="meta_date">
          <span class="year">2015</span>
        </div>
        <div class="timeline_article">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
      <div class="timeline_article" id="2016">
        <div class="meta_date">
          <span class="year">2016</span>
        </div>
        <div class="timeline_article">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
            <div class="timeline_article" id="2019">
        <div class="meta_date">
          <span class="year">2019</span>
        </div>
        <div class="timeline_article">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
    </div>
  </section>
</section>