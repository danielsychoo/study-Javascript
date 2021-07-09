const SocketIO = require("socket.io");

module.exports = (server, app) => {
    const io = SocketIO(server, {
        cors:{
            origin: "*",
            methods: ["*"]
        },
        path: "/socket"
    });
    app.set("io", io);
    
    io.on("connect", (socket) => {
        console.log("-------------- socket 연결됨");
      
        let id = 0;
        setInterval(function() {
            io.emit("current_Location", { id });
            console.log(`current id === ${id}`)
            
            id++;
            if (id >= 20) {
                clearInterval(this);
            }
        }, 2000);

        socket.on("disconnect", () => {
            console.log("-------------- socket 연결 끊김");
        })
    })
}