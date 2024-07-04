import "./bootstrap";
import '../css/app.css';

import { createRoot } from "react-dom/client";
import { HelloWorld } from './Components/SampleComponent';

export default function App() {
    return (
        <div className="bg-black text-white">
            <HelloWorld />
        </div>
    );
}

createRoot(document.getElementById("root")!).render(<App />);
