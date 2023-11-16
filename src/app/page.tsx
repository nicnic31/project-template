import Image from "next/image";
import Input from "@/components/ui/input/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/components/ui/iconButton";

export default function Home() {
  return (
    <IconButton color="primary">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        height={15}
        width={15}
      />
    </IconButton>
  );
}
