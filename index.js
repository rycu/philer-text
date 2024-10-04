import { philers } from "./philers";

const philer = () => philers[Math.floor(Math.random() * philers.length)];

export default philer;
