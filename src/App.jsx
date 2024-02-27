import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import GetRandomDog from './components/GetRandomDog';
import GrabDogDB from './components/GrabDogDB';
import GrabSpecific from './components/GrabSpecific';
import GetBreeds from './components/GetBreeds';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';



function App() {
  const [example, setExample] = useState(['https://images.dog.ceo/breeds/clumber/n02101556_7986.jpg','https://images.dog.ceo/breeds/maltese/n02085936_296.jpg','https://images.dog.ceo/breeds/collie-border/n02106166_4450.jpg'])
  const [input, setInput] = useState('')
  const [single, setSigle] = useState([])
  const [server, setServer] = useState([])
  const [local, setLocal] = useState([])
  const [localBreeds, setLocalBreeds] = useState([])

  const navigate = useNavigate();

  // https://react-fullstack.onrender.com/

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
    // console.log(example)

    useEffect(() => {
      apiCall();
    },[]);


  const apiCallSingle = async () => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${input}/images/random`)
      setSigle(response.data)
      // console.log(response.data)
    } catch(error) {
      console.error(error)
    }
    }

    // from local database
    // https://react-fullstack.onrender.com/
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

    // from local database
    // https://react-fullstack.onrender.com/
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

    // req to external database
    // https://react-fullstack.onrender.com/
  //  const serverData = async () => {
  //     try {
  //       const reponse = await axios.get('http://localhost:3000/api/data') // /api/data
  //       setServer(reponse.data)
  //     } catch(error) {
  //       console.error(error)
  //     }
  //   }
  //   useEffect(() => {
  //     serverData();
  //   },[]);  


  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.elements.breed.value)
    apiCallSingle();
  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/breeds')}}>Breeds</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Routes>
          <Route path='/' element = {
            <>
            <div className='btn-container'>
              <button className='btn' onClick={apiCall}>Grab random dog</button>
                <form className='form' onSubmit={handleInput}>
                  <input placeholder='Type breed only' type='text' name='breed'></input>
                  <button type='submit'>Submit</button>
              </form>
            </div>
            <GetRandomDog example={example}/>
            <GrabDogDB local={local}/>
            <GrabSpecific single={single}/>
            </>
          } />
          <Route path='/breeds' element={<GetBreeds localBreeds={localBreeds}></GetBreeds>}/>
        </Routes>
    </>
  )
}

export default App
