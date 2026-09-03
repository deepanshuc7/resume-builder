import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useResumeStore } from '../store/resumeStore'
import { ResumePreview } from './ResumePreview'

describe('ResumePreview', () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume()
  })

  it('displays the full name and job title from the store', () => {
    useResumeStore.getState().updatePersonalDetails({
      fullName: 'Deepanshu Chaudhary',
      jobTitle: 'Software Developer',
    })

    render(<ResumePreview />)

    expect(
      screen.getByRole('heading', {
        name: 'Deepanshu Chaudhary',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Software Developer'),
    ).toBeInTheDocument()
  })
})