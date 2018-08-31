import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EditPage } from '../edit/edit';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    todos: any[] = [];

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    add() {
        let prompt = this.alertCtrl.create({
            title: 'Add Task',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        this.todos.push(data);
                    }
                }
            ]
        });
 
        prompt.present();
    }

    delete(item) {
        let index = this.todos.indexOf(item);
 
        if(index > -1){
            this.todos.splice(index, 1);
        }
    }

    openEditPage(item){
    let prompt = this.alertCtrl.create({
            title: 'Edit Task',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.todos.indexOf(item);
 
                        if(index > -1){
                          this.todos[index] = data;
                        }
                    }
                }
            ]
        });
 
        prompt.present();    
}}
