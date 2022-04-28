import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { DriverStatsComponent } from './driver-stats.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
describe('DriverStatsComponent', () => {
  let component: DriverStatsComponent;
  let fixture: ComponentFixture<DriverStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       schemas:[CUSTOM_ELEMENTS_SCHEMA],
        imports:[NgxPaginationModule,HttpClientModule],
      declarations: [ DriverStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
