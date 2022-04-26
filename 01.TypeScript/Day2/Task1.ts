//  Properties concept supports only in es5 and higher versions
//  use target flag (-t) and refer es5
//  tsc 03.PropertiesDemo.ts -t es5


// Involving Read-only properties

class Customer
{
    public cid:number = 0;
    public cname:string  = "";
    public clocation:string = "";

    constructor(cid:number=0, cname:string = "", clocation:string = "")
    {
        this.cid = cid;
        this.cname = cname;
        this.clocation = clocation;
    }
  

    public showDetails():void
    {
        console.log(`Customer Details  ::   Id : ${this.cid}, Name :  ${this.cname}, City :  ${this.clocation}`)
        console.log("-----------------------------------------------------------------------------------------------");
    }
}


let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256, "scott");
let c4:Customer = new Customer(10256, "scott", "hyd");
c4. showDetails();


