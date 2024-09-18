
export interface EpicaResponse {
    id:             number;
    subject:        string;
    description:    string;
    // owner:          User;
    assigned_to_id: number;
    status:         string;
    created_date:   Date;
    modified_date:  Date;
    tags:           string[];
    attachments:    Attachment[];
    user_stories:   UserStory[];
}

export interface Attachment {
    id:            number;
    filename:      string;
    url:           string;
    uploaded_by:   number;
    uploaded_date: Date;
}

export interface UserStory {
    id:             number;
    title:string;
    areaPath:string,
    teamProject:string;
    iterationPath:string;
    description:string;
    state:string;
    createdBy:string;
    schedulin_RemainingWork:number;
    schedulin_OriginalEstimate:number;
    schedulin_CompletedWork:number;
    url:string;
    // subject:        string;
    // description:    string;
    // status:         string;
    // assigned_to_id: number;
    // created_date:   Date;
    // modified_date:  Date;
    // attachments:    Attachment[];
    // tasks:         UserStory[];
}
export interface User {
    id:         number;
    permalink:  string;
    username:   string;
    full_name:  string;
    email:      string;
    role:       string;
    avatar_url: string;
}


export interface makeRgbParams{
    r:number;
    g:number;
    b:number; 
    a:number;
}


export interface ReportUserStories {
    user:User,
    user_stories:UserStory[];   
}

export interface ReporteDia{
    id:number;
    report:string;
}

export interface StatusDia{
    id:number;
    bloqueo_description:string | null;
    bloqueo:boolean;
    levantada_mano:boolean;
}
export interface ReportUserStoriesReponse {
    user:User,
    user_stories:UserStoryReponse[];   
}

export interface UserStoryReponse {
    id: number;
    "System.Url": string;
    "System.AreaPath": string;
    "System.TeamProject": string;
    "System.IterationPath": string;
    "System.WorkItemType": string;
    "System.State": string;
    "System.Reason": string;
    "System.AssignedTo": {
        displayName: string;
    };
    "System.CreatedDate": string; // Puedes usar Date si prefieres
    "System.CreatedBy": {
        displayName: string;
    };
    "System.ChangedDate": string; // Puedes usar Date si prefieres
    "System.ChangedBy": {
        displayName: string;
    };
    "System.Title": string;
    "System.description": string;
    "Microsoft.VSTS.Common.StateChangeDate": string; // Puedes usar Date si prefieres
    "Microsoft.VSTS.Common.ActivatedDate": string; // Puedes usar Date si prefieres
    "Microsoft.VSTS.Common.ActivatedBy": {
        displayName: string;
    };
    "Microsoft.VSTS.Common.Priority": number;
    "Microsoft.VSTS.Common.ValueArea": string;
    "Microsoft.VSTS.Scheduling.RemainingWork": number;
    "Microsoft.VSTS.Scheduling.OriginalEstimate": number;
    "Microsoft.VSTS.Scheduling.CompletedWork": number;
}