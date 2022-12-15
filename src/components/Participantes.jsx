import { React } from "react";

const Participantes = () => {
	return (
    <section  id="participantes">
        <div className="bg-gray-100 px-8 py-16 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
                <h1 className="text-2xl font-medium text-gray-800 text-center">
                    Creadores, Programadores, Husbandos y todos los Adjetivos Calificativos que describan "PERFECCIÓN"
                </h1>
                <p className="text-gray-500 text-2xl leading-[1rem]">
                    Menos "Millonarios"
                </p>
                <h1 className="text-2xl font-medium text-gray-800 text-center">
                    TENEMOS:
                </h1>
            <div class="flex flex-wrap gap-10 items-center justify-center">
                <div class="p-4 sm:w-1/3 lg:w-1/4 shadow-xl shadow-lime-900 rounded-2xl bg-slate-700 text-white">
                    <h2 className="pb-2 text-center font-semibold text-xl">
                        Enmanuel Vásquez
                    </h2>
                    <img
                        className="rounded-full p-3"
                        src="https://i.ibb.co/dJNXRcc/EV.jpg"
                        alt="@elchenol"
                    />
                    <p className="pb-2 text-center font-semibold">Alias: Albert Einstein</p>
                    <p className="pb-2 text-center font-semibold">Edad: 23 años</p>
                </div>
                <div class="p-4 sm:w-1/3 lg:w-1/4 shadow-xl shadow-lime-900 rounded-2xl bg-slate-700 text-white">
                    <h2 className="pb-2 text-center font-semibold text-xl">
                        Bryan Villatoro
                    </h2>
                    <img
                        className="rounded-full p-3"
                        src="https://i.ibb.co/HGF55jp/BL.jpg"
                        alt="newlazz"
                    />
                    <p className="pb-2 text-center font-semibold">Alias: Jeff Bezos</p>
                    <p className="pb-2 text-center font-semibold">Edad: 21 años</p>
                </div>
                <div class="p-4 sm:w-1/3 lg:w-1/4 shadow-xl shadow-lime-900 rounded-2xl bg-slate-700 text-white">
                    <h2 className="pb-2 text-center font-semibold text-xl">
                        Enrique Romero
                    </h2>
                    <img
                        className="rounded-full p-3"
                        src="https://i.ibb.co/SPSY39f/ug.jpg"
                        alt="EnriqueRomero06"
                    />
                    <p className="pb-2 text-center font-semibold">Alias: Steve Jobs</p>
                    <p className="pb-2 text-center font-semibold">Edad: 20 años</p>
                </div>
            </div>   
        </div>
    </section>
	);
}

export default Participantes;