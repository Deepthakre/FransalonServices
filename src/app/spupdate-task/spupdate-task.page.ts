import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-spupdate-task',
  templateUrl: './spupdate-task.page.html',
  styleUrls: ['./spupdate-task.page.scss'],
})
export class SpupdateTaskPage implements OnInit {

  @Input() task;
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
  
  
 
  
  constructor(public modalCtlr:ModalController, public todoServive:TodoService) { }

  ngOnInit() {
    // this.categories.push('Gold')
    // this.categories.push('Silver')
    // this.categories.push('platinum')
  

    this.itemName = this.task.value.itemName
   
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
     this.itemcontact = this.task.value.itemcontact
     this.itememail = this.task.value.itememail
     this.itempass = this.task.value.itempass
   
     this.itemconfirmpassword = this.task.value.itemconfirmpassword
     
    // this.categorySelectedCategory = this.task.value.itemCategory
    // console.log(this.task);
    
    
  }
  // selectCategory(index){
  //   this.categorySelectedCategory = this.categories[index]
  //   console.log(this.categorySelectedCategory);
  // }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName,  itemDueDate:this.itemDueDate, itemPriority:this.itemPriority })
    let uid = this.task.key
    await this.todoServive.updateTask(uid,this.newTaskObj)
    this.dismis()
       console.log( this.newTaskObj);
  }
}
