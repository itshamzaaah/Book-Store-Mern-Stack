import { BrowserRouter, Routes, Route} from 'react-router-dom'  
import Home from './components/Home'
import Navbar from './components/Navbar'
import Books from './components/Books'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddStudent from './components/AddStudent'
import Logout from './components/Logout'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
import DeleteBook from './components/DeleteBook'

function App() {
  
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/books' element = {<Books />}></Route>
      <Route path='/login' element = {<Login  />}></Route>
      <Route path='/dashboard' element = {<Dashboard />}></Route>
      <Route path='/addstudent' element = {<AddStudent />}></Route>
      <Route path='/addbook' element = {<AddBook/>}></Route>
      <Route path='/book/:id' element = {<EditBook/>}></Route>
      <Route path='/delete/:id' element = {<DeleteBook/>}></Route>
      <Route path='/logout' element = {<Logout />}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
