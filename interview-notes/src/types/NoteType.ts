export interface NoteAnswersType {
    answer: string,
    answers: NoteAnswersType[];
}

export interface NoteType {
    question: string;
    answers: NoteAnswersType[];
}