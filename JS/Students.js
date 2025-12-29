let studentsContainer = document.getElementById("students-container")

let allStudents;

let callStudentsFromApi = async() =>{
    allStudents = await getStudents();
    displayStudents(allStudents);
}
callStudentsFromApi();

let displayStudents = async(students)=>{
    studentsContainer.innerHTML = students.map((ele)=>`
    <div class = "student-card">
    <img src="${ele.personal_info?.profile_image}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div style="display:none; width:60px; height:60px; border-radius:50%; background:#667eea; color:white; align-items:center; justify-content:center; font-size:24px; font-weight:bold; margin:0 auto 10px;">${ele.personal_info?.full_name?.charAt(0)?.toUpperCase() || 'N'}</div>
    <h4>Name: ${ele.personal_info?.full_name}</h4>
    <h4>College ID: ${ele.academic_info?.college_id}</h4>
    <h5>Placement Status: ${ele.placement_status}</h5>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </div>
    `).join("")
    
};

let placedStudents = document.getElementById("placedStudents")
placedStudents.addEventListener("click",()=>{
    let filterPlaced = allStudents.filter((ele)=>{
        return ele.placement_status === "Placed";
    });
    console.log(filterPlaced);
    displayStudents(filterPlaced);
});

let NotPlacedStudents = document.getElementById("NotPlacedStudents")
NotPlacedStudents.addEventListener("click",()=>{
    let filterUnPlaced = allStudents.filter((ele)=>{
        return ele.placement_status === "Not Placed";
    });
    console.log(filterUnPlaced);
    displayStudents(filterUnPlaced);
});

let allStudentsBtn = document.getElementById("allStudents")
allStudentsBtn.addEventListener("click",()=>{
    displayStudents(allStudents);
});

