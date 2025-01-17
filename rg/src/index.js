import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import InstructorContact from './instructorContact'; // Updated import
import GradeReport from './gradeReport';
import MissingGradeForm from './missingGradeForm';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import HelpAndSupport from './HelpAndSupport';

function MyRouter() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/instructorContact' element={<InstructorContact />} />
          <Route path='/faq' element={<HelpAndSupport />} />
          <Route path='/gradeReport' element={<GradeReport />} />
          <Route path='/missingGradeForm' element={<MissingGradeForm />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyRouter />);

reportWebVitals();
