import { Box,makeStyles } from '@material-ui/core';
import Breadcrumbs  from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import   {Routes,Route } from "react-router-dom"
import { Howitworks } from './Howitworks';
import { Home } from './Home';
import { Knowmore } from './Knowmore';
import { Castvote } from './Castvote';

const useStyles = makeStyles((theme) => ({

  bread: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow:"hidden",
      gap: theme.spacing(2)
  },
  

}))

 const  Navigation= () => {
  const classes = useStyles()
   
  return (
     <Box className={classes.bread}>
      <Breadcrumbs aria-label="breadcrumb"> 
        <Link underline="hover" color="primary" href='/' >Home</Link>
        <Link underline="hover" color="primary" href='/Howitworks'>How it Works</Link>
        <Link underline="hover" color="primary" href='/Castvote'>Cast Vote</Link>
        <Link underline="hover" color="primary" href='/Knowmore'>Know more</Link>
        </Breadcrumbs>
        <Routes>
            <Route path='/'element={<Home/>}></Route>
            <Route path='/Howitworks'element={<Howitworks/>}></Route>
            <Route path='/Castvote'element={<Castvote/>}></Route>
            <Route path='/Knowmore'element={<Knowmore/>}></Route>
        </Routes>
      </Box>
    
  );
};
export default  (Navigation)