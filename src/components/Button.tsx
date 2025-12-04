import { useState } from "react";


export default function Button() {
    const [clicks, setClicks] = useState(0);
    const handleClicks = () => {
        setClicks(clicks + 1)
    }

    return (
        <button onClick={handleClicks}>
            Click {clicks}
        </button>
    )
}