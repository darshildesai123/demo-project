import React, { useDebugValue, useEffect, useState } from 'react'

function useDebounce(text) {
    const [isLoading, setIsLoading] = useState (false);
    const [deboucedValue,setDeboucedValue]= useState("");

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
            setDeboucedValue(text);
        }, 500);
        setIsLoading(true);
    },[text]);
  return [deboucedValue, isLoading] ;
}

export default useDebounce;
