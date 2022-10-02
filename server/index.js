const mongoose = require("mongoose")
const { ApolloServer } = require("apollo-server")
const typeDefs = require("./gql/schema")
const resolvers = require("./gql/resolver")
require("dotenv").config({ path: ".env" })

try {
    mongoose.connect(process.env.BBDD, { 
		useNewUrlParser: true, 
		useUnifiedTopology: true 
	}, () => {
        console.log("*** Conexión exitosa ***")
        server()
    })
} catch (e) {
    console.log("*** Error de conexión ***")
    console.log(e)
}

function server() {
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers
    })

    serverApollo.listen().then(({ url }) => {
        console.log("#####################################")
        console.log(`Servidor listo en URL: ${url}`)
        console.log("#####################################")
    })
}