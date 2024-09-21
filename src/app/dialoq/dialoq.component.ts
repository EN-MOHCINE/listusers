import { UsersService } from '../service/users.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialoq',
  templateUrl: './dialoq.component.html',
  styleUrls: ['./dialoq.component.scss']
})
export class DialoqComponent implements OnInit {



  constructor(
        public dialogRef: MatDialogRef<DialoqComponent>,
        public service:UsersService ,

        @Inject(MAT_DIALOG_DATA) public editdata:any , //open send data to dialog  
        
  ){}
  userForm !: FormGroup ;
  actionBtn :string ="save";
  

  //nginit 
  ngOnInit(): void {
    
    this.userForm =new FormGroup({
      "nom":new FormControl('',Validators.required),
      // "status":new FormControl('',Validators.required),
      "Address":new FormControl('',Validators.required),
      "prenom":new FormControl('',Validators.required),
      "City":new FormControl('',Validators.required),
  
    }) ;

    //get data update 
    // console.log(this.editdata)
    if(this.editdata){
      this.actionBtn="Update"
      this.userForm.controls['nom'].setValue(this.editdata.nom);
      this.userForm.controls['prenom'].setValue(this.editdata.prenom);
      this.userForm.controls['Address'].setValue(this.editdata.Address);
      this.userForm.controls['City'].setValue(this.editdata.City);
      
    }
  }
  

    
  //create users
  userSubmit(){
    if(!this.editdata){
      if(this.userForm.valid){    
            console.log(this.userForm.value)
            this.service.createdata(this.userForm.value).subscribe(res=>{})
            this.dialogRef.close({ refresh: true,message:"success" ,
            user:this.userForm.value.nom});
            }else{
              console.log("required")
            }
      }else{
            this.updatedata1()
          }
    }


    //update   else dans user submit 
updatedata1(){
  if(this.userForm.valid){
      this.service.updatedata(this.userForm.value,this.editdata.id).subscribe(res=>{console.log(res,"respone////")})
      this.dialogRef.close({ refresh: true ,message:"success",
      user:this.userForm.value.nom});
    }else{
      console.log("required")
    }
}



//end class
}
