<p align="center">
    <a href="https://github.com/petrix12" target="_blank">
        <img src="https://petrix12.github.io/cvpetrix2022/img/logo-completo-sm.png" width="400" alt="Soluciones++ Logo">
    </a>
</p>

<p align="center">Proyecto desarrollado en Node.js y React.js</p>
<p align="center">
    <a href="https://nodejs.org/es"><img src="https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/nodejs.png" alt="Node.js" height="40"></a>
    <a href="https://reactjs.org"><img src="https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/reactjs.png" alt="React.js" height="40"></a>
    <a href="https://www.mongodb.com"><img src="https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/mongo.png" alt="MongoDB" height="40"></a>
    <a href="https://aws.amazon.com/es"><img src="https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/aws.png" alt="AWS" height="40"></a>
    <a href="https://graphql.org/"><img src="https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/graphql.png" alt="GraphQL" height="40"></a>
    <a href="https://www.apollographql.com"><img src="https://raw.githubusercontent.com/petrix12/cvpetrix2022/main/public/img/logos/apollo.png" alt="Apollo" height="40"></a>
</p>

# Crea un Instagram con React, GraphQL, Apollo, MongoDB y AWS
+ URL: https://www.udemy.com/course/crea-tu-red-social-con-react-graphql-apollo-mongodb-y-aws
+ Instructor: Agustín Navarro Galdon


## Crear repositorio GitHub
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **instaclone2022**.
    + **Description**: Proyecto para seguir el curso de "Crea un Instagram con React, GraphQL, Apollo, MongoDB y AWS", creado por Agustín Navarro Galdon en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/instaclone2022.git
    + $ git push -u origin main


## Contenido del curso
### Sección 1: Introducción
#### 1. Resultado final de la aplicación
+ **Contenido**: sobre lo que haremos en el curso.

#### 2. Repositorio de la aplicación
+ Repositorio cliente: https://github.com/xAgustin93/instaclone-react-graphql_client
+ Repositorio servidor: https://github.com/xAgustin93/instaclone-react-graphql_server


### Sección 2: Preparación del entorno de desarrollo
#### 3. Navegador
+ https://www.google.es/chrome

#### 4. Instalación de Node
+ https://nodejs.org/es

#### 5. Instalación de Yarn
+ https://classic.yarnpkg.com/lang/en
+ https://brew.sh
1. Instalar Yarn:
    + $ npm install --global yarn

#### 6. Editor de Código
+ https://code.visualstudio.com

#### 7. Extensiones para Visual Studio
+ Prettier - Code formatter (Prettier)
+ Material Icon Theme (Philipp Kief)
+ IntelliSense for CSS class names in HTML (Zignd)
+ ES7 React/Redux/GraphQL/React-Native snippets (rodrigovallades)
+ Apollo GraphQL (Apollo GraphQL)

#### 8. Instalando Robo 3T
+ https://robomongo.org


### Sección 3: Introducción a React JS
#### 9. ¿Qué vamos hacer en esta sección?
+ **Contenido**: sobre lo que se hará en esta sección.

#### 10. Introducción a JSX
+ **Contenido**: sobre JSX.

#### 11. Conceptos básicos de React JS
+ **Contenido**: Virtual DOM vs. Real DOM.

#### 12. Creando nuestra primera app en React JS
1. Crear aplicación React JS:
    + $ npx create-react-app mi-primera-app
2. Ejecutar aplicación:
    + $ cd mi-primera-app
    + $ npm start **o** $ yarn start

#### 13. Estructura de React JS
+ Una aplicación de React JS comienza en **\src\index.js**.
+ Buenas prácticas:
    + La ruta de los componentes:
        + **\src\components**

#### 14. Nuestro primer Componente en React JS
1. Crear componente **HolaMundo** (mi-primera-app\src\components\HolaMundo.js):
    ```js
    // import React from 'react';

    export default function HolaMundo() {
        return (
            <div>
                <h1>Hola Mundo</h1>
                <h2>Soluciones++</h2>
            </div>
        )
    }

    export function AdiosMundo() {
        return (
            <div>
                <h1>Bye</h1>
            </div>
        )
    }

    // export default HolaMundo;
    ```
2. Modificar componente principal **App** (mi-primera-app\src\App.js):
    ```js
    import logo from './logo.svg';
    import './App.css';
    import HolaMundo, { AdiosMundo } from './components/HolaMundo';

    function App() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <HolaMundo />
                    <AdiosMundo />
                </header>
            </div>
        );
    }

    export default App;
    ```

#### 15. ¿Que son los Props de React?
+ **Contenido**: paso de información entre componentes a través de los **Props**.

#### 16. Pasando props básicos entre componentes
1. Crear componente **Saludar** (mi-primera-app\src\components\Saludar.js):
    ```js
    export default function Saludar(props) {
        console.log(props)
        return (
            <div>
                <h2>Hola { props.name }. Tienes { props.edad } años</h2>
            </div>
        )
    }
    ```
2. Modificar componente principal **App** (mi-primera-app\src\App.js):
    ```js
    import logo from './logo.svg';
    import './App.css';
    import Saludar from './components/Saludar';

    function App() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Saludar name="Pedro Bazó" edad="50" />
                    <Saludar name="Leticia Rodríguez" edad="44" />
                </header>
            </div>
        );
    }

    export default App;
    ```

#### 17. Pasando variables y objetos entre componentes por los props
1. Modificar componente principal **App** (mi-primera-app\src\App.js):
    ```js
    ≡
    function App() {
        // const name = "Isabel Bazó"
        // const edad = "20"
        const user = {
            name: "María Bazó",
            edad: "16",
            color: "Azul"
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <Saludar name="Pedro Bazó" edad="50" />
                    <Saludar name="Leticia Rodríguez" edad="44" />
                    <Saludar name={name} edad={edad} /> */}
                    <Saludar user={user} />
                </header>
            </div>
        );
    }
    ≡
    ```
2. Modificar componente **Saludar** (mi-primera-app\src\components\Saludar.js):
    ```js
    export default function Saludar(props) {
        console.log(props.user)
        return (
            <div>
                <p>
                    Hola { props.user.name }. 
                    Tienes { props.user.edad } años.
                    Su color es { props.user.color }.
                </p>
            </div>
        )
    }
    ```

#### 18. Pasando funciones entre componente por los props
1. Modificar componente **Saludar** (mi-primera-app\src\components\Saludar.js):
    ```js
    export default function Saludar(props) {
        console.log(props)
        return (
            <div>
                <p>
                    <button onClick={() => props.saludar(props.user.name)}>Saludar</button>
                </p>
            </div>
        )
    }
    ```
2. Modificar componente principal **App** (mi-primera-app\src\App.js):
    ```js
    ≡
    function App() {
        const user = {
            name: "María Bazó",
            edad: "16",
            color: "Azul"
        }

        const saludar = name => {
            console.log("Hola " + name)
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Saludar user={user} saludar={saludar} />
                </header>
            </div>
        );
    }
    ≡
    ```

#### 19. El uso de la Asignación por Destructuring
1. Modificar componente **Saludar** (mi-primera-app\src\components\Saludar.js):
    ```js
    export default function Saludar(props) {
        const { user, saludar } = props
        const { name } = user
        console.log(props)
        return (
            <div>
                <p>
                    <button onClick={() => saludar(name)}>Saludar</button>
                </p>
            </div>
        )
    }
    ```

#### 20. Props por defecto
1. Modificar componente **Saludar** (mi-primera-app\src\components\Saludar.js):
    ```js
    export default function Saludar(props) {
        const { user, saludar } = props
        const { name = "Anonimo" } = user
        console.log(props)
        return (
            ≡
        )
    }
    ```

