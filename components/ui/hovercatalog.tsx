import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import CategoryBar from "../CategoryBar"

export function HoverCardDemo() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link">Categories</Button>
      </HoverCardTrigger>
      <HoverCardContent className="container mx-auto ">
        <div>
            <CategoryBar></CategoryBar>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
