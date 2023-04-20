import React from "react";

const FeatureSection = () => {
  return (
    <>
      {/* desktop and tab view only */}
      <div className="bg-gray-900 py-20 px-40 sm:px-4 sm:py-32 lg:px-8 xl:px-28 2xl:px-40 hidden sm:block">
        <div className="feature-main text-left font-Inter">
          {/* feature-section-upper part start here */}
          <div className="feature-text sm:px-10 lg:px-0 ">
            <h2 class="text-3xl font-medium tracking-tight text-white">
              Every feature you need to win. Try it for yourself.
            </h2>
            <p class="mt-2 text-lg text-gray-400 sm:w-fll lg:w-[60%]">
              Pocket was built for investors like you who play by their own
              rules and aren’t going to let SEC regulations get in the way of
              their dreams. If other investing tools are afraid to build it,
              Pocket has it.
            </p>
          </div>
          {/* feature section upper part end here */}

          {/* feature section main part start herer */}
          <div className="main-part flex mt-20">
            <div className="feature-left-side w-[50%] flex justify-center">
              {/* feature image here */}
              <img
                src="https://starthub-6.liquid-themes.com/wp-content/uploads/2022/07/phone.png"
                className="w-[20rem]"
                alt=""
                srcset=""
              />
            </div>
            <div className="feature-right-side w-[50%]">
              <div
                class="relative z-10 order-last col-span-6 space-y-6"
                role="tablist"
                aria-orientation="vertical"
              >
                <div className="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                  <div
                    class="absolute inset-0 bg-gray-800 rounded-2xl"
                    data-projection-id="16"
                  ></div>
                  <div class="relative z-10 p-8">
                    <svg viewBox="0 0 32 32" aria-hidden="true" class="h-8 w-8">
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fill-opacity="0.2"
                      ></circle>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
                        fill="#737373"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
                        fill="#A3A3A3"
                      ></path>
                    </svg>
                    <h3 class="mt-6 text-lg font-semibold text-white">
                      <button
                        class="text-left [&amp;:not(:focus-visible)]:focus:outline-none"
                        id="headlessui-tabs-tab-:R2ir9m:"
                        role="tab"
                        type="button"
                        aria-selected="true"
                        tabindex="0"
                        data-headlessui-state="selected"
                        aria-controls="headlessui-tabs-panel-:r2:"
                      >
                        <span class="absolute inset-0 rounded-2xl"></span>Invite
                        friends for better returns
                      </button>
                    </h3>
                    <p class="mt-2 text-sm text-gray-400">
                      For every friend you invite to Pocket, you get insider
                      notifications 5 seconds sooner. And it’s 10 seconds if you
                      invite an insider.
                    </p>
                  </div>
                </div>
                <div class="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                  <div class="relative z-10 p-8">
                    <svg viewBox="0 0 32 32" aria-hidden="true" class="h-8 w-8">
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fill-opacity="0.2"
                      ></circle>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                        fill="#A3A3A3"
                      ></path>
                      <path
                        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
                        fill="#737373"
                      ></path>
                    </svg>
                    <h3 class="mt-6 text-lg font-semibold text-white">
                      <button
                        class="text-left [&amp;:not(:focus-visible)]:focus:outline-none"
                        id="headlessui-tabs-tab-:R2kr9m:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                      >
                        <span class="absolute inset-0 rounded-2xl"></span>
                        Notifications on stock dips
                      </button>
                    </h3>
                    <p class="mt-2 text-sm text-gray-400">
                      Get a push notification every time we find out something
                      that’s going to lower the share price on your holdings so
                      you can sell before the information hits the public
                      markets.
                    </p>
                  </div>
                </div>
                <div class="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                  <div class="relative z-10 p-8">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      aria-hidden="true"
                      class="h-8 w-8"
                    >
                      <defs>
                        <linearGradient
                          id=":R1mr9m:-gradient"
                          x1="14"
                          y1="14.5"
                          x2="7"
                          y2="17"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#737373"></stop>
                          <stop
                            offset="1"
                            stop-color="#D4D4D4"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fill-opacity="0.2"
                      ></circle>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
                        fill="#A3A3A3"
                      ></path>
                      <path
                        d="M7 22c0-4.694 3.5-8 8-8"
                        stroke="url(#:R1mr9m:-gradient)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
                        fill="#A3A3A3"
                      ></path>
                    </svg>
                    <h3 class="mt-6 text-lg font-semibold text-white">
                      <button
                        class="text-left [&amp;:not(:focus-visible)]:focus:outline-none"
                        id="headlessui-tabs-tab-:R2mr9m:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabindex="-1"
                        data-headlessui-state=""
                      >
                        <span class="absolute inset-0 rounded-2xl"></span>Invest
                        what you want
                      </button>
                    </h3>
                    <p class="mt-2 text-sm text-gray-400">
                      We hide your stock purchases behind thousands of anonymous
                      trading accounts, so suspicious activity can never be
                      traced back to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* feature section main part end here */}
        </div>
      </div>

      {/* desktop and tab view only end here */}

      {/* feature for mobile start here */}

      {/* feature for mobile end here */}
    </>
  );
};

export default FeatureSection;
