import {useRouter} from 'next/router'
import {NextShield, NextShieldProps} from 'next-shield'

import {Children} from '../../types/Components'
import {Loading} from './Loading'

export function Shield({children}: Children) {
    const router = useRouter()
    /*const shieldProps: NextShieldProps<['Dashboard', 'Users', 'Users/[id]', 'Profile'],*/
    const shieldProps: NextShieldProps<['Dashboard', 'Users', 'Users/[id]', 'Profile'],
        ['/','Membership','Rules','Press','Event','Blog','Login','Partners','Contact']> =
        {
            router,
            isAuth: false,
            isLoading: false,
            privateRoutes: ['Dashboard', 'Users', 'Users/[id]','Profile'],
            publicRoutes: ['/','Membership','Rules','Press','Event','Blog','Login','Partners','Contact'],
            loginRoute: 'Login',
            accessRoute: 'Profile',
            LoadingComponent: <Loading/>,
        }

    return <NextShield {...shieldProps}>{children}</NextShield>
}