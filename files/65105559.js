<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link rel="stylesheet" href="./css/homestyle.css"> -->
  <!-- <link rel="stylesheet" href="./css/content.css"> -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body onload="myFunction()">
  <!-- CONTENT-->
  <section class="content">
    <div class="left-content">
      <div class="left-two">
        <section class="pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-6">
                <h3 class="mb-3">Carousel cards title </h3>
              </div>
              <div class="col-6 text-right">
                <a class="btn btn-dark mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                  <i class="fa fa-arrow-left"></i>
                </a>
                <a class="btn btn-dark mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                  <i class="fa fa-arrow-right"></i>
                </a>
              </div>
              <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div id="row-one" class="row">

                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci1" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct1" class="card-title">Image 1</h4>

                            </div>

                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci2" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct2" class="card-title">Image 2</h4>

                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci3" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct3" class="card-title">Image 3</h4>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">

                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci4" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct4" class="card-title">Image 4</h4>

                            </div>

                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci5" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct5" class="card-title">Image 5</h4>

                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci6" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct6" class="card-title">Image 6</h4>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">

                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci7" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct7" class="card-title">Image 7</h4>

                            </div>

                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci8" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct8" class="card-title">Image 8</h4>

                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img id="ci9" class="img-fluid" alt="100%x280">
                            <div class="card-body">
                              <h4 id="ct9" class="card-title">Image 9</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="right-content"></div>
  </section>

  <!-- <script src="./myscript.js" async defer></script> -->
  <!-- <script src="./js/s-cards.js" async defer></script> -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  <script>

  function myFunction(){
      var employees = '{ "employees" : [{ "title":"John" , "name":"Doe","src":"https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" }, { "title":"Anna" , "name":"Smith", "src":"https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" }, { "title":"Peter" , "name":"Jones","src":"https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" }, { "title":"Peter" , "name":"Jones","src":"https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4" }, { "title":"Peter" , "name":"Jones","src":"https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" }, { "title":"Peter" , "name":"Jones","src":"https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" }, { "title":"Peter" , "name":"Jones","src":"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" }, { "title":"Peter" , "name":"Jones","src":"https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" }, { "title":"Peter" , "name":"Jones","src":"https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" } ]}';

      var obj = JSON.parse(employees);
      var j=0;
      for(var i=1;i<=9;i++){
        document.getElementById("ct"+i).innerHTML = obj.employees[j].title;
        document.getElementById("ci"+i).innerHTML = obj.employees[j].name;
        document.getElementById("ci"+i).src = obj.employees[j].src;
        console.log(obj.employees[j].src);
        j++;
      }


    };

    /*---Cards Homepage---*/

  </script>
</body>

</html>
