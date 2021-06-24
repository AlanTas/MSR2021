class App extends Component {
  state = {
    persons: [
      { name: 'test1', num: randomNum()},
      { name: 'test2', num: randomNum()}
    ]
  }

  randomPerson =() =>{
    return Math.floor(Math.random()* this.state.persons.length)
  }

  render(){
    return (
      <React.Fragment>
        <button onClick={this.randomPerson}>Switch Person</button>
        {/* ^-- I changed this and removed the num declaration */}
        <div>
          <Person name={this.state.persons[num].name} randomNum={this.state.persons[num].num} />
        </div>
      </React.Fragment>
    
    );
  }
}

export default App;

function App() {
    const randomPerson = () => Math.floor(Math.random() * this.state.persons.length);

    const [person, setPerson] = useState([
        { name: 'test1', num: randomNum()},
        { name: 'test2', num: randomNum()}
    ]);
    const [currentPerson, setCurrentPerson] = useState(randomPerson());

    const switchPerson = () => {
        setCurrentPerson(randomPerson());
    };

    return (
        <React.Fragment>
            <button onClick={switchPerson}>Switch Person</button>
            <div>
                <Person name={person[currentPerson].name} randomNum={person[currentPerson].num} />
            </div>
        </React.Fragment>
    );
}
