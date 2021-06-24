{item.titleName && (
  <li onClick={() => { this.setState({ indexDescription: index }) }}>
    <div className={less.sidebar_list}>
      <div>
        <FontAwesomeIcon className={less.item_icon} icon={item.iconName} />
      </div>
      <div className={less.titleName}>
        <div>
          <p>{item.titleName}</p>
        </div>
      </div>
    </div>
  </li>
)}
