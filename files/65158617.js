
app.patch('/editProfile/:username', (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
        let parsedData = JSON.parse(data)
        const username = req.params["username"];
        console.log(data)

        // this will use the current user, and only update those fields 
        // which are sent in the request body. If only one field is sent, 
        // only that field will be updated.
        const updatedUser = {...parsedData[username], ...req.body}         

        // we then set the parsedData to the new patched user.
        parsedData[username] = updatedUser 

        fs.writeFile(dataPath, JSON.stringify(parsedData), () => {
            res.status(200).send('${username} updated');
        })
    })
})
