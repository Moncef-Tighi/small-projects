import React from 'react'
import { Typography, Button, Container  } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from '@emotion/styled';
/* <Typography
color='secondary'
variant='h3'
gutterBottom={true}
>
text
</Typography> */
/* 
<ButtonGroup>
  <Button>Réinitialiser</Button>
  <Button>Text Button</Button>
  <Button>Annuler</Button>
</ButtonGroup>
*/

export default function Create() {

  return (
    <Container maxWidth='sm'>
      <Typography variant='h6'component='h2' gutterBottom color='textSecondary'>
        Créer une nouvelle note
      </Typography>
        <Button variant="contained" color='primary' endIcon={<SendIcon/>}> Confirmer</Button>
        <Button type="submit" color='secondary' variant="contained" startIcon={<ArrowForwardIcon/>}>Submit</Button>

    </Container>
  )
}
