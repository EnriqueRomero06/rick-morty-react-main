import { React } from "react";

const Bienvenido = () => {
    return (
        
        <section id="bienvenido" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
            
            <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
                <div className="flex flex-col gap-8">
                    <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
                        Bienvenido a
                    </h1>
                    <p className="text-gray-500 text-2xl leading-[2.5rem]">
                        Rick y Morty Fanpage de "CONFIANZA"
                    </p>
                </div>
            </div>
            <div className="md:col-span-3 flex items-center justify-center relative -z-50">
                <div>
                    <img
                        src="https://i.pinimg.com/originals/98/29/21/9829215db6f9210c0ae4e318e854cb1f.png"
                        className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] xl:-mt-28"/>
                </div>
            </div>            
        </section>
    );
}

export default Bienvenido;