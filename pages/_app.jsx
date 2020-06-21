import "./main.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="root u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <Component {...pageProps} />
    </div>
  );
}
