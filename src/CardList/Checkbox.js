import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: ${(props) => (props.checked ? 'green' : 'lightgreen')};
    border-radius: 3px;
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 2px gray;
    }

    ${Icon} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`;

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="21 4 4 21" />
                <polyline points="4 4 21 21" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
);

export default Checkbox;
