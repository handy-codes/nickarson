import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                Nickarson
            </div>
            <div className="">
                <SidebarRoutes/>
            </div>
        </div>
     );
}
 
export default Sidebar;