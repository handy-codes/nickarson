import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <h1 className="font-bold">WandyTech</h1>
            </div>
            <div className="">
                <SidebarRoutes/>
            </div>
        </div>
     );
}
 
export default Sidebar;