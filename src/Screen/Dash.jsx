import React from "react";
import Dashboard from "../assets/images/Dashboard.png";
import Car from "../assets/images/Car.png";
import Group from "../assets/images/Group.png";
import Logout from "../assets/images/Logout.png";
import tof from "../assets/images/tof.png"
import { Link } from "react-router-dom";

function Dash(){
    return(
        <>
            <div className="flex justify-between">
                <div className="bg-slate-900 w-1/6 h-[100vh]">
                    <div className="py-5 px-5 text-white font-semibold gap-48 flex justify-self-end  flex-col">
                        <div className="flex flex-col gap-5">
                            <div className="flex  gap-5  border-l-4 border-white p-2 bg-violet-800">
                                <img src={Dashboard} className="w-5 h-5"/>
                                <h1>
                                    Dashboard
                                </h1>
                            </div>
                            <div className="flex  gap-5">
                                <img src={Car} className="w-5 h-5"/>
                                <h1>
                                    Véhicules
                                </h1>
                            </div>
                            <div className="flex  gap-5">
                                <img src={Group} className="w-5 h-5"/>
                                <h1>
                                    Réservations
                                </h1>
                            </div>
                        </div>
                        
                        <div className="flex  gap-5 mt-52 hover:bg-violet-800 p-1">
                            <img src={Logout} className="w-5 h-5"/>
                            <h1>
                            <Link to={'/'} className="text-white">
                                Deconnexion
                            </Link>
                            </h1>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>

                {/* partie de droite */}

                <div>
                    <div className="bg-violet-800 p-5 flex justify-between w-[1100px] ">
                        <div className="p-3">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="search"
                                placeholder="Rechercher ici"
                            />
                        </div>
                        <div className="flex justify-between gap-5 p-3 text-end text-white">
                            <div>
                                <h6>
                                    Gabin Moundziegou <br />
                                    Gabin Moundziegou@gmail.com
                                </h6>
                                
                            </div>
                            <div>
                                <img src={tof} className="h-12 w-12"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dash