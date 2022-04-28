import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { MybookingsComponent } from './mybookings.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailService } from "./../../../services/user-detail.service";
describe('MybookingsComponent', () => {
  let component: MybookingsComponent;
  let fixture: ComponentFixture<MybookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          
     imports:[RouterTestingModule,HttpClientModule],
      providers: [UserDetailService],
      declarations: [ MybookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
