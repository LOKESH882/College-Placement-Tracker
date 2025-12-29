let jobrolesContainer = document.getElementById("jobroles-container")
let newJobRoleBtn = document.getElementById("newJobRole")

let allJobRoles;

newJobRoleBtn.addEventListener("click", () => {
    window.location.href = "addJobRole.html"
})

let callJobRolesFromApi = async() =>{
    allJobRoles = await getJobRole();
    displayJobRoles(allJobRoles);
}
callJobRolesFromApi();

let displayJobRoles = async(jobroles)=>{
    jobrolesContainer.innerHTML = jobroles.map((ele)=>`
    <div class = "jobrole-card">
    <h4>Role ID: ${ele.role_id}</h4>
    <h5>Job Title: ${ele.title}</h5>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </div>
    `).join("")
};


