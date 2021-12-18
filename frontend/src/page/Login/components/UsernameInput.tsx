import { FC, Dispatch } from 'react'

interface IUsernameProps {
  username: string
  setUsername: Dispatch<React.SetStateAction<string>>
}

const UsernameInput: FC<IUsernameProps> = ({ username, setUsername }) => {
  return (
    <div className="loginPage_input_container">
      <input
        placeholder="Enter your name"
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value)
        }}
        className="loginPage_input background_main_color text_main_color"
      />
    </div>
  )
}

export default UsernameInput
