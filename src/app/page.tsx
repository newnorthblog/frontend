import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const name1 = "world";

  console.log("hello " + name1 + "!");

  return (
    <>
      <h1>New-North Blog</h1>

      <Link href="/profile">
        <Button variant="default">Профиль</Button>
      </Link>
      <Link href="/auth">
        <Button variant="default">Войти</Button>
      </Link>
    </>
  );
}
