import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Typography } from "@mui/material";
import { NoteTypeProps } from "../types/NoteTypeProps";
import NoteAnswer from "./NoteAnswer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";

export function Note(props: NoteTypeProps) {
    const [expanded, setExpanded] = useState<boolean>(false);

    const onExpand = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setExpanded(false);
    }, [props.note]);

    return (
        props.note ?
            <Box sx={{
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography sx={{ marginBottom: 5 }} variant="h5" component="h1">{props.note.question}</Typography>
                <Accordion
                    expanded={expanded}
                    onChange={onExpand}
                    sx={{
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
            : <CircularProgress />
    );
};

export default Note;