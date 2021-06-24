{Searchfile.filter((ids) => user.favorite.includes(ids._id)).map(
  (item, index) => (
    <div
      className="row-queue"
      key={index}
      // onClick={() => handleClick(item, index)}
    >
      <div className="column1-queue">{index + 1}</div>
      <div className="column2-queue">{item.title}</div>
      <div className="column3-queue">{item.singer}</div>
    </div>
  )
)}
