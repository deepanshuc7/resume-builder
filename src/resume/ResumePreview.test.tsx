import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useResumeStore } from '../store/resumeStore'
import { ResumePreview } from './ResumePreview'

describe('ResumePreview', () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume()
  })

  it('displays personal details from the store', () => {
    useResumeStore.getState().updatePersonalDetails({
      fullName: 'Deepanshu Chaudhary',
      jobTitle: 'Software Developer',
      email: 'deep@example.com',
      phone: '+32 123 456 789',
      location: 'Mechelen, Belgium',
      website: 'https://example.com',
      linkedin: 'https://linkedin.com/in/deepanshu',
    })

    render(<ResumePreview />)

    expect(
      screen.getByRole('heading', {
        name: 'Deepanshu Chaudhary',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText('Software Developer')).toBeInTheDocument()
    expect(screen.getByText('deep@example.com')).toBeInTheDocument()
    expect(screen.getByText('+32 123 456 789')).toBeInTheDocument()
    expect(screen.getByText('Mechelen, Belgium')).toBeInTheDocument()

    expect(screen.getByRole('link', {name: 'example.com'})).toHaveAttribute('href', 'https://example.com')

    expect(screen.getByRole('link', {name: /linkedin/i})).toHaveAttribute('href', 'https://linkedin.com/in/deepanshu')
  })
})