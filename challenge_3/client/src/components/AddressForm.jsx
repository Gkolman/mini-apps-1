var AdressForm = (props) =>  {
  // render() {
  //   return  ( <h1> working again <h1/> )
  // }
  //
  // render(){
    return (
       <div>
         <h2> enter in your mailing address below </h2>
          <form onSubmit={props.submit}>
            <h3> street </h3>
            <input type = "text" onChange = {props.street}/>
            <h3> suite </h3>
            <input type = "text" onChange = {props.suite}/>
            <h3> city </h3>
            <input type = "text" onChange = {props.city}/>
            <h3> state </h3>
            <input type = "text" onChange = {props.state}/>
            <h3> zip </h3>
            <input type = "text" onChange = {props.zip}/>
            <h3> phone number  </h3>
            <input type = "text" onChange = {props.phone}/>
            <input type = "submit" />
          </form>
       </div>)
}

export default AdressForm