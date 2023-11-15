import Image from "next/image";
import Input from "@/components/ui/input/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TextArea from "@/components/ui/textArea";

export default function Home() {
  return (
    <TextArea label="Label 1" field="label1"/>
  );
}
