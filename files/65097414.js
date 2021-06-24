const App = () => {

  return (
    <div style={{ padding: 20, backgroundColor: 'red', position: 'relative' }}>
      <h3>See the following blue background paragraph. I want it to go beyond the padding I set for the parent div</h3>
<div style={{ paddingBottom: 30}}><p style={{overflowX: 'scroll', whiteSpace: 'nowrap', backgroundColor: 'blue', position: 'absolute', left: 0, right: 0, margin: 'auto'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>  
        <h3>Think of it this way: I still want it to scroll as needed, but, I want it to completely go across my parent div, surpassing the padding set on it.</h3>
    </div>
  )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);