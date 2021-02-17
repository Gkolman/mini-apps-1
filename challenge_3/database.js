const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/multiCheckout',{ useNewUrlParser: true })
.then( () => {
  console.log('database connected')
})
.catch( (err) => {
  console.log('err -> ', err)
})

const db = mongoose.connection;

var userSchema = new mongoose.Schema({
  username: {
   type : String,
   unique: true
  },
  email: String,
  password: String,
  street: String,
  suite: String,
  city: String,
  state: String,
  zip: String,
  phNumber: String,
  ccNumber: String,
  expr: String,
  cvv: String,
  billingZip: String
})

var User = mongoose.model('User', userSchema)

var addUser = (name,pass,email) => {
  const newUser = new User({
    username: name,
    email: email,
    password: pass
  })
  return newUser.save()
}

var updateUserAddress = (name,str,sut,cty,sta,zip,ph ) => {
 return User.findOneAndUpdate({username: name}, {
    street: str,
    suite: sut,
    city: cty,
    state: sta,
    zip: zip,
    phNumber: ph
  })
}
var updateUserPayment = (name,cc,exp,cvv,zip) => {
  return User.findOneAndUpdate({username: name}, {
    ccNumber: cc,
    expr: exp,
    cvv: cvv,
    billingZip: zip
  })
}

// User.find()
// .then((data) => {
//   console.log('data in db -> ', data)
// })
// .catch((err) => {
//   console.log('could not get data -> ', err)
// })


module.exports = {
   addUser : addUser,
   updateUserAddress: updateUserAddress,
   updateUserPayment: updateUserPayment,
}