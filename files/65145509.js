const app:any = {};

interface InitiatePlayers {
    (this: any, arg0: { amount: string }): void;
}

const initiatePlayers: InitiatePlayers = function ({ 
  amount,
}) {

};

app.onInit = function () {
  initiatePlayers.call(this, { amount: 2 });
}
