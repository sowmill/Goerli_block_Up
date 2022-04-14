import { Container } from "@material-ui/core"
import how_img from "./how.png"
export const Howitworks = () => {

    return (
        <>
            <Container maxWidth="md">
                <div>
                    <h1>How does Blockchain E-Voting works?</h1>
                    <div style={{ backgroundImage: `url(${how_img})`, height: 400, width: 800, backgroundRepeat: "no-repeat" }}></div>
                    <p> Standing in the queue and waiting for your turn to cast vote is a part of history now.
                        We have proposed a new system of voting where everything
                        is transparent and no question of tampering with the voting machine as it doesn't exist in the first place.</p>
                    <p>BlockVote is the upcoming way of casting vote where all the votes will be stored in the Blockchain,
                        which makes the system tamper-proof and fully transparent.</p>
                    <h2> How to use?</h2>
                    <ol>1. Install MetaMask Browser Extension.</ol>
                    <ol>2. Make sure that the Ethereum Account has some testnet Rinkeby Ethereum which you can get <a  href="https://faucets.chain.link/rinkeby" target={"_blank"} rel="noreferrer noopener">here.</a></ol >
                    <ol>3. Visit the Cast Vote Page, connect to your wallet, and cast your vote.</ol >
                </div>
            </Container>
        </>
    )
}