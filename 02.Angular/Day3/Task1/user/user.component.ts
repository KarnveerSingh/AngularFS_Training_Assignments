import { Component, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  start:number = 0;
  end:number =4;

  property:boolean = false;
  propertyprev:boolean = false;


  userArr:user[] = [
    {uid:1,uname:"Smith",   gender:"m"} ,
    {uid:2,uname:"Claudell",   gender:"f" } ,
    {uid:3,uname:"Minor"   ,   gender:"m" },
    {uid:4,uname:"Iain"    ,   gender:"f" },
    {uid:5,uname:"Smith"   ,   gender:"m"   },
    {uid:6,uname:"Mickie"  ,   gender:"f"   },
    {uid:7,uname:"Smith"   ,   gender:"f"   },
    {uid:8,uname:"Rodi"    ,   gender:"m"   },
    {uid:9,uname:"Sharlene",   gender:"m"   },
    {uid:10,uname:"Smith"  ,   gender:"m"   },
    {uid:11,uname:"Iain"   ,   gender:"f"   },
    {uid:12,uname:"Smith"  ,   gender:"m"   },
    {uid:13,uname:"Smith"  ,   gender:"m"   },
    {uid:14,uname:"Iain"   ,   gender:"f"   },
    {uid:15,uname:"Smith"  ,   gender:"m"   },
    {uid:16,uname:"Sharlene" ,   gender:"f"      },
    {uid:17,uname:"Iain"     ,   gender:"m"  },
    {uid:18,uname:"Smith"    ,   gender:"f"  },
    {uid:19,uname:"Claudell" ,   gender:"m"      },
    {uid:10,uname:"Smith"    ,   gender:"m"  },
    {uid:21,uname:"Smith"    ,   gender:"f"  }
    
  ];

 
  Next_Click(){
    if(this.end >= this.userArr.length  ){
      
      this.property=true;

    }
    else{
      this.start = this.end;
      this.end = this.end + 4;
    }
  }

  
    
  }
}
