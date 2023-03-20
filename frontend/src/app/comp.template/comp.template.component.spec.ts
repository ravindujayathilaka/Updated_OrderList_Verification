import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTemplateComponent } from './comp.template.component';

describe('CompTemplateComponent', () => {
  let component: CompTemplateComponent;
  let fixture: ComponentFixture<CompTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
