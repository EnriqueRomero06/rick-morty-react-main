import { React } from "react";
import CharacterList from "./CharacterList";

const Personajes = () => {
    return(
        <section id="personajes" className="p-8 xl:p-20 bg-zinc-500">
            <div className="mb-8">
                <h1 className="text-[40px] font-black">
                    Personajes de Rick & Morty
                </h1>
                <p className="text-xl text-gray-500">
                    Puedes leer sobre cada uno de ellos
                </p>
            </div>
            <div class="flex flex-wrap gap-10 items-center justify-center">
                <CharacterList />
            </div>
        </section>
    );
}

export default Personajes;