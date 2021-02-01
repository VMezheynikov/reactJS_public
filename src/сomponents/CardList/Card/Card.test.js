import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card } from './index';
import CardHeader from './CardHeader/index';
import CardBody from './CardBody/index';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
    let wrapper;
    let defaultProps;
    const testSaveFunc = jest.fn();
    const testDeleteFunc = jest.fn();

    beforeEach(() => {
        defaultProps = {
            onSaveCard: testSaveFunc,
            onDeleteCard: testDeleteFunc,
        };
        wrapper = shallow(<Card {...defaultProps} />);
    });

    it('should render <CardBody> & <CardHeader>', () => {
        expect(wrapper.find(CardBody)).toHaveLength(1);
        expect(wrapper.find(CardHeader)).toHaveLength(1);
    });

    it('check functionality for <CardHeader>', () => {
        wrapper.find(CardHeader).simulate('edit');
        expect(wrapper.find(CardBody).props()).toMatchObject({
            editMode: true,
        });

        wrapper.find(CardHeader).simulate('save');
        expect(testSaveFunc).toBeCalledTimes(1);

        wrapper.find(CardHeader).simulate('undo');
        expect(wrapper.find(CardBody).props()).toMatchObject({
            editMode: false,
        });

        wrapper.find(CardHeader).simulate('titleChange', {
            target: { value: 'test' },
        });
        expect(wrapper.find(CardHeader).props()).toMatchObject({
            currentText: 'test',
        });

        wrapper.find(CardHeader).simulate('styleChange', {
            target: { checked: 'true' },
        });
        wrapper.find(CardHeader).simulate('styleChange', {
            target: {},
        });
        expect(testDeleteFunc).toBeCalledTimes(2);
    });

    it('check functionality for <CardHeader>', () => {
        wrapper.find(CardBody).simulate('textChange', {
            target: { value: 'test' },
        });
        expect(wrapper.find(CardBody).props()).toMatchObject({
            currentText: 'test',
        });
    });
});
