import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeatherComponent } from './layout-leather.component';

describe('LayoutLeatherComponent', () => {
  let component: LayoutLeatherComponent;
  let fixture: ComponentFixture<LayoutLeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
