import {useCallback, useState} from "react";

const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = useCallback(() => setIsOpen(prevState => !prevState), [])

    return [isOpen, handleOpen]
}

export default useToggle