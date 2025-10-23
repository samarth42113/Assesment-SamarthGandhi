import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCandidateList } from './app-candidate-list';

describe('AppCandidateList', () => {
  let component: AppCandidateList;
  let fixture: ComponentFixture<AppCandidateList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCandidateList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCandidateList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
