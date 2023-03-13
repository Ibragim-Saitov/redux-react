import { useSelector, useDispatch, } from "react-redux";
import Delete from './Delete';



function Redux() {

    const dispatch = useDispatch()

    const name = useSelector(state => state)

    const handlerClick = () =>{
      dispatch({
      type: "change",
      });
    };

  return(
    <>
    <Redux/>
   <div>
    Значение сайта: {name}
   </div>
   <button onClick={handlerClick}>
     click
   </button>
   <Delete/>
   </>
  );
}
export default Redux
