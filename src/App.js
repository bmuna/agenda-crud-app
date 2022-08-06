import  Form  from './components/Form'
import React, { useState } from 'react' 
import {  Container, Grid } from '@mui/material';
import './App.css';
import Table from './components/Table';
import { styled} from '@mui/system';



const StyledTextFieldCon= styled(Container, {})({
 display: 'flex',
 alignItems: 'center',
 height: 500,
});

function App() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = React.useState('');
  const [isEdit, setIsEdit] = useState(false);


 return (
  <StyledTextFieldCon>
    <Grid container spacing={4} >
      <Grid item lg={4} md={4}>
        <Form 
        title={title} 
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        id={id}
        status ={status}
        setStatus={setStatus}
       />
      </Grid>

      <Grid item lg={8} md={8}>
          <Table 
          setTitle={setTitle}
          setDesc={setDesc}
          setIsEdit={setIsEdit}
          setId={setId}
          setStatus={setStatus}/>
      </Grid>
    </Grid>  
  </StyledTextFieldCon> 
  );
}

export default App;

