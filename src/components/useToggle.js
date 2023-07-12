import {useReducer, useRef} from "react";


const reducer = (state, action) => {

    switch (action.type) {

        case "TOGGLE":
            return action.payload

        default:
            return state
    }

}

export function useToggle(arrayValues) {
    const index = useRef(0)

    const [value, dispatch] = useReducer(reducer, arrayValues ? arrayValues[index.current] : false)

    const toggle = (params) => {

        if (typeof value === "boolean") {
            dispatch({type: "TOGGLE", payload: !value})
            return;
        }
        if (params) {
            if(value === params) {
                alert(`значение уже выбрано`)
                return;
            }

            const filteredArray = arrayValues.filter(el => el === params)
            if (filteredArray.length > 0) {
                dispatch({type: "TOGGLE", payload: filteredArray[0]})
                index.current += 1
                return
            } else {
                alert(`значения ${params} нет в списке`)
                return;
            }
            return;
        }
        if (index.current < arrayValues.length - 1) {
            index.current += 1
        } else {
            index.current = 0
        }
        dispatch({type: "TOGGLE", payload: arrayValues[index.current]})


    }


    return [value, toggle]
}