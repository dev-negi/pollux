import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { updateSettings } from '../redux/appSettings'
import { fetchAppSettings } from '../utils'

function AppWrapper({ stars, children }) {
  //   console.log('AppWrapper:-', appsettings)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateSettings(stars))
  }, [])
  return <div>{children}</div>
}

export default AppWrapper
