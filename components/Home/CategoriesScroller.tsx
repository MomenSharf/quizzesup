import { CATEGORY_OPTIONS_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UseScrollerContainer from "../Shared/UseScrollerContainer";
import { buttonVariants } from "../ui/button";
import { MotionDiv } from "@/hooks/useMotion";

export default function CategoriesScroller() {
  return (
    <div className="flex flex-col gap-3 max-w-full">
      <h2 className="font-bold text-md">CATEGORIES</h2>
      <UseScrollerContainer className="flex gap-3 no no-scroll p-1 overflow-x-scroll">
        {CATEGORY_OPTIONS_LIST.map(({ id, label, value, icon: Icon }) => (
          <MotionDiv
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            viewport={{ once: true }}
            key={id}
          >
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-xl min-w-20 min-h-20 sm:min-w-20 sm:min-h-20 flex flex-col gap-1 hover:border-primary transition-all duration-200"
              )}
              href={`/search?category=${value}`}
            >
              <Icon className="w-7 h-7 fill-gray-dark" />
              <span className="text-xs text-muted-foreground">{label}</span>
            </Link>
          </MotionDiv>
        ))}
      </UseScrollerContainer>
    </div>
  );
}
