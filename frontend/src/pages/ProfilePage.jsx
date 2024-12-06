import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import Sidebar from '../components/Sidebar'

function ProfilePage() {
  return (
    <AnimatedPage>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-4">Profile & Settings</h1>
          <p className="text-gray-600 mb-4">Update your personal information, preferences, and connected accounts.</p>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="font-semibold mb-2">Personal Info</h2>
            <form className="space-y-2">
              <input type="text" placeholder="Name" className="border w-full p-2 rounded"/>
              <input type="email" placeholder="Email" className="border w-full p-2 rounded"/>
              <button className="bg-indigo-600 text-white py-2 w-full rounded hover:bg-indigo-700">Save</button>
            </form>
          </div>

          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="font-semibold mb-2">AI Preferences</h2>
            <p>Focus on: [ ] Savings for house [ ] Reducing dining expenses [ ] Minimizing subscriptions</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default ProfilePage
