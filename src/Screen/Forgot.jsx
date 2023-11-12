import React, { useState } from "react";
import Group91 from "../assets/images/Group91.png"
import { Link } from "react-router-dom";


function Forgot(){
    // je declare une constante qui contien la donné du formulaire que je veux recueillire
    const [data, setData] = useState({
        email: "",
    })

    const handelChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(data)
    }




    return (
        
            <div className="flex justify-between">
                <div className="flex justify-center items-center w-1/2">
                    <div className="flex items-center justify-center h-screen bg-white">
                        <div className=" p-8 max-w-md w-full">
                            <div className="bg-blue-200 h-12 w-12 px-2 py-3 my-8 rounded font-bold text-sm text-blue-600">
                                E241
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold py-2">
                                    Mot de pass oublié
                                </h1>
                                <p className="text-sm text-gray-700  pb-5">
                                    Siasissez votre email pour recuperer votre mot de passe, <br/>
                                    Vous allez recevoir un email confirmer la demande de <br/> réinitialisation
                                </p>
                            </div>

                            <form onSubmit={handelSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                                    E-mail
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handelChange}
                                    placeholder="Sapul@gmail.com"
                                    />
                                </div>
                                
                                <div className="mb-6">
                                    <button
                                    className="bg-violet-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline drop-shadow-2xl"
                                    type="submit"
                                    >
                                    <Link to={'/Reset'} className="text-white">
                                        Connexion
                                    </Link>
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    <p>
                                        Je me souviens de mon mot de passe? 
                                    </p>
                                    <Link to={'/'} className="text-violet-800">
                                        Connexion
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                

                <div className="bg-violet-800 w-1/2 flex justify-center items-center">
                    <div>
                        <div>
                            <img src={Group91}/>
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

export default Forgot