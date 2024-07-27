/* eslint-disable react/prop-types */
export const PokemonCard = ({ data }) => {
  console.log(data);
  return (
    <div className="px-4 py-2 shadow-lg rounded-sm text-center relative bg-white">
      <div className="absolute w-full bg-green-200 h-28 z-0 opacity-25 left-0 top-0 rounded-tl-[60%] rounded-tr-[40%] rounded-bl-[30%] rounded-br-[60%] hover:rounded-[0%_0%_50%_50%] cursor-pointer transition-all duration-75"></div>
      <figure className="w-[100px] h-[100px] mx-auto z-20 isolate mb-4">
        <img
          src={data.sprites.other.dream_world.front_default}
          alt=""
          className="w-full z-30 h-full"
        />
      </figure>
      <h1 className="font-bold text-[24px] mt-2 mb-4">{data.name}</h1>

      <p className="bg-green-300 rounded-lg inline px-4 py-1 font-semibold text-white">
        {data.types
          .map((type1) => {
            console.log(type1.type.name);
            return type1.type.name;
          })
          .join(", ")}
      </p>
      <div className="grid grid-cols-3 gap-2 py-5 space-x-1">
        <div>
          <p className="font-bold">Height: </p>
          <p>{data.height}</p>
        </div>
        <div>
          <p className="font-bold">Weight: </p>
          <p>{data.weight}</p>
        </div>
        <div>
          <p className="font-bold">Speed: </p>
          <p>{data.stats[5].base_stat}</p>
        </div>
        <div>
          <p className="font-bold">Experience: </p>
          <p>{data.base_experience}</p>
        </div>
        <div>
          <p className="font-bold">Attack: </p>
          <p>{data.stats[1].base_stat}</p>
        </div>
        <div>
          <p className="font-bold">Abilities: </p>
          <p>
            {data.abilities
              .map((ability1) => {
                return ability1.ability.name;
              })
              .slice(0, 1)}
          </p>
        </div>
      </div>
    </div>
  );
};
