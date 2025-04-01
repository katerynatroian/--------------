export class scheduleRec {

    title: string = '';
    timeDate: string = '';
    difficulty: number = 0;
    isCompleted: boolean = false;

    constructor(title: string,
        timeDate: string,
        difficulty: number,
        isCompleted: boolean
    ){
        this.title = title;
        this.timeDate = timeDate;
        this.difficulty = difficulty;
        this.isCompleted = isCompleted;
    }
}