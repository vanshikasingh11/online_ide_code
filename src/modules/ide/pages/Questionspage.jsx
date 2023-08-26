import Container from '@mui/material/Container';
import { Header } from '../../shared/components/Header';
import Grid from '@mui/material/Grid';
export const QuestionPage = ()=>{
    return ( <Container >
                <Header/>
                <Grid container spacing={2}>
        <Grid item xs={6}>
            Question - Problem Statement
        </Grid>
        <Grid item xs={6}>
            ONLINE IDE
        </Grid>
        </Grid>
    </Container>)
}