let studentForm = document.getElementById("studentForm")
studentForm.addEventListener("submit", async(e)=>{
    e.preventDefault()
    // console.log("hello");
    // console.log(studentName.value);
    // console.log(studentGender.value);

    let student={
        personal_info:{
            full_name:studentName.value,
            gender:studentGender.value,
            date_of_birth:dob.value,
            profile_image: "https://via.placeholder.com/150/667eea/ffffff?text=" + studentName.value.charAt(0).toUpperCase()
        },
        academic_info:{
            college_id:collegeId.value,
            department:department.value,
            degree:degree.value,
            graduation_year:graduation.value,
            cgpa:cgpa.value,
            backlogs:backlogs.value

        },
        skills:{
            programmingg:programming.value.split(","),
            databases:database.value.split(","),
            tools:tools.value.split(","),


        },
        placement_status:placementStatus.value
    }
    console.log(student);
    

        await fetch("https://placementstracker-4.onrender.com/api/students", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(student),
        })

        alert("Student Added Successfully")
        
        
    });