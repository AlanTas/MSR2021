const UseEffectCounter1 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = 'You clicked 0 times';
    }, []);
    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>+1</button>
        </div>
    )
}

const UseEffectCounter1 = () => {
    const initCount = 0;
    const [count, setCount] = useState(initCount);
    useEffect(() => {
        document.title = `You clicked ${initCount} times`;
    }, [initCount]);
    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>+1</button>
        </div>
    )
}
