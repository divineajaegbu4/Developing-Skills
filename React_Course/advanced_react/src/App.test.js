import { fireEvent, render, screen } from '@testing-library/react';
import Testing from './Component/Testing';
import FeedbackForm from './Component/Feedback-Form';

test('renders a link that points to little element webpage', () => {
  render(<Testing />);
  const linkElement = screen.getByText("Little Orange Resturante **");
  expect(linkElement).toBeInTheDocument();
});


// describe("Feedback Form", () => {
//   test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
//     const handleSubmit = jest.fn();
//     const handleChange = jest.fn();

//     render(<FeedbackForm onSubmit={handleSubmit} onChange={handleChange} />)

//     const rangeInput = screen.getAllByLabelText(/Score:/);
//     fireEvent.change(rangeInput, { target: { value: "4" } })

//     const submitButton = screen.getByRole("button");
//     fireEvent.click(submitButton);

//     expect(handleSubmit).not.toHaveBeenCalled();
//     expect(submitButton).toHaveAttribute("disabled");
//   })
// })
