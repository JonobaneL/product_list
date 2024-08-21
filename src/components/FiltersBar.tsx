import ActiveFiltes from "./ActiveFilters";
import SortSelect from "./SortSelect";
import FitersModal from "./FiltersModal";

const FiltersBar = () => {
  return (
    <div className="mb-2 flex justify-between items-start gap-2 flex-col lg:flex-row lg:items-center">
      <FitersModal />
      <div>
        <ActiveFiltes />
      </div>
      <div className="hidden lg:block w-[220px]">
        <SortSelect />
      </div>
    </div>
  );
};

export default FiltersBar;
