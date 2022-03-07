import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTasks: boolean = false;
  private subject: Subject<any> = new Subject();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTasks = !this.showAddTasks;
    this.subject.next(this.showAddTasks);
  }

  onToggleAddTask(): Observable<any> {
    return this.subject.asObservable();
  }
}
