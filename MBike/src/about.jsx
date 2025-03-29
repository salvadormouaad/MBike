import React from 'react';
const BikeAboutTown = () => {
  return (
    <div className="flex min-h-screen bg-white-100">
      {/* Sidebar */}
      <div >
        <img src="Capt.PNG" alt="Bike" className="w-full h-auto rounded-lg" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
  <h1 className="text-6xl font-bold mb-8 text-gray-800 text-center">
    MBIKE<br />ABOUT<br />TOWN
  </h1>
        <p className="text-lg text-gray-600 mb-8 font-bold">
          Bienvenue chez Mbike, votre destination incontournable pour tout ce qui concerne le monde du vélo ! Que vous soyez passionné de VTT, amateur de route, adepte du gravel, cycliste urbain ou fan d’e-bikes, nous avons tout ce qu’il vous faut.
          <br />
          Notre mission est simple : offrir aux cyclistes de tous niveaux les meilleurs vélos, accessoires et équipements pour une expérience optimale. Nous sélectionnons avec soin des produits de haute qualité auprès des plus grandes marques, garantissant performance, confort et sécurité.
          <br />
          Notre équipe de passionnés est toujours à votre disposition pour vous conseiller et vous aider à trouver l’équipement idéal, que vous cherchiez un vélo performant, un casque ultra-sécurisé ou les dernières innovations en matière d’accessoires.
          <br />
          En plus de notre large gamme de produits, nous proposons également des services dédiés aux cyclistes : entretien et réparation, conseils personnalisés, essais de vélos, et bien plus encore. Nous croyons que chaque cycliste mérite le meilleur, et c’est pourquoi nous nous engageons à vous accompagner à chaque coup de pédale.

        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <strong className="block text-lg font-semibold text-gray-700">Frame Material</strong>
            <span className="text-gray-600">Superlite Aluminum</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <strong className="block text-lg font-semibold text-gray-700">Free Space for Tires</strong>
            <span className="text-gray-600">58 mm</span>
          </div>
        </div>
      </div>
     {/*icon */} 
     <div className="flex items-center justify-center p-6 gap-5 w-fit h-fit shadow-[0px_0px_20px_rgba(0,0,0,0.055)]">
          {/* Facebook */}
          <a href="#" className="flex items-center justify-center w-[52px] h-[52px] bg-[rgb(44,44,44)] overflow-hidden transition-[0.3s] hover:bg-[#1877F2] active:scale-90 group">
            <svg className="w-[17px] group-hover:animate-[slide-in-top_0.3s_both]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgb(255,255,255)" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>

          {/* X (Twitter) */}
          <a href="#" className="flex items-center justify-center w-[52px] h-[52px] bg-[rgb(44,44,44)] overflow-hidden transition-[0.3s] hover:bg-black active:scale-90 group">
            <svg className="w-[17px] group-hover:animate-[slide-in-top_0.3s_both]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgb(255,255,255)" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="flex items-center justify-center w-[52px] h-[52px] bg-[rgb(44,44,44)] overflow-hidden transition-[0.3s] hover:bg-[#d62976] active:scale-90 group">
            <svg className="w-[17px] group-hover:animate-[slide-in-top_0.3s_both]" viewBox="0 0 16 16">
              <path fill="rgb(255,255,255)" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a href="#" className="flex items-center justify-center w-[52px] h-[52px] bg-[rgb(44,44,44)] overflow-hidden transition-[0.3s] hover:bg-[#0072b1] active:scale-90 group">
            <svg className="w-[17px] group-hover:animate-[slide-in-top_0.3s_both]" viewBox="0 0 448 512">
              <path fill="rgb(255,255,255)" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </a>
        </div>


    </div>
  );
};

export default BikeAboutTown;