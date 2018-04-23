export interface IJobApplications {
    id: number;
    userId: number;
    jobId: number;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    comment: string;
    cv: string;
    coverLetter: string;
    createdAt: Date;
    updatedAt: Date;
}
