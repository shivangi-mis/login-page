import React, { useState } from "react";

function MainContent() {
    const [count, setCount] = useState(0);

    return (
        <main className="main-content">
            <h2>Welcome to My Simple React Website!</h2>
            <p>This is a basic React.js app with normal CSS styling.</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me ({count})
            </button>
        </main>
    );
}

export default MainContent;
