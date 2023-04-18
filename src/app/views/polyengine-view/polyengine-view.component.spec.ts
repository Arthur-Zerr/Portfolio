import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyengineViewComponent } from './polyengine-view.component';

describe('PolyengineViewComponent', () => {
  let component: PolyengineViewComponent;
  let fixture: ComponentFixture<PolyengineViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolyengineViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolyengineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
