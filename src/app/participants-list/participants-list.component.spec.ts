import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatsListComponent } from './participants-list.component';

describe('ParticipatsListComponent', () => {
  let component: ParticipatsListComponent;
  let fixture: ComponentFixture<ParticipatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipatsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
