import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-black max-h-[840px] mt-10 flex flex-col justify-center items-center">
        {/* Sign Up */}
        <div class="w-full md:w-[95%] lg:w-full xl:w-[95%] mx-auto z-50 -mt-5 md:-mt-10 lg:-mt-40 bg-[#0075ff] h-auto md:h-[240px] rounded-2xl flex justify-center">
          <div class="hidden lg:block w-1/2 mt-10">
            <img src="/Images/blue.png" alt="signup" class="w-full h-full" />
          </div>
          <div class="w-full lg:w-1/2">
            <div class="w-[80%] mx-auto my-8 space-y-2">
              <h4 class="text-[#FFFFFFBF] text-3xl font-semibold leading-[40px] max-w-[280px]">
                Sign up to our newsletter.
              </h4>
              <p class="text-[#FFFFFFBF] text-xs leading-[20px] font-normal">
                Craven omni memoria patriae zombieland clairvius narcisse
                religionis sunt diri undead historiarum.
              </p>
              <div class="w-full flex justify-between">
                <input
                  type="text"
                  placeholder="@enter email-adress"
                  class="w-[100%] rounded-md"
                />
                <button class="bg-[#00276F] w-10 h-10">
                  <img
                    src="/Images/plane.svg.svg"
                    alt="plane"
                    class="w-4 h-4 m-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------- */}
        <div class="w-[90%] mx-auto mt-10 flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
          <div class="w-[80%] md:w-[50%] lg:w-[20%] space-y-4">
            <img
              src="/Images/logo.svg.svg"
              alt="footer-logo"
              class="w-[220px] cursor-pointer"
            />
            <div class="w-[60%] lg:w-[80%] flex justify-between cursor-pointer">
              <button class="w-10 h-10 rounded-full bg-[#404259] hover:scale-110">
                <img
                  src="/Images/facebook.svg.svg"
                  alt="facebook"
                  class="mx-auto"
                />
              </button>
              <button class="w-10 h-10 rounded-full bg-[#404259] hover:scale-110">
                <img
                  src="/Images/twitter.svg.svg"
                  alt="twitter"
                  class="mx-auto"
                />
              </button>
              <button class="w-10 h-10 rounded-full bg-[#404259] hover:scale-110">
                <img
                  src="/Images/instagram.svg.svg"
                  alt="instagram"
                  class="mx-auto"
                />
              </button>
            </div>
          </div>

          <div class="w-full lg:w-[75%] flex flex-wrap justify-between items-center">
            <div class="f-options w-[30%] md:w-[20%] lg:w-[15%] space-y-2 cursor-pointer text-left text-[#FFFFFFBF] text-xs font-normal leading-[20px]">
              <p>Home</p>
              <p>Popular</p>
              <p>About</p>
              <p>Contact</p>
            </div>

            <div class="f-options md:w-[20%] lg:w-[15%] space-y-2 cursor-pointer text-left text-[#FFFFFFBF] text-xs font-normal leading-[20px]">
              <p>Help</p>
              <p>Resources</p>
              <p>Application</p>
              <p>Terms</p>
            </div>

            <div class="f-options cursor-pointer space-y-6 mt-4 sm:mt-0">
              <div class="flex justify-between text-center">
                <img src="/Images/nav.svg" alt="navigation" class="w-6 h-6" />
                <p class="text-xs font-normal text-[#FFFFFFBF] leading-[20px] px-2">
                  925 Filbert Street Pennsylvania 18072
                </p>
              </div>
              <div class="flex justify-normal text-center">
                <img src="/Images/tele.svg" alt="Phone" class="w-6 h-6" />
                <p class="text-xs font-normal text-[#FFFFFFBF] leading-[20px] px-2">
                  925 Filbert Street Pennsylvania 18072
                </p>
              </div>
              <div class="flex justify-normal text-center">
                <img src="/Images/mail.svg" alt="email" class="w-5 h-5" />

                <p class="text-xs font-normal text-[#FFFFFFBF] leading-[20px] px-2">
                  925 Filbert Street Pennsylvania 18072
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr class="w-[95%] md:w-[90%] mx-auto mt-10" />
        <div class="w-[90%] mx-auto mb-4 py-4 flex flex-col md:flex-row justify-between place-items-center">
          <p class="text-xs font-normal text-[#FFFFFFBF] leading-[20px]">
            @2023 Agency. All Rights Reserved by Adminmart.com
          </p>
          <p class="text-xs font-normal text-[#FFFFFFBF] leading-[20px]">
            Privacy Policy &nbsp; <span>I</span> &nbsp; Terms & Conditions
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
