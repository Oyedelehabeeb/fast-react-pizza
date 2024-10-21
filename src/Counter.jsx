import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const fetcher =  useFetcher()

  useEffect(function(){
    if(!fetcher.data && fetcher.state === "idle" || fetcher.state === "error"){
      fetcher.load()
  }, [fetcher])

  function handleIncreement() {
    setCount(count + 1);
  }

  function handleDecreement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handleDecreement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncreement}>-</button>
      <input></input>
    </div>
  );
}

export default Counter;

export function loader({params}){

}
