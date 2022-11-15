const { default: mongoose } = require("mongoose");

//  Add your code here
const celebritySchema = new mongoose.Schema ({
    name: String,
    occupation: String,
    catchPhrase: String,
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity