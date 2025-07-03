"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import "../../styles/react-select.css";

export default function ReactSelect({
  placeholderName,
  name,
  value,
  handleChange,
  dynamicOptions,
  searchable = false,
  respclass = "",
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(dynamicOptions);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Find selected option
  const selectedOption = dynamicOptions.find(
    (option) => option.value === value
  );

  // Filter options based on search term with smooth animation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchable && searchTerm) {
        const filtered = dynamicOptions.filter((option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOptions(filtered);
      } else {
        setFilteredOptions(dynamicOptions);
      }
    }, 10); // Small delay for smooth filtering

    return () => clearTimeout(timeoutId);
  }, [searchTerm, dynamicOptions, searchable]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 10);
    }
  }, [isOpen, searchable]);

  const openDropdown = () => {
    if (!disabled) {
      setIsAnimating(true);
      setIsOpen(true);
      setSearchTerm("");
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  const closeDropdown = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setSearchTerm("");
      setIsAnimating(false);
    }, 150);
  };

  const handleOptionSelect = (option) => {
    handleChange(name, option);
    closeDropdown();
  };

  const handleClear = (e) => {
    e.stopPropagation();
    handleChange(name, null);
  };

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  return (
    <div className={respclass}>
      <div className="react-select-container" ref={dropdownRef}>
        {/* Select Button */}
        <button
          type="button"
          onClick={toggleDropdown}
          disabled={disabled}
          className={`
            react-select-button
            ${disabled ? "react-select-button--disabled" : ""}
            ${isOpen ? "react-select-button--open" : ""}
          `}
        >
          <div className="react-select-button-content">
            <span
              className={`
                react-select-button-text
                ${
                  selectedOption
                    ? "react-select-button-text--selected"
                    : "react-select-button-text--placeholder"
                }
              `}
            >
              {selectedOption ? selectedOption.label : placeholderName}
            </span>
            <div className="react-select-button-actions">
              {selectedOption && !disabled && (
                <div
                  onClick={handleClear}
                  className="react-select-clear-button"
                >
                  <X className="react-select-clear-icon" />
                </div>
              )}
              <ChevronDown
                className={`react-select-chevron ${
                  isOpen ? "react-select-chevron--open" : ""
                }`}
              />
            </div>
          </div>
        </button>

        {/* Dropdown */}
        <div
          className={`react-select-dropdown ${
            isOpen
              ? "react-select-dropdown--open"
              : "react-select-dropdown--closed"
          }`}
        >
          <div className="react-select-dropdown-inner">
            {/* Search Input */}
            {searchable && (
              <div className="react-select-search-container">
                <div className="react-select-search-wrapper">
                  <Search className="react-select-search-icon" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="react-select-search-input"
                  />
                </div>
              </div>
            )}

            {/* Options List */}
            <div className="react-select-options-container">
              {filteredOptions.length > 0 ? (
                <div className="react-select-options-list">
                  {filteredOptions.map((option, index) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionSelect(option)}
                      className={`
                        react-select-option
                        ${
                          selectedOption?.value === option.value
                            ? "react-select-option--selected"
                            : ""
                        }
                        ${isOpen ? "react-select-option--animated" : ""}
                      `}
                      style={{
                        animationDelay: `${index * 20}ms`,
                        borderBottom:
                          index === filteredOptions.length - 1
                            ? "none"
                            : "1px solid lightgray",
                      }}
                    >
                      <span className="react-select-option-text">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="react-select-empty-state">
                  <Search className="react-select-empty-icon" />
                  <p>No options found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
