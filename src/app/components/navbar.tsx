export default function Navbar() {
    return (  
        <header className="w-full">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className='flex items-center'>
                        <img src="/o&e.svg" alt="oceaneath_logo" className="w-64 object-contain" />
                    </div>

                    <div className="text-2xl font-sans font-thin flex items-center justify-center ml-8 space-x-4">
                        <a href="#" className="text-white">Products</a>
                        <a href="#" className="text-white">About</a>
                        <a href="#" className="text-white">Contact</a>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <img src="/cart.svg" alt="cart_svg" className="w-8 object-contain" />
                    <img src="/profile.svg" alt="profile_svg" className="w-8 object-contain" />
                </div>
            </nav>
        </header> 
    );
}
