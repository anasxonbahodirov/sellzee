import logo from './assets/icons/images-removebg-preview 2 (1).png'
import ipad from './assets/images/Pixel True Mockup 1.png'
import fedex from './assets/icons/image 25.png'
import google from './assets/icons/google-1-removebg-preview 1.png'
import ola from './assets/icons/image 27.png'
import microsoft from './assets/icons/new-Microsoft-logo-removebg-preview 1.png'
import amazon from './assets/icons/539f3ffbecad044276726c01-removebg-preview 1.png'
import fedx from './assets/icons/fedx.png'
import walmart from './assets/icons/walmart.png'
import rasm from './assets/images/Group 186.png'
import card from './assets/images/Rectangle 18.png'
function App() {
  return (
    <>
    <body className="bg-blue-600">
    <header className="px-10 py-8">
        <nav className="flex justify-between items-center mb-10">
            <div className="text-white text-2xl font-bold"><img src={logo} alt="" /></div>
            <ul className="flex space-x-8 text-white">
                <li className="hover:text-gray-300 cursor-pointer">Home</li>
                <li className="hover:text-gray-300 cursor-pointer">About</li>
                <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                <li className="hover:text-gray-300 cursor-pointer">Testimonial</li>
                <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
            </ul>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">Get Started</button>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-white lg:w-1/2 space-y-6">
                <h1 className="text-xl uppercase tracking-wider">Inspiration Technology.</h1>
                <h2 className="text-6xl font-bold">Runs faster. <br/>Costs less and <br/> never breaks.</h2>
                <p className="text-gray-300 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Nulla 
                    sapien lectus sit tristique rhoncus, nisi, <br/> malesuada. Tellus 
                    consequat.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">Get Started</button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg">Free Trial</button>
                </div>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0">
                <img src={ipad} alt="Dashboard Image" className="w-full h-auto rounded-lg"img/>
            </div>
        </div>
    </header>
    <main className="bg-gray-50 min-h-screen py-16 px-8">
      <section className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16 items-center">
        <div className="flex justify-center shadow-lg w-60">
          <img
            src={fedex}
            alt="FedEx"
            className="w-40 object-contain m-5	"
          />
        </div>
        <div className="flex justify-center shadow-lg ml-2.5	">
          <img
            src={google}
            alt="Google"
            className="w-40 object-contain m-5"
          />
        </div>
        <div className="flex justify-center shadow-lg ml-2.5	">
          <img
            src={ola}
            alt="Ola"
            className="w-40 object-contain m-4"
          />
        </div>
        <div className="flex justify-center shadow-lg ml-2.5	">
          <img
            src={microsoft}
            alt="Microsoft"
            className="w-40 object-contain m-6"
          />
        </div> 
        <div className="flex justify-center shadow-lg ml-2.5">
          <img
            src={amazon}
            alt="Amazon"
            className="w-40 object-contain m-5"
          />
        </div>
        <div className="flex justify-center shadow-lg">
          <img
            src={fedx}
            alt="fedx"
            className="w-40 object-contain m-2"
          />
        </div> 
        <div className="flex justify-center shadow-lg">
          <img
            src={walmart}
            alt="Walmart"
            className="w-40 object-contain m-5"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 flex flex-col items-center mb-10 md:mb-0">
          <div className="w-full mt-20	">
            <img
              src={rasm}
              alt="Man at Laptop"
              className="w-full h-auto rounded-lg  "
            />
          </div>
          
        </div>

        <div className="md:w-1/2 text-center md:text-left ml-30 ">
          <h3 className="text-orange-500  font-semibold uppercase mb-2">
            Lorem Ipsum Dolor Sit Ame
          </h3>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Simple Solutions for <br/> Complex Connections
          </h2>
          <p className="text-gray-600 mb-6 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec <br/>
            gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi <br/>
            odio a velit feugiat sapien.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <div className="flex items-center space-x-2 text-xl">
              <span className="text-green-500">&#10004;</span>
              <span className="text-gray-600">High Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-xl">
              <span className="text-green-500">&#10004;</span>
              <span className="text-gray-600">Certified Institute</span>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-xl">
            Learn More
          </button>
        </div>
      </section>
      <section class="h-[653px] w-full bg-[url('./assets/images/statisticsSectionBg.png')] bg-cover">
  <div class="flex item-center justify-center h-full">
    <div class="flex items-center gap-[30px]">
      <div class="w-[261px] h-[371px] bg-[url('./assets/images/Rectangle 18.png')] bg-cover flex justify-center pt-[96px]">
        <div>
          <p class="font-bold text-[55px] leading-[66px] text-[#1F37FF]">
            50+
          </p>
          <p>Happy Clients</p>
        </div>
      </div>
      <div class="w-[261px] h-[371px] bg-[url('./assets/images/Rectangle 18.png')] bg-cover flex justify-center pt-[96px]">
        <div>
          <p class="font-bold text-[55px] leading-[66px] text-[#1F37FF]">
            50+
          </p>
          <p>Happy Clients</p>
        </div>
      </div>
      <div class="w-[261px] h-[371px] bg-[url('./assets/images/Rectangle 18.png')] bg-cover flex justify-center pt-[96px]">
        <div>
          <p class="font-bold text-[55px] leading-[66px] text-[#1F37FF]">
            50+
          </p>
          <p>Happy Clients</p>
        </div>
      </div>
      <div class="w-[261px] h-[371px] bg-[url('./assets/images/Rectangle 18.png')] bg-cover flex justify-center pt-[96px]">
        <div>
          <p class="font-bold text-[55px] leading-[66px] text-[#1F37FF]">
            50+
          </p>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
</body>
    </>
  );
}

export default App;


