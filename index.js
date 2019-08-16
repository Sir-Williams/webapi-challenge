const server = require('./server')

const port = 3333;

server.listen(port, () => {console.log(`\n*** Server is running on port ${port} ***\n`)})