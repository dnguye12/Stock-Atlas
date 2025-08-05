const Hero = () => {
    return ( 
        <header className="w-full h-[calc(100vh-64px)]">
            <div className="py-32 container mx-auto">
                <div className="text-center">
                    <img src="/icon.svg" alt="logo" className="mx-auto mb-5 w-16 md:mb-6 md:w-24 lg:mb-7 lg:w-28"/>
                    <h1 className="mb-3 text-sm tracking-widest md:text-base">Stock Atlas</h1>
                </div>
            </div>
        </header>
     );
}
 
export default Hero;