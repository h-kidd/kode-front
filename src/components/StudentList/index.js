import React from "react";

const StudentList = () =>  {

    return (
        <div>
            <header>
                <h3>Class 1</h3>
                <input type="submit" value="Edit Students"/>
                <input type="submit" value="Add Students" />
            </header>

            <div>
                <p>Student 1</p>
                <input type="submit" value="View More"/>
            </div>
        </div>
    )
}

export default StudentList;