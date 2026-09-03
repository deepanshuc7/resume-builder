export interface PersonalDetails {
    fullName: string
    jobTitle: string
    email: string
    phone: string
    location: string
    website: string
    linkedin: string
}

export interface Experience {
    id: string
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string
}

export interface Education {
    id: string
    institution: string
    degree: string
    location: string
    startDate: string
    endDate: string
}

export interface Project {
    id: string
    name: string
    description: string
    technologies: string[]
    url: string
}

export interface Resume {
    personalDetails: PersonalDetails
    summary: string
    experience: Experience[]
    education: Education[]
    skills: string[]
    projects: Project[]
}