import Image from "next/image";
import Input from "@/components/ui/input/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@/components/ui/iconButton";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button>
        <p>Button</p>
      </Button>
    </div>
  );
}
