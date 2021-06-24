function Build() {
  const [page, setPage] = React.useState(1);

  const handlePage = (name, val) => (event, page) => {
    console.log(page);
    console.log("PAGING HERE");
    setPage(page);

    dispatch(
      getAllPreownedCars(6, dataOptions.skip, filters, dataOptions.searchText, [val])
    );
  };

  return (
    <Pagination
      count={5}
      page={page}
      onChange={handlePage("Price (Lowest to Highest)", "selling_Price ASC")}
    />
  );
}
