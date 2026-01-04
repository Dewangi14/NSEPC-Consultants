import { useRouter } from 'next/router'
import React from 'react'

const Cta = React.forwardRef((props, ref) => {
  const router = useRouter();
  return (
    <section
    id="contact"
    ref={ref}
    data-text={`Partner with N.S. EPC Consultants...
      From feasibility to commissioning, we deliver turnkey ethanol
          and bio-refinery EPC solutions aligned with policy and
          sustainability goals.....
      Schedule a Consultation
                `}
    className="py-16 lg:py-20 px-6 lg:px-20 bg-gradient-to-b to-pink-50 from-white"
  >
    <div className="max-w-6xl mx-auto bg-[#061833] rounded-2xl text-white p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl lg:text-3xl font-bold">
          Partner with N.S. EPC Consultants
        </h3>
        <p className="text-white/90 max-w-xl mt-2">
          From feasibility to commissioning, we deliver turnkey ethanol
          and bio-refinery EPC solutions aligned with policy and
          sustainability goals.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <button
          onClick={()=>{router.push("/payment")}}
          className="bg-pink-100 cursor-pointer hover:bg-pink-100 px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold shadow text-[#061833]"
        >
          Schedule a Consultation
        </button>
        <button
          onClick={()=>{router.push("/#resources")}}
          className="cursor-pointer border border-white text-white px-4 py-2 lg:px-6 lg:py-3 text-center rounded-full font-medium hover:bg-white/5 transition"
        >
          View Resources
        </button>
      </div>
    </div>
  </section>
  )
})

export default Cta