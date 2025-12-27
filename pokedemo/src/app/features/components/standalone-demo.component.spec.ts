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

  it(`should have as title 'Composant Standalone Demo'`, () => {
    expect(component.title).toEqual('Composant Standalone Demo');
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Composant Standalone Demo');
  });

  it('should render the description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Exemple de composant standalone');
  });

  it('should have initial counter at 0', () => {
    expect(component.counter).toBe(0);
  });

  it('should increment counter when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.counter).toBe(1);
    button.click();
    expect(component.counter).toBe(2);
  });

  it('should display counter value in button text', () => {
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('(0)');

    component.incrementCounter();
    fixture.detectChanges();
    expect(button.textContent).toContain('(1)');
  });
});
