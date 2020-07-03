import { AppComponent } from './app.component';

describe('App Component', () => {
  const component: AppComponent = new AppComponent();
  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should return title movies', () => {
    const title = 'movies';
    expect(component.title).toEqual(title);
  });
});
