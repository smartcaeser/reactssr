import React from 'react';
import { useRecoilState } from 'recoil';
import { DisplayCount } from '../common/DisplayCount';
import { counterState } from '../recoil/counterState';
import { increamentByState } from '../recoil/increamentByState';

export const Articles = () => {

    const [clicksData , setClicksData] = useRecoilState(counterState);
    const [increamentBy , setIncreamentBy] = useRecoilState(increamentByState);
    return (
        <>
            <h1>Articles Page (Recoil)</h1>
            <DisplayCount/>
            <input type="number" value={increamentBy} onChange={(e)=> setIncreamentBy(Number(e.target.value))}/>
            <button onClick={() => { setClicksData([...clicksData , { timestamp : Date.now() , amount : increamentBy}]); }}>Add Click</button>
        </>
    );
};