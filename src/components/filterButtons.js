import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainStyle from "../static/assets/css/main.module.css";

const FilterButtons = ({ 
  sectionTitle, 
  sectionContents, 
  selected, 
  onToggle
}) => {
  return (
    <div>
      <small className={`${mainStyle.filterLabel} d-block`}>
        {sectionTitle}
      </small>

      {sectionContents.map((c) => {
        const isActive = selected.has(c);

        return (
          <button
            key={c}
            type="button"
            className={
              `btn btn-sm me-1 mb-1 ` +
              (isActive
                ? mainStyle.filterBtnActive
                : mainStyle.filterBtn)
            }
            onClick={() => onToggle(c)}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
