import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasBodyComponent } from './tarjetas-body.component';

describe('TarjetasBodyComponent', () => {
  let component: TarjetasBodyComponent;
  let fixture: ComponentFixture<TarjetasBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarjetasBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
