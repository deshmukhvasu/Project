import { TestBed,ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HearderComponent } from './hearder.component';
import { ServiceService } from '../common/service.service';
import {MatMenuModule} from '@angular/material/menu';
// import { MaterialModule } from '../material.module';

describe('HearderComponent', () => {
  let component: HearderComponent;
  let fixture: ComponentFixture<HearderComponent>;
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatMenuModule
        // MaterialModule
      ],
      declarations: [
        HearderComponent
      ],
      providers : [
        ServiceService
      ]
    }).compileComponents();
  }));

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ HearderComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
