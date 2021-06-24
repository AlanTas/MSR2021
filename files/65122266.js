const handlestartChange = (date) => {
  setStartDate(date);
};
const handleendChange = (date) => {
  setEndDate(date);
};
const applyDateFilter = () => {
  const newLabels = [],
    newDatas = [];
  initialLevelsArr.forEach((item, index) => {
    if (item >= startDate && item <= endDate) {
      newLabels.push(item);
      newDatas.push(initialData[index]);
    }
  });
  setLabels(newLabels);
  setDatas(newDatas);
};
