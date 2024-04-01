import { useDispatch } from "react-redux";
import listImg from "../assets/dumbbell.jpg";
import { addtOCart } from "../redux/cart/actions";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

export default function Pricing() {
  const dispatch = useDispatch();
  const token = useRouteLoaderData("root");
  const navigateTo = useNavigate();

  const handlePurchase = (plan, price, details) => {
    if (!token) {
      navigateTo("/login");
    } else {
      const payload = { plan, price, details };

      dispatch({
        type: "addCart",
        payload: payload,
      });
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <p className="mb-4">Select your plan</p>
      <div className="flex justify-center">
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Basic Plan</th>
                <th className="border border-gray-300 px-4 py-2">
                  Weekly Plan
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Monthly Plan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-4xl font-bold text-green-800">$12</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-4xl font-bold text-green-800">$20</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-4xl font-bold text-green-800">$30</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        Smart workout plan
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        At home workouts
                      </span>{" "}
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside">
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        Pro gyms
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        Smart workout plans
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        At home workouts
                      </span>
                    </li>
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside space-y-2">
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        ELITE gyms and classes
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        Pro gyms
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        Smart workout plans
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        At home workouts
                      </span>
                    </li>
                    <li className="flex items-center">
                      <img
                        src={listImg}
                        alt="Bullet Point"
                        className="mr-2 w-4 h-4"
                      />
                      <span className="text-2xl italic font-semibold text-yellow-800">
                        Personal Trainings
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border">
                  <button
                    onClick={() =>
                      handlePurchase(
                        "Basic Plan",
                        "$12",
                        "Smart workout plan, At home workouts"
                      )
                    }
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    Purchase
                  </button>
                </td>
                <td className="border">
                  <button
                    onClick={() =>
                      handlePurchase(
                        "Weekly Plan",
                        "$20",
                        "Pro gyms, Smart workout plans, At home workouts"
                      )
                    }
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    Purchase
                  </button>
                </td>
                <td className="border">
                  <button
                    onClick={() =>
                      handlePurchase(
                        "Weekly Plan",
                        "$20",
                        "ELITE gyms and classes, Pro gyms, Smart workout plans, At home workouts,Personal Trainings "
                      )
                    }
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    Purchase
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
