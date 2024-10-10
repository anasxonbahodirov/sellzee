import logo from './assets/icons/images-removebg-preview 2 (1).png'
import ipad from './assets/images/Pixel True Mockup 1.png'
function App() {
  return (
    <>
<body className="bg-blue-600">
    <header className="flex justify-between items-center px-10 py-6">
      <div><img src={logo} alt="" /></div>
        <nav>
            <ul className="flex space-x-6 text-white">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                <li><a href="#" className="hover:text-gray-300">Testimonial</a></li>
                <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
            </ul>
        </nav>
        <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Get Started</a>
    </header>

    <section className="flex justify-between px-10 py-20 text-white">
        <div className="max-w-lg">
            <h1 className="text-sm uppercase tracking-widest">Inspiration Technology.</h1>
            <h2 className="text-4xl font-bold mt-4">Runs faster. Costs less and never breaks.</h2>
            <p className="mt-6 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien lectus sit tristique rhoncus.</p>
            <div className="flex mt-8 space-x-4">
                <a href="#" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">Get Started</a>
                <a href="#" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600">Free Trial</a>
            </div>
        </div>

        <div className="relative">
            <img src={ipad} alt="Dashboard Image" className="w-full max-w-md"img/>
        </div>
    </section>
</body>
    </>
  );
}

export default App;


