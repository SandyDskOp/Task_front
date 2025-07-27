import Toaster from './Components/Toaster';
import AuthLayout from './Layouts/AuthLayout';
import logo from './logo.svg';
import './Scss/main.scss'

function App() {
  return (
    <div className="App">
      <AuthLayout/>
      <Toaster/>
    </div>
  );
}

export default App;