#### 21. Template Strings
1. Modificar componente principal **App** (mi-primera-app\src\App.js):
    ```js
    ≡
	const saludar = (name, edad) => {
		console.log("Hola " + name + ". Tienes " + edad + " años")
		// Una forma más clara de escribir la instrucción anterior:
		console.log(`Hola ${name}. Tienes ${edad} años`)
	}
    ≡
    ```
2. Modificar componente **Saludar** (mi-primera-app\src\components\Saludar.js):
    ```js
    export default function Saludar(props) {
        const { user, saludar } = props
        const { name = "Anonimo", edad } = user
        console.log(props)
        return (
            <div>
                <p>
                    <button onClick={() => saludar(name, edad)}>Saludar</button>
                </p>
            </div>
        )
    }
    ```

#### 22. Usando React Developer Tools
+ Extensión Google Chrome: React Developer Tools (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)

#### 23. Hook de estado - useState
1. Modificar componente principal **App** (mi-primera-app\src\App.js):
    ```js
    import { useState } from "react";
    import logo from './logo.svg';
    import './App.css';

    function App() {
        const [stateAuto, setStateAuto] = useState(false)
        const encenderApagar = () => {
            console.log(!stateAuto)
            //setStateAuto(!stateAuto)
            // Otra forma de ejeuctar la instrucción anterior, pero sin requerir el stateAuto
            setStateAuto(preValue => !preValue)
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>El auto esta: { stateAuto ? "Encendido" : "Apagado" }</h3>
                    <button onClick={ encenderApagar }>Encender / Apagar</button>
                </header>
            </div>
        );
    }

    export default App;
    ```

#### 24. Hook de efecto - useEffect
1. Modificar componente principal **App** (mi-primera-app\src\App.js):
    ```js
    import { useEffect, useState } from "react";
    import logo from './logo.svg';
    import './App.css';

    function App() {
        const [stateAuto, setStateAuto] = useState(false)
        const [contar, setContar] = useState(0)

        useEffect(() => {
            console.log("Total: " + contar)
        }, [contar])

        const encenderApagar = () => {
            setStateAuto(!stateAuto)
            setContar(contar + 1)
        }
        
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>El auto esta: { stateAuto ? "Encendido" : "Apagado" }</h3>
                    <h4>Conteo de click's: { contar }</h4>
                    <button onClick={ encenderApagar }>Encender / Apagar</button>
                </header>
            </div>
        );
    }

    export default App;
    ```


### Sección 4: Creando el servidor
#### 25. Inicializando el proyecto
1. Crear carpeta **server** para iniciar proyecto backend.
2. Crear proyecto:
    + $ cd server
    + $ yarn init
    + question name (server): instaclone
    + question version (1.0.0): 0.0.1
    + question description: Servidor de app instaclone
    + question entry point (index.js): ENTER
    + question repository url: ENTER
    + question author: Pedro Bazó
    + question license (MIT): ENTER
    + question private: ENTER
3. Crear **server\index.js**:
    ```js
    console.log("Soluciones++")
    ```
4. Configurar **server\package.json**:
    ```json
    {
        "name": "instaclone",
        "version": "0.0.1",
        "description": "Servidor de app instaclone",
        "main": "index.js",
        "author": "Pedro Bazó",
        "license": "MIT",
        "scripts": {
            "dev": "node ./index.js"
        }
    }
    ```
5. Ejecutar servidor:
    + $ yarn dev

