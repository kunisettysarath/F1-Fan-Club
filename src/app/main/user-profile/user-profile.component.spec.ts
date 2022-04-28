import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { UserProfileComponent } from './user-profile.component';
import { UserDetailService } from './../../services/user-detail.service';
import { HttpClientModule } from '@angular/common/http';
describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[RouterTestingModule,HttpClientModule],
      declarations: [ UserProfileComponent ],
       providers: [UserDetailService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
