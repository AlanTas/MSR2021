  <div className="row">
         {column.map((item) => {
          const { title, image, path } = item;
          return (
            <ul className="footer-collections">
              <MenuLinks title={title} image={image} path={path} />
            </ul>
          );
        })}
        </div>
