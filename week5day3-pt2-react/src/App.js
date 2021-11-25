import logo from './logo.svg';
import './App.css';
import Textarea, { SymbolsSum, Form, Authorization, Select } from './Components';

function App() {
  return (
    <div className="components-container">
      <Textarea />
      <SymbolsSum />
      <Form />
      <Authorization />
      <Select />
    </div>
  );
}

export default App;
