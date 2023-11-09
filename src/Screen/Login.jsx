import React from "react";
import Group9 from "../assets/images/Group9.png"
import { Link } from "react-router-dom";

function Login(){
    return (
        <div className="flex justify-between">
        <div className="flex justify-center items-center w-1/2">
            <div className="flex items-center justify-center h-screen bg-white">
                <div className=" p-8 max-w-md w-full">
                    <div className="bg-blue-200 h-12 w-12 px-2 py-3  rounded font-bold text-sm text-blue-600">
                        E241
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold py-2">
                            Connexion
                        </h1>
                        <p className="text-sm text-gray-700  pb-5">
                            Siasissez votre email et votre mot de passe pour avoir <br/> accès au Dashbord
                        </p>
                    </div>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                            E-mail de Connexion
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Sapul@gmail.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="flex justify-between text-gray-700 text-sm font-bold  " htmlFor="password">
                                <div>
                                    Mot de passe
                                </div>
                                <Link to={'./Forgot'} className="text-violet-800">
                                    Mot de passe oublié
                                </Link>
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 placeholder:text-black placeholder:font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="............"
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                            className="mr-2 leading-tight"
                            id="rememberMe"
                            type="checkbox"
                            />
                            <label className="text-gray-700 text-sm" htmlFor="rememberMe">
                            Se souvenir de moi
                            </label>
                        </div>
                        <div className="mb-6">
                            <button
                            className="bg-[#5b21b6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                            type="button"
                            >
                            Connexion
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <p>
                                Vous n'avez pas de compte?  
                                {/* <span className="text-blue-600"><a href="/Creation">Créer un c'est gratui</a></span> */}
                            </p>
                            <Link to={'./Creation'} className="text-violet-800">
                                C'est gratui
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        

        <div className="bg-[#5b21b6] w-1/2 flex justify-center items-center">
            <div>
                <div>
                    <img src={Group9}/>
                </div>
                <div className="px-20 ">
                    <span className="text-sm text-white py-7">
                        Ecole241.BUSINESS
                    </span>
                    <p className="text-white  text-2xl">
                        Etudier en ligne devient plus facil- <br/> Vous pouvez toujours étudier avec Ecole <br/> 241 Business
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login