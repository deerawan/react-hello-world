import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

describe(HelloWorld, () => {
  const name = 'budi';
  const mockRemoveGreeting = jest.fn();
  const component = shallow(
    <HelloWorld name={name} removeGreeting={mockRemoveGreeting} />
  );

  it('renders and matches snapshot', () => {
    const component = renderer.create(
        <HelloWorld name="budi" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains supplied name', () => {
    expect(component.text()).toContain(name);
  });

  it('modifies the greeting when frenchify button is clicked', () => {
    component.find('button.frenchify').simulate('click');
    expect(component.text()).toContain('Bonjour');
  });

  it('calls the passed removeGreeting function when remove button is clicked', () => {
    component.find('button.remove').simulate('click');
    expect(mockRemoveGreeting).toBeCalled();
  });
});