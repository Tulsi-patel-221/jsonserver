import { provider} from 'react'
//import { createRoot } from 'react-dom/client'//
import App from './App.jsx'
import './index.css'
import userstore from '../Redux/userstore.js'
import store from './react/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
   <App/>
  <Provider/>



); 
  
