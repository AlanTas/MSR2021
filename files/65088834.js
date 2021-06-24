   donglePaired() {
        return new Promise( function(resolve, reject) { 
            if (Platform.OS !=='ios'){
              var pairedDevices = await BluetoothScanner.getPairedDevices();
              console.log('Sending........');
              let data={
                  data:pairedDevices,
              };
              new Api().fetch("bluetoothCheck",{devices:JSON.stringify(data),userid:this.state.probe.UID},(result) => {
                  if (!result.err) reject(false);
                  console.log("Dongle already paired");
                  resolve(true);
                  //logNetworkState
              });
            }
            reject(false);
        });  
     }
