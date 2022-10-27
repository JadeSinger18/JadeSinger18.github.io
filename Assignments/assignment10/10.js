

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

const Company = { 
    companyName : "Tech Stars", 
    Website : "www.techstars.site",
    Employees : [Sam, Mary, Bill],
  };
  
console.log("problem 2", company);

// Problem 3   

    Company.Employees.push({
        Name : "Anna", 
        Department : "Tech",
        Designation : "Executive",
        Salary : 25600,
        Raise eligible : False
    });

console.log("problem 3", company);

// Problem 4

let sum = 0; 
for (let i = 0; i < Company.Employees.length; i++){
    sum += Company.Employees[i].Salary;
}

console.log("problem 4", sum);

// Problem 5

for (let i = 0; i < company.employees.length; i++){ 
    if (Company.Employees[i].Raise){
        Company.Employees[i].Salary *= 1.1;
        Company.Employees[i].Raise = false;
    }
}

console.log("problem 5", company);

// Problem 6

const peopleWFH =['Anna','Sam']; 

for (vsar i = 0 < Company.Employees.length; i++){
    Company.Employees[i]wfh =peopleWFH.includes(Company.Employees[i].Name):
}

console.log("problem 6", company);