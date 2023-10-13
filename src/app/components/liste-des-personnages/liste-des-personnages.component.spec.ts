import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesPersonnagesComponent } from './liste-des-personnages.component';

describe('ListeDesPersonnagesComponent', () => {
  let component: ListeDesPersonnagesComponent;
  let fixture: ComponentFixture<ListeDesPersonnagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesPersonnagesComponent]
    });
    fixture = TestBed.createComponent(ListeDesPersonnagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
