import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
        <section>
          <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 ">
                <div className="col-span-2 px-6 lg:px-10 lg:pt-4">
                     <div className="relative mx-auto items-center lg:items-start">
                         <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                           <img src="/snake-1.png"/>
                         </div> 
                     </div>
                </div>
          </MaxWidthWrapper>
        </section>
    </div>
  );
}
//20:00