const useSearch = (query: string, sources: string[]) => {
  // ...
  useEffect(() => {
    // ...

    // FIX:
    // just apply the spread operator (...) to `sources`
    // to spread its elements into the dependency array of `useEffect`
  }, [query, ...sources]);

  return response;
};
