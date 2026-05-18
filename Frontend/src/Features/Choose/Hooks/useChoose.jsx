
import { setMood, setGenre, setFormat, setUserPrompt } from "../Redux/choose.slice";
import { useDispatch } from 'react-redux'

export const useChoose = () => {
    const dispatch = useDispatch()
    const choose = (Data) => {
        dispatch(setMood(Data.mood))
        dispatch(setGenre(Data.genre))
        dispatch(setFormat(Data.format))
        dispatch(setUserPrompt(Data.userPrompt))
    }
    return { choose }

}

