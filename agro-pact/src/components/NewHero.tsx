import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import ClientNavbar from "./ClientNav";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import { motion } from "framer-motion";
import Safari from "./ui/safari";
import { MouseImageTrail } from "./ui/mouse-image-trail";
import { BorderBeam } from "./ui/border-beam";

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
};

const SECTION_HEIGHT = 200;

const Hero = () => {
    return (
        <div className="z-0">
            <MouseImageTrail
                renderImageBuffer={50}
                rotationRange={25}
                images={[
                    "./farm1.svg",
                    "./farm2.svg",
                    "./farm3.svg",
                    "./farm4.svg",
                    "./farm5.svg",
                    // "/imgs/active/2.jpg",
                    // "/imgs/active/3.jpg",
                    // "/imgs/active/4.jpg",
                    // "/imgs/active/5.jpg",
                    // "/imgs/active/6.jpg",
                    // "/imgs/active/7.jpg",
                    // "/imgs/active/8.jpg",
                    // "/imgs/active/9.jpg",
                    // "/imgs/active/10.jpg",
                    // "/imgs/active/11.jpg",
                    // "/imgs/active/12.jpg",
                    // "/imgs/active/13.jpg",
                    // "/imgs/active/14.jpg",
                    // "/imgs/active/15.jpg",
                    // "/imgs/active/16.jpg",
                ]}
            >
                <section
                    style={{ height: `calc(${SECTION_HEIGHT}px + 70vh)` }}
                    className="relative w-full"
                >
                    <div className="flex items-center justify-center pt-24 gap-2 z-10">

                        <motion.div
                            className="w-32 items-center"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <Image src="./grain_img.svg" className="h-[55vh] w-fit object-cover" width={24} height={24} alt="fdsf" />
                        </motion.div>
                        <motion.div
                            className="flex flex-col *:text-8xl *:tracking-tighter leading-tight font-sans font-extrabold text-[#84b0c2] z-0"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1>Every Grain Holds</h1>
                            <h1 className="uppercase italic text-zinc-900 tracking-tighter">Value & Purpose</h1>
                            <h1>Ensuring </h1>
                            <h1 className="tracking-tighter">
                                <span className="text-zinc-900 uppercase italic">None</span> go to <span className="uppercase text-[#008150] italic">Waste.</span>
                            </h1>
                        </motion.div>
                    </div>
                </section>

                <div className="items-center flex flex-col justify-center py-16">
                    <h2 className="text-zinc-500 text-xl">Connecting Farmers & Buyers with Transparent & Secure Farming Contracts.</h2>
                    <a href="#_" className="my-3 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                        Sign Up to Get Started!
                    </a>
                </div>
            </MouseImageTrail>


            <div className="relative my-16 mx-4 md:mx-24 sm:mx-10 ">
                <Safari url="agropact.com" src="./farm1.svg" className="size-full" />
                <BorderBeam size={1000} duration={15} delay={9} className="rounded-xl " borderWidth={3.5} colorFrom="#008165" colorTo="#68b589" />
            </div>
            
            {/* bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-600 via-green-400 to-green-200 */}

        </div>
    );
};


const NewHero = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleNavigation = (path: string) => {
        if (session) {
            router.push(path);
        } else {
            router.push("/signin");
        }
    };

    return (
        <>
            <ClientNavbar />
            {!session && (<>
                <div className="bg-[#e4efe6]">
                    <ReactLenis
                        root
                        options={{
                            lerp: 0.05,
                            //   infinite: true,
                            syncTouch: true,
                        }}
                    >
                        <Hero />
                    </ReactLenis>
                </div>
            </>)}
        </>
    )
}

export default NewHero