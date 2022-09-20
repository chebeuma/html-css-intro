function Navbar(){
    const links =[
        {
           id: 1,
           name: 'SHOP',
           href:'#'
            
        },

        {
            id: 2,
            name: 'COLLECTIVE',
            href:'#'
             
         },

         {
            id: 3,
            name: 'DESIGNERS',
            href:'#'
             
         },

         {
            id: 4,
            name: 'ABOUT US',
            href:'#'
             
         },

         {
            id: 5,
            name: 'CONTACT',
            href:'#'
             
         }

    ]
    return(
        <nav className='flex justify-between bg-blue-300'>
            <div className='p-1'>COZY</div>
            
            <ul className='flex space-x-5'>
                  <li><a href='#'>SHOP</a></li>
                  <li><a href='#'>COLLECTIVE</a></li>
                  <li><a href='#'>DESIGNERS</a></li>
                  <li><a href='#'>ABOUT US</a></li>
                  <li><a href='#'>CONTACT</a></li>

            
                 {
                    links.map()
                 }
            </ul>
        
            <div>cart</div>
       
        </nav>
     
    )
}
export default Navbar