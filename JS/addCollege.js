document.addEventListener('DOMContentLoaded', function() {
    let collegeForm = document.getElementById("collegeForm")
    let collegeId = document.getElementById("collegeId")
    let collegeName = document.getElementById("collegeName")
    let collegeType = document.getElementById("collegeType")
    let affiliatedTo = document.getElementById("affiliatedTo")
    let establishedYear = document.getElementById("establishedYear")
    let city = document.getElementById("city")
    let state = document.getElementById("state")
    let country = document.getElementById("country")
    let pincode = document.getElementById("pincode")
    let departments = document.getElementById("departments")
    let totalStudents = document.getElementById("totalStudents")

    collegeForm.addEventListener("submit", async(e)=>{
        e.preventDefault()
        
        let college = {
            college_id: collegeId.value,
            name: collegeName.value,
            type: collegeType.value,
            affiliated_to: affiliatedTo.value,
            established_year: parseInt(establishedYear.value),
            location: {
                city: city.value,
                state: state.value,
                country: country.value,
                pincode: pincode.value
            },
            departments: departments.value.split(",").map(dept => dept.trim()),
            total_students: parseInt(totalStudents.value)
        }
        
        try {
            let response = await fetch("https://placementstracker-4.onrender.com/api/colleges", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(college),
            })
            if (response.ok) {
                alert("College Added Successfully")
                collegeForm.reset()
            } else {
                alert("Error: " + response.status)
            }
        } catch (error) {
            alert("Error adding college: " + error.message)
        }
    })
});