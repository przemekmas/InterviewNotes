import { NoteAnswersType } from "./NoteAnswersType";

export interface NoteType {
    question: string;
    answers: NoteAnswersType[];
}