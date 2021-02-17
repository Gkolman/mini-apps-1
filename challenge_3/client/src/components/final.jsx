var Final = (props) => {
  console.log('props in final -> ', props)

  return (
    <div>
      <h2> before you submit does all of this information look correct? </h2>
      <h3> account information </h3>
      <h5> username </h5>
      <h5> {props.data.username} </h5>
      <h5> email </h5>
      <h5>  {props.data.email} </h5>
      <h5> password </h5>
      <h5>  {props.data.password} </h5>
      <h3> address information </h3>
      <h5> street </h5>
      <h5>  {props.data.street} </h5>
      <h5> suite/apt </h5>
      <h5>  {props.data.suite} </h5>
      <h5> city </h5>
      <h5>  {props.data.city} </h5>
      <h5> state </h5>
      <h5>  {props.data.state} </h5>
      <h5> zip </h5>
      <h5>  {props.data.zip} </h5>
      <h5> phone number </h5>
      <h5>  {props.data.phone} </h5>
      <h3> payment information </h3>
      <h5> credit card number  </h5>
      <h5>  {props.data.ccNumber} </h5>
      <h5> expiration data </h5>
      <h5>  {props.data.expr} </h5>
      <h5> cvv </h5>
      <h5>  {props.data.cvv} </h5>
      <h5> billing zip code </h5>
      <h5>  {props.data.billing} </h5>
      <form onSubmit = {props.submit}>
          <input type = "submit"/>
      </form>
    </div>
  )
}

export default Final