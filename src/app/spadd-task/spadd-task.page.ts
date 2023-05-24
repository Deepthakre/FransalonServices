import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-spadd-task',
  templateUrl: './spadd-task.page.html',
  styleUrls: ['./spadd-task.page.scss'],
})
export class SpaddTaskPage implements OnInit {
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
   
  itemDueDate 
  itemPriority
  itemcontact
  itememail
  itempass
  itemconfirmpassword
  


  constructor(public modalCtlr: ModalController, public todoService:TodoService) {

   }

  ngOnInit() {
    // this.categories.push('Gold')
    // this.categories.push('Silver')
    // this.categories.push('platinum')
  }
  
  async add(){
    this.newTaskObj = ({itemName:this.itemName,   itemDueDate:this.itemDueDate, itemPriority:this.itemPriority ,itemcontact:this.itemcontact,itememail:this.itememail,itempass:this.itempass,
    
    itemconfirmpassword:this.itemconfirmpassword})
    console.log(this.newTaskObj);
    let uid =  this.itemDueDate
    
    if(uid){
      await this.todoService.addTask(uid,this.newTaskObj)
    }else{
      console.log("can't save empty task");
    }


    this.dismis()
  }
  
  // selectCategory(index){
  //   this.categorySelectedCategory = this.categories[index]
  //   console.log(this.categorySelectedCategory);
  // }
  // selectCategory1(index){
  //   this.categorySelectedCategory = this.categories[index]
  //   console.log(this.categorySelectedCategory);
  // }

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}
