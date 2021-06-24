const getAssets = data => {
  return 
    (
        <div>
            <ul>
              {data.slice(0,5).map((improperAsset) => (<li>{improperAsset}</li>))}
            </ul>
        </div>
    );
};
