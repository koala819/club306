import Link from 'next/link';
import { LuCopyleft } from 'react-icons/lu';
import Image from 'next/image';
import dix31 from '../../../../public/images/DIX31.png';

export default function Footer() {
  return (
    <legend className="w-full px-4 mx-auto text-center bg-[#47464D] text-white">
      <div className="py-4 flex flex-col md:flex-row space-y-8 md:space-y-0">
        <aside className="flex w-full flex-col md:flex-row items-center text-sm tracking-widest space-y-4 md:space-y-0">
          <text className="flex">
            2023 Created by
            <Link
              href="https://www.dix31.com"
              target="_blank"
              className="mx-1 hover:underline"
            >
              <picture className="flex justify-center md:justify-end text-white pr-1 mt-1">
                <Image
                  src={dix31}
                  alt="Logo DIX31.com"
                  height={15}
                  className="text-white"
                />
              </picture>
            </Link>
          </text>
          <text className="flex">
            with
            <Link
              href="https://fr.wikipedia.org/wiki/Copyleft"
              target="_blank"
              className="flex justify-center mx-1 hover:underline"
            >
              Copyleft license
              <LuCopyleft />
            </Link>
          </text>
        </aside>

        <aside className="flex w-full justify-center text-sm tracking-widest">
          Design by
          <Link
            href="https://github.com/koala819/"
            target="_blank"
            className="ml-1 hover:underline"
          >
            Xavier
          </Link>
        </aside>
      </div>
    </legend>
  );
}
