import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function NavBar() {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{
                            height: 32,
                            width: 32,
                            marginRight: 2
                        }}
                        src={`${process.env.PUBLIC_URL}/favicon-32x32.png`}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/InterviewNotes"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        INTERVIEW NOTES
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        INotes
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;