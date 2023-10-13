import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesCollectionsComponent } from './liste-des-collections.component';

describe('ListeDesCollectionsComponent', () => {
  let component: ListeDesCollectionsComponent;
  let fixture: ComponentFixture<ListeDesCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesCollectionsComponent]
    });
    fixture = TestBed.createComponent(ListeDesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
