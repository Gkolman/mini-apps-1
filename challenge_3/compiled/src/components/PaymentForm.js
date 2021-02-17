

var Payment = props => {

  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      { onSubmit: props.submit },
      React.createElement(
        "h3",
        null,
        " credit card number"
      ),
      React.createElement("input", { type: "text", onChange: props.cc }),
      React.createElement(
        "h3",
        null,
        " expiration date"
      ),
      React.createElement("input", { type: "text", onChange: props.expr }),
      React.createElement(
        "h3",
        null,
        " cvv"
      ),
      React.createElement("input", { type: "text", onChange: props.cvv }),
      React.createElement(
        "h3",
        null,
        " billing zip code "
      ),
      React.createElement("input", { type: "text", onChange: props.billing }),
      React.createElement("input", { type: "submit" })
    )
  );
};

export default Payment;