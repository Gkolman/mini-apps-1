

 var CreateAccount = (props) =>  {

    return (
    <div>
      <h2> create an account below </h2>
      <form onSubmit = {props.submit}>
        <h3> username </h3>
        <input type = "text" onChange = {props.username} />
        <h3> email </h3>
        <input type = "text"onChange = {props.email} />
        <h3> password </h3>
        <input type = "text" onChange = {props.password} />
        <input type = "submit"/>
      </form>
    </div>
    )
}

export default CreateAccount