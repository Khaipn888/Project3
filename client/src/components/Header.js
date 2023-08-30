import { Disclosure } from '@headlessui/react'
import { Link , NavLink} from 'react-router-dom'
import logo_test from '../assets/logo_test.png'
import '../assets/headerStyles.css'

const navigation = [
  { name: 'Tìm Trọ', href: '/FindHostel', current: true },
  { name: 'Tìm người ở ghép', href: '/FindRoomMate', current: false },
  { name: 'Đồ dùng', href: '/Neccessary', current: false },
  { name: 'Diễn đàn', href: '/Forum', current: false },

]


export default function Header() {
  return (
    <Disclosure as="nav" className="bg-cyan-100">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link  to='/'> 
                    <img
                      className="h-8 w-auto"
                      src={logo_test}
                      alt="Your Company"

                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-1">
                    {navigation.map((item) => (
                      <NavLink className=' font-medium rounded-lg text-lg navlink' key={item.name} to={item.href} >
                        <div className='px-4 py-2 rounded-lg navlink' >
                          {item.name}
                        </div>
                        
                      </NavLink>
                    ))}
                  </div>
                </div> 
              </div>
              <div className='hidden sm:ml-6 sm:block '>
                <div className="flex space-x-1">
                      <NavLink className='font-medium rounded-lg text-lg navlink' to='/Login'>
                        <div className=' flex px-4 py-2 rounded-lg navlink items-center'>                        
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                          </svg> <span className='mr-2'>Đăng nhập</span>                 
                        
                        </div>
                                           
                      </NavLink>
                      <NavLink className='font-medium rounded-lg text-lg navlink' to='/register'>
                        <div className=' flex px-4 py-2 rounded-lg navlink items-center' >                        
                          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                          </svg>  Đăng Ký            
                        </div>
                      </NavLink>
                      <NavLink className='font-medium rounded-lg text-lg navlink dang-tin' to='/Post'>
                        <div className=' flex px-4 py-2 rounded-lg navlink items-center '>                        
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                          </svg>  Đăng Tin                
                        </div>
                      </NavLink>
                </div>
              </div>        
            </div>
          </div>
    </Disclosure>
  )
}