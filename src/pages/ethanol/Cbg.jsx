import React from 'react'

const Cbg =  React.forwardRef((props, ref) => {
  return (
    <section 
    ref={ref}
    data-text={`CBG or Bio-CNG.....
      Compressed biogas for transport & industry.
        CBG (Compressed Biogas) is produced from anaerobic digestion of organic residues. It complements ethanol projects by using waste streams to produce renewable gas for grid or transport use.
                `}
    className="py-16 lg:py-20 px-6 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="order-1 lg:order-1 py-10">
                <h3 className="text-[#061833] font-bold text-lg lg:text-xl text-left mb-6">
                CBG / Bio-CNG
                </h3>

                <p className="text-slate-700 mb-4 font-semibold">
                Compressed biogas for transport & industry.
                </p>

                <p className="text-slate-700 mb-4">
                CBG (Compressed Biogas) is produced from anaerobic digestion of organic residues. It complements ethanol projects by using waste streams to produce renewable gas for grid or transport use.
                </p>
              </div>

              <div className="order-1 lg:order-1 w-full h-full flex justify-start">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/cbg-diagram.png"
                />
              </div>
            </div>
          </section>
  )
})

export default Cbg