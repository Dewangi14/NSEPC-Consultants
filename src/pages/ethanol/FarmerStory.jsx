import React from 'react'

const FarmerStory = React.forwardRef((props, ref) => {
  return (
    <section 
    ref={ref}
    data-text={`Empowering Farmers .....
        Ethanol production has given farmers a new income stream and
          turned agricultural produce into a national energy resource.
          Sugarcane, maize and surplus grains are turned into value,
          improving rural livelihoods and driving local development.
          “Ethanol is not just fuel — it’s a promise of prosperity for
          India’s farmers.”

                `}
    className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b from-pink-50 to-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="order-1">
        <h3 className="text-[#061833] font-bold text-3xl lg:text-4xl text-left mb-6">
          Empowering Farmers — From{" "}
          <span className="text-pink-400">Annadaata</span> to{" "}
          <span className="text-pink-400">Urjadaata</span>
        </h3>
        <p className="text-slate-700 mb-4">
          Ethanol production has given farmers a new income stream and
          turned agricultural produce into a national energy resource.
          Sugarcane, maize and surplus grains are turned into value,
          improving rural livelihoods and driving local development.
        </p>

        <blockquote className="border-l-4 border-pink-300 pl-4 italic text-slate-700">
          “Ethanol is not just fuel — it’s a promise of prosperity for
          India’s farmers.”
        </blockquote>

        <div className="mt-6 flex flex-col-reverse lg:flex-row gap-4">
          <a
            href="#contact"
            className="bg-[#061833] text-white px-5 py-2 rounded-full shadow hover:bg-[#0a2850] transition text-center"
          >
            Partner with Farmers
          </a>
          <a href="#bio-refinery" className="text-[#061833] underline text-center">
            Learn about Bio-Refineries
          </a>
        </div>
      </div>

      <div className="order-1 lg:order-2 w-full h-84 rounded-xl overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-top"
          src="/assets/poster-img.png"
        />
      </div>
    </div>
  </section>
  )
})

export default FarmerStory