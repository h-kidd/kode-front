import React, {useEffect, useState} from 'react';

const HomeworkList = () => {
    const [homework, setHomework] = useState([]);

    useEffect(() => {
        async function getHomework() {
            const response = await fetch ('insert url here',{
                method: 'GET',
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('accessToken') }});
            let data = await response.json();
            setHomework(data)
        }
        getHomework();
    },[])

    const renderHomework = () => homework.map(work => <div><h3>{work.subject}</h3> <button id={work.subject}>Start!</button></div>)

    return (
        <div>
            <header>
                <h3>Homework</h3>
            </header>

            {renderHomework()}
        </div>
    )
}

export default HomeworkList;