import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';
@Component({
  selector: 'app-creat',
  templateUrl: './creat.page.html',
  styleUrls: ['./creat.page.scss'],
})
export class CreatPage implements OnInit {
  todoList = []
  
  today: number = Date.now();

  constructor(public modalCtlr: ModalController, public todoService:TodoService) { 
    this.getAllTask()
  }
  ngOnInit()  {
    
  }

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
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
      component: UpdateTaskPage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })
    
    return await modal.present()
  }
}
