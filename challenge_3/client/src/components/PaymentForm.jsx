

 var Payment = (props) =>  {

    return (
    <div>
      <h2> add a credit card to your account below </h2>
      <form onSubmit={props.submit}>
        <h3> credit card number</h3>
        <input type = "text" onChange = {props.cc}/>
        <h3> expiration date</h3>
        <input type = "text" onChange = {props.expr}/>
        <h3> cvv</h3>
        <input type = "text" onChange = {props.cvv}/>
        <h3> billing zip code </h3>
        <input type = "text" onChange = {props.billing}/>
        <input type = "submit"/>
      </form>
    </div>
    )

}

export default Payment


