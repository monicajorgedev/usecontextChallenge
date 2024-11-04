import RoutesApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import Button from './components/Button';
import './App.css'; // Archivo de estilos CSS

const App = () => {
  return (
  <>
    <ThemeProvider>
      <RoutesApp />
      <Button />
    </ThemeProvider>
  </>
  );
};

export default App;
