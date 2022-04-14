import { Button, Container, makeStyles } from "@material-ui/core"
import back_image from "./back_image.png"
import { Routes, Route } from "react-router-dom"
import Link from '@mui/material/Link';
import { Castvote } from './Castvote';
const useStyles = makeStyles((theme) => ({

    img: {
        backgroundImage: `url(${back_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 615,
        width: 1600,
        margin: -0,
        overflowY: "hidden",
        display: "flex",
        flexDirection: "row",

    },
    button: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        gap: theme.spacing(2)



    }


}))
const HandleChange = () => {

    <Routes>

        <Route path='/Castvote' element={<Castvote />}></Route>

    </Routes>


}

export const Home = () => {
    const classes = useStyles()
    return (
        <>

            <Container className={classes.img} >
                <Container >
                    <h1 font-family='Helvetica Neue' className={classes.button}>Hello Voter!
                        <Link href='/Castvote'>
                            <Button
                                color="primary"
                                variant="outlined"
                                size="large"

                                onClick={HandleChange}
                            >
                                caste vote
                            </Button>
                        </Link>
                    </h1>
                </Container>

            </Container>


        </>

    )
}