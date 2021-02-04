import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextInputField from './TextInputField';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TextInputField />);
    });

    it('should render <TextInputField>', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });
});
