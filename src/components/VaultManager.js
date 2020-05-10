import React,{useState} from "react";
import Maker from '@makerdao/dai';
import { McdPlugin } from '@makerdao/dai-plugin-mcd';


export const VaultManager = () =>{
    const [maker,setMaker] = useState()
    let myPrivateKey = '09C6765DF3A23CCC05B7F3B48BFA07C48522C4C1D2F2404B11BDDB14F2CA4FBE'
    const istanceVaultManager = async () =>{
        const maker = await Maker.create('http', {
            plugins: [McdPlugin],
            url: 'https://kovan.infura.io/v3/e90a29f8a5474442b83e287a590a60dc',
            privateKey: myPrivateKey
        });
        setMaker(maker)


    }

    return [maker,setMaker,istanceVaultManager]
}

export default VaultManager;