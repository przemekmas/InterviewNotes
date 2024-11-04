import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { NoteTypeProps } from "../types/NoteTypeProps";
import NoteAnswer from "./NoteAnswer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Note(props: NoteTypeProps) {
    return (
        props.note ?
            <Box sx={{
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography sx={{ marginBottom: 5 }} variant="h5" component="h1">{props.note.question}</Typography>
                <Accordion sx={{
                    width: "100%",
                    textAlign: "left"
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Reveal Answer(s)
                    </AccordionSummary>
                    <AccordionDetails>
                        <NoteAnswer answers={props.note.answers}></NoteAnswer>
                    </AccordionDetails>
                </Accordion>
            </Box>
            : <div>Loading</div>
    );
};

export default Note;