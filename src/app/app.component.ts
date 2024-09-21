import { FormGroup, FormControl } from '@angular/forms';
import { AlertDeleteComponent } from './alert-delete/alert-delete.component';
import { UsersService } from './service/users.service';
import { DialoqComponent } from './dialoq/dialoq.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
////
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';





const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  //use in pangination
  @ViewChild(MatPaginator) paginator : MatPaginator ;

  //variable 
  title = 'listusers';
  sizelimit !:any ;
  
  //variable pagination 
  params:any ;
  
  totalItems = 0;
  pageIndex = 0;
  pageSize = 10;
  
  //affiche table bootstrap
  users:any =[] ;
  
  //affiche table material
  dataSource :any ;
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'Address',"City","Edites"];
  
  selectedFile: File ;

  constructor(
    private dialog:MatDialog  ,
    public service:UsersService
    ,private snackBar: MatSnackBar ,
    private routername:Router ,
    private  http: HttpClient
    // ,public dialogRef: MatDialogRef<AppComponent>
    ){
    
    }




    // //////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////

  

  onFileSelected(event :any  ) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('excelFile', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:9090/upload', formData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
    // //////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////

    //les fonction de Router 
    gotoContact(){
      this.routername.navigate(["/Contact"])
    }
    gotologin(){
      this.routername.navigate(["/login"])
    }
    imgCollection: Array<object> = [
      {
        image: 'hello',
        thumbImage: 'https://loremflickr.com/g/1200/800/paris',
        alt: 'Image 1',
        title: 'Image 1'
      }, {
        image: 'https://loremflickr.com/600/400/brazil,rio',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 3',
        alt: 'Image 3'
      }, {
        image: 'https://loremflickr.com/600/400/brazil,rio',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 4',
        alt: 'Image 4'
      }, {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
        title: 'Image 5',
        alt: 'Image 5'
      }
  ];



  ////oninit
  ngOnInit(): void {

        // this.service.getusers().subscribe((res)=>{
          // this.users=res.data
          // this.dataSource=res.data
          // })
        console.log(!true)
        this.getalldata() ;
        //set variable pagination
        // this.params = new HttpParams()
        //   .set('page', this.currentPage.toString())
        //   .set('recordsPerPage', this.recordsPerPage.toString());
      
      }
      









      
      //get data
  getalldata(){

        const limit = this.pageSize;
        const offset = this.pageIndex * this.pageSize;
    

        this.service.getusers( limit, offset ).subscribe((res)=>{
          this.users=res.data  ;
          this.totalItems = res.data.length;
          console.log(res)
          // code work  
          this.dataSource=new MatTableDataSource<any> (res.data);
          //work pagination
          this.dataSource.paginator = this.paginator ;



          // console.log(res)
          // this.totalPages = res.totalPages;
          // console.log(this.totalPages)
          // this.totalRecords = res.totalRecords;  
          // console.log(this.totalRecords)
          

          
        })
      }





  pagechange(event  :any ){
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        // this.currentPage = event.pageIndex + 1;
        // console.log(this.currentPage)
        // this.recordsPerPage = event.pageSize;
        // console.log(this.recordsPerPage)
        this.getalldata();
        
      }















  //delete users 
  deleteid(user:any ,id:number){
        //open dialogue 
      const dialogRef = this.dialog.open(AlertDeleteComponent, {
        width: '400px',
        height: 'auto',
        data: user
      });
      //closed dialog 
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.service.deletedata({"data" :1} , id).subscribe(res=>{
              console.log(res) 
              this.getalldata() ;
            }) ;
              // console.log(result)
          } 
      });
    
  }













  
  //update
  editeusers(row :any ){
    let dialogRef=this.dialog.open(DialoqComponent,{
      width :"30%" ,
      height:'auto' ,
      data:row
    });
    dialogRef.afterClosed().subscribe(result => {
      //snackbar 
      if (result.message === 'success') {
        this.snackBar.open(`user  ${result.user} update successfully`, 'close', {
          duration: 8000,
        });}
        // refrech data
      if (result && result.refresh) {
        this.getalldata()
      }
    });
  }



  




  


  //create
    openDialog() {
      let dialogRef =this.dialog.open(DialoqComponent, {
        width :"30%" ,
        height:'auto'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result.message === 'success') {
          this.snackBar.open(`user ${result.user} created  successfully`, 'close', {
            duration: 8000,
          });}
        //refrech data 
        if (result && result.refresh) {
          this.getalldata()
        }
      });
  }












  // filter name
  applyFilter1 ( value :string ){
    value =value.trim() ;
    value= value.toLowerCase();
    this.dataSource.filter = value
    // console.log(value)
  }

}
