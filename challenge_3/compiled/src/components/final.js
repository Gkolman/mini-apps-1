var Final = props => {
  console.log('props in final -> ', props);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      " before you submit does all of this information look correct? "
    ),
    React.createElement(
      "h3",
      null,
      " account information "
    ),
    React.createElement(
      "h5",
      null,
      " username "
    ),
    React.createElement(
      "h5",
      null,
      " ",
      props.data.username,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " email "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.email,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " password "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.password,
      " "
    ),
    React.createElement(
      "h3",
      null,
      " address information "
    ),
    React.createElement(
      "h5",
      null,
      " street "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.street,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " suite/apt "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.suite,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " city "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.city,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " state "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.state,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " zip "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.zip,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " phone number "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.phone,
      " "
    ),
    React.createElement(
      "h3",
      null,
      " payment information "
    ),
    React.createElement(
      "h5",
      null,
      " credit card number  "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.ccNumber,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " expiration data "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.expr,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " cvv "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.cvv,
      " "
    ),
    React.createElement(
      "h5",
      null,
      " billing zip code "
    ),
    React.createElement(
      "h5",
      null,
      "  ",
      props.data.billing,
      " "
    ),
    React.createElement(
      "form",
      { onSubmit: props.submit },
      React.createElement("input", { type: "submit" })
    )
  );
};

export default Final;