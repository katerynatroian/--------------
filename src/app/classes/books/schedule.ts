import { scheduleRec } from "./scheduleRec"

export class schedule {
    records: scheduleRec[] = [];
    difficultyGroups: { difficulty: number; count: number; titles: string[] }[] = []; // Add titles array

    addscheduleRec(record: scheduleRec) {
        this.records.push(record);
    }

    groupByDifficulty() {
        const difficultyMap = new Map<number, { count: number; titles: string[] }>();
        this.records.forEach((record) => {
            const group = difficultyMap.get(record.difficulty) || { count: 0, titles: [] };
            group.count += 1;
            group.titles.push(record.title);
            difficultyMap.set(record.difficulty, group);
        });

        this.difficultyGroups = Array.from(difficultyMap.entries()).map(([difficulty, group]) => ({
            difficulty,
            count: group.count,
            titles: group.titles 
        }));

        this.difficultyGroups.sort((a, b) => a.difficulty - b.difficulty);
    }
}