let companiesContainer = document.getElementById("companies-container")
let newCompanyBtn = document.getElementById("newCompany")

let allCompanies;

newCompanyBtn.addEventListener("click", () => {
    window.location.href = "addCompany.html"
})

let callCompaniesFromApi = async() =>{
    allCompanies = await getCompanies();
     console.log("Companies JSON:", JSON.stringify(allCompanies, null, 2));
    displayCompanies(allCompanies);
}
callCompaniesFromApi();

let displayCompanies = async(companies)=>{
    console.log('Companies data:', companies);
    companiesContainer.innerHTML = companies.map((ele)=>`
    <div class = "company-card">
    <h4>Company ID: ${ele.company_id}</h4>
    <h4>Name: ${ele.name}</h4>
    <h5>Industry: ${ele.industry}</h5>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    </div>
    `).join("")
};
let productBasedBtn = document.getElementById("productBased")
productBasedBtn.addEventListener("click",()=>{
    let filterProductBased = allCompanies.filter((ele)=>{
        return ele.industry === "Product Based";
    });
    console.log(filterProductBased);
    displayCompanies(filterProductBased);
});

let itServicesBtn = document.getElementById("itServices")
itServicesBtn.addEventListener("click",()=>{
    let filterItServices = allCompanies.filter((ele)=>{
        return ele.industry === "IT Services";
    });
    console.log(filterItServices);
    displayCompanies(filterItServices);
});

let allCompaniesBtn = document.getElementById("allCompanies")
allCompaniesBtn.addEventListener("click",()=>{
    displayCompanies(allCompanies);
});