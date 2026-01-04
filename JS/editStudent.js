let urlId = new URLSearchParams(window.location.search)
let id = urlId.get('id')

let loadStudent = async()=>{
    let data = await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`);
    let student = await data.json();
    console.log(student);
    studentName.value = student.personal_info.full_name;
    studentGender.value = student.personal_info.gender;
    dob.value = student.personal_info.date_of_birth;
    collegeId.value = student.academic_info.college_id;
    department.value = student.academic_info.department;
    degree.value = student.academic_info.degree;
    graduation.value = student.academic_info.year_of_graduation;
    cgpa.value = student.academic_info.cgpa;
    backlogs.value = student.academic_info.backlogs;
    programming.value = student.skills.programming_languages.join(', ');
    database.value = student.skills.databases.join(', ');
    tools.value = student.skills.tools.join(', ');
    placementStatus.value = student.placement_status;
};
loadStudent();

let studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    console.log('Form submitted');
    
    let updatedStudent = {
        personal_info: {
            full_name: studentName.value,
            gender: studentGender.value,
            date_of_birth: dob.value
        },
        academic_info: {
            college_id: collegeId.value,
            department: department.value,
            degree: degree.value,
            year_of_graduation: graduation.value,
            cgpa: parseFloat(cgpa.value),
            backlogs: parseInt(backlogs.value)
        },
        skills: {
            programming_languages: programming.value.split(', '),
            databases: database.value.split(', '),
            tools: tools.value.split(', ')
        },
        placement_status: placementStatus.value
    };
    
    console.log('Updating student:', updatedStudent);
    
    let response = await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedStudent)
    });
    
    console.log('Response status:', response.status);
    
    if(response.ok) {
        alert('Student updated successfully!');
        window.location.href = './Students.html';
    } else {
        alert('Error updating student');
    }
});