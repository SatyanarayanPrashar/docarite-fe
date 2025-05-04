"use client"

import { Switch } from "@/components/ui/switch";
import { ArrowRightCircleIcon } from "lucide-react";
import { useParams } from "next/navigation";

export default function Document_page() {
    const { owner, repo } = useParams();
    return (
        <div className="flex w-full justify-between h-[91vh] overflow-y-auto scrollbar-none">
            <div className="sticky top-0 w-[20%] p-7 flex flex-col gap-1 border-r border-dashed border-neutral-200 text-[#666666] text-[14px] scrollbar-none">
                <div className="bg-[#E8E8E8] text-[#333333] p-2 rounded-sm">Introduction</div>
                <div className="p-2">Getting Started</div>
                <div className="p-2">Descriptiom</div>
                <div className="p-2">Feature 1</div>
                <div className="p-2">Feature 2</div>
                <div className="p-2">Feature 3</div>
            </div>
            <div className="w-[60%] px-2">
                <div className="px-14 pt-7 pb-20">
                    <h1 className="text-[#333333] text-xl font-semibold">VS Code Architecture Overview</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet molestiae sit tempore excepturi eveniet delectus corporis facilis dicta assumenda. Officiis modi aliquid necessitatibus rerum sit aut similique atque magni quaerat assumenda possimus, fugit non repellat dolorum labore provident. Delectus, debitis. Fugiat quis dicta, in harum minus blanditiis possimus sequi ex optio atque sint numquam qui facere dolores commodi totam illum assumenda cum. Aliquam voluptas modi natus, impedit in reprehenderit commodi saepe dolorum sapiente fugiat laboriosam magni labore corrupti. Nostrum, voluptate? Modi corrupti corporis illum nihil officiis quibusdam consectetur esse eum dicta saepe expedita doloribus vel perspiciatis tenetur quam reiciendis dolores deserunt, repellat, quisquam assumenda cumque? Assumenda ipsum natus quisquam quam consequatur, exercitationem sequi repudiandae incidunt similique nam blanditiis aspernatur libero eveniet modi, voluptate ea, saepe ullam error enim inventore! Sint sequi culpa cumque tenetur eos repellendus tempore consequuntur obcaecati enim repudiandae autem esse tempora maxime maiores ex explicabo quia ipsa harum voluptatem quae natus, voluptates, eveniet neque. Debitis cumque non architecto aliquam ex voluptates nulla, animi voluptatibus quidem, suscipit iure eveniet mollitia. Quasi vel quos praesentium cumque a, accusamus iusto officia dolorum ut consequatur necessitatibus natus harum at neque in adipisci sit. Amet impedit neque excepturi. Ipsum laborum sunt odit hic error quas, ab tenetur aliquid consequatur ut officiis, neque iusto. Id animi nulla quisquam ullam deserunt repellendus itaque placeat recusandae esse eaque, maxime nostrum reprehenderit quasi ut consequatur repudiandae aliquam voluptatum accusantium aliquid. Aperiam debitis mollitia corporis ex omnis odit, commodi sit perferendis voluptatem deleniti sed molestias non voluptate soluta velit ipsa libero ipsam cumque eaque! Alias exercitationem ullam dolorem magni sunt vero, ea commodi ducimus sequi asperiores explicabo nesciunt aliquid laudantium nam quod nemo voluptatibus eius optio repudiandae molestias laboriosam sapiente iure omnis? Sed cumque impedit architecto debitis? Animi obcaecati molestias cupiditate, voluptates cum fugiat error corporis nisi laborum, velit ea? Culpa voluptates soluta nemo, incidunt id eos architecto deserunt. Hic esse perspiciatis quod? Doloribus vero laudantium fuga quo quam! Adipisci velit optio iure assumenda quia rem nemo modi animi a autem, accusamus, eos iusto ratione totam id. Ad nulla porro itaque nemo sunt tenetur placeat doloribus officiis eius, earum delectus in saepe dignissimos incidunt perspiciatis laborum eaque minima dicta, at qui? Sequi cum delectus ex voluptatem saepe mollitia animi neque doloremque ullam, nesciunt quisquam maiores pariatur vitae tempore aliquid at voluptates labore! Ex magnam quae placeat eligendi vero officia quidem doloremque magni est consequatur enim provident voluptas nisi cupiditate aspernatur culpa minus quaerat, repellendus ad? Modi tenetur dolore autem voluptatem porro quidem eaque deserunt libero inventore unde architecto provident impedit eligendi maiores sunt, delectus saepe repudiandae blanditiis fugiat a et nemo dolorum sed? Officia hic, quisquam ipsa nostrum ex aperiam. Recusandae, unde inventore pariatur ratione, rerum quidem omnis facilis ipsum nemo corrupti aperiam consequatur tempora. Perspiciatis neque aut quas in esse dolore blanditiis voluptas exercitationem! Maiores consequuntur quia voluptas exercitationem reprehenderit odio nam incidunt quae consequatur. Omnis quae quis neque libero, est dolorum animi necessitatibus pariatur totam doloremque rerum, enim aut voluptatem beatae eveniet numquam fugiat voluptatum!</p>
                </div>
                <div className="w-full text-[#666666] bg-neutral-200/70 backdrop-blur-md rounded-md sticky bottom-2 border border-neutral-300/20 shadow-lg shadow-neutral-500/20 overflow-hidden">
                    <input 
                        type="text" 
                        placeholder="Ask Docarite" 
                        className="w-full h-16 p-2 outline-none border-none focus:ring-0"
                    />
                    <div className="flex items-center space-x-2 border-t border-neutral-700/70 p-2 py-3 justify-between">
                        <div className="flex gap-1">
                            <div className="text-[14px]">Deep Research</div>
                            <Switch id="deepresearcj-mode" />
                        </div>
                        <ArrowRightCircleIcon />
                    </div>
                </div>
            </div>
            <div className="text-[#666666] w-[20%] sticky top-0 scrollbar-none  p-7 ">
                <div className="p-2 text-[18px] text-[#333333]">On this page</div>
                <ul className="list-disc pl-5 text-[14px]">
                    <li className="p-1">Process Architecture</li>
                    <ul className="list-circle pl-5">
                        <li className="p-1">Main Process</li>
                        <li className="p-1">Renderer Process</li>
                        <li className="p-1">Extension Host Process</li>
                        <li className="p-1">Shared Process</li>
                    </ul>
                    <li className="p-1">Core Services Architecture</li>
                    <li className="p-1">Workbench and Layout</li>
                </ul>
            </div>
        </div>
    )
}