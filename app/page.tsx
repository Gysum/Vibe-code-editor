import Image from "next/image";
import {Button} from "@/components/ui/button"
import { db } from "@/lib/db";

export default async function Home() {
const user = db.user
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <Button>
        Get Started
      </Button>
    </div>
  );
}
