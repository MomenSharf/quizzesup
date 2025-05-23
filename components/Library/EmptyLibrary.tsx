import { FolderPathSegment } from "@/types";
import Image from "next/image";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";
import BreadcrumbDemoFolderPath from "./Folder/BreadcrumbFolderPath";
import NewFolderButton from "./Folder/NewFolderButton";
import NewQuizButton from "./Quiz/NewQuizButton";

export default function EmptyLibrary({
  folderId,
  path,
  title,
}: {
  folderId?: string;
  path?: FolderPathSegment[];
  title: string;
}) {
  return (
    <div className="w-full flex flex-col gap-3 p-3">
      <h1 className="text-lg">{title}</h1>
      {path && (
        <>
          <BreadcrumbDemoFolderPath path={path} currentFolderId={folderId} />
          <Separator />
        </>
      )}

      <div className="w-full h-full flex flex-col gap-1 justify-center items-center">
        <div className="">
          <Image
            src="/assets/images/Empty-dashboard.png"
            alt="empty gallery"
            width={250}
            height={250}
          />
        </div>
        <h4 className="font-medium">No Quizzes yet</h4>
        <p className="text-muted-foreground">You can create Quizzes her</p>
        <div className="flex gap-3">
          <NewQuizButton folderId={folderId} />
          <NewFolderButton
            className="rounded-xl items-center gap-1 text-foreground text-xs cursor-pointer"
            parentId={folderId}
            variant="outline"
          >
            <Icons.folderPlus className="w-4 h-4 fill-gray-extra-dark stroke-transparent " />
            new Folder
          </NewFolderButton>
        </div>
      </div>
    </div>
  );
}
