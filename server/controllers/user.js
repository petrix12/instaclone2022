const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

function createToken(user, SECRET_KEY, expiresIn) {
    const { id, name, email, username } = user
    const payload = {
        id, 
        name, 
        email, 
        username
    }
    return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

async function register(input) {
    const newUser = input
    newUser.email = newUser.email.toLowerCase()
    newUser.username = newUser.username.toLowerCase()
    const { email, username, password } = newUser

    // Verificar que el email no exista en la BD
    const foundEmail = await User.findOne({ email })
    if (foundEmail) throw new Error("El email ya está en la BD")

    // Verificar que el username no exista en la BD
    const foundUsername = await User.findOne({ username })
    if (foundUsername) throw new Error("El username ya está en la BD")

    // Encriptar password
    const salt = await bcryptjs.genSaltSync(10)
    newUser.password = await bcryptjs.hashSync(password, salt)

    try {
        const user = new User(newUser)
        user.save()
        return user
    } catch (error) {
        console.log(error)
    }
}

async function login(input) {
    const { email, password } = input
    
    const userFound = await User.findOne({ email: email.toLowerCase() })
    if (!userFound) throw new Error("Credenciales incorrectas")

    const passwordsuccess = await bcryptjs.compare(password, userFound.password)
    if (!passwordsuccess) throw new Error("Credenciales incorrectas")

    console.log(createToken(userFound, process.env.SECRET_KEY, "24h"))

    return {
        token: createToken(userFound, process.env.SECRET_KEY, "24h")
    }
}

module.exports = {
    register,
    login
}