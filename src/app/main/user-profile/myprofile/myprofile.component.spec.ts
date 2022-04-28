import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailService } from "./../../../services/user-detail.service";
import { MyprofileComponent } from './myprofile.component';
import { HttpClientModule } from '@angular/common/http';
describe('MyprofileComponent', () => {
  let component: MyprofileComponent;
  let fixture: ComponentFixture<MyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientModule],
       providers: [UserDetailService],
      declarations: [ MyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
