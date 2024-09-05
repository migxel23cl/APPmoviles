import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassrecoverPage } from './passrecover.page';

describe('PassrecoverPage', () => {
  let component: PassrecoverPage;
  let fixture: ComponentFixture<PassrecoverPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PassrecoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
