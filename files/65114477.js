const onBodyClick = (event) => {
  if (!ref.current) {
    // Component is unmounting
    // below line could be used or commented out; since the component is unmounting,
    // the state should not make a difference
    // setOpen(false);
    return
  }
  if (ref.current.contains(event.target)) {
    // Component is not unmounting, and click was inside ref
    return;
  }
  // Component is not unmounting, and click was outside ref
  setOpen(false);
};
