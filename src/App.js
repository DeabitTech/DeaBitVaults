import React, {useEffect, useState} from 'react';
import SimplyBar from './components/simplyBar'
import {Button,Typography,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Web3 from 'web3';
import LoanSetup from "./components/loanSetup";
import { McdPlugin,ETH, MDAI } from '@makerdao/dai-plugin-mcd';
import VaultManager from "./components/VaultManager";


const useStyles = makeStyles((theme) => ({
    root: {
            margin: theme.spacing(3),
            width: '30ch',
            display: 'block'
        }
}));

const App = () => {
    const classes = useStyles();
    const [maker,setMaker,istanceVaultManager] = VaultManager()
    const [IdVault,setIdVault] =useState()




    useEffect(() =>{
        istanceVaultManager()
    },[])




    const depositOnMakerDAO = async (importoDeposito,importoPrestito) =>{
        const cdpMana = maker.service('mcd:cdpManager')
        const open = await cdpMana.open('ETH-A');
        const vault = await open;
        const lockAndDraw =  await vault.lockAndDraw(ETH(importoDeposito), MDAI(importoPrestito));
        console.log(lockAndDraw)
    }

    const setRepayOnMakerDAO = async (importoCollaterale,importoPrestito) =>{
        const cdpMana = maker.service('mcd:cdpManager')
        const proxy = await maker.service('proxy').currentProxy();
        const Vaults = await cdpMana.getCdpIds(proxy);
        console.log(Vaults[0].id)
        const repay = await cdpMana.wipeAndFree(Vaults[0].id,"ETH-A",MDAI(importoPrestito),ETH(importoCollaterale))
        console.log(repay)
    }


    const makeApprove = async () =>{
        const proxy = await maker.service('proxy').currentProxy();
        console.log(proxy)
        const MDAI = await maker.getToken("MDAI");
        const approve = await MDAI.approveUnlimited(proxy);
        console.log(approve)
    }

    return (
    <div>
        <SimplyBar/>
        <Typography align="center" variant="h5" style={{marginTop:20}}>Benvenuto nella Loans Dapp test di DeaBit!</Typography>

        <LoanSetup depositOnMakerDAO={depositOnMakerDAO}

                   makeRepayOnMakerDAO={setRepayOnMakerDAO}
                   makeApprove={makeApprove} />

    </div>
  );
}

export default App;
