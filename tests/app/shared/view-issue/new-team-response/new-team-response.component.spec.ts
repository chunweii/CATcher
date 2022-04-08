import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ErrorHandlingService } from '../../../../../src/app/core/services/error-handling.service';
import { IssueService } from '../../../../../src/app/core/services/issue.service';
import { PhaseService } from '../../../../../src/app/core/services/phase.service';
import { CommentEditorModule } from '../../../../../src/app/shared/comment-editor/comment-editor.module';
import { IssueComponentsModule } from '../../../../../src/app/shared/issue/issue-components.module';
import { LabelDropdownModule } from '../../../../../src/app/shared/label-dropdown/label-dropdown.module';
import { MaterialModule } from '../../../../../src/app/shared/material.module';
import { NewTeamResponseComponent } from '../../../../../src/app/shared/view-issue/new-team-response/new-team-response.component';

describe('NewTeamResponseComponent', () => {
  let component: NewTeamResponseComponent;
  let fixture: ComponentFixture<NewTeamResponseComponent>;
  const issueServiceSpy = jasmine.createSpyObj(
    'IssueService',
    ['createTeamResponse', 'updateIssueWithComment', 'getLatestIssue'],
    ['issues', 'issues$']
  );
  const errorHandlingServiceSpy = jasmine.createSpyObj('ErrorHandlingService', ['handleError']);
  const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
  const phaseServiceSpy = jasmine.createSpyObj('PhaseService', [], ['currentPhase']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewTeamResponseComponent],
      imports: [
        CommentEditorModule,
        ReactiveFormsModule,
        FormsModule,
        IssueComponentsModule,
        LabelDropdownModule,
        MaterialModule,
        MarkdownModule.forChild(),
        NgxMatSelectSearchModule
      ],
      providers: [
        { provide: IssueService, useValue: issueServiceSpy },
        { provide: ErrorHandlingService, useValue: errorHandlingServiceSpy },
        { provide: MatDialog, useValue: dialogSpy },
        { provide: PhaseService, useValue: phaseServiceSpy }
      ]
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
