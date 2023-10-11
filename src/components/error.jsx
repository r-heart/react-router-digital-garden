import { Link, useAsyncError, useRouteError } from "react-router-dom";

export default function Error() {
  const asyncError = useAsyncError();
  const routeError = useRouteError();

  const error = asyncError || routeError;

  return (
    <p className="mt-8 rounded-md bg-red-100 px-4 py-2 text-red-700">
      {(error?.message || "An error occurred") + "!"}
      <Link to="/" className="text-red-799 ml-4 hover:text-red-500">
        Go Home 🏠. <div className=""></div>
      </Link>
    </p>
  );
}
