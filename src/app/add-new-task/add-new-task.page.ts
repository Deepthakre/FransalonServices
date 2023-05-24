import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
 
  itemDueDate 
  itemPriority
  itemcontact
  itememail
  itempass
  itemadd
  itemadhar
  itemrol
  itemdes


  constructor(public modalCtlr: ModalController, public todoService:TodoService) {

   }

  ngOnInit() {
  }
  
  async add(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority ,itemcontact:this.itemcontact,itememail:this.itememail,itempass:this.itempass,itemadd:this.itemadd,
    
    itemadhar:this.itemadhar,itemdes:this.itemdes,itemrol:this.itemrol})
    console.log(this.newTaskObj);
    let uid =  this.itemDueDate
    
    if(uid){
      await this.todoService.addTask(uid,this.newTaskObj)
    }else{
      console.log("can't save empty task");
    }


    this.dismis()
  }
  
 

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}
