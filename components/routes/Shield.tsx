import {useRouter} from 'next/router'
import {NextShield, NextShieldProps} from 'next-shield'

import {Children} from '../../types/Components'
import {Loading} from './Loading'

export function Shield({children}: Children) {
    const router = useRouter()
    const shieldProps: NextShieldProps<['/profile', '/dashboard', '/users', '/users/[id]'],
        ['/']> = {
        router,
        isAuth: false,
        isLoading: false,
        privateRoutes: ['/profile', '/dashboard', '/users', '/users/[id]'],
        publicRoutes: ['/'],
        hybridRoutes: ['/pricing'],
        loginRoute: '/login',
        accessRoute: '/profile',
        LoadingComponent: <Loading/>,
    }

    return <>{children}</>
}