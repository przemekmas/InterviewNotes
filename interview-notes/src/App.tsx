import React, { useEffect, useState } from 'react';
import data from './notes.json';
import './App.css';
import Note from './components/Note';
import { NoteType } from './types/NoteType';
import Button from '@mui/material/Button';
import { Grid2, Typography, Container, createTheme, ThemeProvider, Box } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [noteIndex, setNoteIndex] = useState<number>(0);
  const [currentNote, setCurrentNote] = useState<NoteType>();

  useEffect(() => {
    if (data) {
      setCurrentNote(data[noteIndex]);
    }
  }, [data]);

  const setPreviousNote = () => {
    if (0 > noteIndex - 1) {
      return;
    }

    setNoteIndex((prevNoteIndex) => prevNoteIndex - 1);
  }

  const setNextNote = () => {
    if (data.length <= noteIndex + 1) {
      return;
    }

    setNoteIndex((prevNoteIndex) => prevNoteIndex + 1);
  }

  useEffect(() => {
    setCurrentNote(data[noteIndex]);
  }, [noteIndex]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#121212',
        paper: '#1d1d1d',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}>
        <NavBar></NavBar>
        <Container className='AppContent' sx={{ marginBottom: 3 }}>
          <Grid2 container spacing={4}>
            <Grid2 size={12}>
              <Typography>Question: <b>{noteIndex + 1}</b> of <b>{data.length}</b></Typography>
            </Grid2>
            <Grid2 size={12}>
              <Note note={currentNote}></Note>
            </Grid2>
            <Grid2 size={6}>
              <Button sx={{ width: "100%" }} onClick={setPreviousNote} variant="contained" disabled={noteIndex == 0}>Previous</Button>
            </Grid2>
            <Grid2 size={6}>
              <Button sx={{ width: "100%" }} onClick={setNextNote} variant="contained" disabled={noteIndex == data.length - 1}>Next</Button>
            </Grid2>
          </Grid2>
        </Container>
        <Footer></Footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
