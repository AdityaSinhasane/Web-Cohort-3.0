import { TextInput } from "@repo/ui/text-input";

export default function chatRoomPage(){
    return <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
    }}>
        <div>
            Chat Room Page
        </div>
        <div>
            <TextInput placeholder="Chat here" size="big"/>
        </div>
    </div>
}