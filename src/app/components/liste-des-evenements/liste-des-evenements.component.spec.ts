import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesEvenementsComponent } from './liste-des-evenements.component';

describe('ListeDesEvenementsComponent', () => {
  let component: ListeDesEvenementsComponent;
  let fixture: ComponentFixture<ListeDesEvenementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesEvenementsComponent]
    });
    fixture = TestBed.createComponent(ListeDesEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
