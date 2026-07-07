import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import MegaMenu from "../Megamenu"
import { BiCategory } from "react-icons/bi"

export function HoverCardDemo() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link" className="hidden lg:flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:scale-105"><BiCategory size={18} />
                Categories</Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-fit flex-col gap-0.5">
        
        <div><MegaMenu></MegaMenu></div>
        
      </HoverCardContent>
    </HoverCard>
  )
}
