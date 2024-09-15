import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Solutions", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => (


  <footer className="mt-12 border-8 border-transparent-white rounded-3xl py-12 md:py-[5.6rem] text-sm bg-[#1e1b19] text-white md:px-12">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex justify-center items-center text-grey">
            <Image className="mr-2" src="/agropact.svg" width={40} height={40} alt="agropact" />
            <span className="text-3xl tracking-tighter font-bold">Agro Pact</span>
          </div>
          {/* <div className="mt-auto flex space-x-4 text-grey">
          <FaSquareXTwitter />

          </div> */}
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-bold">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-zinc-500 transition-colors hover:text-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>

    <div className="h-[1px] mx-8 w-auto bg-zinc-600 my-8"></div>

    <div className='grid grid-cols-1 md:flex w-full *:text-center justify-between px-6 text-sm'>
      <p>©️ {currentYear} Agro Pact. All Rights Reserved.</p>
      <div className=' flex justify-center md:justify-end gap-4'>
        <a href='/terms' target='_blank'>Privacy Policy</a>
        <a href='/terms' target='_blank'>Terms & Conditions</a>
      </div>
    </div>
  </footer>
);

export default Footer;