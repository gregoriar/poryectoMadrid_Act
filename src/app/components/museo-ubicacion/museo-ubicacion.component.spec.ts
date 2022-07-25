import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseoUbicacionComponent } from './museo-ubicacion.component';

describe('MuseoUbicacionComponent', () => {
  let component: MuseoUbicacionComponent;
  let fixture: ComponentFixture<MuseoUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseoUbicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseoUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
