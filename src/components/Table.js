import { Paper, Table,TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Button} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {deleteList } from '../stores/action'
import { styled} from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


function TableList(props){
  const dispatch = useDispatch();
  const {setTitle, setDesc, setIsEdit, setId, setStatus} = props;
  const agendaList = useSelector((state) => state.agendaLists);

  const handleEdit = (e) => {
    setTitle(e.title);
    setDesc(e.desc);
    setId(e.id);
    setStatus(e.status)
    setIsEdit(true);
    console.log(e);
  }

  
  const handleDelete = (e) => {
    console.log(e.id);
    dispatch(deleteList(e.id));
  }


  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left" style={{ fontWeight: 600 , fontSize: 18}}>#</TableCell>
          <TableCell align="left" style={{ fontWeight: 600 , fontSize: 18}}>Title</TableCell>
          <TableCell align="left" style={{ fontWeight: 600 ,  fontSize: 18}}>Description</TableCell>
          <TableCell align="left" style={{ fontWeight: 600 ,  fontSize: 18}}>Status</TableCell>
          <TableCell align="left"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {        
           agendaList.length > 0 ?
           agendaList.map((val, index) => (
            <TableRow 
            key={val.id}
            >
              <TableCell align="left">{index + 1} </TableCell>
              <TableCell align="left">{val.title}</TableCell>
              <TableCell align="left">{val.desc}</TableCell>
              <TableCell align="left">{val.status}</TableCell>

              <TableCell align="left">
              <Stack direction="row" spacing={2}>
                <Button variant="contained" startIcon={<EditIcon />} onClick={()=> handleEdit(val)}>
                  Edit
                </Button>
                <Button color="secondary" variant="contained" startIcon={<DeleteIcon />} onClick={()=> handleDelete(val)}>
                  Delete
                </Button>
              </Stack>
              </TableCell>
            </TableRow>
          )):  
          <TableRow>
            <TableCell align="center" colSpan={4}>
              No Data
            </TableCell>
          </TableRow> 
        }
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TableList;