import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesStoriesComponent } from './liste-des-stories.component';

describe('ListeDesStoriesComponent', () => {
  let component: ListeDesStoriesComponent;
  let fixture: ComponentFixture<ListeDesStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDesStoriesComponent]
    });
    fixture = TestBed.createComponent(ListeDesStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
