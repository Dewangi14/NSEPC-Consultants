import React from "react";

const Projects = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      data-text={`Completed Projects......
      Green projects by us..... : Simbhaaoli Sugars unit - Chilwaaria., Simbhaaoli Sugars unit - Brijnaathpur., Eastern India Bio-fuels, Purnia, Eastern Cements , Bokaaro.......
      PMC : Wave Distillery- Aligarh.
      L H Sugar (Distillery unit), Pilibheet.
      ESE Energy, Koodra

      On Going..... : Doab Ethanol, Ballia.....
      K2 Ethanol, Jhaajhar......

      Brown Field..... : 
      Ashoka Distillers, Hathin.....
      Simbhaaoli Distillery, Simbhaaoli.....
      ⁠Eastern India Biofuels, Purnia.....
      ⁠SNJ Distillery, Raanchi
                `}
      className="relative bg-gradient-to-b from-white to-pink-50 py-20 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      <h2 className="text-[#061833] text-3xl lg:text-4xl font-bold mb-16 text-left">
        Completed Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#061833] rounded-2xl h-[300px] hover:-translate-y-1 shadow-lg hover:transition-all hover:duration-300 px-5 py-6 text-white flex flex-col gap-3">
          <div className="text-2xl font-bold mb-2">Green projects by us</div>

          <div>
            <ul className="list-disc pl-5">
              <li className="">Simbhaoli Sugars unit - Chilwaria.</li>
              <li className="mt-4">⁠Simbhaoli Sugars unit - Brijnathpur.</li>
              <li className="mt-4">Eastern India Bio-fuels, PURNEA</li>
              <li className="mt-4">Eastern Cements , Bokaro.</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#061833] rounded-2xl h-[300px] hover:-translate-y-1 shadow-lg hover:transition-all hover:duration-300 px-5 py-6 text-white flex flex-col gap-3">
          <div className="text-2xl font-bold mb-2">PMC</div>

          <div>
            <ul className="list-disc pl-5">
              <li className="">Wave Distillery- Aligarh.</li>
              <li className="mt-4">L H Sugar (Distillery unit), Pilibhit.</li>
              <li className="mt-4">ESE Energy, Kudra</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#061833] rounded-2xl h-[300px] hover:-translate-y-1 shadow-lg hover:transition-all hover:duration-300 px-5 py-6 text-white flex flex-col gap-3">
          <div className="text-2xl font-bold mb-2">On Going</div>

          <div>
            <ul className="list-disc pl-5">
              <li className="">Doab Ethanol, Ballia</li>
              <li className="mt-4">K2 Ethanol, JHAJHAR</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#061833] rounded-2xl h-[300px] hover:-translate-y-1 shadow-lg hover:transition-all hover:duration-300 px-5 py-6 text-white flex flex-col gap-3">
          <div className="text-2xl font-bold mb-2">Brown Field</div>

          <div>
            <ul className="list-disc pl-5">
              <li className="">Ashoka Distillers, Hathin</li>
              <li className="mt-4">Simbhaoli Distillery, Shimbhaoli.</li>
              <li className="mt-4">⁠Eastern India Biofuels, PURNEA.</li>
              <li className="mt-4">⁠SNJ Distillery, Ranchi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
