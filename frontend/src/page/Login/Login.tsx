import { useState, FC } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../resources/logo.png'

// component
import UsernameInput from './components/UsernameInput'
import SubmitButton from './components/SubmitButton'

// redux
import { setUser } from '../../features/dashbord/dashbordSlice'
import { useAppDispatch } from '../../app/hooks'
// style
import './Login.scss'

const Login: FC = () => {
  const [username, setUsername] = useState('')
  const dispatch = useAppDispatch()

  const history = useHistory()

  const handleSubmit = () => {
    history.push('/dashboard')
    dispatch(setUser({ username }))
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
        <UsernameInput username={username} setUsername={setUsername} />
        <SubmitButton handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default Login
