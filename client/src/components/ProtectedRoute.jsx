import React from 'react'
import { redirect, Route, Routes } from 'react-router-dom'

const routeGuard = async () => {
    const token = document.cookie
      .split('; ').find((row) => row.startsWith("token="))
      ?.split("=")[1]
    console.log(token)
  
    let dbRes = await axios({
      method: "POST",
      url: "/api/auth/checkauth",
      data: { token }
    })
  
    console.log(dbRes)
    if (dbRes.status === 200) {
      console.log(dbRes.status)
      return true
    } else {
      console.log(dbRes.status)
      return false
    }
  }

function ProtectedRoute({children, ...rest}) {
    return (
      <Routes>
        <Route
          {...rest}
          render={() => {
            return routeGuard() === true ? (
              children
            ) : (
              <redirect to="/login" />
            );
          }}
        />
      </Routes>  
    );
}

export default ProtectedRoute