
import { Delete, Edit } from '@mui/icons-material';
import { FormControl, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import React, { useState } from 'react'

export default function Simple1() {
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
  const[gender,setGender]=useState('');
  const[address,setAddress]=useState('');
  const [entries, setEntries] = useState([]);
  const[editIndex,setEditIndex]=useState('');
  

  const handleSave = () => {
    if (editIndex !== null) {
        const updatedEntries = [...entries];
        updatedEntries[editIndex] = { name, age, gender, address };
       setEntries(updatedEntries);
       setEditIndex(null); 
    } 
    else {
      const newEntry = { name, age, gender, address };
      setEntries([...entries, newEntry]);
    }
    setName('');
    setAge('');
    setGender('');
    setAddress('');
};

const handleCancel = () => {
  setName('');
  setAge('');
  setGender('');
  setAddress('');
};

 const handleEdit =(index)=>{
  const entry = entries[index];
    setName(entry.name);
    setAge(entry.age);
    setGender(entry.gender);
    setAddress(entry.address);
    setEditIndex(index);
 }

 const handleDelete=(index)=> {
  const updatedEntries = entries.filter((_, i) => i !== index);
  setEntries(updatedEntries);
   }
 
 return (
    <>
    <div className='container'>

     <header className="header">
               <h4>This is Header</h4>
            </header>

    <div className='my-table'>
       <h5>Employess</h5>
       <FormControl >
        <label htmlFor='name'>Name: <input
           type='text'
           name='name'
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
         </label>
       </FormControl >
        <br/>  <br/>
       <FormControl >
        <label htmlFor='age'>Age: <input
           type='number'
           name='age'
           value={age}
           onChange={(e) => setAge(e.target.value)}
         />
         </label>
       </FormControl >
       <br/>   <br/>
       <FormControl >
        <label htmlFor='gender'>Gender: <input
           type='text'
           name='gender'
           value={gender}
           onChange={(e) => setGender(e.target.value)}
         />
         </label>
       </FormControl >
       <br/>  <br/>
       <FormControl >
        <label htmlFor='address'>Address:  <input
           type='text'
           name='address'
           value={address}
           onChange={(e) => setAddress(e.target.value)}
         />
         </label>
       </FormControl >
       <br/>  <br/>
       <button style={{marginRight:'30px'}} onClick={handleSave}>Save</button>      
       <button onClick={handleCancel}>Cancel</button>      
  </div>
     <div className='my-table2'>
    
         <TableContainer component={Paper} >
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell >Age</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {entries.map((entry, index) => (
                 <TableRow key={index}>
                    <TableCell>{entry.name}</TableCell>
                    <TableCell>{entry.age}</TableCell>
                    <TableCell>{entry.gender}</TableCell>
                    <TableCell>{entry.address}</TableCell>
                    <IconButton onClick={()=>handleEdit(index)} color='primary'>
                      <Edit style={{marginRight:'2px'}}/>
                    </IconButton>
                    <IconButton onClick={()=>handleDelete(index)} color='secondary'>
                       <Delete/>
                    </IconButton>
                </TableRow>
                ))}
              </TableBody>
             </Table>
           </TableContainer>
           
       </div>
       <footer className="footer">
           <p>This is Footer</p>
        </footer>
  </div>
  
    </>
  )
  
}
