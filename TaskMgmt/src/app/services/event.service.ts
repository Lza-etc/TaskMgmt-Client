import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private isSuccessSubject = new BehaviorSubject<boolean>(false);
  isSuccess$ = this.isSuccessSubject.asObservable();

  emitSuccess(isSuccess: boolean) {
    this.isSuccessSubject.next(isSuccess);
  }
}
