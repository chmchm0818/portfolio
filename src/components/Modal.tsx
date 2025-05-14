import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";
import { Project } from "../ts/types";

type Props = {
  open: boolean;
  onClose: () => void;
  project: Project | null;
};

const WorksModal = ({ open, onClose, project }: Props) => {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
  sx={{
    fontWeight: 'bold',
    fontSize: {
      xs: '18px',
      sm: '20px',
      md: '22px',
    },
    textAlign: 'center',
    my: '1rem',
    position: 'relative',
  }}
>
        {project.title}
        <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}>
          <CloseIcon/>
        </IconButton>
      </DialogTitle>
      <DialogContent className="flex flex-col md:flex-row md:items-center"
          sx={{
            p: {
              xs: '1rem',
              md: '3rem',
            }
          }}>
        <div className="md:w-3/5 pr-5">
          <ul className="mb-4">
            <li className="mb-1"><strong>制作期間：</strong> {project.period}</li>
            <li><strong>制作フロー：</strong> {project.flow}</li>
          </ul>
          <p className="leading-7 whitespace-pre-line">{project.descriptionModal}</p>
        </div>
        <div className="md:w-2/5">
          <Image src={project.image} alt={project.title} width={400} height={250} className="shadow-md mb-4" />
          <div className="flex justify-between text-sm">
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {project.siteUrl}
            </a>
            <div className="flex gap-1">
              {project.colors.map((color, i) => (
                <div key={i} className="w-[22px] h-[22px] rounded-full shadow-md" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorksModal;