import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CardHeader } from './index';
import TextInputField from '../TextInputField';

configure({ adapter: new Adapter() });

describe('<CardHeader />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardHeader />);
    });

    it('should render <TextInputField> if editMode & not ctxReadOnly', () => {
        wrapper.setProps({ editMode: true });
        expect(wrapper.find(TextInputField)).toHaveLength(1);
    });

    it('should not render <TextInputField> if ctxReadOnly', () => {
        wrapper.setProps({ ctxReadOnly: true });
        expect(wrapper.find(TextInputField)).toHaveLength(0);
    });

    it('should not render <TextInputField> if editMode & ctxReadOnly', () => {
        wrapper.setProps({ editMode: true });
        wrapper.setProps({ ctxReadOnly: true });
        expect(wrapper.find(TextInputField)).toHaveLength(0);
    });
});
