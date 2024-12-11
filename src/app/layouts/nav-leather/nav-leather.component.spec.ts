import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeatherComponent } from './nav-leather.component';

describe('NavLeatherComponent', () => {
  let component: NavLeatherComponent;
  let fixture: ComponentFixture<NavLeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
