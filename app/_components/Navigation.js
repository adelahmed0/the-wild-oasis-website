import { auth } from "@/app/_lib/auth";
import NavigationList from "@/app/_components/NavigationList";

export default async function Navigation() {
  const session = await auth();
  // console.log(await auth);
  return (
    <nav className="z-10 text-xl">
      <NavigationList session={session} />
    </nav>
  );
}
