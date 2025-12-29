document.addEventListener('DOMContentLoaded', function() {
    let companyForm = document.getElementById("companyForm")
    let companyId = document.getElementById("companyId")
    let companyName = document.getElementById("companyName")
    let industry = document.getElementById("industry")

    companyForm.addEventListener("submit", async(e)=>{
        e.preventDefault()
        
        let company = {
            company_id: companyId.value,
            name: companyName.value,
            industry: industry.value
        }
        
        try {
            let response = await fetch("https://placementstracker-4.onrender.com/api/companies", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(company),
            })
            if (response.ok) {
                alert("Company Added Successfully")
                companyForm.reset()
            } else {
                alert("Error: " + response.status)
            }
        } catch (error) {
            alert("Error adding company: " + error.message)
        }
    })
});