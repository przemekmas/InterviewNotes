import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { NoteTypeProps } from "../types/NoteTypeProps";
import NoteAnswer from "./NoteAnswer";
import { useEffect, useState } from "react";

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
                <Paper sx={{
                    width: "100%",
                    textAlign: "left",
                    paddingTop: 2,
                    paddingBottom: 2
                }}>
                    <NoteAnswer answers={props.note.answers}></NoteAnswer>
                </Paper>
            </Box>
            : <CircularProgress />
    );
};

export default Note;