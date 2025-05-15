import { useState } from "react";

export default function Button() {
  
        // 2. Оголошуємо стан clicks
      const [clicks, setClicks] = useState(0);
    
      const handleClick = () => {
          // 3. Використовуємо setClicks для зміни стану clicks
        setClicks(clicks + 1);
      };
    
      return <button onClick={handleClick}>Current: {clicks}</button>;
    }
      