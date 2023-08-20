import { createContext, useContext, useState } from "react";
const appContext = createContext({
    /* state*/
    memory:null,
    operation:null,
    currentValue:0,
    /* methods */
    addNumber:(value)=>{},
    addOperation:(operation)=>{},
    getResult:()=>{},

});
export default function CalculatorState({children}){
    const[memory, setMemory]= useState(null);
    const[operation, setOperation]= useState(null);
    const[currentValue, setValue]= useState(0);
    const[isReset, setIreset]= useState(true);
    function handleAddNumber(value){

    }
    function handleAddOperation(operation){

    }
    function handleGetResult(){

    }
return<AppContext.Provider 
value={{
    mempry,
    operation,
    currentValue,
    addNumber:handleAddNumber,
    addOperation:handleAddOperation,
    getResult:handlegetResult,
}}
>{children}</AppContext.Provider>;
}
export function useAppContext(){
    return useContext(AppContext);
}