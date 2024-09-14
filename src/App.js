import './App.css';
import firstVideo from "./assets/first.mp4"
import secondVideo from "./assets/second.mp4"
import thirdVideo from "./assets/third.mp4"
import firstImage from "./assets/first.jpg"
import secondImage from "./assets/second.jpg"

function App() {
  return (
    <div className='w-full container m-auto text-center'>
      <h2 className='p-8 bg-slate-800 text-white text-bold text-3xl m-4'>Amazon CloudFront Check</h2>
      <ul className='w-full flex flex-col gap-4'>
        <li className="flex justify-center">
          <video width="510" height="720" autoPlay muted loop>
            <source src={firstVideo} type='video/mp4'/>
          </video>
        </li>
        <li className='flex justify-center'>
          <video width="510" height="720" autoPlay muted loop>
            <source src={secondVideo} type='video/mp4'/>
          </video>
        </li>
        <li className='flex justify-center'>
          <video width="510" height="720" autoPlay muted loop>
            <source src={thirdVideo} type='video/mp4'/>
          </video>
        </li>
        <li className='flex justify-center'>
          <img className='h-72 w-1/3' src={firstImage} alt='firstimagename' />
        </li>
        <li className='flex justify-center'>
          <img className='h-72 w-1/3' src={secondImage} alt='secondimagename' />
        </li>
      </ul>
    </div>
  );
}

export default App;
