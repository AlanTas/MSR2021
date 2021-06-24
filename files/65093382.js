const steps = {
  one: async () => {
    await something();
    steps.two();
  }
  
  two: async () => {
    try {
      const results = await somethingElse();
      steps.three(results);
    } catch(e) {
      // TODO display error message
      steps.one();
    }    
  }
  
  three: async () => {
    // do whatever
  }
}