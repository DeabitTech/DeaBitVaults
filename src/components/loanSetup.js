import React,{useState} from 'react';
import { makeStyles,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Typography,Box,TextField,Button } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloudUploadIcon from "@material-ui/icons/CloudUpload";



const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        marginLeft: '5%'

    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        margin: theme.spacing(1),
    }
}));













 const LoanSetup = (props) => {
    const classes = useStyles();
    const [disable,setDisable] = useState(true);
     const [importoDeposito,setImportoDeposito] = useState(0);
     const [importoVault,setImportoVault] = useState(0);
     const [importoCollaterale,setImportoCollaterale] = useState(0);
     const [importoPrestito,setImportoPrestito] = useState(0);
    

     const valueInputDeposit =(event) =>{

        event.target.value === null? setImportoDeposito("0.0"): setImportoDeposito(event.target.value);
        console.log(importoDeposito)
     }

     const valueInputVault =(event) =>{

         event.target.value === null? setImportoVault("0.0"): setImportoVault(event.target.value);
         console.log(importoVault)
     }

     const valueInputCollaterale =(event) =>{

         event.target.value === null? setImportoCollaterale("0.0"): setImportoCollaterale(event.target.value);
         console.log(importoCollaterale)
     }

     const valueInputPrestito =(event) =>{

        event.target.value === null? setImportoPrestito("0.0"): setImportoPrestito(event.target.value);
        console.log(importoDeposito)
    }

    const deposit = () =>{
        props.depositOnMakerDAO(importoDeposito,importoVault);
        setDisable(false);
    }


    const makeRepayloan = () =>{
        props.makeRepayOnMakerDAO(importoCollaterale,importoPrestito);
    }
    const makeApprove = () =>{
        props.makeApprove();
        setDisable(false);
    }

    return (
        <Box className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Vuoi richiedere prestito?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography variant="h6" color="textSecondary"> Inserisci l'importo che vuoi depositare e l'importo del prestito</Typography>
                    </div>
                    
                </ExpansionPanelDetails>
                <ExpansionPanelDetails>
                        <TextField label="Deposito Collaterale" onChange={valueInputDeposit} required id="standard-required" placeholder="Importo Deposito"  color="primary"/>
                        <TextField label="Importo del Prestito" onChange={valueInputVault} required id="standard-required" placeholder="Importo Prestito"  color="primary"/>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={ <CloudUploadIcon/>}
                        onClick={deposit}
                    >
                        Invia
                    </Button>
                </ExpansionPanelDetails>
            </ExpansionPanel>
           
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    disabled={false}
                >
                    <Typography className={classes.heading} >Vuoi ripagare un prestito?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography variant="h6" color="textSecondary"> Inserisci l'importo che vuoi ripagare ed esegui la richiesta di approvazione, successivamente premi il tasto Invia</Typography>
                    </div>
                </ExpansionPanelDetails>
                <ExpansionPanelDetails>

                    <TextField label="Ritiro Collaterale" onChange={valueInputCollaterale} required id="standard-required2" placeholder="Importo"  color="primary"/>
                   
                   
                   
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={ <CloudUploadIcon/>}
                        onClick={makeApprove}
                    >
                        Invia richiesta di approvazione
                    </Button>
                </ExpansionPanelDetails>
                <ExpansionPanelDetails>
                    <TextField label="Restituzione Prestito" onChange={valueInputPrestito} required id="standard-required2" placeholder="Importo"  color="primary"/>
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={ <CloudUploadIcon/>}
                    onClick={makeRepayloan}
                    disabled={disable}
                     >
                    Invia
                    </Button>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </Box>
    );
}

export default LoanSetup;