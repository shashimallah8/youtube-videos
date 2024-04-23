import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShashiYoutubeVideosComponent } from './shashi-youtube-videos.component';

describe('ShashiYoutubeVideosComponent', () => {
  let component: ShashiYoutubeVideosComponent;
  let fixture: ComponentFixture<ShashiYoutubeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShashiYoutubeVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShashiYoutubeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
