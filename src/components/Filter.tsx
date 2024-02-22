import React, { useState } from "react";
import Button from "./Button";
import { GENDER, SPECIES, STATUS } from "../utils/constant";

interface AccordionProps {
  title: string;
  content: string[];
  isOpen: boolean;
  HandleToggle: () => void;
  task: React.Dispatch<React.SetStateAction<string>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  current: string;
}

interface FilterProps {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setSpecies: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  gender: string;
  species: string;
}

const Filter: React.FC<FilterProps> = ({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
  status,
  gender,
  species,
}) => {
  const [currentTab, setCurrentTab] = useState("");

  const clearFilter = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
  };

  return (
    <div className="rounded-md lg:w-[90%] lg:mx-auto">
      <h2 className="text-blue-500 text-center">Filters</h2>
      <button
        className="border-b-2 border-blue-400  my-3 mx-auto block"
        onClick={clearFilter}
      >
        clear filters
      </button>
      <AccordionTab
        title={"Status"}
        content={STATUS}
        isOpen={currentTab === "Status"}
        HandleToggle={() =>
          setCurrentTab((prev) => (prev === "Status" ? "" : "Status"))
        }
        setPageNumber={setPageNumber}
        task={setStatus}
        current={status}
        key={"Status"}
      />
      <AccordionTab
        title={"Species"}
        content={SPECIES}
        isOpen={currentTab === "Species"}
        HandleToggle={() =>
          setCurrentTab((prev) => (prev === "Species" ? "" : "Species"))
        }
        setPageNumber={setPageNumber}
        task={setSpecies}
        current={species}
        key={"Species"}
      />
      <AccordionTab
        title={"Gender"}
        content={GENDER}
        isOpen={currentTab === "Gender"}
        HandleToggle={() =>
          setCurrentTab((prev) => (prev === "Gender" ? "" : "Gender"))
        }
        setPageNumber={setPageNumber}
        task={setGender}
        current={gender}
        key={"Gender"}
      />
    </div>
  );
};

const AccordionTab: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  HandleToggle,
  task,
  setPageNumber,
  current,
}) => {
  return (
    <>
      <button
        onClick={HandleToggle}
        className="flex items-center justify-between p-5 mb-2 w-full font-medium text-left focus:ring-4 focus:ring-gray-200 bg-gray-100 border border-gray-200 border-b-0"
      >
        <h2>{title}</h2>
        <span>{isOpen !== false ? "close" : "open"}</span>
      </button>
      {isOpen && (
        <div className="p-5 border border-gray-200 border-b-0">
          <>
            {content.map((name: string) => (
              <Button
                name={name}
                setPageNumber={setPageNumber}
                task={task}
                current={current}
              />
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default Filter;
