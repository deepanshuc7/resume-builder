import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useResumeStore } from '../../store/resumeStore'
import { EducationForm } from './EducationForm'

describe('EducationForm', () => {
  beforeEach(() => {
    useResumeStore.getState().resetResume()
  })

  it('adds an education entry', async () => {
    const user = userEvent.setup()

    render(<EducationForm />)

    await user.click(
      screen.getByRole('button', {
        name: /add education/i,
      }),
    )

    expect(
      useResumeStore.getState().resume.education,
    ).toHaveLength(1)
  })

  it('updates an education entry', async () => {
    const user = userEvent.setup()

    useResumeStore.getState().addEducation()

    render(<EducationForm />)

    await user.type(
      screen.getByRole('textbox', {
        name: /institution/i,
      }),
      'Thomas More',
    )

    expect(
      useResumeStore.getState().resume.education[0]
        .institution,
    ).toBe('Thomas More')
  })

  it('removes an education entry', async () => {
    const user = userEvent.setup()

    useResumeStore.getState().addEducation()

    render(<EducationForm />)

    await user.click(
      screen.getByRole('button', {
        name: /remove education/i,
      }),
    )

    expect(
      useResumeStore.getState().resume.education,
    ).toHaveLength(0)
  })
})