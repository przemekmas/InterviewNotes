import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { padding } from "@mui/system";
import { NoteType } from "../types/NoteType";
import NoteAnswer from "./NoteAnswer";

export interface NoteTypeProps {
    note: NoteType | undefined;
}

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
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Reveal Answer(s)
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* <Typography component="ul">
                                {
                                    props.note.answers.map(answer => (
                                        <Typography component="li">{answer.answer}</Typography>
                                    ))
                                }
                            </Typography> */}

                        <NoteAnswer answers={props.note.answers}></NoteAnswer>
                    </AccordionDetails>
                </Accordion>
            </Box>
            : <div>Loading</div>
    );
};

export default Note;