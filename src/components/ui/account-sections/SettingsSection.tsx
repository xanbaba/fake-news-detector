import Toggle from '../Toggle'

export default function SettingsSection() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Settings</h2>
        <p className="text-white/60 text-xs sm:text-sm">Manage your preferences and notifications</p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-6">
          <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm sm:text-base">Email Notifications</p>
                <p className="text-white/60 text-xs sm:text-sm">Receive updates about your scans</p>
              </div>
              <Toggle defaultChecked={true} />
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm sm:text-base">Weekly Reports</p>
                <p className="text-white/60 text-xs sm:text-sm">Get weekly summary of your activity</p>
              </div>
              <Toggle defaultChecked={false} />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-6">
          <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Privacy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm sm:text-base">Share Usage Data</p>
                <p className="text-white/60 text-xs sm:text-sm">Help improve our service</p>
              </div>
              <Toggle defaultChecked={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

