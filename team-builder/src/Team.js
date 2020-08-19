import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
`

export default function Team(props){
    return(
    <Wrapper key={props.id}>
        <div className="wrapper">
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
            <p>Role: {props.role} </p>
        </div>
    </Wrapper>
    )
}
    