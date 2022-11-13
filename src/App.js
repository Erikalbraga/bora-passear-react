import './App.css';
import { TextField, Button } from '@mui/material'
import { Box } from '@mui/system';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const salvarMotorista = () => {
    axios.post('https://localhost:7212/api/Motoristas', {
      nome: nome, 
      cpf: cpf,
      dataNascimento: new Date(),
    })
  }


  return (
    <div className="">
      <header className="App-header">

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column'
          }}
          noValidate
          autoComplete="off"
          alignContent='row'
        >
          <TextField label="Nome" onChange={(event) => {
            setNome(event.target.value);
          }} variant="outlined" />
          <TextField label="CPF" onChange={(event) => {
            setCpf(event.target.value);
          }} variant="outlined" />

        </Box>

        <Button onClick={salvarMotorista} variant="contained">Salvar</Button> 

      </header>
    </div>
  );
}

export default App;
