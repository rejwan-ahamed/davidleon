import React from "react";

const PricingSection = () => {
  return (
    <div id="pricing">
      <section
        id="pricing"
        aria-labelledby="pricing-title"
        class="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2
              id="pricing-title"
              class="text-3xl font-medium tracking-tight text-gray-900"
            >
              Flat pricing, no management fees.
            </h2>
            <p class="mt-2 text-lg text-gray-600">
              Whether you’re one person trying to get ahead or a big firm trying
              to take over the world, we’ve got a plan for you.
            </p>
          </div>
          <div class="mt-8 flex justify-center">
            <div class="relative">
              <div
                class="grid grid-cols-2"
                id="headlessui-radiogroup-:R6pm:"
                role="radiogroup"
              >
                <div
                  class="cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 rounded-l-lg"
                  id="headlessui-radiogroup-option-:R6mpm:"
                  role="radio"
                  aria-checked="false"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  Monthly
                </div>
                <div
                  class="cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 -ml-px rounded-r-lg"
                  id="headlessui-radiogroup-option-:Rampm:"
                  role="radio"
                  aria-checked="true"
                  tabindex="0"
                  data-headlessui-state="checked"
                >
                  Annually
                </div>
              </div>
              <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300 [clip-path:inset(0_0_0_calc(50%-1px))]"
              >
                <div class="py-2 text-center text-sm font-semibold text-white [&amp;:not(:focus-visible)]:focus:outline-none">
                  Monthly
                </div>
                <div class="py-2 text-center text-sm font-semibold text-white [&amp;:not(:focus-visible)]:focus:outline-none -ml-px">
                  Annually
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            <section class="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
              <h3 class="flex items-center text-sm font-semibold text-gray-900">
                <svg
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none fill-gray-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                  ></path>
                </svg>
                <span class="ml-4">Starter</span>
              </h3>
              <p class="relative mt-5 flex text-3xl tracking-tight text-gray-900">
                $0
              </p>
              <p class="mt-3 text-sm text-gray-700">
                You’re new to investing but want to do it right. Get started for
                free.
              </p>
              <div class="order-last mt-6">
                <ul
                  role="list"
                  class="-my-2 divide-y text-sm divide-gray-200 text-gray-700"
                >
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Commission-free trading</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Multi-layered encryption</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">One tip every day</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Invest up to $1,500 each month</span>
                  </li>
                </ul>
              </div>
              <a
                class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
                aria-label="Get started with the Starter plan for [object Object]"
                href="/register"
              >
                Get started for free
              </a>
            </section>
            <section class="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
              <h3 class="flex items-center text-sm font-semibold text-gray-900">
                <svg
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none fill-gray-500"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                  ></path>
                </svg>
                <span class="ml-4">Investor</span>
              </h3>
              <p class="relative mt-5 flex text-3xl tracking-tight text-gray-900">
                <span
                  aria-hidden="true"
                  class="transition duration-300 pointer-events-none translate-x-6 select-none opacity-0"
                >
                  $7
                </span>
                <span
                  aria-hidden="false"
                  class="absolute left-0 top-0 transition duration-300"
                >
                  $70
                </span>
              </p>
              <p class="mt-3 text-sm text-gray-700">
                You’ve been investing for a while. Invest more and grow your
                wealth faster.
              </p>
              <div class="order-last mt-6">
                <ul
                  role="list"
                  class="-my-2 divide-y text-sm divide-gray-200 text-gray-700"
                >
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Commission-free trading</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Multi-layered encryption</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">One tip every hour</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Invest up to $15,000 each month</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-cyan-500"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Basic transaction anonymization</span>
                  </li>
                </ul>
              </div>
              <a
                class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
                aria-label="Get started with the Investor plan for [object Object]"
                href="/register"
              >
                Subscribe
              </a>
            </section>
            <section class="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 order-first bg-gray-900 lg:order-none">
              <h3 class="flex items-center text-sm font-semibold text-white">
                <svg
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none fill-cyan-500"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                  ></path>
                </svg>
                <span class="ml-4">VIP</span>
              </h3>
              <p class="relative mt-5 flex text-3xl tracking-tight text-white">
                <span
                  aria-hidden="true"
                  class="transition duration-300 pointer-events-none translate-x-6 select-none opacity-0"
                >
                  $199
                </span>
                <span
                  aria-hidden="false"
                  class="absolute left-0 top-0 transition duration-300"
                >
                  $1,990
                </span>
              </p>
              <p class="mt-3 text-sm text-gray-300">
                You’ve got a huge amount of assets but it’s not enough. To the
                moon.
              </p>
              <div class="order-last mt-6">
                <ul
                  role="list"
                  class="-my-2 divide-y text-sm divide-gray-800 text-gray-300"
                >
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Commission-free trading</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Multi-layered encryption</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Real-time tip notifications</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">No investment limits</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Advanced transaction anonymization</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="h-6 w-6 flex-none text-white"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        fill="currentColor"
                      ></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span class="ml-4">Automated tax-loss harvesting</span>
                  </li>
                </ul>
              </div>
              <a
                class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors mt-6"
                aria-label="Get started with the VIP plan for [object Object]"
                href="/register"
              >
                Subscribe
              </a>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
