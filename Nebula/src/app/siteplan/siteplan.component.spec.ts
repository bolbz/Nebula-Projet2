import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteplanComponent } from './siteplan.component';

describe('SiteplanComponent', () => {
  let component: SiteplanComponent;
  let fixture: ComponentFixture<SiteplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
