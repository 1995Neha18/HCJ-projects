import React from 'react'

const Network = () => {
  return (
    <>
      <div class="bg-[#d5f1f9]">
          <div>
            <h2
              class="text-5xl text-center font-bold leading-[70px] w-[95%] md:w-[70%] lg:w-[50%] mx-auto py-8"
            >
              Our network & world work details.
            </h2>
            <div class="w-[95%] mx-auto">
              <img src="/Images/Map.png" alt="Map" class="w-full h-full" />
            </div>
          </div>
          <div
            class="w-[95%] mx-auto py-4 space-y-4 md:space-y-2 lg:space-y-0 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            <div
              class="w-[90%] md:w-[70%] lg:w-[190px] py-8 bg-white shadow-xl rounded-lg cursor-pointer"
            >
              <div class="w-[90%] mx-auto space-y-2">
                <div class="flex justify-normal">
                  <img
                    src="/images/bangladesh.svg (1).svg"
                    alt="bangladesh"
                    class="w-12 h-12"
                  />
                  <p
                    class="text-lg text-[#183B56] font-medium text-center my-auto px-2"
                  >
                    Bangladesh
                  </p>
                </div>
                <hr class="text-black" />

                <p
                  class="w-full md:w-[190px] lg:w-[130px] text-[#7C8F9E] text-sm text-left"
                >
                  Event madness gathering innoies, & tech enthusiasts in Speced.
                </p>
              </div>
            </div>
            <div
              class="w-[90%] md:w-[70%] lg:w-[190px] py-8 bg-white shadow-xl rounded-lg cursor-pointer"
            >
              <div class="w-[90%] mx-auto space-y-2">
                <div class="flex justify-normal">
                  <img
                    src="/images/United.svg"
                    alt="United"
                    class="w-12 h-12"
                  />
                  <p
                    class="text-lg text-[#183B56] font-medium text-center my-auto px-1"
                  >
                    United States
                  </p>
                </div>
                <hr class="text-black" />

                <p
                  class="w-full md:w-[190px] lg:w-[130px] text-[#7C8F9E] text-sm text-left"
                >
                  Event madness gathering innoies, & tech enthusiasts in Speced.
                </p>
              </div>
            </div>
            <div
              class="w-[90%] md:w-[70%] lg:w-[190px] py-8 bg-white shadow-xl rounded-lg cursor-pointer"
            >
              <div class="w-[90%] mx-auto space-y-2">
                <div class="flex justify-normal">
                  <img src="/images/Aus.svg" alt="Aus" class="w-12 h-12" />
                  <p
                    class="text-lg text-[#183B56] font-medium text-center my-auto px-2"
                  >
                    Australia
                  </p>
                </div>
                <hr class="text-black" />

                <p
                  class="w-full md:w-[190px] lg:w-[130px] text-[#7C8F9E] text-sm text-left"
                >
                  Event madness gathering innoies, & tech enthusiasts in Speced.
                </p>
              </div>
            </div>
            <div
              class="w-[90%] md:w-[70%] lg:w-[190px] py-8 bg-white shadow-xl rounded-lg cursor-pointer"
            >
              <div class="w-[85%] mx-auto space-y-2">
                <div class="flex justify-normal">
                  <img src="/images/China.svg" alt="China" class="w-12 h-12" />
                  <p
                    class="text-lg text-[#183B56] font-medium text-center my-auto px-2"
                  >
                    China
                  </p>
                </div>
                <hr class="text-black" />

                <p
                  class="w-full md:w-[190px] lg:w-[130px] text-[#7C8F9E] text-sm text-left"
                >
                  Event madness gathering innoies, & tech enthusiasts in Speced.
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Network
