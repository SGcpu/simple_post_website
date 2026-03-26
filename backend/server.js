const app = require('./src/app')
const ConnectDB = require('./src/db/db')


const port = 3000;

ConnectDB();

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})