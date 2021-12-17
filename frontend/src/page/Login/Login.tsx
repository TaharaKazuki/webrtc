import { useState, FC } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../resources/logo.png'

import './Login.scss'

interface ILoignProps {
  saveUsername: (name: string) => void
}

const Login: FC<ILoignProps> = ({ saveUsername }) => {
  const [username, setUsername] = useState('')

  const history = useHistory()

  const handleSubmitButton = () => {
    history.push('/dashboard')
    saveUsername(username)
  }

  return (
    <div className="loginPage_container background_main_color">
      <div className="loginPage_login_box background_secondary_color">
        <div className="loginPage_logo_container">
          <img className="loginPage_logo_image" src={logo} alt="VideoTalker" />
        </div>
        <div className="loginPage_title_container">
          <h2>Get on Board</h2>
        </div>
        {/* <UsernameInput username={username} setUsername={setUsername} /> */}
        {/* <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} /> */}
      </div>
    </div>
  )
}

export default Login
