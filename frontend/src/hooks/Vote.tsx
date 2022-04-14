import { useContractFunction } from "@usedapp/core"
import { utils, ethers } from "ethers"
import { Contract } from "@ethersproject/contracts"
import { InfuraProvider } from "@ethersproject/providers"
import electionabi from "../chain-info/contracts/Election.json"
import networkMapping from "../chain-info/deployments/map.json"



const network = "rinkeby"
var provider = new InfuraProvider(network, "7bbca922ebeb41d8bb58f2d4b1f2820c")
//var provider= new EtherscanProvider(network, "2WY3GD6VXHKNV1IHEEV8P6IMD9AFV6KIU4");

export const SubmitVote = () => {
    const { abi } = electionabi
    const election_deployed_address = networkMapping["4"]["Election"][0]
    const electioninterface = new utils.Interface(abi)
    const electioncontract = new Contract(election_deployed_address, electioninterface, provider)

    const { send: send_vote, state: send_vote_state } =
        useContractFunction(electioncontract, "Vote",
            { transactionName: "approved_vote" })
    const Vote = (newinput: Number) => {

        send_vote(newinput, { gasLimit: ethers.utils.hexlify(250000), gasPrice: ethers.utils.parseUnits('5', "gwei") })
    }
    return { Vote, send_vote_state }

}