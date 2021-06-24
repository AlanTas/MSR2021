import React, {useState} from 'react'

function Room() {
    const [check, setCheck] = useState(null);

    const ibegyouwork = () => {
        setCheck(<button>New button</button>);
    } 

    return (
        <div>
            <button onClick={ibegyouwork}>Display my button now !!!!</button>
            {check}
        </div>
    );
}

export default Room;
