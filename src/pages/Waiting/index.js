import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Title } from "../../components";
import { useSocket } from "../../contexts/SocketProvider";
import { loadSettings } from '../../actions';

function Teacher() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const socket = useSocket();
    const room = useSelector((state) => state.socketId);
    const firstname = useSelector((state) => state.firstname);
    const lastname = useSelector((state) => state.lastname);

    useEffect(() => {
        socket.emit('join-room', room, firstname, lastname);
      }, []);

    useEffect(() => {
        socket.on('start_game', (category, difficulty) => {
            dispatch(loadSettings(category, difficulty));
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