data() {
  return {
    newContract: {
      payment_term_days: ""
    }
  }
},
computed: {
  payment_term_pct() {
    const daysToPct = {
      30: 4,
      60: 1.5
    }
    return daysToPct[this.newContract.payment_term_days];
  }
}
