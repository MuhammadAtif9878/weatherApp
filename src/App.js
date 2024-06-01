import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Index from './routes/Index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Index />
        </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;
