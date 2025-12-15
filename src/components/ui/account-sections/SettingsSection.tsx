import Toggle from '../Toggle'

export default function SettingsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-white text-2xl font-bold mb-2">Settings</h2>
        <p className="text-white/60 text-sm">Manage your preferences and notifications</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-white/60 text-sm">Receive updates about your scans</p>
              </div>
              <Toggle defaultChecked={true} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Weekly Reports</p>
                <p className="text-white/60 text-sm">Get weekly summary of your activity</p>
              </div>
              <Toggle defaultChecked={false} />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Privacy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Share Usage Data</p>
                <p className="text-white/60 text-sm">Help improve our service</p>
              </div>
              <Toggle defaultChecked={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

