import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.grey[900],
                color: (theme) => theme.palette.common.white
            }}
        >
            <Container>
                <Typography variant="body2" color="inherit" align="center">
                    © {new Date().getFullYear()} Interview Notes. All rights reserved.
                </Typography>                
                <Typography variant="body2" color="inherit" align="center" sx={{ marginTop: 2 }}>
                    Przemyslaw Maslowski
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
