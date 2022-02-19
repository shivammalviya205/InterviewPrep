import { AppBar, Toolbar, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const useStyles=makeStyles({
    component: {
        background:'#FFFFFF',
        color:'black'
    },
    container:{
        justifyContent:'center',
        '& > *':{
            padding:20
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    },
    hover:{
        cursor:'pointer'
    }
})

function DefaultLayout(props) {
    const classes=useStyles();
    const navigate=useNavigate();
    return (
        <div>
            <div>
        <AppBar className={classes.component}>
             <Toolbar className={classes.container}>
                <Link to='/' className={classes.link}><Typography>HOME</Typography></Link>
               <Link to='/about' className={classes.link}> <Typography>ABOUT</Typography></Link>
                <Link  to='/contactus' className={classes.link}><Typography>CONTACT</Typography></Link>
                <Typography className={classes.hover} onClick={()=>{
          localStorage.removeItem('user');
          navigate('/login');
      }}>LOGOUT</Typography>


            </Toolbar>
        </AppBar>
        </div>
        <div style={{marginTop:64}}>{props.children}</div>
        </div>
    )
}

export default DefaultLayout;
