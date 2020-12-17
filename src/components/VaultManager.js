import React,{useState} from "react";
import Maker from '@makerdao/dai';
import { McdPlugin } from '@makerdao/dai-plugin-mcd';


export const VaultManager = () =>{
    const [maker,setMaker] = useState()
    let myPrivateKey = process.env.PRIV_KEY
    const istanceVaultManager = async () =>{
        const maker = await Maker.create('http', {
            plugins: [McdPlugin],
            url: `https://kovan.infura.io/v3/${process.env.INFURA_ID}`,
            privateKey: myPrivateKey
        });
        setMaker(maker)


    }

    return [maker,setMaker,istanceVaultManager]
}

export default VaultManager;
