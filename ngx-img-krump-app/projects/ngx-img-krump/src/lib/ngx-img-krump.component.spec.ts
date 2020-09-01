import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImgKrumpComponent } from './ngx-img-krump.component';

describe('NgxImgKrumpComponent', () => {
  let component: NgxImgKrumpComponent;
  let fixture: ComponentFixture<NgxImgKrumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImgKrumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImgKrumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
