import { Button, CircularProgress, Snackbar, makeStyles } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { useNotifications } from "@usedapp/core"
import { useState, useEffect } from "react"
import { SubmitVote } from "../hooks/Vote"
import { Update } from "../hooks/Update"
import { useEthers } from "@usedapp/core"
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@material-ui/core"
import bj from "./img/bj.png"
import cng from "./img/cng.png"
import ncp from "./img/ncp.png"
import rjd from "./img/rjd.png"
import bsp from "./img/bsp.png"
import nota from "./img/nota.png"

const useStyles = makeStyles((theme) => ({
    table: {
        "&:last-child th, &:last-child td": {
            borderBottom: 0,
        }
    },
    table_container: {
        padding: theme.spacing(1),
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

    }

}))



export const Castvote = () => {

    const classes = useStyles()
    const { account, activateBrowserWallet, deactivate } = useEthers()
    const isConnected = account !== undefined
    const { notifications } = useNotifications()
    var cant_be_async: number[] = new Array(6).fill(0)

    var [myArray, updateMyArray] = useState(cant_be_async)



    const { Vote, send_vote_state } = SubmitVote()

    const handlevotesubmit_1 = () => {
        Vote(1)
    }
    const handlevotesubmit_2 = () => {
        Vote(2)
    }
    const handlevotesubmit_3 = () => {
        Vote(3)
    }
    const handlevotesubmit_4 = () => {
        Vote(4)
    }
    const handlevotesubmit_5 = () => {
        Vote(5)
    }
    const handlevotesubmit_6 = () => {
        Vote(6)
    }
    const handleCloseSnack = () => {
        setshowVotingSuccess(false)

    }
    const handleCloseSnack2 = () => {

        setshowVotingFailer(false)

    }
    const isMining = send_vote_state.status === "Mining"
    const [showVotingSuccess, setshowVotingSuccess] = useState(false)
    const [showVotingFailer, setshowVotingFailer] = useState(false)
    useEffect(() => {
        const getVotes = async () => {
            updateMyArray(await Update())
        };

        getVotes();
        if (notifications.filter(
            (notification) =>
                notification.type === "transactionSucceed" &&
                notification.transactionName === "approved_vote").length > 0) {
            setshowVotingSuccess(true)
            getVotes();
        }
        if (notifications.filter(
            (notification) =>
                notification.type === "transactionFailed" &&
                notification.transactionName === "approved_vote").length > 0) {
            setshowVotingFailer(true)
        }

    }, [notifications, showVotingSuccess, showVotingFailer])

    return (
        <>
            <Container maxWidth="md">
                <TableContainer className={classes.table_container}>
                    <Table sx={{ maxWidth: 700 }} color="primary" className={classes.table} >
                        <TableHead>
                            <TableRow>

                                <TableCell align="left" >Logos</TableCell>
                                <TableCell align="left">Candidate Name</TableCell>
                                <TableCell align="left">Party</TableCell>
                                <TableCell align="center">Click to Vote</TableCell>
                                <TableCell align="center">Votes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableRow>
                            <TableCell align="left" style={{
                                backgroundImage: `url(${bj})`, backgroundRepeat: "no-repeat"
                            }}></TableCell>
                            <TableCell align="left">{"Devadas Aggarwal"}</TableCell>
                            <TableCell align="left">{"Bharatiya Janata Party"}</TableCell>
                            <TableCell align="center"><Button
                                onClick={handlevotesubmit_1}
                                color="primary"
                                variant="outlined"
                                size="small"
                                disabled={isMining}>
                                {isMining ? <CircularProgress size={23} /> : "Vote"}
                            </Button></TableCell>
                            <TableCell align="center">{myArray[0]}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" style={{
                                backgroundImage: `url(${cng})`, backgroundRepeat: "no-repeat"
                            }}></TableCell>
                            <TableCell align="left">{"Pallav Pandit"}</TableCell>
                            <TableCell align="left">{"Indian National Congress"}</TableCell>
                            <TableCell align="center"><Button
                                onClick={handlevotesubmit_2}
                                color="primary"
                                variant="outlined"
                                size="small"
                                disabled={isMining}>
                                {isMining ? <CircularProgress size={23} /> : "Vote"}
                            </Button></TableCell>
                            <TableCell align="center">{myArray[1]}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" style={{
                                backgroundImage: `url(${ncp})`, backgroundRepeat: "no-repeat"
                            }}></TableCell>
                            <TableCell align="left">{"Harish Khurana"}</TableCell>
                            <TableCell align="left">{"Nationalist Congress Party"}</TableCell>
                            <TableCell align="center"><Button
                                onClick={handlevotesubmit_3}
                                color="primary"
                                variant="outlined"
                                size="small"
                                disabled={isMining}>
                                {isMining ? <CircularProgress size={23} /> : "Vote"}
                            </Button></TableCell>
                            <TableCell align="center">{myArray[2]}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" style={{
                                backgroundImage: `url(${rjd})`, backgroundRepeat: "no-repeat"
                            }}></TableCell>
                            <TableCell align="left">{"Sarita Dhaliwal"}</TableCell>
                            <TableCell align="left">{"Rashtriya Janata Dal"}</TableCell>
                            <TableCell align="center"><Button
                                onClick={handlevotesubmit_4}
                                color="primary"
                                variant="outlined"
                                size="small"
                                disabled={isMining}>
                                {isMining ? <CircularProgress size={23} /> : "Vote"}
                            </Button></TableCell>
                            <TableCell align="center">{myArray[3]}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" style={{
                                backgroundImage: `url(${bsp})`, backgroundRepeat: "no-repeat"
                            }}></TableCell>
                            <TableCell align="left">{"Jai Goyal"}</TableCell>
                            <TableCell align="left">{"Bahujan Samaj Party"}</TableCell>
                            <TableCell align="center"><Button
                                onClick={handlevotesubmit_5}
                                color="primary"
                                variant="outlined"
                                size="small"
                                disabled={isMining}>
                                {isMining ? <CircularProgress size={23} /> : "Vote"}
                            </Button></TableCell>
                            <TableCell align="center">{myArray[4]}</TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell align="center" style={{
                                backgroundImage: `url(${nota})`, backgroundRepeat: "no-repeat"
                            }}></TableCell>
                            <TableCell align="left">{"NOTA"}</TableCell>
                            <TableCell align="left" >{"None Of The Above"}</TableCell>
                            <TableCell align="center"><Button
                                onClick={handlevotesubmit_6}
                                color="primary"
                                variant="outlined"
                                size="small"
                                disabled={isMining}>
                                {isMining ? <CircularProgress size={23} /> : "Vote"}
                            </Button></TableCell>
                            <TableCell align="center">{myArray[5]}</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
                <div className={classes.button}>
                    {isConnected ? (
                        <Button color="primary" variant="outlined" onClick={() => deactivate()}>
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
                </div>
            </Container>

            <Snackbar
                open={showVotingSuccess}
                onClose={handleCloseSnack}
                autoHideDuration={5000}>
                <Alert onClose={handleCloseSnack} severity="success">
                    You have voted successfully!
                </Alert>

            </Snackbar>

            <Snackbar
                open={showVotingFailer}
                onClose={handleCloseSnack2}
                autoHideDuration={5000}>
                <Alert onClose={handleCloseSnack2} severity="error">
                    You have already voted!
                </Alert>
            </Snackbar>

        </>
    )
}