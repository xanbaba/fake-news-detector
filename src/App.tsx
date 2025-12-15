import Header from './components/Header'
import Footer from './components/Footer'
import RootBackground from './components/RootBackground'
import PageView from './components/PageView'

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <RootBackground />
      <div className="relative z-10 flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <Header />
            <main className="flex-grow">
              <PageView />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
