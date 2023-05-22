import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Playtime Paradise/${title}`
    }, [title])
};

export default useTitle;