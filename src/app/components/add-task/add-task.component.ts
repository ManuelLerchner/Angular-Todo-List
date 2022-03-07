import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleAddTask()
      .subscribe((showAddTask) => {
        this.showAddTask = showAddTask;
      });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please enter text and day');
      return;
    }

    const task: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(task);

    this.day = '';
    this.text = '';
    this.reminder = false;
  }
}
