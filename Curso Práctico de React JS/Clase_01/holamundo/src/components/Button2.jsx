import React, { useState } from 'react';

function Button2() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Has hecho click {count} veces</h1>
            <button onClick={() => setCount(count + 1)}>
                Aumentar
      </button>
            <button onClick={() => setCount(count - 1)}>
                Disminutir
      </button>
        </div>
    );
}

export default Button2;