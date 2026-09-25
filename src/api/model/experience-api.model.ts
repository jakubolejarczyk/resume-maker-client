export interface ExperienceApiModel {
    id: string;
    company: string;
    startDate: string;
    endDate?: string;
    jobTitle: string;
    description: string[];
    userId: string;
}