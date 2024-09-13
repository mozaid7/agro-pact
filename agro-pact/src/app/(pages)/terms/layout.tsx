// import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import { navItems } from "@/data";

import { NavbarDemo } from "@/components/Navbar";

export default function ({children}: {children: React.ReactNode}) {
    return (
        <div>
            {/* <FloatingNav navItems={navItems} /> */}
            <NavbarDemo></NavbarDemo>
            {children}
        </div>
    )
}