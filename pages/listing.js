import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "network",
    name: "Network",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "tag",
    name: "Tag",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Listing() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    network: [],
    tag: [],
  });

  const handleChange = (sectionId, value, checked) => {
    const newItems = [...(selectedFilters[sectionId] || [])];
    const itemIndex = newItems.indexOf(value);
    const exists = itemIndex > -1;

    if (checked && exists) return;

    if (!checked && !exists) return;

    if (checked && !exists) {
      newItems.push(value);
    }

    if (!checked && exists) {
      newItems.splice(itemIndex, 1);
    }

    setSelectedFilters({ ...selectedFilters, [sectionId]: newItems });
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* <div>{JSON.stringify(selectedFilters, null, 2)}</div> */}
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-gray-200 pt-4 pb-4"
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="text-sm font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="pt-4 pb-2 px-4">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    // defaultValue={option.value}
                                    type="checkbox"
                                    checked={
                                      selectedFilters[section.id].indexOf(
                                        option.value
                                      ) > -1
                                    }
                                    onChange={(e) =>
                                      handleChange(
                                        section.id,
                                        option.value,
                                        e.target.checked
                                      )
                                    }
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
          <div className="w-full border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              List of DAOs
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest list of DAOs, new and improved!
            </p>
          </div>

          <div className="w-full pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusSmIcon
                  className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="divide-y divide-gray-200 space-y-10">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="pt-6 space-y-3">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                // defaultValue={option.value}
                                type="checkbox"
                                checked={
                                  selectedFilters[section.id].indexOf(
                                    option.value
                                  ) > -1
                                }
                                onChange={(e) =>
                                  handleChange(
                                    section.id,
                                    option.value,
                                    e.target.checked
                                  )
                                }
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
              {/* Replace with your content */}
              {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" /> */}
              {/* /End replace */}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array(12)
                  .fill()
                  .map((v, i) => (
                    <Link key={i} href={`/dao/${i}`}>
                      <a className="flex flex-col space-y-4 p-4 shadow-md rounded-md bg-white hover:-translate-y-2 transition-all ease-in-out">
                        <div className="flex space-x-4 items-center">
                          <figure className="bg-gray-300 w-20 h-20 rounded-md"></figure>
                          <div className="flex flex-grow flex-col space-y-1">
                            <p className="text-lg font-bold">DAO Name</p>
                            <p className="text-sm text-gray-500">$20,000</p>
                            <p className="flex items-center space-x-1 text-xs">
                              <SiDiscord className="w-4 h-4" />
                              <span>22K</span>
                            </p>
                          </div>
                        </div>
                        <div className="text-md text-justify text-gray-500">
                          Flowbite is a library of interactive UI components
                          built with Tailwind CSS that can get you started
                          building websites faster and more efficiently.
                        </div>
                        <div className="">
                          <span className="inline-flex mr-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            Badge
                          </span>
                          <span className="inline-flex mr-2 mb-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                            Badge
                          </span>
                          <span className="inline-flex mr-2 mb-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            Badge
                          </span>
                          <span className="inline-flex mr-2 mb-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Badge
                          </span>
                          <span className="inline-flex mr-2 mb-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            Badge
                          </span>
                          {/* <span className="inline-flex mr-2 mb-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                          Badge
                        </span>
                        <span className="inline-flex mr-2 mb-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                          Badge
                        </span> */}
                          <span className="inline-flex mr-2 mb-2 items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800">
                            Badge
                          </span>
                        </div>
                      </a>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
