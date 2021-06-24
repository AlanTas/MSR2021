function CurrentExample() {
    return (
        <form onSubmit={(event) => {event.preventDefault(); console.log("form submit")}}>
            <input type="text"/>

            <button onClick={() => console.log("button click")}>Click</button>
        </form>
    )
}

const root = document.querySelector("#root");
ReactDOM.render(<CurrentExample/>, root);
function FixedExample() {
    return (
        <form onSubmit={(event) => {event.preventDefault(); console.log("form submit")}}>
            <input type="text"/>

            <button type="button" onClick={() => console.log("button click")}>Click</button>
        </form>
    )
}

const root = document.querySelector("#root");
ReactDOM.render(<FixedExample/>, root);