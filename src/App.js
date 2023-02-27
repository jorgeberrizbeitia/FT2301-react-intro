import logo from './logo.svg';
import './App.css';


import Title from "./components/Title"
import Menu from './components/Menu';
import Message from './components/Message';
import CardDetails from './components/CardDetails';
import Container from './components/Container';

import ReactPlayer from 'react-player'

function App() {

  const user1 = {
    name: "gandalf",
    profession: "hechicero gris"
  }

  const user2 = {
    name: "saruman",
    profession: "hechicero blanco"
  }

  return (
    <div className="App">
        
      {/* <Title /> */}

      {/* <Menu /> */}

      <Message color={"green"} num={1}>
        <span>Practicar Katas</span>
      </Message>
      <Message color={"red"} num={2}>
        <span>Hacer el Lab</span>
      </Message>


      <Container>
        <CardDetails user={user1}/>
      </Container>

      <Container>
        <CardDetails user={user2}/>
      </Container>

      <Container>
        <h2>Patata</h2>
      </Container>

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' controls={true}/>

    </div>
  );
}

export default App;
