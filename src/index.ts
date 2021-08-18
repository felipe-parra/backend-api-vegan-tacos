import app from './app'
// import {createConnection} from './database'

// createConnection()

app.listen(app.get("port"), () => {
    console.log(app)
    console.log(`Server listening on http://localhost:${app.get("port")}`)
})