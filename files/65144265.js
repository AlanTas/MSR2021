function convertObject(obj) {
    const mappings = {
        PRODUCEID: "PRID",
        docType: "docType",
        PRODUCE: "PRODUCE",
        STATUS: "STATUS"
    };
    const ret = {BusinessData: {}};
    for (const key in obj) {
        if (key in mappings) {
            ret[mappings[key]] = obj[key];
        } else {
            ret.BusinessData[key] = obj[key];
        }
    }
    return ret;
}
