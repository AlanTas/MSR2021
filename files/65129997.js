const SearchMusic = ({keyword, setKeyword}) => {

    const BarStyling = {width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem"};

    return (
        <input
            type="text"
            style={BarStyling}
            key='random1'
            value={keyword}
            placeholder={'Search a song'}
            onChange={(e => setKeyword(e.target.value))}
        />
    );
};
