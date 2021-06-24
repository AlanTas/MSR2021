const sql = "INSERT INTO no_em_tab values (:a, :b)";

const binds = [
  { a: 1, b: "Test 1 (One)" },
  { a: 2, b: "Test 2 (Two)" },
  { a: 3, b: "Test 3 (Three)" },
  { a: 4 },
  { a: 5, b: "Test 5 (Five)" }
];

// bindDefs is optional for IN binds but it is generally recommended.
// Without it the data must be scanned to find sizes and types.
const options = {
  autoCommit: true,
  bindDefs: {
    a: { type: oracledb.NUMBER },
    b: { type: oracledb.STRING, maxSize: 15 }
  }
};
