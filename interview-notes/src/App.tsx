import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import data from './notes.json';
import './App.css';
import Note from './components/Note';
import { NoteType } from './types/NoteType';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Grid2, Typography, Container } from '@mui/material';

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

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Grid2 container spacing={4}>
            <Grid2 size={12}>
              <Typography>Question: {noteIndex + 1} of {data.length}</Typography>
            </Grid2>
            <Grid2 size={12}>
              <Note note={currentNote}></Note>
            </Grid2>
            <Grid2 size={6}>
              <Button sx={{ width: "100%" }} onClick={setPreviousNote} variant="contained">Previous</Button>
            </Grid2>
            <Grid2 size={6}>
              <Button sx={{ width: "100%" }} onClick={setNextNote} variant="contained">Next</Button>
            </Grid2>
          </Grid2>
        </Container>
      </header>
    </div>
  );
}

export default App;
