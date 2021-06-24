const Radios = () => {
      const [value, setValue] = React.useState("");
      return (
        <div>
          <div>
            <input
              type="radio"
              id="huey"
              name="drone"
              value="huey"
              onChange={(e) => setValue(e.target.value)}
            />
            <label for="huey">Huey</label>
          </div>
    
          <div>
            <input
              type="radio"
              id="dewey"
              name="drone"
              value="dewey"
              onChange={(e) => setValue(e.target.value)}
            />
            <label for="dewey">Dewey</label>
          </div>
    
          <div>
            <input
              type="radio"
              id="louie"
              name="drone"
              value="louie"
              onChange={(e) => setValue(e.target.value)}
            />
            <label for="louie">Louie</label>
          </div>
    
          {value === "huey" ? (
            <h1>Huey</h1>
          ) : value === "dewey" ? (
            <h1>Dewey</h1>
          ) : value === "louie" ? (
            <h1>Louie</h1>
          ) : null}
        </div>
      );
    };
