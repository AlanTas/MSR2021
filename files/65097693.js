const transform = (fn) => (obj) =>
  Array.isArray (obj)
    ? obj .map (transform (fn))
  : Object (obj) === obj
    ? Object .fromEntries (Object .entries (obj) 
        .map (([k, v]) => [k, transform (fn) (v)])
      )
  : fn (obj)

const hashObj = transform ((n) => sha256 (String (n)))

const meow = {big: 20, baz: {foo: {cat: 3, bar: 5, qux: [1, 2, 3]}}};
               // added to demonstrate arrays --------^

console .log (hashObj (meow))