import codeLogo from "../assets/coding-blocks.png"

export default function Partners() {
    return (
      <div className="bg-1st-bg py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-white lg:text-4xl">
            Our Sponsors
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <a href="https://codingblocks.com/"><img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={codeLogo}
              alt="coding blocks"
            /></a>
          </div>
        </div>
      </div>
    )
  }
  