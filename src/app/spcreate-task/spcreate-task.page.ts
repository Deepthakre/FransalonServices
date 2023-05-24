import { SpupdateTaskPage } from './../spupdate-task/spupdate-task.page';
import { SpaddTaskPage } from './../spadd-task/spadd-task.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
 
import { TodoService } from '../todo.service';
 

@Component({
  selector: 'app-spcreate-task',
  templateUrl: './spcreate-task.page.html',
  styleUrls: ['./spcreate-task.page.scss'],
})
export class SpcreateTaskPage implements OnInit {

  todoList = []
  
  today: number = Date.now();

  constructor(public modalCtlr: ModalController, public todoService:TodoService) { 
    this.getAllTask()
  }
  ngOnInit()  {
    
  }

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: SpaddTaskPage,
    })
    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
    })
    return await modal.present()
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

  delete(key) { 
    this.todoService.deleteTask(key)
    this.getAllTask() 
  }
 
  async update(selectedTask){
    const modal = await this.modalCtlr.create({
      component: SpupdateTaskPage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })
    
    return await modal.present()
  }
}
