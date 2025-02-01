import Link from "next/link";

export default function Page() {
  const name1 = "world";

  console.log("hello " + name1 + "!");

  return (
    <>
      <h3>Some test!</h3>

      <h1>Hello, Next.js!</h1>

      <Link href="/profile">
        <button>Go to profile</button>
      </Link>
    </>
  );
}
