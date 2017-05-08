import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
 } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { BstestComponent } from './bstest.component';
import { NameListService } from '../shared/name-list/name-list.service';

export function main() {
  describe('Bstest component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [BstestComponent],
        providers: [
          { provide: NameListService, useValue: new MockNameListService() }
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(BstestComponent);
            let bstestInstance = fixture.debugElement.componentInstance;
            let bstestDOMEl = fixture.debugElement.nativeElement;
            let mockNameListService =
              fixture.debugElement.injector.get<any>(NameListService) as MockNameListService;
            let nameListServiceSpy = spyOn(mockNameListService, 'get').and.callThrough();

            mockNameListService.returnValue = ['1', '2', '3'];

            fixture.detectChanges();

            expect(bstestInstance.nameListService).toEqual(jasmine.any(MockNameListService));
            expect(bstestDOMEl.querySelectorAll('li').length).toEqual(3);
            expect(nameListServiceSpy.calls.count()).toBe(1);

            bstestInstance.newName = 'Minko';
            bstestInstance.addName();

            fixture.detectChanges();

            expect(bstestDOMEl.querySelectorAll('li').length).toEqual(4);
            expect(bstestDOMEl.querySelectorAll('li')[3].textContent).toEqual('Minko');
          });

      }));
  });
}

class MockNameListService {

  returnValue: string[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
