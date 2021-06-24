  const Cinemas = 
      [ { branchName: "City Cinema - New York"
        , movies: 
          [ { id: 1, shows: 
              [ { index: 1, datetime: "8 Nov, Sun - 9:00am",   house: 3 } 
              , { index: 2, datetime: "10 Nov, Tue - 11:00am", house: 3 } 
              ] 
            } 
          , { id: 2, shows: 
              [ { index: 3, datetime: "9 Nov, Mon - 2:00pm",   house: 1 } 
          ] } ] 
        } 
      , { branchName: "City Cinema - Los Angeles"
        , movies: 
          [ { id: 2, shows: 
              [ { index: 4, datetime: "11 Nov, Wed - 9:00am",  house: 4 } 
              , { index: 5, datetime: "11 Nov, Wed - 11:00am", house: 2 } 
          ] } ] 
        } 
      , { branchName: "City Cinema - Wisconsin"
        , movies:
          [ { id: 1, shows: 
              [ { index: 6, datetime: "11 Nov, Wed - 9:00am", house: 4} 
      ] } ] } ] 


  const Movies = 
    [ { id        : 1
      , type      : "now"
      , thumbnail : "../xx.png"
      , src       : "../yy.mp4"
      , name      : "Casablanca"
      , cast      : "Humphrey Bogart, Ingrid Bergmen"
      , director  : "Michael Curtiz"
      , duration  : 120
      } 
    , { id        : 2
      , type      : "now"
      , thumbnail : "../xx.png"
      , src       : "../xx.mp4"
      , name      : "Chocalate"
      , cast      : "Christiano Roland, Wayne Beckman"
      , director  : "Alex Curtis"
      , duration  : 110
      } 
    , { id        : 3
      , type      : "now"
      , thumbnail : "../xx.png"
      , src       : "../xx.mp4"
      , name      : "Wildlife"
      , cast      : "Marcus Randford"
      , director  : "David De Geek"
      , duration  : 100
      } 
    , { id        : 4
      , type      : "upcoming"
      , thumbnail : "../xx.png"
      , src       : "../xx.mp4"
      , name      : "Barbecue"
      , cast      : "Taylor Watson"
      , director  : "Rolando Broom"
      , duration  : 105
      } 
    , { id        : 5
      , type      : "upcoming"
      , thumbnail : "../xx.png"
      , src       : "../xx.mp4"
      , name      : "BigBuck"
      , cast      : "Mark Hughes"
      , director  : "Tim Carlton"
      , duration  : 115
      } 
    , { id        : 6               // <--
      , type      : "upcoming"
      , thumbnail : "../xx.png"     // <--
      , src       : "../xx.mp4"
      , name      : "Nature"
      , cast      : "Benjamin Crook"
      , director  : "Memphis Delan"
      , duration  : 100
      } 
    ] 

const DomParser  = new DOMParser()
  ,   cinemaSlct = document.getElementById("cinemaSelect")
  ,   div_lm     = document.querySelector('div#lm')

Cinemas.forEach((cinema,index) =>
  { cinemaSlct.add( new Option( cinema.branchName, index )) });

cinemaSlct.onchange = () =>
  {
  div_lm.innerHTML = ""
  Cinemas[cinemaSlct.value].movies.forEach(movieC=>
    {
    movieC.shows.forEach(show=>
      {
      let movie = Movies.find(x=>x.id===show.index)
      if (!movie) throw 'no movie reference' 

      let newSection = `
  <section>
    <hr>
    <img src="${movie.thumbnail}" alt="${movie.name}">
    <p>name : ${movie.name} <br>
      cast : ${movie.cast} <br>
      director : ${movie.director} </p>
    <hr>
    <p> datetime:${show.datetime} <br>   house:${show.house} </p>
    <hr>
  </section>`;
      div_lm.appendChild( (DomParser.parseFromString( newSection, 'text/html')).body.firstChild )
      })
    })
  }
<div id="Cinema">
  <form id="cin" method="get" action="">
    <fieldset>
      <legend>Cinema</legend>
      <select id="cinemaSelect">
        <option value="" selected disabled> select one</option>
      </select>
    </fieldset>
  </form>
</div>
<div id="lm"></div>