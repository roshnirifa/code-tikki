
import { useEffect, useState } from "react"

const useCodes = () => {
    const [codes, setCodes] = useState([]);
    useEffect(() => {
        fetch('codes.json')
            .then(res => res.json())
            .then(data => setCodes(data))
    }, []);
    return [codes, setCodes];
}
export default useCodes;