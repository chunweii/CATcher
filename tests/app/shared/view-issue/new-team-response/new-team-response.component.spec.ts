import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamResponseComponent } from '../../../../../src/app/shared/view-issue/new-team-response/new-team-response.component';

describe('NewTeamResponseComponent', () => {
  let component: NewTeamResponseComponent;
  let fixture: ComponentFixture<NewTeamResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewTeamResponseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeamResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
