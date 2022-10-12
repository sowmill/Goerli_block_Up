from scripts.helpful_scripts import get_account, LOCAL_BLOCKCHAIN_ENVIRONMENTS
from scripts.deploy import deploy_election
from brownie import network, exceptions
import pytest


def test_no_of_candidates():
    #arrange #act
    election=deploy_election()
    #assert
    assert election.Candidate_count() == 6

def test_candidate_initialization():

    election=deploy_election()
    #candidate 1
    candidate_list=[election.Candidates(1)]
    assert candidate_list[0][0] ==1
    assert candidate_list[0][1] =="Devadas Aggarwal"
    assert candidate_list[0][2] =="Bharatiya Janata Party"
    assert candidate_list[0][3] ==0
    #candidate 2
    candidate_list=[election.Candidates(2)]
    assert candidate_list[0][0] ==2
    assert candidate_list[0][1] =="Pallav Pandit"
    assert candidate_list[0][2] =="Indian National Congress"
    assert candidate_list[0][3] ==0
    #candidate 3
    candidate_list=[election.Candidates(3)]
    assert candidate_list[0][0] ==3
    assert candidate_list[0][1] =="Harish Khurana"
    assert candidate_list[0][2] =="Nationalist Congress Party"
    assert candidate_list[0][3] ==0
    #candidate 4
    candidate_list=[election.Candidates(4)]
    assert candidate_list[0][0] ==4
    assert candidate_list[0][1] =="Sarita Dhaliwal"
    assert candidate_list[0][2] =="Rashtriya Janata Dal"
    assert candidate_list[0][3] ==0
    #candidate 5
    candidate_list=[election.Candidates(5)]
    assert candidate_list[0][0] ==5
    assert candidate_list[0][1] =="Jai Goyal"
    assert candidate_list[0][2] =="Bahujan Samaj Party"
    assert candidate_list[0][3] ==0
    #NOTA 
    candidate_list=[election.Candidates(6)]
    assert candidate_list[0][0] ==6
    assert candidate_list[0][1] =="NOTA"
    assert candidate_list[0][2] =="None Of The Above"
    assert candidate_list[0][3] ==0
    
#test if user can vote    
def test_can_vote():

    account=get_account()
    election=deploy_election()
    tx=election.Vote(1,{"from":account})
    tx.wait(1)
    assert election.voters(account.address)== True

#test for valid candidate
def test_valid_candidate():

    if network.show_active() not in LOCAL_BLOCKCHAIN_ENVIRONMENTS:
        pytest.skip("only for local testing")
    account=get_account()
    election=deploy_election()
    with pytest.raises(exceptions.VirtualMachineError):
        tx=election.Vote(100,{"from":account})
        tx.wait(1)
        tx=election.Vote(-1,{"from":account})
        tx.wait(1)

#test for double voting
def test_valid_vote():
    
    if network.show_active() not in LOCAL_BLOCKCHAIN_ENVIRONMENTS:
        pytest.skip("only for local testing")
    account=get_account()
    election=deploy_election()
    tx=election.Vote(1,{"from":account})
    tx.wait(1)
    with pytest.raises(exceptions.VirtualMachineError):
        tx=election.Vote(2,{"from":account})
        tx.wait(1)








    

