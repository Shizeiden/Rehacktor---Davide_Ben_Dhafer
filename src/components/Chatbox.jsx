import { useContext } from "react";
import supabase from "../supabase/supabase-client";
import SessionContext from "../context/SessionContext";
import RealtimeChat from "./RealtimeChat.jsx";

export default function Chatbox({ data }) {
    const { session } = useContext(SessionContext);

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        const inputMessage = e.currentTarget;
        const { message } = Object.fromEntries(new FormData(inputMessage));
        if (typeof message === "string" && message.trim().lenght !== 0) {
            const { error } = await supabase
                .from("messages")
                .insert([
                    {
                        profile_id: session?.user.id,
                        profile_username: session?.user.user_metadata.username,
                        game_id: data.id,
                        content: message,
                    },
                ])
                .select();
            if (error) {
                console.log(error);
            } else {
                inputMessage.reset();
            }
        }
    };


    return (
        <div className="d-flex flex-column gap-3">
            <h4 className="text-center mb-2 fw-bold text-light">💬 Gamers Chat</h4>
    
            <div className="p-3 rounded">
                <RealtimeChat data={data && data} />
            </div>
    
            <form onSubmit={handleMessageSubmit} className="d-flex gap-2">
                <input
                    type="text"
                    name="message"
                    placeholder="Scrivi un messaggio..."
                    className="form-control bg-secondary text-white border-0 rounded-pill px-3"
                />
                <button type="submit" className="custom-btn btn-1">
                    Invia
                </button>
            </form>
        </div>
    );
}