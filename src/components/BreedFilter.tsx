"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { BreedFilterProps } from "../types";
import { updateSearchParams } from "@/utils";

const BreedFilter = ({ title, options }: BreedFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };
  return (
    <div>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <Listbox.Button>
          <span>{selected.title}</span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options>
            {options.map((option) => (
              <Listbox.Option key={option.title} value={option}></Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default BreedFilter;
