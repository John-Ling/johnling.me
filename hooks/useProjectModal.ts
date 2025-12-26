import { Project } from "@/types/projects/project";
import { useEffect, useState } from "react";

export default function useProjectModal() {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  // allow user to use ESC key to leave project card
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.isComposing || event.key === "Escape") {
        setModalOpened(false);
      }
      return;
    };

    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const onProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setModalOpened(true);
  };

  const onClose = () => {
    setModalOpened(false);
  };

  return { selectedProject, modalOpened, onProjectSelect, onClose };
}
