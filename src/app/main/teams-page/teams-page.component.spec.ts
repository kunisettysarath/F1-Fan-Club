import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { TeamsPageComponent } from './teams-page.component';
import { HttpClientModule } from '@angular/common/http';
describe('TeamsPageComponent', () => {
  let component: TeamsPageComponent;
  let fixture: ComponentFixture<TeamsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
         imports:[RouterTestingModule,HttpClientModule],
      declarations: [ TeamsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
