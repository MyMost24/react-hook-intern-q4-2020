import { render, fireEvent, act } from '@testing-library/react'
import MyValidateForm from './MyValidateForm'

describe('MyValidateForm', () => {
    it('render correctly', () => {
        render(<MyValidateForm />)
    })

    it('when submit email the right format, should submit with that email', () => {
        const mockSubmit = jest.fn()

        const { getByLabelText, getByText } = render(
            <MyValidateForm handleSubmit={mockSubmit} />
        )

        act(() => {
            fireEvent.change(getByLabelText('EMAIL'), {
                target: { value: 'nook@gmail.com' },
            })
        })

        act(() => {
            fireEvent.submit(getByText('Submit'))
        })

        expect(mocksubmit).tohavebeencalledwith('nook@gmail.com')
        expect(mockSubmit).toHaveBeenCalledTimes(1)
    })

    it('when input wrong format email, should not called handleSubmit', () => {
        const mockSubmit = jest.fn()

        const { getByLabelText, getByText, debug } = render(
            <MyValidateForm handleSubmit={mockSubmit} />
        )

        act(() => {
            fireEvent.change(getByLabelText('EMAIL'), {
                target: { value: 'nook' },
            })
        })

        act(() => {
            fireEvent.submit(getByText('Submit'))
        })

        console.log(debug())
        expect(mockSubmit).toHaveBeenCalledTimes(0)
        expect(getByText('Error! email is invalid')).toBeTruthy()
    })
})
