import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { DisplayCount } from '../common/DisplayCounter';
import { addButtonClicked } from '../redux/actions';
const RedHead = styled.h1`
color:#ff0000;
`;
export const About = () => {
    const dispatch = useDispatch();
    const [increamentBy , setIcreamentBy] = useState(0);
    return (
        <>
            <RedHead>About Page</RedHead>
            <DisplayCount/>
            <input type="number" value={increamentBy} onChange={(e)=> setIcreamentBy(Number(e.target.value))}/>
            <button onClick={() => { dispatch(addButtonClicked(increamentBy)); }}>Add Click</button>
        </>
    );
};