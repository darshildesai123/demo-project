import React, { useCallback, useMemo, useState } from 'react'

function UseCallback() {
    const [number, setNumber] = useState(1);

    const memo = useMemo(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const callback = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);
  return (
    <>
    <div>UseCallback</div>
    <input type='number' onChange={(e) => setNumber(Number(e.target.value))} />
    <h1>Use Callback</h1>
    {
        callback().map((value) =>(
            <h1>{value}</h1>
        ))
    }

    <h1>Use Memo</h1>
    {
        memo.map((value) =>(
            <h1>{value}</h1>
        ))
    }
    </> 
  )
}

export default UseCallback