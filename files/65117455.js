async function displayAnnouncements() {
    const resp = await axios.get(`${_something}/_api/lists/GetByTitle('someName')/Items?$select=ID,Title,Body,Created,Link&$orderby=Created%20desc&$top=4`, restHeaders)
    let _data = resp.data.d.results;
    _data.slice(0, 4).forEach(m => {
        let _newDate = moment(m.Created).utc().format("MMMM D, YYYY");
        const itemLink = $(
            `<a href="#close" data-toggle="modal" data-target="#bkEvts-${m.ID}" class="cont_evts-link" title="View Announcement">
                <b>${m.Title}</b> - <i>${_newDate}</i>
            </a><br>`
        );
    });
};
