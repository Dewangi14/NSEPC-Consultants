import React from 'react'

const TwoG =  React.forwardRef((props, ref) => {
  return (
    <section
    ref={ref}
    data-text={`2G Ethanol (Residue-Based).....
      Second-generation ethanol from agricultural residues.
       Two G ethanol uses crop residues like straw and bagasse. It unlocks additional feedstock, improves circularity and reduces competition with food crops. More complex but higher sustainability benefits.
                `}
     className="py-16 lg:py-20 px-6 lg:px-20 bg-pink-50">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="order-1 lg:order-1 w-full h-full flex justify-start">
        <img
          className="w-full h-full object-cover"
          src="/assets/2g-diagram.png"
        />
      </div>
      <div className="order-1 lg:order-1 py-10">
        <h3 className="text-[#061833] font-bold text-lg lg:text-xl text-left mb-6">
        2G Ethanol (Residue-Based)
        </h3>

        <p className="text-slate-700 mb-4 font-semibold">
        Second-generation ethanol from agricultural residues.
        </p>

        <p className="text-slate-700 mb-4">
        2G ethanol uses crop residues like straw and bagasse. It unlocks additional feedstock, improves circularity and reduces competition with food crops. More complex but higher sustainability benefits.
        </p>
      </div>
    </div>
  </section>
  )
})

export default TwoG