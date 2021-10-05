import Image from "next/image";


// Conditional render of JSX
function SidebarRow({src, Icon, title}) {
    return (
        <div className ="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
            {/* If someone passed in a src then perform the folling */}
            {src && 
                <Image 
                    className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"
                />
            }

            {/* If someone passed in an Icon then perform the following */}
            {Icon && <Icon className="h-8 w-8 text-blue-500" />}

            <p className="hidden sm:inline-flex font-medium">
                {title}
            </p>
        </div>
    );
}

export default SidebarRow
