class Animal {
  constructor() {
    let privateAttribute = 'default';

    this.setPrivateAttribute = newValue => {
      privateAttribute = newValue
    }

    this.getPrivateAttribute = () => privateAttribute;
  }
}

let newAnimal = new Animal()
// get variable value
newAnimal.getPrivateAttribute()

// Set new Value
newAnimal.setPrivateAttribute('New Value')
