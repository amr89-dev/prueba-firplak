import "./style.css";
const Overview = () => {
  return (
    <article className="h-full flex flex-col">
      <section className=" flex flex-row py-6 px-8 items-center justify-between">
        <div className=" w-64 h-auto border-2 border-black rounded flex flex-col p-4 bg-red-200 sombra">
          <h4 className="font-semibold text-sm">Guias Generadas</h4>
          <p className="font-bold text-2xl">3</p>
        </div>
        <div className=" w-64 h-auto border-2 border-black rounded flex flex-col p-4 bg-yellow-200 sombra">
          <h4 className="font-semibold text-sm">Guias en Ruta</h4>
          <p className="font-bold text-2xl">20</p>
        </div>
        <div className=" w-64 h-auto border-2 border-black rounded flex flex-col p-4 bg-green-200 sombra">
          <h4 className="font-semibold text-sm">Guias Completadas</h4>
          <p className="font-bold text-2xl">1</p>
        </div>
      </section>
      <section className=" flex flex-row py-6 px-8 items-center justify-around h-full">
        <div className=" w-80 h-full border-2 border-black rounded flex flex-col p-4 sombra ">
          <h4 className="font-semibold text-sm">Novedades</h4>
          <p>No hay novedades en las entregas</p>
        </div>
        <div className=" w-[60%] h-full border-2 border-black rounded flex flex-col p-4 sombra ">
          <h4 className="font-semibold text-sm ">Ultimas Guias Generadas</h4>
          <ul>
            <li>Guia 1</li>
            <li>Guia 2</li>
            <li>Guia 3</li>
            <li>Guia 4</li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Overview;
