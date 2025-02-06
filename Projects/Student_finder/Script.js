function findStudent()
{
    let Student = document.getElementById("studentId").value;

    if(Student == 1)
    {
        document.getElementById("result").innerHTML = `<div class="result-box">
                                                        <h3>Rohn Doe</h3>
                                                        <p>Student in the 1st grade.</p>
                                                       </div>`
    }
    else if(Student == 2)
    {
        document.getElementById("result").innerHTML = `<div class="result-box">
                                                            <h3>Jonathan Gray</h3>
                                                            <p>Student in the 4th grade.</p>
                                                       </div>`
    }
    else if(Student == 3)
    {
        document.getElementById("result").innerHTML = `<div class="result-box">
                                                            <h3>Adrianna Jones</h3>
                                                            <p>Student in the 8th grade.</p>
                                                       </div>`
    }
    else if(Student == 4)
    {
        document.getElementById("result").innerHTML = `<div class="result-box">
                                                            <h3>Bryan Harrel</h3>
                                                            <p>Student in the 2nd grade.</p>
                                                       </div>`
    }
    else
    {
        document.getElementById("result").innerHTML = `<div class="result-box">
                                                            <h3>No Students with this ID</h3>
                                                       </div>`
    };
};