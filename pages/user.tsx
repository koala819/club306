import {getSession, signOut, useSession} from "next-auth/react";
import {NextPage} from "next";

const User: NextPage = () => {
    const {data: session} = useSession()

    return (
        <div>
            {session && _User({session})}
        </div>
    )
}

//User
function _User({session}: any) {
    return (
        <main className="container mx-auto text-center py-20">
            <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
            <h5>{session.user.name}</h5>
            <h5>{session.user.email}</h5>
            <div className="flex justify-center">
                <button
                    className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50"
                    onClick={()=> _handleGoogleSignout()}
                >
                    Se déconnecter
                </button>
            </div>
        </main>
    )
}

async function _handleGoogleSignout() {
    await signOut({callbackUrl: 'https://pascal306.vercel.app'})
}

export async function getServerSideProps({req}:any) {
    const session = await getSession({req})

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {session}
    }
}


export default User