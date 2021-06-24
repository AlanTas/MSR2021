class Test {
    constructor() {
        this.isProgress = false;
        this.popup;
        this.payment;
    }

    onCompleted () {};
    onDismissed () {};
    onError () {};
  
    startPayment(payment) {
      this.payment = payment;
      this.isProgress = true;
      this.popup = window.open("---");
      var timer = setInterval(function () {
        if (this.Test.popup.closed) {
          clearInterval(timer);
          if (this.Test.isProgress) {
            this.Test.isProgress = false;
            this.Test.onDismissed();
          }
        }
      }, 500);
    }
  }
  
  const TestInstance = new Test();
  
  window.addEventListener("beforeunload", function () {
    if (TestInstance.popup != null && !TestInstance.popup.closed) {
      TestInstance.popup.close();
    }
  });
  
  window.Test = TestInstance;
