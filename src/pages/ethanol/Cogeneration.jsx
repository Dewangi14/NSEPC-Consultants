import React from 'react'

const Cogeneration = React.forwardRef((props, ref) => {
  return (
    <section 
    ref={ref}
    data-text={`Cogeneration & Power.....
      Waste-to-power and steam generation integrated in biorefineries.
        Cogeneration uses bagasse and other residues to produce steam and electricity — enabling self-sufficiency and exportable power generation for industrial sites.
                `}
    className="py-16 lg:py-20 px-6 lg:px-20 bg-pink-50">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="order-1 lg:order-1 w-full h-full flex justify-start">
        <img
          className="w-full h-full object-cover"
          src="/assets/cogeneration-diagram.webp"
        />
      </div>
      <div className="order-1 lg:order-1 py-10">
        <h3 className="text-[#061833] font-bold text-lg lg:text-xl text-left mb-6">
        Cogeneration & Power
        </h3>

        <p className="text-slate-700 mb-4 font-semibold">
        Waste-to-power and steam generation integrated in biorefineries.
        </p>

        <p className="text-slate-700 mb-4">
        Cogeneration uses bagasse and other residues to produce steam and electricity — enabling self-sufficiency and exportable power generation for industrial sites.
        </p>
      </div>
    </div>
  </section>
  )
})

export default Cogeneration