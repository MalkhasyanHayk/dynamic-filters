import {useCallback, useState} from "react";

const useForms = ({initial, onSubmit, callBackEvent}) => {
    const [values, setValues] = useState(initial ?? {})
    const [errors, setErrors] = useState({})

    const updateValues = useCallback(updated => setValues(updated), [])
    const resetValues = useCallback(() => setValues(initial), [initial])

    const updateErrors = useCallback(updated => setErrors(updated), [])
    const resetErrors = useCallback(() => setErrors({}), [])

    const onChange = useCallback(event => {
        const {name, value} = event.target
        const copied = {...values}
        copied[name] = value
        updateValues(copied)

        if (callBackEvent) {
            callBackEvent(copied)
        }
    }, [callBackEvent, updateValues, values])
    
    const onCheckbox = useCallback(event => {
        const {name, checked} = event.target
        const copied = {...values}
        copied[name] = checked
        updateValues(copied)

        if (callBackEvent) {
            callBackEvent(copied)
        }
    }, [callBackEvent, updateValues, values])

    const onField = useCallback((name, value) => {
        const copied = {...values}
        copied[name] = value
        updateValues(copied)
        if (callBackEvent) {
            callBackEvent(copied)
        }
    }, [callBackEvent, updateValues, values])

    const handleSubmit = useCallback(event => {
        event.preventDefault()
        onSubmit(values)
    }, [onSubmit, values])

    return {
        values,
        onChange,
        onField,
        onCheckbox,
        updateValues,
        resetValues,

        errors,
        updateErrors,
        resetErrors,

        handleSubmit
    }
}

export default useForms