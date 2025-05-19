import WelcomeScreen from "./components/WelcomeScreen"

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-blue-500 min-h-screen py-8">
      <h1 className="text-5xl md:text-6xl text-slate-900 font-bold text-center mx-auto py-5 px-4">
        Bienvenido a Windsurf Rules Tutor
      </h1>
      <div className="container mx-auto px-4">
        <WelcomeScreen />
      </div>
    </div>
  )
}

export default App
