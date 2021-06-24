function promiseLoad(nameID, uID, caption) {
    return axios.get(`${URL}/users/${uID}/name/${nameID}`)
        .then(res => {
            let obj;
            if(res.data !== -1) {
                obj = {
                    fullName: res.data,
                    caption: caption
                };
            }
            return obj;
    });
}
