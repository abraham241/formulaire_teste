import React from "react";
import Group11 from "../assets/images/Group11.png"
import { Link } from "react-router-dom";

function Reset(){
    return (
        <div class="flex justify-between">
        <div class="flex justify-center items-center w-1/2">
            <div class="flex items-center justify-center h-screen bg-white">
                <div class=" p-8 max-w-md w-full">
                    <div class="bg-blue-200 h-12 w-12 px-2 py-3 my-8 rounded font-bold text-sm text-blue-600">
                        E241
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold py-2">
                            Reinitialisation de mot de passe
                        </h1>
                        <p class="text-sm text-gray-700  pb-5">
                            N'utilisez pas de mot de passe difficile à utilisez, ce serait <br/> un probleme pour les gens.
                        </p>
                    </div>

                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold" htmlFor="password">
                            nouveau Mot de passe 
                            </label>
                            <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 placeholder:text-black placeholder:font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder=".............................."
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold" htmlFor="password">
                            Ressaisissez le nouveau Mot de passe
                            </label>
                            <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 placeholder:text-black placeholder:font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder=".............................."
                            />
                        </div>
                        
                        <div class="mb-6">
                            <button
                            class="bg-violet-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                            type="button"
                            >
                            
                            <Link to={'/'} className="text-withe">
                                Confirmer la réinitialisation 
                            </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        

        <div class="bg-violet-800 w-1/2 flex justify-center items-center">
            <div>
                <div>
                    <img src={Group11}/>
                </div>
                <div class="px-20 ">
                    <span class="text-sm text-white py-7">
                        Ecole241.BUSINESS
                    </span>
                    <p class="text-white  text-2xl">
                        Etudier en ligne devient plus facil- <br/> Vous pouvez toujours étudier avec Ecole <br/> 241 Business
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Reset