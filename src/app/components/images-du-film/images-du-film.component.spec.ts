import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesDuFilmComponent } from './images-du-film.component';

describe('ImagesDuFilmComponent', () => {
  let component: ImagesDuFilmComponent;
  let fixture: ComponentFixture<ImagesDuFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesDuFilmComponent]
    });
    fixture = TestBed.createComponent(ImagesDuFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
