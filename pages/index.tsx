import Link from "next/link";

export default function () {
  return (
    <div>
      <Link href="/est">
        <a>E[SD]T</a>
      </Link>
      <br />
      <Link href="/pst">
        <a>P[SD]T</a>
      </Link>
      <br />
      <Link href="/gmt">
        <a>GMT</a>
      </Link>
    </div>
  );
}
