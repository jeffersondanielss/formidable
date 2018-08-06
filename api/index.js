const server = require('./src/server');
const PORT = process.env.PORT || 7777;

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));