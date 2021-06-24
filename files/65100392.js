const App = () => {

  return (
  
    <div>
            <figure style={{
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundImage: `url(https://placekitten.com/1000/1000)`,
                backgroundSize: 'fit',
                backgroundPosition: 'top',
                width: '100%',
                height: '100%',
                margin: 0
            }}></figure>
      <div style={{  width: '100%', height: '100%', backgroundColor: 'red', position: 'absolute', opacity: '20%'}}> </div>
        <div style={{
            position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '412px',
            color: 'white'
          }}>
            <h1>Div content</h1>
            <p>Would like to add a backdrop over the parent div</p>
            <p>Make the background a light gray over the image</p>
            <p>As it stands, any background related color I put on this div does not work. (see the backgroundColor set to red on one of the parent divs</p>

        
      </div>

    </div>
  )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);