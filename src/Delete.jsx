import { useSelector, useDispatch, } from "react-redux";

function Delete() {

  const dispach = useDispatch()

  const remove =() =>{
     dispach({
        type: 'delete'
     })
  }

  return(
    <>
    <button onClick={remove}>
        remove
    </button>
    <Delete/>
    </>
  );
}
export default Delete