import logo from '../assets/anonymous.svg'

const NavBar = () => {
  return (

    //navbar component begins here
    <div>
    <nav className="flex bg-gray-400 text-white w-full h-12 justify-normal mt-0 pt-2  ">
      
      
        <div className='mr-2 ml-2'>
          <img src={logo} alt="logo" className='bg-gray-400 h-8 w-8'/>
        </div>

        <div>
        <span className='flex text-black font-semibold mr-2'>
          Kengan Ashura
        </span>
        </div>
    </nav>
    </div>
  )
}

export default NavBar