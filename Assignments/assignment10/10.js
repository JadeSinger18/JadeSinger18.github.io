const json= 

// Problem 1

let Sam = {
    Name : "Sam", 
    Department : "Tech",
    Designation : "Manager",
    Salary : 40000,
    RaiseEligible : True
  }; 

let Mary = {
    Name : "Mary", 
    Department : "Finance",
    Designation : "Trainee",
    Salary : 18500,
    RaiseEligible : True
  };

let Bill = {
    Name : "Bill", 
    Department : "HR",
    Designation : "Executive",
    Salary : 21200,
    RaiseEligible : False
  };

console.log("problem 1", Sam, Mary, Bill);

// Problem 2

const company = { 
    companyName : "Tech Stars", 
    website : "www.techstars.site",
    employees : [Sam, Mary, Bill],
  };
  
console.log("problem 2", company);

// Problem 3   

    company.employees.push({
        Name : "Anna", 
        Department : "Tech",
        Designation : "Executive",
        Salary : "25600",
        Raise eligible : "False"
    });

console.log("problem 3", company);

// Problem 4

let sum = 0; 
for (let i = 0; i<company.employees.length; i++){
    sum += company.employees[i].salary;
}

console.log("problem 4", sum);

// Problem 5

for (let i = 0; i < company.employees.length; i++){ 
    if (company.employees[i].raise){
        company.employees[i].salary *= 1.1;
        company.employees[i].raise = false;
    }
}

console.log("problem 5", company);

// Problem 6

const peopleWFH =['Anna','Sam']; 

for (vsar i = 0 < company.employees.length; i++){
    company.employees[i]wfh =peopleWFH.includes(company.employees[i].name):
}

console.log("problem 6", company);