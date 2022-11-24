import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadavcComponent } from './nadavc.component';

describe('NadavcComponent', () => {
  let component: NadavcComponent;
  let fixture: ComponentFixture<NadavcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NadavcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadavcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
