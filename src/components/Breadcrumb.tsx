import { RiHomeLine, RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Breadcrumb: React.FC<{}> = () => {
  return (
    <nav className="w-full rounded-md">
      <ol className="list-reset flex space-x-1">
        <li>
          <Link
            to={`/`}
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            <label className="flex space-x-2">
              <RiHomeLine className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-800">Main Page</span>
            </label>
          </Link>
        </li>
        <li>
          <label>
            <RiArrowRightSLine className="h-6 w-6 text-gray-600" />
          </label>
        </li>
        <li>
          <a
            href="#"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            <span className="font-medium text-gray-800">Category</span>
          </a>
        </li>
        <li>
          <label>
            <RiArrowRightSLine className="h-6 w-6 text-gray-600" />
          </label>
        </li>
        <li className="text-neutral-500 dark:text-neutral-400">Data</li>
      </ol>
    </nav>
  );
};
