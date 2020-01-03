import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerComponent } from './shortener.component';

describe('ShortenerComponent', () => {
  let component: ShortenerComponent;
  let fixture: ComponentFixture<ShortenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
