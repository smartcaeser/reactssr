import React from 'react';
import styled from 'styled-components'
import { CounterMobxButton } from '../common/CounterMobxButton';
import { Counter } from '../mobx/Counter';
const BlueHead = styled.h1`
color:#ff0000;
`;

const counter = new Counter();
export const Contact = () => {


    return (
        <>
            <BlueHead>Contact Page</BlueHead>
            <CounterMobxButton counter={counter} />
        </>
    );
};