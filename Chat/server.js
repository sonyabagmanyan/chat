const http = require("http");
const path = require("path");
const express = require("express");
const { Server } = require("socket.io");
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config();
const router = require("./src/router")
const logger = require("./logger")
const {port} = require("./src/variables.config");

const app = express();
const server = http.createServer(app);  
const io = new Server(server); 

app.use(express.static(path.join(__dirname, "public")))
app.use("/uploadImage",express.static("uploads/images"));
app.use("/uploadGif",express.static("uploads/gif"));
app.use("/uploadVideo",express.static("uploads/videos"));

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))

const x=1
app.use(morgan("dev"));
app.use(express.json())

//http requests
app.use(router)
let socketsConnected = new Set();

io.on("connection", (socket) => {
    logger.info("Socket connected", socket.id);
    socketsConnected.add(socket.id);

    io.emit('clients-total', socketsConnected.size);

    socket.on("message", (data) => {
        logger.info("data",data);
        io.emit("chat-message", data)
    });

    socket.on("feedback", (data) => {
        socket.broadcast.emit("feedback", data);
    });

    socket.on("disconnect",()=>{
        logger.info("Socket disconnected", socket.id);
        socketsConnected.delete(socket.id);
        io.emit("clients-total", socketsConnected.size)
    })
})

server.listen(port, () => {
  logger.info(`Server is running on port ${port}`)
});