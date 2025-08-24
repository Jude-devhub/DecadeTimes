'use client'; // This is a Client Component
import Link from "next/link";
import { useRouter } from "next/router";

export default function Error() {
  //const router = useRouter();
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p></p>
      <button onClick={() => window.location.reload()}>Click here to try again</button>
    </div>
  );
}