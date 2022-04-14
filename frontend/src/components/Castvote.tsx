import { Button, makeStyles } from "@material-ui/core"
import { useEthers } from "@usedapp/core"
import { Voteform } from "./Voteform/Voteform";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react"
import { Update } from "../hooks/Update";
import { Container } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({


    table: {
        "&:last-child th, &:last-child td": {
            borderBottom: 0,
        }
    },
    table_container: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    button: {
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(1),
        justifyContent: "center",
        gap: theme.spacing(2)

    },
    vote_button: {
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",

    }

}))



export const Castvote = () => {
    const classes = useStyles()
    const { account, activateBrowserWallet, deactivate } = useEthers()
    const isConnected = account !== undefined

    var bruh: number[] = new Array(6)
    bruh[0] = 0
    bruh[1] = 0
    bruh[2] = 0
    bruh[3] = 0
    bruh[4] = 0
    bruh[5] = 0

    var [myArray, updateMyArray] = useState(bruh)

    const Handleupdate = async () => {

        updateMyArray(await Update())

    }


    return (

        <Container maxWidth="md">
            <TableContainer className={classes.table_container}>
                <Table sx={{ maxWidth: 700 }} color="primary" className={classes.table} >
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" >#</TableCell>
                            <TableCell align="left">Candidate Name</TableCell>
                            <TableCell align="left">Party</TableCell>
                            <TableCell align="center">Votes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableRow>
                        <TableCell align="right">{1}</TableCell>
                        <TableCell align="left">{"Devadas Aggarwal"}</TableCell>
                        <TableCell align="left">{"Bharatiya Janata Party"}</TableCell>
                        <TableCell align="center">{myArray[0]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{2}</TableCell>
                        <TableCell align="left">{"Pallav Pandit"}</TableCell>
                        <TableCell align="left">{"Indian National Congress"}</TableCell>
                        <TableCell align="center">{myArray[1]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{3}</TableCell>
                        <TableCell align="left">{"Harish Khurana"}</TableCell>
                        <TableCell align="left">{"Nationalist Congress Party"}</TableCell>
                        <TableCell align="center">{myArray[2]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{4}</TableCell>
                        <TableCell align="left">{"Sarita Dhaliwal"}</TableCell>
                        <TableCell align="left">{"Rashtriya Janata Dal"}</TableCell>
                        <TableCell align="center">{myArray[3]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{5}</TableCell>
                        <TableCell align="left">{"Jai Goyal"}</TableCell>
                        <TableCell align="left">{"Bahujan Samaj Party"}</TableCell>
                        <TableCell align="center">{myArray[4]}</TableCell>
                    </TableRow>
                    <TableRow >
                        <TableCell align="right" >{6}</TableCell>
                        <TableCell align="left">{"NOTA"}</TableCell>
                        <TableCell align="left" >{"None Of The Above"}</TableCell>
                        <TableCell align="center">{myArray[5]}</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
            <div className={classes.button}>
                {isConnected ? (
                    <Button variant="contained" onClick={deactivate}>
                        Disconnect
                    </Button>
                ) : (
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={() => activateBrowserWallet()}
                    >
                        Connect to Metamask
                    </Button>
                )}
                <Button
                    color="primary"
                    variant="outlined"

                    onClick={Handleupdate}
                >
                    update votes
                </Button>
            </div>
            <div className={classes.vote_button} >
                <Voteform />
            </div>
        </Container>

    )
}