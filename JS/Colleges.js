let collegesContainer = document.getElementById("colleges-container")
let newCollegeBtn = document.getElementById("newCollege")

let allColleges;

newCollegeBtn.addEventListener("click", () => {
    window.location.href = "addCollege.html"
})

let callCollegesFromApi = async() =>{
    allColleges = await getColleges();
    console.log("Colleges JSON:", JSON.stringify(allColleges, null, 2));
    displayColleges(allColleges);
}
callCollegesFromApi();

let displayColleges = async(colleges)=>{
    console.log('Colleges data:', colleges); // Debug log
    collegesContainer.innerHTML = colleges.map((ele)=>`
    <div class = "college-card">
    <h4>Name: ${ele.name}</h4>
    <h5>Type: ${ele.type}</h5>
    <h5>Established: ${ele.established_year}</h5>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </div>
    `).join("")
    
};