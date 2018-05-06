import { SafeResourceUrl } from "@angular/platform-browser";

export interface IJobApplications {
    id: number;
    userId: number;
    jobId: number;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    comment: string;
    cv: SafeResourceUrl;
    coverLetter: string;
    createdAt: Date;
    updatedAt: Date;
}
