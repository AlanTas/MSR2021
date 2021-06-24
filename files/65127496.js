const MyComponent = props => {
    const number = useRef(0);
    React.useEffect(() => {
        number.current = number.current + 1
        console.log('inside useEffect: ', number.current);
    }, [number.current])

    console.log('outside useEffect: ', number.current);

    return <div/>
}
