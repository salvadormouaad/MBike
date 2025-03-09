import { useSelector } from "react-redux"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './App'
import Buttonn from "./index3";

gsap.registerPlugin(useGSAP)
export default function Index1(){
    const reduxRoad=useSelector((state)=>{return state.gear.qasques.road.heron})




    gsap.timeline({
        scrollTrigger: {
            trigger:'#parent',
            start: "center center",
            end: "+=200%",
            pin:'.outermost-parent', // pin:'.outermost-parent'// didn't work. It is leaving huge white space
            scrub: 1, // Smooth scrolling animation
            toggleActions: "play none none reverse",
            markers:true
          }
      }).from('.card',{ 
          opacity: 0,
          yPercent:100, 
          duration: 1,
          stagger: 0.1, // Adjust the stagger time as needed
          ease: "Power4.easeOut", // You can change the easing function,
          })
    return <>
        
        {
            reduxRoad.map((val,index)=>{
            return index===0 && <div className="flex flex-col md:w-100" key={index}>
            <a href="#" className=" border border-gray-200 items-center bg-white  rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src={val.images.ROAD_HERON_BLACK_1}  alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{val.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{/*val.description*/} </p>
                <Buttonn/>
                </div>

            </a>
          </div>
            })
        }



<div class="max-w-4xl mx-auto overflow-x-hidden">
  <div class="flex flex-col h-screen bg-yellow-400 py-16">
    <h2 class="text-4xl">Yellow Section</h2>
  </div>
  <div class="outermost-parent flex flex-col gap-16 bg-purple-300 py-16">
    <div>
      <h2 class="text-4xl">Specifications</h2>
    </div>
    <div id="parent" class="bg-orange-400 max-h-fit w-full"> 
        <div id="child" class="flex gap-4 bg-gray-500 h-full bg-red-500"> 
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 1</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 2</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 3</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 4</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 5</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 6</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 7</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 8</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 9</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 10</h3> </div>
          <div class="card h-full flex-1 p-8 border bg-white"> <h3>Card Title 11</h3> </div>
        </div>
    </div>
  </div>
  <div class="flex flex-col h-screen bg-blue-600 py-16">
    <h2 class="text-4xl">Blue Section</h2>
  </div>
</div>
    </>
}