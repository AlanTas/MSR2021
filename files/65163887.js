function Component () {
    const [input, setInput] = useState(0);

    const handleInputChange = (e) => {
        setInput(e.target.valueAsNumber || e.target.value);
        console.log(e.target.valueAsNumber || e.target.value);
    }

    return (
        <input type="number" value={input} onChange={handleInputChange} required pattern="[0-9]*[.,][0-9]*"/>
        <h4>Data : {input}</h4>
    )
}
