  const tableColumns = [
   // ..other columns
  {
    title: "Password",
    field: "password",
    editComponent: ({ value, onChange }) => (
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    ),

    render: (rowData) => (
      <input
        type="password"
        value={rowData.password}
        readOnly />
    )
  }
];
