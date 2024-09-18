import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import ClientNavbar from "./ClientNav";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import { motion } from "framer-motion";
import Safari from "./ui/safari";
import { MouseImageTrail } from "./ui/mouse-image-trail";

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
};

const SECTION_HEIGHT = 200;

const Hero = () => {
    return (
        <>
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
                    <div className="flex items-center justify-center pt-24 gap-2">

                        <motion.div
                            className="w-32 items-center"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <Image src="./grain_img.svg" className="h-[55vh] w-fit object-cover" width={24} height={24} alt="fdsf" />
                        </motion.div>
                        <motion.div
                            className="flex flex-col *:text-8xl *:tracking-tighter leading-tight font-sans font-extrabold text-[#84b0c2]"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0, transition: { duration: 1 } }
                            }}
                        >
                            <motion.h1 variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } }}>Every Grain Holds</motion.h1>
                            <motion.h1 className="uppercase italic text-zinc-900 tracking-tighter" variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } }}>Value & Purpose</motion.h1>
                            <motion.h1 variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } }}>Ensuring </motion.h1>
                            <motion.h1 className="tracking-tighter" variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } }}>
                                <span className="text-zinc-900 uppercase italic">None</span> go to <span className="uppercase text-[#008150] italic">Waste.</span>
                            </motion.h1>
                        </motion.div>
                    </div>
            </section>
                </MouseImageTrail>

            <section className="relative my-16 px-4 md:px-24 sm:px-10">
                <Safari url="agropact.com" src="./farm2.svg" className="size-full" />
                {/* <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-[#e4efe6]" /> */}
            </section>
        </>
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