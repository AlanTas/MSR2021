import AddContent from '../COMPONENT';
import Lock from '../COMPONENT'

it('should render AddContent component', () => {
  const wrapper = shallow(<MyComponent {...props} />);
  wrapper.setState({ addingNewContent: true });
  const component = wrapper.find(AddContent);
  expect(component.length).toBe(1);
});

it('should render Lock Component', () => {
  const wrapper = shallow(<MyComponent {...props} />);
  wrapper.setState({ addingNewContent: true });
  const component = wrapper.find(Lock);
  expect(component.length).toBe(1);
});
