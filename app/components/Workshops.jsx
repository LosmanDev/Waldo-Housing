import { WaldoSliderDemo } from './ui/WaldoSliderDemo';

const Workshops = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-id="super-duper"
      id="workshop"
      className="bg-white mb-10"
    >
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center bg-gradient-to-r from-custom-green to-custom-cream text-transparent bg-clip-text">
          WorkShops
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-id="super-duper"
          className="w-full text-center mb-3 "
        >
          <WaldoSliderDemo />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          className="grid grid-cols-1 items-center text-center px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
            className="flex items-center mx-auto mb-2"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4zM6.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z"
            ></path>
          </svg>

          <h1 className="text-center font-medium text-slate-700 text-2xl mb-1">
            Financial Literacy For Afghans
          </h1>

          <span className="font-medium text-slate-500 text-xl mb-5">
            Start Dates: Start Dates: 5/3/2024 & 5/4/2024
          </span>

          <h1 className="text-center font-medium text-slate-700 text-2xl mb-1">
            Financial Literacy For Somalis
          </h1>

          <span className="font-medium text-slate-500 text-xl mb-5">
            Start Dates: Start Dates: 4/26/2024 & 4/27/2024
          </span>

          <h1 className="text-center font-medium text-slate-700 text-2xl mb-1">
            Financial Literacy For Newcomers
          </h1>

          <span className="font-medium text-slate-500 text-xl mb-5">
            Start Dates: 12/10/2022, 12/17/2022, 1/7/2023 & 1/14/2023
          </span>
          <h1 className="font-medium text-slate-700 text-2xl mb-1">
            Virtual Home Buyer Class
          </h1>
          <span className="font-medium text-slate-500 text-xl mb-5">
            Start Dates: 5/10/2022, 5/11/2022 & 5/12/2022
          </span>
          <h1 className="font-medium text-slate-700 text-2xl mb-1">
            First Time Home Buyer Program
          </h1>
          <span className="font-medium text-slate-500 text-xl pb-2">
            Start Dates: 11/13/2021, 11/20/2021 & 12/4/2021
          </span>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          data-width="100%"
          className="grid grid-cols-1 gap-4 px-3 mt-10 mb-10"
        >
          <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center bg-gradient-to-r from-custom-green to-custom-cream text-transparent bg-clip-text">
            Join our Facebook page for updates and more..
          </h2>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-id="super-duper"
          className="flex items-center justify-center mb-20 px-5"
        >
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWaldoFoundation%2F&tabs=timeline&width=450&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1059198042044580"
            width="450"
            height="500"
            style={{ border: 'none', overflow: 'hidden' }}
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
