import React, { useEffect, useState } from 'react';
import apiNoteData from './notes/apiNotes.json';
import azureCloudNoteData from './notes/azureCloudNotes.json';
import csharpNoteData from './notes/csharpNotes.json';
import sqlNoteData from './notes/sqlNotes.json';
import './App.css';
import Note from './components/Note';
import { NoteType } from './types/NoteType';
import Button from '@mui/material/Button';
import { Grid2, Typography, Container, createTheme, ThemeProvider, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [noteIndex, setNoteIndex] = useState<number>(0);
  const [currentNote, setCurrentNote] = useState<NoteType>();
  const [topicValue, setTopicValue] = React.useState('csharp');
  const [data, setData] = useState<Array<NoteType>>(csharpNoteData);

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

  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var newTopicValue = (event.target as HTMLInputElement).value;
    setNoteIndex(0);
    setTopicValue(newTopicValue);
    switch (newTopicValue) {
      case "csharp":
        setData(csharpNoteData);
        break;
      case "api":
        setData(apiNoteData);
        break;
      case "azureCloud":
        setData(azureCloudNoteData);
        break;
      case "sql":
        setData(sqlNoteData);
        break;
    }
  };

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
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Topic</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={topicValue}
                  onChange={handleTopicChange}
                >
                  <FormControlLabel value="csharp" control={<Radio />} label="C#" />
                  <FormControlLabel value="api" control={<Radio />} label=".NET API" />
                  <FormControlLabel value="azureCloud" control={<Radio />} label="Azure Cloud" />
                  <FormControlLabel value="sql" control={<Radio />} label="SQL" />
                </RadioGroup>
              </FormControl>
            </Grid2>
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
