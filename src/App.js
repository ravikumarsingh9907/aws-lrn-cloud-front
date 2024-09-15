import './App.css';

function App() {
  return (
    <div className='w-full container m-auto text-center'>
      <h2 className='p-8 bg-slate-800 text-white text-bold text-3xl m-4'>Amazon CloudFront Check</h2>
      <ul className='w-full flex flex-col gap-4'>
        <li className="flex justify-center">
          <video width="510" height="720" autoPlay muted loop>
            <source src="https://react-cloudfront-demo.s3.amazonaws.com/assets/first.mp4" type='video/mp4'/>
          </video>
        </li>
        <li className='flex justify-center'>
          <video width="510" height="720" autoPlay muted loop>
            <source src="https://react-cloudfront-demo.s3.amazonaws.com/assets/second.mp4" type='video/mp4'/>
          </video>
        </li>
        <li className='flex justify-center'>
          <video width="510" height="720" autoPlay muted loop>
            <source src="https://react-cloudfront-demo.s3.amazonaws.com/assets/third.mp4" type='video/mp4'/>
          </video>
        </li>
        <li className='flex justify-center'>
          <img className='h-72 w-1/3' src="https://react-cloudfront-demo.s3.amazonaws.com/assets/first.jpg" alt='firstimagename' />
        </li>
        <li className='flex justify-center'>
          <img className='h-72 w-1/3' src="https://react-cloudfront-demo.s3.amazonaws.com/assets/second.jpg" alt='secondimagename' />
        </li>
      </ul>
    </div>
  );
}

export default App;
