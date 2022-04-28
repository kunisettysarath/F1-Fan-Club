import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailService } from "./../../../services/user-detail.service";
import { MyordersComponent } from './myorders.component';
import { HttpClientModule } from '@angular/common/http';
describe('MyordersComponent', () => {
  let component: MyordersComponent;
  let fixture: ComponentFixture<MyordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
         imports:[HttpClientModule],
        providers: [UserDetailService],
      declarations: [ MyordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
