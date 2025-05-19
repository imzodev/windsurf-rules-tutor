import { FaGraduationCap } from 'react-icons/fa'

const WelcomeScreen = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-8xl flex flex-col items-center">
            <FaGraduationCap className="text-6xl text-slate-900" />
            <h1 className="text-3xl md:text-4xl text-slate-900 font-bold text-center mx-auto py-2">Bienvenido a Windsurf Rules Tutor</h1>
            <p className="text-2xl text-slate-600">En esta aplicación aprenderás cualquier concepto</p>
        </div>
    )
}

export default WelcomeScreen