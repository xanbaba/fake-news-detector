import AuthCard from '../ui/AuthCard.tsx'
import GetStartedHeading from '../ui/get-started/GetStartedHeading'
import GetStartedForm from '../ui/get-started/GetStartedForm'

export default function GetStarted() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-full max-w-md mx-auto p-4">
        <AuthCard>
          <GetStartedHeading />
          <GetStartedForm />
        </AuthCard>
      </div>
    </div>
  )
}

