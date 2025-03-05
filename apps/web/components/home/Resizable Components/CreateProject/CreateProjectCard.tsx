import {useState} from "react";
import { Input } from "@workspace/ui/components/input";
import Search from "./Search";
import { Template } from "@workspace/types";
interface CreateProjectCardProps {
  
  setProjectName: React.Dispatch<React.SetStateAction<string | null>>;
  selectedTemplate: Template | undefined;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template | undefined>>;

}
function CreateProjectCard({ setProjectName, selectedTemplate, setSelectedTemplate }: CreateProjectCardProps) {
  
  return (
    <div className="space-y-3">
      <Input placeholder="Project Name" className="w-full" />
      <Search selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
    </div>
  );
}

export default CreateProjectCard;
