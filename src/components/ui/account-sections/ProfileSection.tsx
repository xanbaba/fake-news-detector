export default function ProfileSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-white text-2xl font-bold mb-2">Profile</h2>
        <p className="text-white/60 text-sm">Manage your account information</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl bg-white/5 border border-white/10 p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">John Doe</h3>
              <p className="text-white/60 text-sm">john.doe@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-white/80 text-sm font-medium block mb-2">Display Name</label>
              <input
                type="text"
                value="John Doe"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:border-primary focus:ring-1 focus:ring-primary"
                readOnly
              />
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium block mb-2">Email</label>
              <input
                type="email"
                value="john.doe@example.com"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder:text-white/40 focus:border-primary focus:ring-1 focus:ring-primary"
                readOnly
              />
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium block mb-2">Member Since</label>
              <input
                type="text"
                value="December 15, 2025"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder:text-white/40"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

