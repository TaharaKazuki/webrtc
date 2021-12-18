import { FC } from 'react'

interface ISubmitButtonProps {
  handleSubmit: () => void
}

const SubmitButton: FC<ISubmitButtonProps> = ({ handleSubmit }) => {
  return (
    <div className="loginPage_button_container">
      <button
        className="loginPage_button background_main_color text_main_color"
        onClick={handleSubmit}
      >
        Start using WebRTC
      </button>
    </div>
  )
}

export default SubmitButton
