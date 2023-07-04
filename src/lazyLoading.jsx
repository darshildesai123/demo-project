import { lazy } from "react";

const ReactList = lazy(()=> import('./ReactList'));

function LazyLoading() {
  return (
    <div>
      <ReactList></ReactList>
    </div>
  )
}

export default LazyLoading;
