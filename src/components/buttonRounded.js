import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 7px 20px;
    border-radius: 50px;
    border: 2px solid ${props => props.color};
    background-color: transparent;
    font-family: Roboto-${props => props.fontWeight ? props.fontWeight : "Medium"}, sans-serif;
    color: ${props => props.color};
    
    &:focus:active {
        outline: 0;
        transform: scale(0.98);
    }
`;

class MainButton extends React.Component {
    render() {
        return (
            <StyledButton className={this.props.className} onClick={this.props.onClick} color={this.props.color} fontWeight={this.props.fontWeight}>
                {this.props.text}
            </StyledButton>
        );
    }
}
export default MainButton;
