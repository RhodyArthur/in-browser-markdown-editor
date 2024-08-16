import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiotrPaneComponent } from './ediotr-pane.component';

describe('EdiotrPaneComponent', () => {
  let component: EdiotrPaneComponent;
  let fixture: ComponentFixture<EdiotrPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiotrPaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdiotrPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
