const allData = [];
for (let i = 0; i < allDetails.length; i++) {
    const detail = allDetails[i];
    const cells = [];
    for (let j = 0; j < baseObj.cells.length; j++) {
        const cell = {...baseObj.cells[j]};
        switch (cell.key) {
            case 'id':
                cell.value = detail.id;
                break;
            case 'name':
                cell.value = detail.name;
                break;
        }
        cells.push(cell)
    }
    const row = {objKey: detail.objKey, index: i + 1, cells};
    allData.push(row);
}
