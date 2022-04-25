var id:number = 5464654;
var empname: string = "scott";
var job: string = "manager";
var IsPermanentEmp:boolean = true;
var sal:number = 45000;
var deptNo:number = 10;

console.log("Employee id " + id);
console.log("Employee name " + empname);
console.log("Employee job " + job);
console.log("Is permanent Employee " + IsPermanentEmp);
console.log("Employee salary " + sal);
console.log("Employee DeptNo " + deptNo);

console.log("------------------------ES6/7 string template----------------------------");
//string template 
var stringOutput:string = `Employee details Employee id = ${id}, Employee name = ${empname} , Employee Job = ${job}, Is Permanent Employee = ${IsPermanentEmp}, Employee salary = ${sal}, Employee DeptNo = ${deptNo}`;
console.log(stringOutput);