  createTimestamp(timestampTimeInput: any, timestampNameInput: any){
    this.timestamp_model.time = this.stringToTime(timestampTimeInput.value);
    this.timestamp_model.name = timestampNameInput.value;
    //session_audio is set during initialization of this.timestamp_model

    this.timestampService.createTimestamp(this.timestamp_model).pipe(first()).subscribe(timestamp => {
      this.timestamps.unshift(timestamp);
      this.timestampCreateState = false;
    }, error => console.log(error));
  }
