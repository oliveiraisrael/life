import 'nextra-theme-docs/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-next-table/dist/SmartTable.css';
import React, { useState } from 'react'


export default function Nextra({ Component, pageProps }) {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  return <Component {...pageProps} />
}
