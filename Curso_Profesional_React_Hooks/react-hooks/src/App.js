import React, {
  useContext,
  //useState
} from 'react';
import Header from './components/Header';
import './App.css';
import Characters from './components/Characters';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from './context/ThemeContext';


export default function App() {
  const { theme } = useContext(ThemeContext);
  // const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={theme ? 'App__Light' : 'App__Dark'}>
      <Header />
      {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <Characters />
    </div>
  );
}