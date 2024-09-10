"use client";

import { NavbarRoutes } from "@/components/navbar-routes";
// import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"
// import { SafeProfile } from "@/types";

// interface NavbarProps  {
//     currentProfile?: SafeProfile | null
// }

// export const Navbar : React.FC<NavbarProps> = ({
//     currentProfile
//   }) => {

export const Navbar  = () => {

    return (
        <div className="p-4 border-b h-full flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm">
             <MobileSidebar />
             <NavbarRoutes/>
            {/* //  <NavbarRoutes currentProfile={currentProfile}/> */}
        </div>
    )
}














// "use client"

// // import { UserButton } from "@clerk/nextjs";
// import { MobileSidebar } from "./mobile-sidebar";

// const Navbar = () => {
//     return ( 
//         <div className="p-4 border-b h-full flex items-center bg-transparent bg-white shadow-sm">
//             <MobileSidebar/>
//         </div>
//      );
// }
 
// export default Navbar;  