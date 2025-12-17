import {useAuth} from "@/contexts/AuthContext.tsx";

export default function ProfileIcon({isBig = false}) {
    const {user} = useAuth()

    const getInitials = () => {
        if (user?.displayName) {
            return user.displayName
                .split(' ')
                .map((n: string) => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2)
        }
        if (user?.email) {
            return user.email[0].toUpperCase()
        }
        return 'U'
    }

    return (
        (isBig ?
            (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0">
                    {
                        user?.photoURL ? (
                            <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full"/>
                        ) : (
                            getInitials()
                        )
                    }
                </div>
            ) :
            (
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                    {
                        user?.photoURL ? (
                            <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full"/>
                        ) : (
                            getInitials()
                        )
                    }
                </div>)))
}