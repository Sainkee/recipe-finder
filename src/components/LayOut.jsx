
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export default function LayOut() {
  return (
    <div className="flex flex-col min-h-screen  bg-gradient-to-r from-green-200 to-green-500">
 
      <header >
        <NavBar />
      </header>

     
      <main className="flex-grow container mx-auto ">
        <Outlet />
      </main>

     
      <footer className="text-center py-4 bg-gray-100 border-t">
        <p className="text-sm text-gray-500">© 2024 Recipe finder. All rights reserved.</p>
      </footer>
    </div>
  );
}
