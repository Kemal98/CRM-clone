import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import React,{useState} from 'react';
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import Nav from './components/Nav'
import CategoryContext from './context';

function App() {

  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }


  return (
    <div className="app">
    <CategoryContext.Provider value={value}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/ticket/:id" element={<TicketPage editMode={true}/>} />
        </Routes>
      </BrowserRouter>
      </CategoryContext.Provider>
    </div>
  );
}
// editMode={{true}}''
export default App;
