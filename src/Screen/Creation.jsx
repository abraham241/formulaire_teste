import React, { useState } from "react";
import Groupe10 from "../assets/Group10.png"
import { Link } from "react-router-dom";
import { data } from "autoprefixer";


function Creation(){

    cont [data, setData] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password,
    })

    const handelChange = (event) =>{
        const {name, value} =event.target
        setData({...data,[name]:value });
    }

    const handelSubmit= (event) =>{
        event.preventDefault();
        console.log(data)
    }



    return(
        <div class="flex justify-between">
        <div class="flex justify-center items-center w-1/2">
            <div class="flex items-center justify-center h-screen bg-white">
                <div class=" p-8 max-w-md w-full">
                    <div class="bg-blue-200 h-12 w-12 px-2 py-3 my-8 rounded font-bold text-sm text-blue-600">
                        E241
                    </div>
                    <div>
                        <h1 class="text-3xl font-bold py-2">
                            Connexion
                        </h1>
                        <p class="text-sm text-gray-700  pb-5">
                            Siasissez votre email et votre mot de passe pour avoir <br/> accès au Dashbord
                        </p>
                    </div>

                    <form onSubmit={handelSubmit}>
                        <div class="flex justify-between gap-8">
                            <label class="block text-gray-700 text-sm font-bold lex justify-between gap-8" htmlFor="email">
                                Nom complet
                                <div class="mb-4 flex justify-between gap-8">
                                    <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="fistname"
                                    value={data.firstName}
                                    onChange={handelChange}
                                    type="text"
                                    placeholder="Nom"
                                    />

                                    <input
                                    class="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="last-name"
                                    name="lastname"
                                    value={data.lastName}
                                    onChange={handelChange}
                                    type="text"
                                    placeholder="Prénom"
                                    />
                                </div>
                            </label>  
                        </div>
                        
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold" htmlFor="email">
                            E-mail
                            </label>
                            <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            value={data.email}
                            onChange={handelChange}
                            type="email"
                            placeholder="Aureluis@rocketmail.com"
                            />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold" htmlFor="password">
                            Mot de passe 
                            </label>
                            <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 placeholder:text-black placeholder:font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            value={data.password}
                            onChange={handelChange}
                            type="password"
                            placeholder="............"
                            />
                        </div>
                        <div class="mb-4 text-sm text-gray-500">
                            <div>
                                <p>
                                   En vous inscrivant, vous accèptez les conditions d'utilisation et <br/> la politique de confidentialité de Namanyajougabelajar.io 
                                </p>
                            </div>
                        </div>
                        <div class="mb-6">
                            <button
                            class="bg-[#5b21b6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                            type="submit"
                            >
                            Connexion
                            </button>
                        </div>
                        <div  class="text-center flex gap-2">
                            <p>
                                Vous avez déjà un  compte?  
                                {/* <span class="text-blue-600"><a href="/">Connectez vous</a></span> */}
                            </p>
                            <Link to={'/'} className="text-violet-800">
                                Connectez vous
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        

        <div class="bg-violet-800 w-1/2 flex justify-center items-center">
            <div>
                <div>
                    <img src={Groupe10}/>
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

export default Creation