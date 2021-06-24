const matchesValues = ( array ) => {
  return array.reduce((previousValue, currentValue, currentIndex) => {
    if (currentIndex === 0 || (array[currentIndex - 1] + currentValue) === 10) {
      previousValue.push(currentValue);
    }

    return previousValue;
  }, []);
};

console.log(matchesValues([2,8,5,5,5,6]));