import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/components/ui/iconButton";

export default function Home() {
  return (
    <div className="m-5">
      <IconButton>
        {<FontAwesomeIcon icon={faMagnifyingGlass} height={20} width={20} />}
      </IconButton>
    </div>
  );
}
