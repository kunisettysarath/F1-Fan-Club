import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EventsPageComponent } from './events-page.component';
import { HttpClientModule } from '@angular/common/http';
describe('EventsPageComponent', () => {
  let component: EventsPageComponent;
  let fixture: ComponentFixture<EventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
         imports: [HttpClientModule],
       schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ EventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
