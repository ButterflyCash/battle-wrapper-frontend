import React from 'react'
import './App.css';
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
//import { ethers } from 'ethers'
import { AppBar, Box, Button, Fab, Grid, Paper, Toolbar, Typography } from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import ErrorBoundry from './components/ErrorBoundry';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from "mui-image";

const theme = createTheme({
    palette: {
        primary: {
            main: '#736b6b',
        },
        warning: {
            main: '#FFAD06',
        },
    },
});

const injected = injectedModule()

const rpcUrl = `https://api.avax.network/ext/bc/C/rpc`

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: '0xa86a',
      token: 'AVAX',
      label: 'Avalanche Mainnet',
      rpcUrl
    }
  ]
})

function App() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  //let ethersProvider, signer;

  if (wallet) {
    //ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any');
    //signer = ethersProvider.getSigner();
  }

  const gotoURL = (url) => {
    window.location.href = url;
  }

  return (
    <ThemeProvider theme={theme}>
        <Box className="App" sx={{ pb: 10 }}>
          <AppBar position="static" sx={{ px: 2 }} color="transparent">
            <Toolbar disableGutters sx={{display: "flex", flexDirection: 'row'}}>
                <Box id="logo">
                <Image
                    src="/images/logo.png"
                    height="100%"
                    width="100%"
                    heightalt="BattleWrapper Logo"
                    fit="contain"
                    sx={{ position: 'relative', left: '-5px', maxHeight: 100 }}
                />
                </Box>
                <Button
                    disabled
                    variant="contained"
                    sx={{ width: 150, marginLeft: 'auto' }}
                    onClick={() => (wallet ? disconnect(wallet) : connect())}
                    color="primary"
                >
                  {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
                </Button>
            </Toolbar>
          </AppBar>
          <Box sx={{ width: '90%', margin: 'auto', mt: 3, maxWidth: 600 }}>
              <Paper elevation={3} sx={{bgcolor:'black', color: 'gray', padding: 2}}>
                  <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={6}>
                          <Typography variant="h5" sx={{overflowWrap: 'break-word'}}>
                              We Can All Be Zoogz
                          </Typography>
                          <Typography variant="body1" sx={{overflowWrap: 'break-word', mt: 2}}>
                              BattleWrapper allows for any NFT collection to be 'wrapped' in Zoog-like stats, and
                              creates a multitude of opportunities for interoperability between new and old collections
                              alike.
                          </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} >
                          <Image src="/images/hero.png" height="100%" width="100%" alt="We can all be Zoogz"/>
                      </Grid>
                  </Grid>
              </Paper>
          </Box>
            <Box sx={{ width: '90%', margin: 'auto', mt: 3, maxWidth: 600 }}>
                <Grid container sx={{padding: 0}}>
                    <Grid item xs={4} display="flex" justifyContent="center">
                        <Fab
                            variant="extended"
                            sx={{width: '75%'}}
                            color="warning"
                            onClick={() => gotoURL('https://docs.battlewrapper.com')}
                        >
                            Docs
                        </Fab>
                    </Grid>
                    <Grid item xs={4} display="flex" justifyContent="center">
                        <Fab
                            variant="extended"
                            sx={{width: '75%'}}
                            onClick={() => gotoURL('#wrap')}
                            color="warning"
                        >
                            Wrap
                        </Fab>
                    </Grid>
                    <Grid item xs={4} display="flex" justifyContent="center">
                        <Fab
                            variant="extended"
                            sx={{width: '75%'}}
                            onClick={() => gotoURL('#faq')}
                            color="warning"
                        >
                            FAQ
                        </Fab>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '90%', margin: 'auto', mt: 3, maxWidth: 600 }}>
                <Paper elevation={3} sx={{bgcolor:'black', color: 'gray', padding: 2}}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sx={{textAlign: 'center'}}>
                            <Typography variant="h4" sx={{overflowWrap: 'break-word'}}>
                                BattleWrap Your ChunkMunkz
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Image  id="wrap" src="/images/chunk.png" height="100%" width="100%" alt="We can all be Zoogz"/>
                        </Grid>
                        <Grid item xs={12} sx={{textAlign: 'center'}}>
                            <Typography variant="body1" sx={{overflowWrap: 'break-word'}}>
                                Prepare your ChunkMunkz for battle!
                            </Typography>
                            <Typography variant="button" sx={{overflowWrap: 'break-word'}}>
                                COMING SOON
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            <Box sx={{ width: '90%', margin: 'auto', mt: 3, maxWidth: 600 }}>
                <Paper elevation={3} sx={{bgcolor:'black', color: 'gray', padding: 2}}>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography variant="h4" sx={{overflowWrap: 'break-word', mb: 1}}>
                            FAQ
                        </Typography>
                    </Box>
                    <Accordion id="faq">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{backgroundColor: '#FFAD06'}}
                        >
                            <Typography>What is BattleWrapper</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor: '#FFAD06'}}>
                            <Typography>
                                BattleWrapper is a collection of open-sourced smart contracts intended to promote
                                interoperability between NFT collections and encourage collaboration in blockchain
                                gaming.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{backgroundColor: '#FFAD06'}}
                        >
                            <Typography>Why Zoogz?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor: '#FFAD06'}}>
                            <Typography>
                                We are big fans of&nbsp;
                                <a href="https://twitter.com/0x_minifridge" target="_blank" rel="noreferrer">@0x_minifridge</a>
                                &nbsp;and <a href="https://twitter.com/MonkeezNFT" target="_blank" rel="noreferrer">@MonkeezNFT</a>,
                                and we believe that the Zoogz stats system is a perfect base for the BattleWrapper.
                                Instead of re-inventing the wheel, we aim to build upon the foundation that has already
                                been laid.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            sx={{backgroundColor: '#FFAD06'}}
                        >
                            <Typography>Can I BattleWrap My Collection?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor: '#FFAD06'}}>
                            <Typography>
                                Absolutely! We aim to release all contracts and detailed instructions soon. Keep an eye
                                out for announcements from &nbsp;
                                <a href="https://twitter.com/bCASH-avax" target="_blank" rel="noreferrer">@bCASH_AVAX</a>!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            </Box>
            <Box sx={{mt:10, textAlign: 'center'}}>
                <Typography>
                    &copy; 2023 The bCASH Foundation, LLC
                </Typography>
            </Box>
        </Box>
    </ThemeProvider>
  );
}

export default App;
