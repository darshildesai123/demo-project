import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./Redux/actions/demoAction";


function Recap() {
    const dispatch = useDispatch();
    const demo = useSelector((state) => state.demo);
  return (
    <>
    <h1>Create counter app</h1>
    <h3>{demo.price * demo.quantity}</h3>
    {/* <div className="d-flex justify-content-center"> */}
      <button className='btn btn-primary' onClick={() => dispatch(increment(demo.quantity + 1))}>Increment</button>&nbsp;
      <h3 className="mx-3">{demo.quantity}</h3>
      <button className='btn btn-success' onClick={() => dispatch(decrement(demo.quantity < 2 ? 1 : demo.quantity -1))}>Decrement</button>
    {/* </div> */} 
    </>
  )
}

export default Recap