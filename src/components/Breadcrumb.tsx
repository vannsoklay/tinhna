import { RiShoppingBasketFill, RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Breadcrumb: React.FC<{}> = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to={"/"}
            className="group inline-flex items-center text-md font-bold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <RiShoppingBasketFill className="text-2xl text-gray-600 mr-2.5 group-hover:text-blue-600" />
            Home
          </Link>
        </li>

        <li>
          <div className="flex items-center">
            <RiArrowRightSLine className="text-2xl text-gray-600 mx-1" />
            <a
              href="#"
              className="ml-2.5 text-md font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              Categories
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <RiArrowRightSLine className="text-2xl text-gray-600 mx-1" />
            <span className="ml-2.5 text-md font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              Shose
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
