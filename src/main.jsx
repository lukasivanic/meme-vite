import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
