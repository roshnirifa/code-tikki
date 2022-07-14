import { useEffect, useState } from "react"

const useEvents = () => {
    const [evnets, setEvents] = useState([]);
    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    return [evnets, setEvents];
}
export default useEvents;