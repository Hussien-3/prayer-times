import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MosqueIcon from '@mui/icons-material/Mosque';


export default function DrawerAppBar() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#FF7D29',
      },
    },
});

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
      <AppBar component="nav">
        <Toolbar >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#7B4019" }}
          >
            Prayer Times
          </Typography>

          <Box>
            <MosqueIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    </Box>
  );
}
