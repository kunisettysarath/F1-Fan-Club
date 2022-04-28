import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { SeasonsPageComponent } from './seasons-page.component';
import { HttpClientModule } from '@angular/common/http';
describe('SeasonsPageComponent', () => {
  let component: SeasonsPageComponent;
  let fixture: ComponentFixture<SeasonsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
               imports:[RouterTestingModule,HttpClientModule],
      declarations: [ SeasonsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
