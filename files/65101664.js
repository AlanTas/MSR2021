function apiCreate(url, product) {
      try {
        fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))  
      } catch (err) {
        console.log(err)
      }
}
