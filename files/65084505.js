import React, {useContext} from 'react';

const NavbarContext = React.createContext({resetDisplay: () => {}});

function Navbar() {
    function resetDisplay() {
        // do stuff in here
    }

    return (
        <NavbarContext.Provider value={{resetDisplay}}>
            <ButtonGroup />
        </NavbarContext.Provider>
    );
}


function ButtonGroup() {
    return (
        <div>
            <ResetButton />
        </div>
    );
}

function ResetButton() {
    const {resetDisplay} = useContext(NavbarContext);

    return <Button onClick={() => resetDisplay()} >Reset</Button>;
}

