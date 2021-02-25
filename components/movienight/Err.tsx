import Link from "next/link";

const Err: React.FC<ErrProps> = ({ msg }) => {
  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <h2>{msg}</h2>

      <Link href="/movienight">
        <a>
          <p>Create a valid link</p>
        </a>
      </Link>
    </div>
  );
};

export default Err;

type ErrProps = { msg: string };
