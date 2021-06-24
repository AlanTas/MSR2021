render() {
    return (
        <View style={styles.MainContainer} >
            <Button title="Next" onPress={() => { 
                 this.props.navigation.navigate(
                 'Two', 
                 { 
                  postONE: Math.floor(Math.random() * 10) + 10, 
                  postTWO: 'R'  
                 })}} 
            />
        </View>
    );
  }
}
