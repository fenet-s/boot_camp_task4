import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { Provider } from 'jotai';


createRoot(document.getElementById('root')).render(
    <Provider>
<BrowserRouter>
<App />

 
</BrowserRouter>
</Provider>
   
 
)
