import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DcardComponent } from './dcard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule} from '@angular/router/testing';
describe('DcardComponent', () => {
  let component: DcardComponent;
  let fixture: ComponentFixture<DcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[HttpClientModule,RouterTestingModule],
       schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ DcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
