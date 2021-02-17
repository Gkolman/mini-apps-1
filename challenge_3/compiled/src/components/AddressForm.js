var AdressForm = props => {
  // render() {
  //   return  ( <h1> working again <h1/> )
  // }
  //
  // render(){
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      " enter in your mailing address below "
    ),
    React.createElement(
      "form",
      { onSubmit: props.submit },
      React.createElement(
        "h3",
        null,
        " street "
      ),
      React.createElement("input", { type: "text", onChange: props.street }),
      React.createElement(
        "h3",
        null,
        " suite "
      ),
      React.createElement("input", { type: "text", onChange: props.suite }),
      React.createElement(
        "h3",
        null,
        " city "
      ),
      React.createElement("input", { type: "text", onChange: props.city }),
      React.createElement(
        "h3",
        null,
        " state "
      ),
      React.createElement("input", { type: "text", onChange: props.state }),
      React.createElement(
        "h3",
        null,
        " zip "
      ),
      React.createElement("input", { type: "text", onChange: props.zip }),
      React.createElement(
        "h3",
        null,
        " phone number  "
      ),
      React.createElement("input", { type: "text", onChange: props.phone }),
      React.createElement("input", { type: "submit" })
    )
  );
};

export default AdressForm;