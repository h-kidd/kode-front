import React, {useEffect, useState} from 'react';

const StudentList = () =>  {
    const [classRoster, setClassRoster] = useState([]);

    useEffect(() => {
        async function getClassRoster() {
            const response = await fetch ('insert url here',{
                method: 'GET',
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('accessToken') }});
            let data = await response.json();
            setClassRoster(data)
        }
        getClassRoster();
    },[])

    const renderClassRoster = () => classRoster.map(student => <div><h3>{student.firstname} {student.lastname}</h3> <button id={student.username}>Join Game</button></div>)

    return (
        <div>
            <header>
                <h3>Class 1</h3>
                <input type="submit" value="Edit Students"/>
                <input type="submit" value="Add Students" />
            </header>

            <div>
                {renderClassRoster()}
            </div>
        </div>
    )
}

export default StudentList;