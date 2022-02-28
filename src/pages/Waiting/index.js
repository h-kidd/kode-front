import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components";
import { useSocket } from "../../contexts/SocketProvider";

function Teacher() {
    const navigate = useNavigate()
    const socket = useSocket();

    useEffect(() => {
        socket.on('start_game', data => {
          navigate('/Game')
        });
      }, [socket]);

    return (
        <div>
            <Title />
            <h2>Waiting for teacher to start</h2>
        </div>
    )
}

export default Teacher;