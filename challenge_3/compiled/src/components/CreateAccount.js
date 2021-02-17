

var CreateAccount = props => {

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      " create an account below "
    ),
    React.createElement(
      "form",
      { onSubmit: props.submit },
      React.createElement(
        "h3",
        null,
        " username "
      ),
      React.createElement("input", { type: "text", onChange: props.username }),
      React.createElement(
        "h3",
        null,
        " email "
      ),
      React.createElement("input", { type: "text", onChange: props.email }),
      React.createElement(
        "h3",
        null,
        " password "
      ),
      React.createElement("input", { type: "text", onChange: props.password }),
      React.createElement("input", { type: "submit" })
    )
  );
};

export default CreateAccount;