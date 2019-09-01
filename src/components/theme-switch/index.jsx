import React, { useState, useEffect } from 'react'
import Switch from 'react-switch'

import * as Dom from '../../utils/dom'
import { THEME } from '../../constants'

import './index.scss'

function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = checked => {
    const theme = getTheme(checked)

    setChecked(checked)
    toggleTheme(theme)
  }

  useEffect(() => {
    const checked = Dom.hasClassOfBody(THEME.DARK)

    handleChange(checked)
  }, [])

  return null
}
