import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { Amplify } from 'aws-amplify' // 修正部分
import config from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import Application from './Application'
import Welcome from './Welcome'
import './App.css'
Amplify.configure(config)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default withAuthenticator(App)
