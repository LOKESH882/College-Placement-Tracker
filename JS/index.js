let index = async () => {
  
        let students = await getStudents();
        let colleges = await getColleges();
        let companies = await getCompanies();
        let jobroles = await getJobRole();

        console.log(students.length);
        console.log(colleges.length);
        console.log(companies.length);
        console.log(jobroles.length);
        
        let studentsBox = document.getElementById("students");
        studentsBox.innerHTML = `Total Students: ${students.length}`;

        let collegesBox = document.getElementById("colleges");
        collegesBox.innerHTML = `Total Colleges: ${colleges.length}`;

        let companiesBox = document.getElementById("companies");
        companiesBox.innerHTML = `Total companies: ${companies.length}`;

        let jobrolesBox = document.getElementById("jobroles");
        jobrolesBox.innerHTML = `Total Job Roles: ${jobroles.length}`;


    
};
index();