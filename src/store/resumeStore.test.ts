import { beforeEach, describe, expect, it } from "vitest";
import { useResumeStore } from './resumeStore';

describe('resumeStore', () => {
    beforeEach(() => {
        useResumeStore.getState().resetResume()
    })

    it('updates personal details', () => {
        useResumeStore.getState().updatePersonalDetails({
            fullName: 'Deepanshu Chaudhary',
            jobTitle: 'Software Developer',
        })

        const { personalDetails } = useResumeStore.getState().resume

        expect(personalDetails.fullName).toBe('Deepanshu Chaudhary')
        expect(personalDetails.jobTitle).toBe('Software Developer')
    })
})