import { Link, useAsyncError, useRouteError } from "react-router-dom";

export default function Error() {
  const asyncError = useAsyncError();
  const routeError = useRouteError();

  const error = asyncError || routeError;

  return (
    <p className="error">
      {(error?.message || "An error occurred") + "!"}
      <Link to="/" className="text-red-799 ml-4 hover:text-red-500">
        Go Home 🏠. <div className=""></div>
      </Link>
    </p>
  );
}
