import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Features/Auth/Hooks/useAuth'
const Protected = ({ children }) => {
    const { loading, user } = useSelector((state) => state.auth)
    const { getMeUser } = useAuth()
    useEffect(() => {
        const getUser = async () => {
            await getMeUser();
        }
        getUser()
    }, [])
    if (loading) {
        return <div>Loading</div>
    }
    if (!user) {
        return <Navigate to={'/login'} replace />
    }
    return children
}

export default Protected