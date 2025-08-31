/*import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port: 8080 }); 

let userCount = 0;

wss.on("connection", (socket)=>{
    userCount = userCount + 1;
    console.log("User connected #"+ userCount);

    socket.on("message",(message)=>{
        console.log("Message recevied " + message.toString());
        // sent the message from server to client after 1 second.
        setTimeout(()=>{
            socket.send(message.toString() + ": sent from the server");
        },1000);
    });
});*/













import { WebSocketServer, WebSocket } from "ws"

const wss = new WebSocketServer({ port: 8080 }); 

interface User{
    socket: WebSocket,
    room: string
}

let allSockets: User[] = [];

wss.on("connection", (socket)=>{
    socket.on("message",(message)=>{
        //@ts-ignore
        const parsedMessage = JSON.parse(message); // converting string to object
        if(parsedMessage.type === "join")
        {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }

        if(parsedMessage.type === "chat")
        {
            const currentUserRoom = allSockets.find((x)=> x.socket == socket)?.room;
            //[ OR ]
            /*let currentUserRoom = null;
            for(let i=0;i<allSockets.length;i++)
            {
                if(allSockets[i]?.socket == socket)
                {   
                    currentUserRoom = allSockets[i]?.room;
                }

            }*/

            for(let i=0;i<allSockets.length;i++)
            {
                if(allSockets[i]?.room == currentUserRoom)
                {
                    allSockets[i]?.socket.send(parsedMessage.payload.message);
                }
            }
            //[ OR ]
            /*allSockets.filter(x => x.room === currentUserRoom)
                      .forEach(x => x.socket.send(parsedMessage.payload.message));*/

        }
    });

    socket.on("disconnect", ()=>{
        allSockets = allSockets.filter( x => x.socket !== socket);
    });
});



