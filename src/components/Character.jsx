function Character({ character }) {
	return (
		<div className="p-4 sm:w-1/3 lg:w-1/4 shadow-xl shadow-lime-900 rounded-2xl bg-slate-700 text-white items-center justify-center">
			<h2 className="pb-2 text-center font-semibold text-xl">
				{character.name}
			</h2>
			<img
				className="rounded-full p-3"
				src={character.image}
				alt={character.name}
			/>
			<p className="pb-2 text-center font-semibold">Origen: {character.origin.name}</p>
			<p className="pb-2 text-center font-semibold">Ubicacion: {character.location.name}</p>
		</div>
	);
}

export default Character;