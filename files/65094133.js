 imageAdd(e) {         
            e.forEach((e) => {
            if (e.type == 'image/jpeg' || e.type == 'image/png')
            {
                this.images.push({
                    image: URL.createObjectURL(e),
                    imageData: e
                    })
            }
            })
   }
