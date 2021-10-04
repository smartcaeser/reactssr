import { action, makeObservable, observable } from "mobx";

export class Counter {
    numberOfClicks = 0;

    constructor(){
        makeObservable(this,{
            numberOfClicks : observable,
            increament : action
        });
    }

    increament(amount){
        this.numberOfClicks += amount;
    }
}