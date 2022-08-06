import React, { useState } from 'react' 
import {Typography, Box, TextField, Button, Container} from "@mui/material";
import { addAgendaList, editAgendaList } from '../stores/action'
import { useDispatch } from "react-redux";
import { styled} from '@mui/system';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';



const StyledTextField = styled(Box, {})({
    marginTop: 20,
    marginBottom: 20,
});


function Form(props) {
  const {title, setTitle, desc, setDesc, isEdit, setIsEdit, id, status, setStatus} = props;
  const [titleError, setTitleError] = useState(false)
  const [descError, setDescError] = useState(false)
  const [statusError, setStatusError] = useState(false)
  const [titleErrMessage, setTitleErrMessage] = React.useState("");
  const [descErrMessage, setDescErrMessage] = React.useState("");


  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDescError(false)
    setStatusError(false)

    if (title == '') {
      setTitleError(true);
      titleError ?  setTitleErrMessage(''): setTitleErrMessage('Title is required');
    }
    if (desc == '') {
      setDescError(true);
      descError ? setDescErrMessage(''): setDescErrMessage('Description is required')

    }
    if (status == '') {
      setStatusError(true)
    }

    if (title && desc && status) {
      const newAgenda = {
        id: Date.now(),
        title: title,
        desc:desc,
        status: status,
      };
    
      dispatch(addAgendaList(newAgenda));
      setTitle("");
      setDesc("");
      setStatus("");
      setTitleErrMessage('');
      setDescErrMessage('')
    } 
  }

  const handleEdit= (e) => {
    e.preventDefault();

    if (title == '') {
      setTitleError(true);
      titleError ?  setTitleErrMessage(''): setTitleErrMessage('Name is required');
    }
    if (desc == '') {
      setDescError(true);
      descError ? setDescErrMessage(''): setDescErrMessage('Description is required')
    }
    if (status == '') {
      setStatusError(true);
    }


    if (title && desc && status) {
    const updateAgendaList = {
      id: id,
      title: title,
      desc:desc,
      status: status
    };
    dispatch(editAgendaList(updateAgendaList));
    setTitle("");
    setDesc("");
    setStatus("");
    setTitleError(false);
    setDescError(false);
    setStatusError(false);
    setIsEdit(false);
    setTitleErrMessage('');
    setDescErrMessage('');
    }
  }


  const handleDropDown = (event) => {
    console.log(event.target.value)
    setStatus(event.target.value);
  };



  return (
    <Container size="sm">
      <Typography
        variant="h6" 
        component="h2"
        gutterBottom
      >
        Create New List
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSave}>
        <StyledTextField>
          <TextField 
            onChange={(e) => setTitle(e.target.value)}
            label="Title" 
            variant="outlined" 
            color="secondary" 
            fullWidth
            required
            value={title}
            helperText={titleErrMessage}
            error={titleError}
          />
        </StyledTextField>

        <StyledTextField>
          <TextField
            onChange={(e) => setDesc(e.target.value)}
            label="Description"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            multiline
            rows={2}
            value={desc}
            helperText={descErrMessage}
            error={descError}
          />
        </StyledTextField>
        <StyledTextField>
        <FormControl fullWidth >
          {statusError ?  <InputLabel error>Status *</InputLabel> :  <InputLabel id="demo-simple-select-required-label">Status *</InputLabel>}
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={status}
            required
            label="Status *"
            onChange={handleDropDown}
            error={statusError}
            renderValue={(value) => `${value}`}
          >
            <MenuItem value="">
             <em>None</em>
            </MenuItem>
            <MenuItem value={'Active'}>Active</MenuItem>
            <MenuItem value={'Inactive'}>Inactive</MenuItem>
          </Select>
        <FormHelperText error>{statusError ? 'status is required' :'' }</FormHelperText>
      </FormControl>
    </StyledTextField>

    {isEdit ?
        <Button
        fullWidth
          type="submit" 
          color="secondary" 
          variant="contained"
          onClick={(e)=> handleEdit(e)}>
          Edit
        </Button>
        :<Button
        fullWidth
          type="submit" 
          color="secondary" 
          variant="contained"
          onClick={(e)=> handleSave(e)}>
          Save
        </Button>
      }

      </form> 
    </Container>
  )
}

export default Form;