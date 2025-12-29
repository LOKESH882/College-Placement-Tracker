document.addEventListener('DOMContentLoaded', function() {
    let jobRoleForm = document.getElementById("jobRoleForm")
    let roleId = document.getElementById("roleId")
    let jobTitle = document.getElementById("jobTitle")

    jobRoleForm.addEventListener("submit", async(e)=>{
        e.preventDefault()
        
        let jobRole = {
            role_id: roleId.value,
            title: jobTitle.value
        }
        
        try {
            let response = await fetch("https://placementstracker-4.onrender.com/api/job-roles", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(jobRole),
            })
            if (response.ok) {
                alert("Job Role Added Successfully")
                jobRoleForm.reset()
            } else {
                alert("Error: " + response.status)
            }
        } catch (error) {
            alert("Error adding job role: " + error.message)
        }
    })
});