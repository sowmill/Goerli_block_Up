import { Button, CircularProgress, Snackbar, makeStyles } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useNotifications } from "@usedapp/core"
import React, { useState, useEffect } from "react"
import { SubmitVote } from "../../hooks"

const useStyles = makeStyles((theme) => ({
    button: {
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(1),
        justifyContent: "center",
        gap: theme.spacing(2)

    }

}))
const inputs = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
];


export const Voteform = () => {

    const classes = useStyles()
    const { notifications } = useNotifications()
    const [input, setinput] = React.useState(1);

    const handleinputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinput(Number(event.target.value));
        console.log(Number(event.target.value))
    };


    const { Vote, send_vote_state } = SubmitVote()

    const handlevotesubmit = () => {

        const ninput = Number(input)
        return (Vote(ninput))
    }
    const handleCloseSnack = () => {
        setshowVotingSuccess(false)
        window.location.reload();

    }
    const handleCloseSnack2 = () => {

        setshowVotingFailer(false)

    }
    const isMining = send_vote_state.status === "Mining"
    const [showVotingSuccess, setshowVotingSuccess] = useState(false)
    const [showVotingFailer, setshowVotingFailer] = useState(false)
    useEffect(() => {
        if (notifications.filter(
            (notification) =>
                notification.type === "transactionSucceed" &&
                notification.transactionName === "approved_vote").length > 0) {
            setshowVotingSuccess(true)
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
            <div className={classes.button}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '20ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="filled-select-currency"
                            select
                            label="Select"
                            value={input}
                            onChange={handleinputchange}
                            helperText="Please select valid ID"
                            variant="filled"
                        >
                            {inputs.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </Box>
                <Button
                    onClick={handlevotesubmit}
                    color="primary"
                    variant="outlined"
                    size="large"
                    disabled={isMining}>
                    {isMining ? <CircularProgress size={40} /> : "Vote"}
                </Button>
            </div>
            <Snackbar
                open={showVotingSuccess}
                onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success">
                    You have voted successfully!
                </Alert>

            </Snackbar>

            <Snackbar
                open={showVotingFailer}
                onClose={handleCloseSnack2}>
                <Alert onClose={handleCloseSnack2} severity="error">
                    You have already voted!
                </Alert>
            </Snackbar>

        </>
    )
}