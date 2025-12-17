import {useAuth} from "@/contexts/AuthContext.tsx";
import ProfileIcon from "@/components/ui/ProfileIcon.tsx";

export default function ProfileSection() {
    const {user, loading} = useAuth()

    return (
        <div className="space-y-4 sm:space-y-6">
            <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Profile</h2>
                <p className="text-white/60 text-xs sm:text-sm">Manage your account information</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <ProfileIcon isBig={true} />
                        <div className="text-center sm:text-left">
                            <h3 className="text-white text-base sm:text-lg font-semibold">
                                {loading ? 'Loading...' : user?.displayName}
                            </h3>
                            <p className="text-white/60 text-xs sm:text-sm">
                                {loading ? 'Loading...' : user?.email}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <div>
                            <label className="text-white/80 text-xs sm:text-sm font-medium block mb-1.5 sm:mb-2">Display
                                Name</label>
                            <input
                                type="text"
                                value={(loading ? 'Loading...' : user?.displayName) || 'Loading...'}
                                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder:text-white/40 focus:border-primary focus:ring-1 focus:ring-primary"
                                readOnly
                            />
                        </div>

                        <div>
                            <label
                                className="text-white/80 text-xs sm:text-sm font-medium block mb-1.5 sm:mb-2">Email</label>
                            <input
                                type="email"
                                value={(loading ? 'Loading...' : user?.email) || 'Loading...'}
                                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder:text-white/40 focus:border-primary focus:ring-1 focus:ring-primary"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

