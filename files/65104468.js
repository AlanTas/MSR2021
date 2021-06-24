function NameComponent() {
  React.useEffect(() => {
    async function getName() {
      const res = await getNamePromise(); // type: Promise<Interface>
      setName(res.name)
    }

    getName()
  }, [])

  React.useEffect(() => {
    async function getPhoto() {
      const res = await getPhotoPromise(); // type: Promise<Interface>
      setPhoto(res.photo)
    }

    getPhoto()
  }, [])

  const [name, setName] = React.useState()
  const [photo, setPhoto] = React.useState()

  if (!name || !photo) {
    return <div>Loading...</div>
  }

  return(
    <dl>
      <dd>{name}</dd>
      <dd>{photo}</dd>
    </dl>
  );
} 
