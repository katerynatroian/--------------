export class Book {
    code: string;
    readerId: string;
    issueDate: Date;
    termDays: number;
  
    constructor(code: string, readerId: string, issueDate: Date, termDays: number) {
      this.code = code;
      this.readerId = readerId;
      this.issueDate = issueDate;
      this.termDays = termDays;
    }
  
    getDueDate(): Date {
      const dueDate = new Date(this.issueDate);
      dueDate.setDate(dueDate.getDate() + this.termDays); 
      return dueDate;
    }
  
    isOverdue(currentDate: Date): boolean {
      const dueDate = this.getDueDate();
      return currentDate > dueDate;
    }
  
    getFormattedDueDate(): string {
      return this.getDueDate().toLocaleDateString('uk-UA');
    }

    getFormattedIssueDate(): string {
      return this.issueDate.toLocaleDateString('uk-UA');
    }
  }
  