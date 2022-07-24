import { Button,makeStyles, TableBody, TableCell, TableHead ,TableRow,Table} from "@material-ui/core";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import React from 'react';
import { getAllCategory } from "../../service/api";
 
const useStyles=makeStyles({
   create:{
     margin:20,
     background:'#6495ED'
    
   },
   table:{
       border:'1px solid rgba(224,224,224,1)'
   },
   link:{
       textDecoration:'none',
       color:'inherit'
   }
 })
const Categories=()=>{
    const[categoriess,setCategoriess]=useState([]);
    const classes=useStyles();
      
    useEffect(() => {
        const fetchData = async () => { 
            let data = await getAllCategory(); 
            
            
             let result = data.map(({ categories }) => categories)
             console.log(result);
             let unique = [...new Set(result)];

            
            setCategoriess(unique);
           
        }
        fetchData();
    }, []);
      
    

    return(
        <>
       <Link to='/create' className={classes.link}> <Button variant="contained" className={classes.create}>Create blog</Button></Link>

        <Table className={classes.table}>
         <TableHead>
             <TableRow>
                <Link to={'/home'} className={classes.link}> <TableCell>All Companies</TableCell></Link>
             </TableRow>
         </TableHead>
         <TableBody>
            {
                categoriess.map(category=>(
                    <TableRow>
                        <TableCell><Link  to={`/home/?category=${category}`} className={classes.link}>{category}</Link></TableCell>
                    </TableRow>
                ))
            }
         </TableBody>
        </Table>
        </>
    )
}
export default Categories; 
