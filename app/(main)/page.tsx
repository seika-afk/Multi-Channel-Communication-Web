import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
	  <div className="h-screen w-screen flex gap-2 items-center justify-center flex-col">

	  <UserButton
		afterSignOutUrl="/"
	  />
<ModeToggle/>

	  <h1>Hello world</h1>

</div>
  );
}
