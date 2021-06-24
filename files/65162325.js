render() {
    return (
        // ...
        // In my knowledge JS event listeners are more taxing on the performance
        {
            if($(window).width() >= 1024){
                return <div className="bigger-than-1024"> RENDERED CONDITIONALLY </div>
            }
        }
    );
}
