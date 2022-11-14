import "./error.css"
import { REPEAT_REQUEST } from '../../redux/constants';
import { useDispatch } from 'react-redux'

const Error = ({ message }) => {
    const dispatch = useDispatch()

    const repeatReqHandler = () => {
        dispatch({ type: REPEAT_REQUEST })
    }

    return (
        <div className="error">
            <p>{message}</p>
            <button type="button" onClick={repeatReqHandler}>Повторить запрос</button>
        </div >
    )
}

export default Error