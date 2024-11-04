import { Typography } from "@mui/material";
import { NoteAnswerTypeProps } from "../types/NoteAnswerTypeProps";

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