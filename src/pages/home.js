import React from 'react';
import { CounterButton } from '../common/CounterButton';
import { CounterProvider } from '../CounterProvider';

export const Home = () => {
    return (
        <CounterProvider>
            <h1>Home Page</h1>
            <CounterButton/>
        </CounterProvider>
    );
};