import http from "http";
import app from "./app.js";

const port = process.env.PORT || 5000;
console.log(`Server is running on port ${port}`);

const server = http.createServer(app);

server.listen(port);
