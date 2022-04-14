import { Box } from "@material-ui/core"
import { makeStyles } from '@material-ui/core';
import { useEthers } from "@usedapp/core"
import { useState } from "react"
import networkMapping from "../chain-info/deployments/map.json"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import jif from "./jif.mp4"
const useStyles = makeStyles((theme) => ({

    last: {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(1),
        gap: theme.spacing(2)
    }


}))


export const Knowmore = () => {
    const classes = useStyles()
    const { account, activateBrowserWallet, deactivate } = useEthers()
    var [add, setadd] = useState<string | null | undefined>("notconnected.")
    const isConnected = account !== undefined
    const election_deployed_address = networkMapping["4"]["Election"][0]

    const Handleupdate = () => {
        activateBrowserWallet()
        setadd(account)

    }
    return (
        <>
            <video autoPlay loop width="900" height="350" >
                <source src={jif} type="video/mp4" />

            </video>
            <Box className={classes.last} sx={{ height: 650, width: 620 }}>

                <Accordion onChange={Handleupdate}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h2>Contract Address:</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{  width: 590 }}>
                            {election_deployed_address}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion onChange={Handleupdate}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h2>Account Address:</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ width: 590 }}>
                            {add}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h2>Contract Details:</h2>
                    </AccordionSummary>
                    <AccordionDetails >
                        <h2 >
                        You can check contract details by copy-pasting the contract address <a href="https://rinkeby.etherscan.io/" target={"_blank"} rel="noreferrer noopener">here.</a>
                        </h2>
                    </AccordionDetails>
                </Accordion>



            </Box>
        </>
    )
}