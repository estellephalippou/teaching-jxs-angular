import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandaloneDemoComponent } from './standalone-demo.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('StandaloneDemoComponent', () => {
  let component: StandaloneDemoComponent;
  let fixture: ComponentFixture<StandaloneDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // si AppComponent est un composant standalone
      imports: [StandaloneDemoComponent],
      // si AppComponent n'est PAS un composant standalone
      // declarations: [AppComponent],

      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),

        provideRouter([]),

      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-jest-demo'`, () => {
    expect(component.title).toEqual('angular-jest-demo');
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-jest-demo');
  });
});
