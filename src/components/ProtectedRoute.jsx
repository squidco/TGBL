import React from 'react'

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

function ProtectedRoute() {
  return routeGuard 
}

export default ProtectedRoute