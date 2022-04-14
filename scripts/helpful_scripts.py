from brownie import config,accounts,network

LOCAL_BLOCKCHAIN_ENVIRONMENTS=["development","ganache-local"]
def get_account():
    if network.show_active() in LOCAL_BLOCKCHAIN_ENVIRONMENTS:
        return accounts[0]
    else:
        return accounts.add(config["wallets"]["signing_key"])     

        