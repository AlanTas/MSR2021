const Options = this.props.giftDetails.variations.map((v) => {
      return (
        <React.Fragment key={v.variation_id}>
          <input
            type="radio"
            value={v.variation_id}
            checked={v.variation_id == this.state.giftCard}
            onChange={(e) => {
              this.setState({
                giftCard: e.target.value,
                giftDescription: v.reward_description,
              });
            }}
          />
          {v.reward_text}
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        {Options}
        <p>{this.state. giftDescription}</p>
      </React.Fragment>
    );

class Hello extends React.Component {
  constructor() {
    super();
    this.state = { giftCard: null, giftDescription: null };
  }

  render() {
    console.log("this.state", this.state);
    const variants = {
      variations: [
        {
          variation_id: 1,
          variation_name: "210kr",
          price: "210",
          reward_text: "200kr. Price",
          reward_description:
            "Med et gavekort til Sendentanke.dk kan du vælge mellem gavekort til hundredevis af butikker og oplevelser ét sted.",
        },
        {
          variation_id: 2,
          variation_name: "400kro",
          price: "400",
          reward_text: "400 Price",
          reward_description: "Earn a reward",
        },
      ],
    };

    const Options = variants.variations.map((v) => {
      return (
        <React.Fragment>
          <input
            key={v.variation_id}
            type="radio"
            value={v.variation_id}
            checked={v.variation_id == this.state.giftCard}
            onChange={(e) => {
              this.setState({
                giftCard: e.target.value,
                giftDescription: v.reward_description,
              });
            }}
          />
          {v.reward_text}
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        {Options}
        <p>{this.state.giftDescription}</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Hello name="World" />, document.getElementById("container"));