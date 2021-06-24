function MenuBarGame(props) {
  const [click, setClick] = useState(false);
  const dropdown = useRef();
  const btn = useRef();

  useEffect(() => {
    if (click)
      btn.current.style.marginBottom = `${dropdown.current.offsetHeight}px`;
    else btn.current.style.marginBottom = 0;
  }, [click]);

  function handleDropdown() {
    setClick(!click);
  }

  return (
    <>
      <div>
        <li>
          <button className="gameButton" onClick={handleDropdown} ref={btn}>
            <img src={Logo} /> {props.data.name}
          </button>
          {click ? (
            <div className="dropdown-content" ref={dropdown}>
              <button>* Duel</button>
              <button>* Events</button>
              <button>* Leaderboard</button>
            </div>
          ) : null}
        </li>
      </div>
    </>
  );
}
export default MenuBarGame;
