import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtprequestComponent } from './otprequest.component';

describe('OtprequestComponent', () => {
  let component: OtprequestComponent;
  let fixture: ComponentFixture<OtprequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtprequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