#### 26. Configurando MongoDB
1. Iniciar sesión en [Mongo Atlas](https://www.mongodb.com/atlas/database).
2. Crear cluster.
3. Crear un usuario para la base de datos en **Database Access** (**Authentication Method**: **Password**).
4. Ir a **Network Access** y establecer **IP Address** en 0.0.0.0/0.

#### 27. Conectando Mongo Atlas a Robo 3T
1. Sin salir de la sesión de **Mongo Atlas**, obtener cadena de conexión en **Database** -> **Connect** -> **Connect your application**:
    ```txt
    mongodb+srv://petrix:<password>@cluster0.1xxtr.mongodb.net/?retryWrites=true&w=majority
    ```

#### 28. Conectando el Server con MongoDB
+ **Yarn**: https://classic.yarnpkg.com/en
+ **Yarn mongoose**: https://classic.yarnpkg.com/en/package/mongoose
1. Para conectar la aplicación **server** con la base de datos de **Mongo Atlas**:
    + Instalar mongoose y dotenv:
        + $ yarn add mongoose
        + $ yarn add dotenv
2. Crear archivo de variables de entorno **.env**:
    ```env
    BBDD=mongodb+srv://petrix:******@cluster0.hrqzg.mongodb.net/instaclone
    ```
3. Configurar archivo **server\index.js**:
    ```js
    const mongoose = require("mongoose")
    require("dotenv").config({ path: ".env" })

    try {
        mongoose.connect(process.env.BBDD, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }, () => console.log("*** Conexión exitosa ***"))
    } catch (e) {
        console.log("*** Error de conexión ***")
        console.log(e)
    }
    ```

#### 29. Creando el servidor de GraphQL con Apollo Server
+ [Dependencia yarn apollo-server](https://classic.yarnpkg.com/en/package/apollo-server)
1. Instalar dependencia Apollo Server para crear un servidor de GraphQL:
    + $ yarn add apollo-server
2. Crear **server\gql\schema.js**:
    ```js
    const { gql } = require('apollo-server')

    const typeDefs = gql`
        type User {
            id: ID
            name: String
            username: String
        }

        type Query {
            # User
            getUser: User

        }
    `

    module.exports = typeDefs
    ```
3. Crear **server\gql\resolver.js**:
    ```js
    const resolvers = {
        Query: {
            // User
            getUser: () => {
                console.log("Obteniendo usuario")
                return null
            }
        }
    }

    module.exports = resolvers
    ```
4. Modificar **server\index.js**:
    ```js
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
    ```
+ **Nota**: en caso de problemas con la instalación de GraphQL, ejecutar:
    + $ npm install apollo-server graphql

#### 30. Explorando Playground
1. Para ingresar en Playground:
    + $ yarn dev
    + Ir a: http://localhost:4000


### Sección 5: Registro y login de usuarios
#### 31. Creando el modelo User
1. Crear modelo **User** (server\models\user.js):
    ```js
    const mongoose = require('mongoose')
    const Schema = mongoose.Schema

    const UserSchema = Schema({
        name: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            trim: true,
            unique: true
        },
        avatar: {
            type: String,
            trim: true
        },
        siteWeb: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            require: true,
            trim: true
        },
        createAt: {
            type: Date,
            default: Date.now()
        }
    })

    module.exports = mongoose.model('User', UserSchema)
    ```
2. Modificar **server\gql\schema.js**:
    ```js
    ≡
    type User {
        id: ID
        name: String
        username: String
        email: String
        avatar: String
        siteWeb: String
        description: String
        password: String
        createAt: String
    }
    ≡
    ```

#### 32. Creando el Mutation para registrar usuarios
1. Modificar **server\gql\schema.js**:
    ```js
    ≡
    const typeDefs = gql`
        type User {
            ≡
        }

        input UserInput {
            name: String!
            username: String!
            email: String!
            password: String!
        }

        type Query {
            ≡
        }

        type Mutation {
            # User
            register(input: UserInput): User
        }
    `
    ≡
    ```
2. Modificar **server\gql\resolver.js**:
    ```js
    const resolvers = {
        Query: {
            ≡
        },
        Mutation: {
            // User
            register: (_, { input }) => {
                console.log("Registrando usuario")
                console.log(input)
                return null
            }
        }
    }
    ≡
    ```
3. Ir a **Playground** (http://localhost:4000) y realizar consultas de prueba:
    + Operation:
    ```graphql
    mutation register($input: UserInput){
        register(input: $input){
            id
            name
            username
            email
            password
        }
    }
    ```
    + Variables:
    ```json
    {
        "input": {
            "name": "Pedro Bazó",
            "username": "petrix",
            "email": "bazo.pedro@gmail.com",
            "password": "12345678"
        }
    }
    ```

#### 33. Guardando el usuario en la base de datos
1. Modificar **server\gql\resolver.js**:
    ```js
    const User = require('../models/user')

    const resolvers = {
        Query: {
            ≡
        },
        Mutation: {
            // User
            register: async(_, { input }) => {
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
                // ...

                try {
                    const user = new User(newUser)
                    user.save()
                    return user
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
    ≡
    ```

#### 34. Encriptando contraseña del usuario
+ bcryptjs: https://classic.yarnpkg.com/en/package/bcryptjs
1. Instalar **bcryptjs**:
    + $ yarn add bcryptjs
2. Modificar **server\gql\resolver.js**:
    ```js
    ≡
    const bcryptjs = require('bcryptjs')

    const resolvers = {
        Query: {
            ≡
        },
        Mutation: {
            // User
            register: async(_, { input }) => {
                ≡
                // Encriptar password
                const salt = await bcryptjs.genSaltSync(10)
                newUser.password = await bcryptjs.hashSync(password, salt)
                ≡
            }
        }
    }
    ≡
    ```

#### 35. Refactorizando las funciones del resolver
1. Crear controlador **User** (server\controllers\user.js):
    ```js
    const User = require('../models/user')
    const bcryptjs = require('bcryptjs')

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

    module.exports = {
        register
    }
    ```
2. Modificar **server\gql\resolver.js**:
    ```js
    const userController = require('../controllers/user')

    const resolvers = {
        Query: {
            ≡
        },
        Mutation: {
            // User
            register: (_, { input }) => userController.register(input)
        }
    }
    ≡
    ```

#### 36. Recargando el servidor al guardar
1. Instalar **nodemon** para que el servidor se reinicie automaticamente:
    + $ yarn add nodemon --dev
2. Modificar **server\package.json**:
    ```json
    ≡
	"scripts": {
		"dev": "nodemon ./index.js"
	},
    ≡
    ```

#### 37. Creando mutation para el login
1. Modificar **server\gql\schema.js**:
    ```js
    ≡
    const typeDefs = gql`
        type User {
            ≡
        }

        type Token {
            token: String
        }

        input UserInput {
            ≡
        }

        input LoginInput {
            email: String!
            password: String!
        }

        type Query {
            ≡
        }

        type Mutation {
            # User
            register(input: UserInput): User
            login(input: LoginInput): Token
        }
    `
    ≡
    ```
2. Modificar **server\gql\resolver.js**:
    ```js
    const userController = require('../controllers/user')

    const resolvers = {
        Query: {
            // User
            getUser: () => {
                console.log("Obteniendo usuario")
                return null
            }
        },
        Mutation: {
            // User
            register: (_, { input }) => userController.register(input),
            login: (_, { input }) => userController.login(input)
        }
    }

    module.exports = resolvers
    ```
3. Modificar controlador **User** (server\controllers\user.js):
    ```js
    ≡
    ```
4. Ir a **Playground** (http://localhost:4000) para realizar pruebas:
    + Operation:
    ```graphql
    mutation login($input: LoginInput){
        login(input: $input){
            token
        }
    }
    ```
    + Variables:
    ```json
    {
        "input": {
            "email": "bazo.pedro@gmail.com",
            "password": "12345678"
        }
    }
    ```

#### 38. Realizando el login y creando el token
+ jsonwebtoken: https://classic.yarnpkg.com/en/package/jsonwebtoken
1. Instalar paquete **jsonwebtoken**:
    + $ yarn add jsonwebtoken
2. Modificar controlador **User** (server\controllers\user.js):
    ```js
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
    ```
3. Agregar **SECRET_KEY** al archivo de variables de entorno (server\\.env):
    ```env
    ≡
    SECRET_KEY=aquipuedesescribirloquequierasconnumeroyletrasminusculasymayusculas
    ```
4. Para decodificar token ir a **https://jwt.io**.


### Sección 6: Creando la aplicación con React JS
#### 39. Iniciando nuestra app cliente
1. Crear proyecto React:
    + $ npx create-react-app client
2. Ejecutar aplicación:
    + $ cd client
    + $ yarn start

#### 40. Añadiendo Semantic UI React
+ [Semantic UI React](https://react.semantic-ui.com)
1. Instalar las dependencia de **Semantic UI React**:
    + $ yarn add semantic-ui-react semantic-ui-css
2. Importar los estilos de la **Semantic UI React** a **index.js** (client\src\index.js):
    ```js
    ≡
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import 'semantic-ui-css/semantic.min.css';
    import './index.css';
    ≡
    ```
    + **Nota**: en caso de problemas de compilación, ejecutar:
        + yarn add react-scripts@4.0.3
3. Modificar el componente principal **App.js** (client\src\App.js):
    ```js
    import { Button } from 'semantic-ui-react'

    export default function App() {
        return (
            <div className="app">
                <h1>Estamos en App</h1>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
            </div>
        );
    }
    ```
4. Eliminar:
    + client\src\App.css
    + client\src\logo.svg

#### 41. Añadiendo SASS al proyecto
1. Cambiar nombre de **client\src\index.css** a **client\src\index.scss**.
2. Instalar las dependencias de SASS:
    + $ yarn add node-sass
3. Crear archivo de estilos **client\src\scss\index.scss**:
    ```scss
    @import "./colors.scss";
    ```
4. Crear archivo de estilos **client\src\scss\colors.scss**:
    ```scss
    $font-light: #fff;
    $font-grey: #a2a2a2;
    $font-dark: #000;

    $background-light: #fff;
    $background-grey-light: #fafafa;

    $border-grey: #dbdbdb;
    $border-dark: #000;

    $action: #0095f6;
    $danger: #ed4956;
    ```
5. Modificar el archivo de estilos principal del proyecto **index.scss** (client\src\index.scss):
    ```scss
    @import "./scss/index.scss";

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: $background-grey-light;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    ```
6. Modificar **client\src\index.js**:
    ```js
    ≡
    import 'semantic-ui-css/semantic.min.css';
    import './index.scss';
    ≡
    ```

#### 42. Conectando la app con el servidor usando Apollo Client
+ [Extensión Chrome Apollo Client Devtools](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=es)
1. Instalar la dependencia de **Apollo Client**:
    + $ yarn add @apollo/client
2. Instalar dependencia de **GraphQL**:
    + $ yarn add graphql
3. Crear archivo de configuración **client\src\config\apollo.js**:
    ```js
    import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

    const httpLink = createHttpLink({
        uri: "http://localhost:4000/"
    })

    const client = new ApolloClient({
        connectToDevTools: true,
        cache: new InMemoryCache(),
        link: httpLink
    })

    export default client
    ```
4. Modificar **App.js** (client\src\App.js):
    ```js
    import { Button } from 'semantic-ui-react'
    import { ApolloProvider } from '@apollo/client'
    import client from './config/apollo'

    export default function App() {
        return (
            <ApolloProvider client={client}>
                <div className="app">
                    <h1>Estamos en App</h1>
                    <Button primary>Primary</Button>
                    <Button secondary>Secondary</Button>
                </div>
            </ApolloProvider>
        );
    }
    ```
5. Instalar la extensión de Chrome **[Apollo Client Devtools](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm?hl=es)**.
+ **Nota**: en caso de problemas con la instalación de GraphQL, ejecutar:
    + $ npm install apollo-client graphql


### Sección 7: Formulario de registro y login de usuarios
#### 43. Separando zonas de auth e invitados
1. Crear página **client\src\pages\Auth\index.js**:
    ```js
    export { default } from './Auth' 
    ```
2. Crear página **client\src\pages\Auth\Auth.js**:
    ```js
    import './Auth.scss'

    export default function Auth() {
        return (
            <div>
                <h1>Estamos en Auth</h1>
            </div>
        )
    }
    ```
3. Modificar componente principal **client\src\App.js**:
    ```js
    import { useState } from 'react'
    import { ApolloProvider } from '@apollo/client'
    import client from './config/apollo'
    import Auth from './pages/Auth'

    export default function App() {
        const [auth, setAuth] = useState(undefined) 
        return (
            <ApolloProvider client={client}>
                { !auth ? <Auth /> : <h1>Estas logeado</h1>}
            </ApolloProvider>
        );
    }
    ```
4. Crear archivo de estilo **client\src\pages\Auth\Auth.scss**:
    ```scss
    @import "../../scss/index.scss";

    .auth {   
    }
    ```

#### 44. Pintando la página de Auth
1. Modificar página **client\src\pages\Auth\Auth.js**:
    ```js
    import { useState } from 'react'
    import { Container, Image } from 'semantic-ui-react'
    import logo from '../../assets/png/logo-completo-sm.png'
    import './Auth.scss'

    export default function Auth() {
        const [showLogin, setShowLogin] = useState(true) 
        return (
            <Container fluid className='auth'>
                <Image src={logo} />
                <div className='container-form'>
                    { showLogin ? <p>Formularios de login</p> : <p>Formularios de registro</p> }
                </div>

                <div className='change-form'>
                    <p>
                        { showLogin ? (
                            <>
                                ¿No tienes cuenta?
                                <span onClick={() => setShowLogin(!showLogin)}>Registrate</span>
                            </>
                        ) : (
                            <>
                                Entra con tu cuenta
                                <span onClick={() => setShowLogin(!showLogin)}>Iniciar sesión</span>
                            </>
                        )}
                        
                    </p>
                </div>
            </Container>
        )
    }
    ```
2. Modificar estilos **client\src\pages\Auth\Auth.scss**:
    ```scss
    @import "../../scss/index.scss";

    .auth {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        background-color: $background-grey-light;

        img {
            width: 250px;
        }

        .container-form {
            width: 400px;
            background-color: $background-light;
            padding: 20px 50px;
            border: 1px solid $border-grey;
            margin-top: 50px;
            border-radius: 5px;
        }

        .change-form {
            margin-top: 10px;
            width: 400px;
            background-color: $background-light;
            padding: 20px 50px;
            border: 1px solid $border-grey;
            text-align: center;
            border-radius: 5px;

            span {
                color: $action;
                font-weight: bold;
                margin-left: 10px;
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
    ```

#### 45. Creando el formulario de registro
1. Crear indice de componente **client\src\components\Auth\RegisterForm\index.js**:
    ```js
    export { default } from './RegisterForm' 
    ```
2. Crear estilos **client\src\components\Auth\RegisterForm\RegisterForm.scss**:
    ```scss
    @import "../../../scss/index.scss";

    .register-form-title {
        font-size: 17px !important;
        text-align: center;
        margin-bottom: 20px;

    }

    .register-form {
        input {
            padding: 13px 15px !important;
            background-color: #f9f9f9 !important;
        }
    }
    ```
3. Crear componente **client\src\components\Auth\RegisterForm\RegisterForm.js**:
    ```js
    import { Form, Button } from 'semantic-ui-react'
    import "./RegisterForm.scss"

    export default function RegisterForm(props) {
        const { setShowLogin } = props
        const onSubmit = () => {
            console.log('Formulario enviado')
        }

        return (
            <>
                <h2 className='register-form-title'>Regístrate para ver fotos y videos de tus amigos</h2>
                <Form className='register-form' onSubmit={onSubmit}>
                    <Form.Input type="text" placeholder="Nombre completo" name="name" />
                    <Form.Input type="text" placeholder="Nombre de usuario" name="username" />
                    <Form.Input type="text" placeholder="Correo electrónico" name="email" />
                    <Form.Input type="password" placeholder="Contraseña" name="password" />
                    <Form.Input type="password" placeholder="Confirmar contraseña" name="repeatPassword" />
                    <Button type="submit" className='btn-submit'>Registrarse</Button>
                </Form>
            </>
        )
    }
    ```
4. Modificar página **client\src\pages\Auth\Auth.js**:
    ```js
    ≡
    import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm'
    import logo from '../../assets/png/logo-completo-sm.png'
    ≡
    export default function Auth() {
        ≡
        return (
            <Container fluid className='auth'>
                ≡
                <div className='container-form'>
                    { showLogin ? <p>Formularios de login</p> : <RegisterForm setShowLogin={setShowLogin} /> }
                </div>
                ≡
            </Container>
        )
    }
    ```
5. Modificar estilos principales **client\src\index.scss**:
    ```scss
    ≡
    .ui.form {
        .btn-submit {
            width: 100%;
            background-color: $action;
            color: $font-light;
        }
    }
    ```

#### 46. Control de datos del formulario con Formik
+ Yarm formik: https://classic.yarnpkg.com/en/package/formik
1. Instalar formik:
    + $ yarn add formik
2. Modificar componente **client\src\components\Auth\RegisterForm\RegisterForm.js**:
    ```js
    import { Form, Button } from 'semantic-ui-react'
    import { useFormik } from 'formik'
    import "./RegisterForm.scss"

    export default function RegisterForm(props) {
        const { setShowLogin } = props

        const formik = useFormik({
            initialValues: initialValues(),
            validationSchema: null,
            onSubmit: (formValue) => {
                console.log("Formulario enviado....")
                console.log(formValue)
            }
        })

        return (
            <>
                <h2 className='register-form-title'>Regístrate para ver fotos y videos de tus amigos</h2>
                <Form className='register-form' onSubmit={formik.handleSubmit} onChange={formik.handleChange} >
                    <Form.Input type="text" placeholder="Nombre completo" name="name" />
                    <Form.Input type="text" placeholder="Nombre de usuario" name="username" />
                    <Form.Input type="text" placeholder="Correo electrónico" name="email" />
                    <Form.Input type="password" placeholder="Contraseña" name="password" />
                    <Form.Input type="password" placeholder="Confirmar contraseña" name="repeatPassword" />
                    <Button type="submit" className='btn-submit'>Registrarse</Button>
                </Form>
            </>
        )
    }

    function initialValues() {
        return {
            name: "",
            username: "",
            email: "",
            password: "",
            repeatPassword: ""
        }
    }
    ```

#### 47. Añadiendo el sistema de reset del formulario
1. Modificar componente **client\src\components\Auth\RegisterForm\RegisterForm.js**:
    ```js
    ≡
    <Form className='register-form' onSubmit={formik.handleSubmit} onChange={formik.handleChange} >
        <Form.Input type="text" placeholder="Nombre completo" name="name" value={formik.values.name} />
        <Form.Input type="text" placeholder="Nombre de usuario" name="username" value={formik.values.username} />
        <Form.Input type="text" placeholder="Correo electrónico" name="email" value={formik.values.email} />
        <Form.Input type="password" placeholder="Contraseña" name="password" value={formik.values.password} />
        <Form.Input type="password" placeholder="Confirmar contraseña" name="repeatPassword" value={formik.values.repeatPassword} />
        <Button type="submit" className='btn-submit'>Registrarse</Button>
        {/* <Button type="button" onClick={formik.handleReset} className=''>Limpiar formulario</Button> */}
    </Form>
    ≡
    ```

#### 48. Validando formulario con Yup
+ Yarm yup: https://classic.yarnpkg.com/en/package/yup
1. Instalar la dependencia de **Yup** para validar formularios:
    + $ yarn add yup
2. Modificar componente **RegisterForm** (client\src\components\Auth\RegisterForm\RegisterForm.js):
    ```js
    ≡
    import * as Yup from 'yup'
    import "./RegisterForm.scss"

    export default function RegisterForm(props) {
        const { setShowLogin } = props

        const formik = useFormik({
            initialValues: initialValues(),
            validationSchema: Yup.object({
                name: Yup.string().required("Tu nombre es requerido"),
                username: Yup.string()
                    .matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacio")
                    .required("Tu nombre de usuario es requerido"),
                email: Yup.string().email("email no valido").required("Tu email es requerido"),
                password: Yup.string()
                    .required("La contraseña es requerida")
                    .oneOf([Yup.ref("repeatPassword")], "La contraseña no coincide con la confirmación"),
                repeatPassword: Yup.string()
                    .required("La confirmación de la contraseña es requerida")
                    .oneOf([Yup.ref("repeatPassword")], "La confirmación no coincide con la contraseña")
            }),
            onSubmit: (formValue) => {
                ≡
            }
        })

        return (
            <>
                <h2 className='register-form-title'>Regístrate para ver fotos y videos de tus amigos</h2>
                <Form className='register-form' onSubmit={formik.handleSubmit} onChange={formik.handleChange} >
                    <Form.Input 
                        type="text" 
                        placeholder="Nombre completo" 
                        name="name" 
                        value={formik.values.name}
                        error={formik.errors.name && true}
                    />
                    <Form.Input 
                        type="text" 
                        placeholder="Nombre de usuario" 
                        name="username" 
                        value={formik.values.username}
                        error={formik.errors.username && true}
                    />
                    <Form.Input 
                        type="text" 
                        placeholder="Correo electrónico" 
                        name="email" 
                        value={formik.values.email}
                        error={formik.errors.email && true}
                    />
                    <Form.Input 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password" 
                        value={formik.values.password}
                        error={formik.errors.password && true}
                    />
                    <Form.Input 
                        type="password" 
                        placeholder="Confirmar contraseña"
                        name="repeatPassword"
                        value={formik.values.repeatPassword}
                        error={formik.errors.repeatPassword && true} 
                    />
                    <Button type="submit" className='btn-submit'>Registrarse</Button>
                    {/* <Button type="button" onClick={formik.handleReset} className=''>Limpiar formulario</Button> */}
                </Form>
            </>
        )
    }
    ≡
    ```

#### 49. Registrando usuario en la base de datos
1. Crear mutation **User** (client\src\gql\user.js):
    ```js
    import { gql } from '@apollo/client'

    export const REGISTER = gql`
        mutation register($input: UserInput){
            register(input: $input){
                id
                name
                username
                email
                createAt
            }
        }
    `
    ```
2. Modificar componete **RegisterForm** (client\src\components\Auth\RegisterForm\RegisterForm.js):
    ```js
    ≡
    import * as Yup from 'yup'
    import { useMutation } from '@apollo/client'
    import { REGISTER } from '../../../gql/user'
    ≡
    export default function RegisterForm(props) {
        const { setShowLogin } = props
        const [register] = useMutation(REGISTER)

        const formik = useFormik({
            ≡
            onSubmit: async (formData) => {
                try {
                    const newUser = formData
                    delete newUser.repeatPassword
                    const result = await register({
                        variables: {
                            input: newUser
                        }
                    })
                    console.log(result)
                } catch (error) {
                    console.log(error)
                }
            }
        })
        ≡
    }
    ≡
    ```

#### 50. Toast y redirecionando formulario
+ **NOTA**: NO FUE POSIBLE INSTALARE **react-toastify**:
    + **ERROR**:
    ```
    Failed to compile.

    ./node_modules/react-toastify/dist/react-toastify.esm.mjs
    Can't import the named export 'cloneElement' from non EcmaScript module (only default export is available)
    ```
+ [Yarn react-toastify](https://classic.yarnpkg.com/en/package/react-toastify)
+ [Documentación React-toastify](https://fkhadra.github.io/react-toastify/introduction)
1. Instalar la dependencia **react-toastify** en **client**:
    + $ yarn add react-toastify
2. Modificar componete principal **App** (client\src\App.js):
    ```js
    import { useState } from 'react'
    import { ApolloProvider } from '@apollo/client'
    // import { ToastContainer } from 'react-toastify'
    import 'react-toastify/dist/ReactToastify.css';

    import client from './config/apollo'
    import Auth from './pages/Auth'

    export default function App() {
        const [auth, setAuth] = useState(undefined) 
        return (
            <ApolloProvider client={client}>
                { !auth ? <Auth /> : <h1>Estas logeado</h1>}
                {/* <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                /> */}
            </ApolloProvider>
        );
    }
    ```
3. Modificar componente **RegisterForm** (client\src\components\Auth\RegisterForm\RegisterForm.js):
    ```js
    import { Form, Button } from 'semantic-ui-react'
    import { useFormik } from 'formik'
    import * as Yup from 'yup'
    //import { toast } from 'react-toastify'
    import { useMutation } from '@apollo/client'
    import { REGISTER } from '../../../gql/user'
    import "./RegisterForm.scss"

    export default function RegisterForm(props) {
        const { setShowLogin } = props
        const [register] = useMutation(REGISTER)

        const formik = useFormik({
            initialValues: initialValues(),
            validationSchema: Yup.object({
                ≡
            }),
            onSubmit: async (formData) => {
                try {
                    const newUser = formData
                    delete newUser.repeatPassword
                    await register({
                        variables: {
                            input: newUser
                        }
                    })
                    alert("Usuario registrado satisfactoriamente")
                    setShowLogin(true)
                } catch (error) {
                    //toast.error(error.message)
                    alert(error.message)
                    console.log(error)
                }
            }
        })

        return (
            ≡
        )
    }
    ≡
    ```

#### 51. Creando formulario de login
1. Crear **client\src\components\Auth\LoginForm\index.js**:
    ```js
    export { default } from './LoginForm' 
    ```
2. Crear archivo de estilos **LoginForm** (client\src\components\Auth\LoginForm\LoginForm.scss):
    ```scss
    @import "../../../scss/index.scss";

    .login-form-title {
        font-size: 17px !important;
        text-align: center;
        margin-bottom: 20px;
    }

    .login-form {
        input {
            padding: 13px 15px !important;
            background-color: #f9f9f9 !important;
        }
    }
    ```
3. Crear componente **LoginForm** (client\src\components\Auth\LoginForm\LoginForm.js):
    ```js
    import { Form, Button } from 'semantic-ui-react'
    import './LoginForm.scss'

    export default function LoginForm() {
        return (
            <>
                <h2 className='login-form-title'>Entra para ver fotos y videos de tus amigos</h2>
                <Form className='login-form' >
                    <Form.Input 
                        type="text" 
                        placeholder="Correo electrónico" 
                        name="email" 
                    />
                    <Form.Input 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password" 
                    />
                    <Button type="submit" className='btn-submit'>Iniciar sesión</Button>
                </Form>
            </>
        )
    }
    ```
4. Modificar page **Auth** (client\src\pages\Auth\Auth.js):
    ```js
    ≡
    import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm'
    import LoginForm from '../../components/Auth/LoginForm/LoginForm'
    ≡
    export default function Auth() {
        ≡
        return (
            <Container fluid className='auth'>
                ≡
                <div className='container-form'>
                    { showLogin ? <LoginForm /> : <RegisterForm setShowLogin={setShowLogin} /> }
                </div>
                ≡
            </Container>
        )
    }
    ```

#### 52. Añadiendo formik al formulario
1. Modificar componente **LoginForm** (client\src\components\Auth\LoginForm\LoginForm.js):
    ```js
    import { Form, Button } from 'semantic-ui-react'
    import { useFormik } from 'formik'
    import './LoginForm.scss'

    export default function LoginForm() {

        const formik = useFormik({
            initialValues: initialValues(),
            validationSchema: null,
            onSubmit: async (formData) => {
                console.log(formData)
            }
        })

        return (
            <>
                <h2 className='login-form-title'>Entra para ver fotos y videos de tus amigos</h2>
                <Form className='login-form' onSubmit={formik.handleSubmit} onChange={formik.handleChange} >
                    <Form.Input 
                        type="text" 
                        placeholder="Correo electrónico" 
                        name="email" 
                        value={formik.values.email}
                        error={formik.errors.email && true}
                    />
                    <Form.Input 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password"
                        value={formik.values.password}
                        error={formik.errors.password && true} 
                    />
                    <Button type="submit" className='btn-submit'>Iniciar sesión</Button>
                </Form>
            </>
        )
    }

    function initialValues() {
        return {
            email: "",
            password: ""
        }
    }
    ```

#### 53. Validaciones del formulario de login
1. Modificar componente **LoginForm** (client\src\components\Auth\LoginForm\LoginForm.js):
    ```js
    ≡
    import { useFormik } from 'formik'
    import * as Yup from 'yup'
    ≡
    export default function LoginForm() {
        const formik = useFormik({
            ≡
            validationSchema: Yup.object({
                email: Yup.string().email("email no valido").required("Tu email es requerido"),
                password: Yup.string().required("La contraseña es requerida")
            }),
            onSubmit: async (formData) => { 
                ≡
            }
        })

        return (       
            ≡
        )
    }
    ≡
    ```

#### 54. Generando el token del login
1. Modificar **mutation User** (client\src\gql\user.js):
    ```js
    ≡
    export const LOGIN = gql`
        mutation login($input: LoginInput){
            login(input: $input){
                token
            }
        }
    `
    ```
2. Modificar el componente **LoginForm** (client\src\components\Auth\LoginForm\LoginForm.js):
    ```js
    import { useState } from 'react'
    import { Form, Button } from 'semantic-ui-react'
    import { useFormik } from 'formik'
    import * as Yup from 'yup'
    import { useMutation } from '@apollo/client'
    import { LOGIN } from '../../../gql/user'
    import './LoginForm.scss'

    export default function LoginForm() {
        const [error, setError] = useState("")
        const [login] = useMutation(LOGIN)

        const formik = useFormik({
            ≡
            onSubmit: async (formData) => {
                try {
                    setError("")
                    const { data } = await login({
                        variables: {
                            input: formData
                        }
                    })
                    alert("Usuario logeado satisfactoriamente")
                    console.log(data)
                    //setShowLogin(true)
                } catch (error) {
                    setError(error.message)
                    alert(error.message)
                    console.log(error)
                }
            }
        })

        return (
            <>
                <h2 className='login-form-title'>Entra para ver fotos y videos de tus amigos</h2>
                <Form className='login-form' onSubmit={formik.handleSubmit} onChange={formik.handleChange} >
                    ≡
                    <Button type="submit" className='btn-submit'>Iniciar sesión</Button>
                    {error && <p className='submit-error'>{error}</p>}
                </Form>
            </>
        )
    }
    ≡
    ```
3. Modificar **client\src\index.scss**:
    ```scss
    ≡
    .ui.form {
        .btn-submit {
            ≡
        }
        .submit-error {
            color: $danger;
            text-align: center;
            margin: 20px 0 0 0;
        }
    }
    ```

#### 55. Guardando el token en el localStorage
1. Crear **client\src\utils\constants.js**:
    ```js
    export const TOKEN = 'token'
    ```
2. Crear **client\src\utils\token.js**:
    ```js
    import { TOKEN } from './constants'

    export function setToken(token) {
        localStorage.setItem(TOKEN, token)
    }

    export function getToken() {
        return localStorage.getItem(TOKEN)
    }
    ```
3. Modificar **componente LoginForm** (client\src\components\Auth\LoginForm\LoginForm.js):
    ```js
    ≡
    import { useMutation } from '@apollo/client'
    import { LOGIN } from '../../../gql/user'
    import { setToken } from '../../../utils/token'
    import './LoginForm.scss'

    export default function LoginForm() {
        const [error, setError] = useState("")
        const [login] = useMutation(LOGIN)

        const formik = useFormik({
            ≡
            onSubmit: async (formData) => {
                try {
                    setError("")
                    const { data } = await login({
                        variables: {
                            input: formData
                        }
                    })
                    const { token } = data.login
                    setToken(token)
                    alert("Usuario logeado satisfactoriamente")
                } catch (error) {
                    ≡
                }
            }
        })

        return (
            ≡
        )
    }
    ≡
    ```
4. Modificar **compnente principal App** (client\src\App.js):
    ```js
    import { useState, useEffect } from 'react'
    import { ApolloProvider } from '@apollo/client'
    import client from './config/apollo'
    import Auth from './pages/Auth'
    import { getToken } from './utils/token'

    export default function App() {
        const [auth, setAuth] = useState(undefined)
        
        useEffect(() => {
            const token = getToken()
            if(!token){
                setAuth(null)
            }else{
                setAuth(token)
            }
            console.log(token)
        }, [])

        return (
            ≡
        );
    }
    ```

#### 56. API Context para guardar el usuario
1. Crear **context AuthContext** (client\src\context\AuthContext.js):
    ```js
    import { createContext } from "react"

    const AuthContext = createContext({
        user: undefined
    })

    export default AuthContext
    ```
2. Modificar **componente principal App** (client\src\App.js):
    ```js
    import { useState, useEffect, useMemo } from 'react'
    import { ApolloProvider } from '@apollo/client'
    import client from './config/apollo'
    import Auth from './pages/Auth'
    import { getToken } from './utils/token'
    import AuthContext from './context/AuthContext'

    export default function App() {
        ≡
        useEffect(() => {
            ≡
        }, [])

        const logout = () => {
            console.log("Cerrar sesión")
        }

        const setUser = (user) => {
            setAuth(user)
        }

        const authData = useMemo(
            () => ({
                auth,
                logout,
                setUser
            }),
            [auth]
        )

        return (
            <ApolloProvider client={client}>
                <AuthContext.Provider value={authData}>
                    { !auth ? <Auth /> : <h1>Estas logeado</h1> }
                </AuthContext.Provider>
            </ApolloProvider>
        );
    }
    ```
3. Crear **hooks useAuth** (client\src\hooks\useAuth.js):
    ```js
    import { useContext } from "react"
    import AuthContext from "../context/AuthContext"

    export default () => useContext(AuthContext)
    ```
4. Modificar **componente LoginForm** (client\src\components\Auth\LoginForm\LoginForm.js):
    ```js
    ≡
    import { setToken } from '../../../utils/token'
    import useAuth from '../../../hooks/useAuth'
    import './LoginForm.scss'

    export default function LoginForm() {
        const [error, setError] = useState("")
        const [login] = useMutation(LOGIN)
        const { setUser } = useAuth()

        const formik = useFormik({
            initialValues: initialValues(),
            validationSchema: Yup.object({
                ≡
            }),
            onSubmit: async (formData) => {
                try {
                    setError("")
                    const { data } = await login({
                        variables: {
                            input: formData
                        }
                    })
                    const { token } = data.login
                    setToken(token)
                    setUser(token)
                } catch (error) {
                    ≡
                }
            }
        })

        return (
            ≡
        )
    }
    ≡
    ```

#### 57. Extrayendo los datos del token y guardándoos en el estado
+ [Yarn jwt-decode](https://classic.yarnpkg.com/en/package/jwt-decode)
1. En **client** instalar dependencia **jwt-decode**:
    + $ yarn add jwt-decode
2. Crear **client\src\pages\Home\index.js**:
    ```js
    export { default } from './Home' 
    ```
3. Crear **page Home** (client\src\pages\Home\Home.js):
    ```js
    import useAuth from "../../hooks/useAuth"

    export default function Home() {
        const auth = useAuth()
        console.log(auth)
        return (
            <div>
                <h1>Página Home</h1>
            </div>
        )
    }
    ```
4. Modificar **componente principal App** (client\src\App.js):
    ```js
    ≡
    import Home from './pages/Home'

    export default function App() {
        ≡
        return (
            <ApolloProvider client={client}>
                <AuthContext.Provider value={authData}>
                    { !auth ? <Auth /> : <Home /> }
                </AuthContext.Provider>
            </ApolloProvider>
        );
    }
    ```
5. Modificar **client\src\utils\token.js**:
    ```js
    import jwtDecode from 'jwt-decode';
    ≡
    export function decodeToken(token) {
        return jwtDecode(token)
    }
    ```
6. Modificar **componente LoginForm** (client\src\components\Auth\LoginForm\LoginForm.js):
    ```js
    ≡
    import { setToken, decodeToken } from '../../../utils/token'
    import useAuth from '../../../hooks/useAuth'
    import './LoginForm.scss'

    export default function LoginForm() {
        ≡
        const formik = useFormik({
            ≡
            onSubmit: async (formData) => {
                try {
                    setError("")
                    const { data } = await login({
                        ≡
                    })
                    const { token } = data.login
                    setToken(token)
                    setUser(decodeToken(token))
                } catch (error) {
                    ≡
                }
            }
        })

        return (
            ≡
        )
    }
    ≡
    ```

### Sección 8: Sistema de Navegación
#### 58. Instalando React Router Dom
+ [Yarn react-router-dom](https://classic.yarnpkg.com/en/package/react-router-dom)
+ [REMIX / REACT ROUTER](https://v5.reactrouter.com/web/guides/quick-start)
1. Instalar dependencia **Yarn react-router-dom** en la terminal del cliente:
    + $ yarn add react-router-dom

#### 59. Creando todas las paginas de nuestra aplicación
1. Modificar **client\src\pages\Home\Home.js**:
    ```js
    import './Home.scss'

    export default function Home() {
        return (
            <div>
                <h1>Página Home</h1>
            </div>
        )
    }
    ```
2. Crear **client\src\pages\Home\Home.scss**.
3. Crear **client\src\pages\Error404\index.js**:
    ```js
    export { default } from './Error404' 
    ```
4. Crear **client\src\pages\Error404\Error404.scss**:
    ```scss
    .error404 {
        
    }
    ```
5. Crear **client\src\pages\Error404\Error404.js**:
    ```js
    import React from 'react'
    import './Error404.scss'

    export default function Error404() {
        return (
            <div>
                <h1>Error 404</h1>
            </div>
        )
    }
    ```
6. Crear **client\src\pages\User.js**:
    ```js
    import React from 'react'

    export default function User() {
        return (
            <div>
                <h1>User....</h1>
            </div>
        )
    }
    ```

#### 60. Creando el sistema de navegación
+ [Yarn lodash](https://classic.yarnpkg.com/en/package/lodash)
1. Instalar dependencia:
    + $ yarn add lodash
2. Crear **client\src\routes\routes.js**:
    ```js
    // Pages
    import Home from '../pages/Home'
    import User from '../pages/User'
    import Error404 from '../pages/Error404'

    const routes = [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/user',
            component: User,
            exact: true
        },
        {
            component: Error404
        }
    ]

    export default routes
    ```
3. Crear **client\src\routes\Navigation.js**:
    ```js
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
    /* import routes from './routes' */
    /* import { map } from 'lodash' */
    // Pages
    import Home from '../pages/Home'
    import User from '../pages/User'
    import Error404 from '../pages/Error404'

    export default function Navigation() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}>
                        
                    </Route>
                    <Route exact path="/user" element={<User/>}>
                        
                    </Route>
        
                    <Route path="*" element={<Error404/>}>
                        
                    </Route>
                </Routes>
            </Router>
        )
    }
    ```
4. Modificar **client\src\App.js**:
    ```js
    ≡
    import { getToken } from './utils/token'
    import AuthContext from './context/AuthContext'
    import Navigation from './routes/Navigation'

    export default function App() {
        ≡
        return (
            <ApolloProvider client={client}>
                <AuthContext.Provider value={authData}>
                    { !auth ? <Auth /> : <Navigation /> }
                </AuthContext.Provider>
            </ApolloProvider>
        );
    }
    ```

#### 61. Rutas dinámicas
1. Modificar **client\src\routes\Navigation.js**:
    ```js
    ≡
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}>
                
            </Route>
            <Route exact path="/:username" element={<User/>}>
                
            </Route>

            <Route path="*" element={<Error404/>}>
                
            </Route>
        </Routes>
    </Router>
    ≡
    ```
2. Modificar **client\src\pages\User.js**:
    ```js
    import { useParams } from 'react-router-dom'

    export default function User() {
        const param = useParams()
        console.log(param)

        return (
            ≡
        )
    }
    ```

#### 62. Sistema de Layouts
1. Crear **client\src\layouts\LayoutBasic.js**:
    ```js
    import { Container } from 'semantic-ui-react'
    import { Outlet } from 'react-router-dom'

    export default function LayoutBasic(props) {
        return (
            <div>
                <h1>Menu layout..</h1>
                <Container>
                    <Outlet/>
                </Container>
            </div>
        )
    }
    ```
2. Modificar **client\src\routes\Navigation.js**:
    ```js
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
    import LayoutBasic from '../layouts/LayoutBasic'

    // Pages
    import Home from '../pages/Home'
    import User from '../pages/User'
    import Error404 from '../pages/Error404'

    export default function Navigation() {
        const Layout = Route.Layout

        return (
            <Router>
                <Routes>
                    <Route element={<LayoutBasic />}>
                        <Route exact path="/" element={<Home/>}>
                        </Route>
                        <Route exact path="/:username" element={<User/>}>   
                        </Route>
                    </Route>
        
                    <Route path="*" element={<Error404/>}>   
                    </Route>
                </Routes>
            </Router>
        )
    }
    ```

### Sección 9: Header
#### 63. Estructura del header
8 min
Reproducir










    ```js
    ≡
    ```








#### 64. Opciones del header
9 min
Reproducir
#### 65. Navegando al perfil del usuario logeado
6 min
Reproducir


### Sección 10: Panel de usuario
66. Query para obtener los datos de un usuario
8 min
Reproducir
67. Obteniendo los datos del usuario
10 min
Reproducir
68. Solucionando el flash del login al cargar la web
2 min
Reproducir
69. Estructura del perfil del usuario
12 min
Reproducir
70. Usuario no encontrado
6 min
Reproducir
71. BasicModal
7 min
Reproducir
72. Opciones de la actualización del avatar
13 min
Reproducir
73. Abriendo buscador de ficheros
5 min
Reproducir
74. Creando el mutation para actualizar el avatar
10 min
Reproducir
75. Creando una cuenta en Amazon AWS
3 min
Reproducir
76. Creando un Bucket S3 en AWS
2 min
Reproducir
77. Política de bucket para ser publico
4 min
Reproducir
78. AWS Credenciales
5 min
Reproducir
79. Configurando AWS en el servidor
6 min
Reproducir
80. Función para subir imágenes a nuestro S3
3 min
Reproducir
81. Habilitando el envío de ficheros de cliente a servidor
4 min
Reproducir
82. Controlador para subir el avatar del usuario
7 min
Reproducir
83. Obteniendo el Context en el server
15 min
Reproducir
84. Enviando token del cliente al server
7 min
Reproducir
85. Añadiendo el ID del usuario al nombre del avatar
8 min
Reproducir
86. Actualizando avatar en la base de datos
3 min
Reproducir
87. Añadiendo un Spinner y cerrando el modal al completar la subida del avatar
6 min
Reproducir
88. Moviendo de lugar el componente Profile
4 min
Reproducir
89. Mostrando el avatar en el perfil
15 min
Reproducir
90. Actualizando el avatar del menu
5 min
Reproducir
91. Mutation para eliminar el avatar
6 min
Reproducir
92. Eliminando le avatar con el botón
9 min
Reproducir
93. Estructura del header profile
10 min
Reproducir
94. Abriendo el modal con el botón de ajustes
4 min
Reproducir
95. Creando el menu de ajustes
7 min
Reproducir
96. Funcionalidad para cerrar sesión
11 min
Reproducir
97. Cambiando la información del modal
5 min
Reproducir
98. Formulario para cambiar contraseña
8 min
Reproducir
99. Añadiendo formik y yup al formulario de cambiar contraseña
9 min
Reproducir
100. Mutation para actualizar datos del usuario
19 min
Reproducir
101. Actualizando contraseña
11 min
Reproducir
102. Formulario para cambiar el email
5 min
Reproducir
103. Añadiendo formik y yup al formulario de email
7 min
Reproducir
104. Actualizando el email del usuario
8 min
Reproducir
105. Ejecutando refetch del useMutation
5 min
Reproducir
106. Formulario para cambiar descripción
7 min
Reproducir
107. Actualizando la descripción del usuario
8 min
Reproducir
108. Formulario para actualizar la página web
6 min
Reproducir
109. Actualizando el sitio web
7 min
Reproducir
110. Query para buscar usuarios
7 min
Reproducir
111. Creando el buscador
4 min
Reproducir
112. Ejecutando la query en el buscador
7 min
Reproducir
113. Mostrando resultado de la búsqueda
10 min
Reproducir
114. Customizando el componente de resultado
9 min
Reproducir
115. Schema Follow
5 min
Reproducir
116. Mutation para seguir a usuarios
12 min
Reproducir
117. Query para saber si seguimos a un usuario
7 min
Reproducir
118. Mutation para dejar de seguir usuario
7 min
Reproducir
119. Botón Follow o UnFollow
9 min
Reproducir
120. Botón para seguir usuarios
7 min
Reproducir
121. Botón para dejar de seguir usuarios
6 min
Reproducir
122. Componente Followers
9 min
Reproducir
123. Query para obtener todos los seguidores
14 min
Reproducir
124. Mostrando el total de seguidores que tiene el usuario
8 min
Reproducir
125. Actualizar seguidores en tiempo real
7 min
Reproducir
126. Abriendo modal al hacer click a los seguidores
6 min
Reproducir
127. Lista de seguidores
14 min
Reproducir
128. Evento para ir al perfil de un usuario de la lista
2 min
Reproducir
129. Query para obtener los usuarios seguidos
10 min
Reproducir
130. Obteniendo usuarios que seguimos
7 min
Reproducir
131. Mostrando la lista de usuarios que seguimos
3 min
Reproducir
132. Abriendo un modal para publicar
7 min
Reproducir
133. Añadiendo React DropZone al modal
12 min
Reproducir
134. Mostrando la imagen que se quiere publicar
8 min
Reproducir
135. Mostrando botón para publicar
4 min
Reproducir
136. Modelo de la colección de publicaciones
4 min
Reproducir
137. Mutation para crear publicaciones
5 min
Reproducir
138. Ejecutando el mutation publish en el cliente
5 min
Reproducir
139. Función publish en el server
12 min
Reproducir
140. Creando un loading mientras se crea la publicación
7 min
Reproducir
141. Query para obtener las publicaciones de un usuario
13 min
Reproducir
142. Contando total de publicaciones
7 min
Reproducir
143. Componente Publications
6 min
Reproducir
144. Pintando cada una de las publicaciones
7 min
Reproducir
145. Actualizando la lista de publicaciones
6 min
Reproducir
146. Modal para las publicaciones
8 min
Reproducir
147. Mostrando la imagen en el modal
4 min
Reproducir
148. Creando el formulario para enviar comentarios
8 min
Reproducir
149. Modelo de los comentarios
3 min
Reproducir
150. Mutation para añadir comentarios
10 min
Reproducir
151. Validando formulario de comentarios
4 min
Reproducir
152. Aplicando el mutation en el formulario de comentarios
6 min
Reproducir
153. Query para obtener los comentarios de una publicaciones
10 min
Reproducir
154. Ejecutando la query en el cliente
7 min
Reproducir
155. Listando todos los comentarios
12 min
Reproducir
156. Actualizando la lista de comentarios
4 min
Reproducir
157. Modelo para los likes
4 min
Reproducir
158. Mutation para añadir likes
7 min
Reproducir
159. Mutation para eliminar un like
6 min
Reproducir
160. Query para comprobar si un usuario ha dado like
7 min
Reproducir
161. Query para contar cuentos like tiene una publicación
5 min
Reproducir
162. Añadiendo el botón de like
8 min
Reproducir
163. Añadiendo la funcionalidad de like
6 min
Reproducir
164. Comprobando si el usuario ha dado like
8 min
Reproducir
165. Refrescando el componente action al ejecutar un like
3 min
Reproducir
166. Función para eliminar likes
3 min
Reproducir
167. Añadiendo el contador de likes
6 min
Reproducir
168. Evitando que un usuario de varios likes seguidos
3 min
Reproducir
169. Estructura de la home
3 min
Reproducir
170. Query para obtener el feed de publicaciones
18 min
Reproducir
171. Obteniendo el feed de publicaciones
9 min
Reproducir
172. Pintado el header del feed de publicaciones
7 min
Reproducir
173. Pintado la publicación, la caja para like y comentarios
9 min
Reproducir
174. Abriendo las publicaciones
6 min
Reproducir
175. Publicaciones en RealTime
3 min
Reproducir
176. Query para obtener usuario que no seguimos
8 min
Reproducir
177. Componente UsersNotFolloweds
6 min
Reproducir
178. Listando todos los usuarios
5 min
Reproducir
179. Cambiando el favicon
2 min
Reproducir
180. Cambiando el titulo
1 min
Reproducir
181. Desplegando el server
11 min
Reproducir
182. Desplegando client
4 min
Reproducir
183. Fix Reload Page Not Found
2 min
Reproducir
184. Despedida
1 min
Iniciar
185. Clase extra
1 mi