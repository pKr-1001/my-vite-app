import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import GetRandomDog from './components/GetRandomDog';
import GrabDogDB from './components/GrabDogDB';
import GrabSpecific from './components/GrabSpecific';
import GetBreeds from './components/GetBreeds';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddDog from './components/AddDog';
import GrabSelected from './components/GrabSelected';

function App() {
  const [example, setExample] = useState(['https://images.dog.ceo/breeds/clumber/n02101556_7986.jpg','https://images.dog.ceo/breeds/maltese/n02085936_296.jpg','https://images.dog.ceo/breeds/collie-border/n02106166_4450.jpg'])
  const [input, setInput] = useState('')
  const [single, setSigle] = useState([])
  const [local, setLocal] = useState([])
  const [localBreeds, setLocalBreeds] = useState([])
  const [add, setAdd] = useState({})
  const [selected, setSelected] = useState(null)

  const navigate = useNavigate();

  // api call to get random dog
  const apiCall = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random')
      // console.log(response.data.message)
      let url = [response.data.message]
      setExample([...example, url])
    } catch(error) {
      console.error(error)
    }
  }

    useEffect(() => {
      apiCall();
    },[]);

    // api call to get specific breed
  const apiCallSingle = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${input}/images/random`)
      setSigle(response.data)
      // console.log(response.data)
    } catch(error) {
      console.error(error)
    }
  }

    // from database to get all dogs
    const localCall = async () => {
      try {
        const response = await axios.get('https://react-fullstack.onrender.com/dogs')
        setLocal(response.data)
      } catch(error) {
        console.error(error)
      }
    }
    useEffect(() => {
      localCall();
    },[]);

    // from database to get all breeds
    const localBreed = async () => {
      try {
        const response = await axios.get(`https://react-fullstack.onrender.com/type`)
        // console.log(response.data)
        setLocalBreeds(response.data)
      } catch(error) {
        console.error(error)
      }
    }
    useEffect(() => {
      localBreed();
    },[]);

  const handleInput = (e) => {
    e.preventDefault();
    apiCallSingle();
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = (dog) => {
    let test = dog
    setSelected(test)
  }

  const resetSelected = () => {
    setSelected(null)
  }


  const showSelected = selected ? <GrabSelected selected={selected} resetSelected={resetSelected}/> : null
  
  const handleAddChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAdd({
      ...add,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post('https://react-fullstack.onrender.com/dogs/new', add)
      console.log(response)

    } catch(error) {
      console.error(error)
  }
}

  // console.log(add)
  


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/breeds')}}>Breeds</Nav.Link>
            <Nav.Link onClick={() => {navigate('/add')}}>Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div >
        <Routes>
          <Route path='/' element = {
            <>
            <div className='btn-container'>
              <button className='btn' onClick={apiCall}>Grab random dog</button>
                <form className='form' onSubmit={handleInput}>
                <input placeholder='Type breed only' type='text' name='breed' onChange={handleChange} value={input}></input>
                <button type='submit'>Submit</button> 
              </form>
            </div>
            <GetRandomDog example={example}/>
            <GrabDogDB local={local} handleClick={handleClick}/>
            <GrabSpecific single={single}/>
              {showSelected}
            </>
          } />
          <Route path='/breeds' element={<GetBreeds localBreeds={localBreeds}></GetBreeds>}/>
          <Route path='/add' element={<AddDog add={add} handleSubmit={handleSubmit} handleAddChange={handleAddChange}></AddDog>}/>
        </Routes>
          </div>
    </>
  )
}

export default App
