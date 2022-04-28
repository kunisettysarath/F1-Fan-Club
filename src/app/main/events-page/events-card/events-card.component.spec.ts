import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailService } from "./../../../services/user-detail.service";
import { EventsCardComponent } from './events-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
describe('EventsCardComponent', () => {
  let component: EventsCardComponent;
  let fixture: ComponentFixture<EventsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientModule],
      declarations: [ EventsCardComponent ],
         providers: [UserDetailService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
