import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { padding } from "@mui/system";
import { NoteAnswersType, NoteType } from "../types/NoteType";

export interface NoteAnswerTypeProps {
    answers: NoteAnswersType[] | undefined;
}

export function NoteAnswer(props: NoteAnswerTypeProps) {
    return (
        props.answers ?
            (
                <>
                    {
                        props.answers.map(mainAnswer => (
                            <Typography component="ul">
                                {
                                    <>
                                        <Typography component="li">{mainAnswer.answer}</Typography>
                                        {mainAnswer.answers && <NoteAnswer answers={mainAnswer.answers}></NoteAnswer>}
                                    </>
                                }
                            </Typography>
                        ))
                    }
                </>
            )
            : <div>Loading</div>
    );
};

export default NoteAnswer;