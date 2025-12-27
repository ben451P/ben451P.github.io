import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const FilterButtons = ({ 
  sectionTitle, 
  sectionContents, 
  selected, 
  onToggle,
  variant = "success" // default color scheme
}) => {
  return (
    <div>
      <small className="text-muted d-block">{sectionTitle}</small>
      {sectionContents.map((c) => (
        <button
          key={c}
          type="button"
          className={
            "btn btn-sm me-1 mb-1 " +
            (selected.has(c) ? `btn-${variant}` : `btn-outline-${variant}`)
          }
          onClick={() => onToggle(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons