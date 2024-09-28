import React from 'react';

const FilteringSidebar = ({ filters, onFilterChange, searchQuery, onSearchChange }) => {
    return (
      <div className="w-80 p-4 rounded-lg sticky top-4 self-start h-full">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
  
        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            placeholder="Search for skills, titles, or companies"
          />
        </div>
  
        {/* Skills Filter */}
        <div className="mb-4">
          <h3 className="text-base font-bold mb-2">Skills</h3>
          <ul className="text-sm text-gray-600">
            {filters.skills.map((skill, index) => (
              <li key={index} className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={skill.selected}
                    onChange={() => onFilterChange('skills', index)}
                    className="form-checkbox h-4 w-4"
                  />
                  <span className="ml-2">{skill.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Job Titles Filter */}
        <div className="mb-4">
          <h3 className="text-base font-bold mb-2">Job Titles</h3>
          <ul className="text-sm text-gray-600">
            {filters.jobTitles.map((title, index) => (
              <li key={index} className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={title.selected}
                    onChange={() => onFilterChange('jobTitles', index)}
                    className="form-checkbox h-4 w-4"
                  />
                  <span className="ml-2">{title.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Companies Filter */}
        <div className="mb-4">
          <h3 className="text-base font-bold mb-2">Companies</h3>
          <ul className="text-sm text-gray-600">
            {filters.companies.map((company, index) => (
              <li key={index} className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={company.selected}
                    onChange={() => onFilterChange('companies', index)}
                    className="form-checkbox h-4 w-4"
                  />
                  <span className="ml-2">{company.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default FilteringSidebar