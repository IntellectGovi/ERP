"use client";

import { useState, useRef } from "react";
import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import "../../styles/react-input.css";

export default function ReactInput({
  type = "text",
  className = "",
  label,
  placeholder = "",
  name,
  onChange,
  value = "",
  required = false,
  disabled = false,
  error = "",
  success = "",
  helpText = "",
  leftIcon = null,
  rightIcon = null,
  size = "medium",
  variant = "default",
  maxLength = null,
  showCounter = false,
  loading = false,
  onIconClick = null,
  autoComplete = "off",
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const isPasswordType = type === "password";
  const hasError = error && error.length > 0;
  const hasSuccess = success && success.length > 0;
  const hasLeftIcon = leftIcon !== null;
  const hasRightIcon = rightIcon !== null || isPasswordType;
  const isFloating = variant === "floating";
  const hasValue = value && value.length > 0;

  // Handle focus events
  const handleFocus = (e) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle right icon click
  const handleRightIconClick = () => {
    if (isPasswordType) {
      togglePasswordVisibility();
    } else if (onIconClick) {
      onIconClick();
    }
  };

  // Determine input type
  const inputType = isPasswordType
    ? showPassword
      ? "text"
      : "password"
    : type;

  // Build class names
  const containerClasses = `
    react-input-container
    ${isFloating ? "react-input-container--floating" : ""}
    ${className}
  `.trim();

  const wrapperClasses = `
    react-input-wrapper
    ${isFocused ? "react-input-wrapper--focused" : ""}
    ${hasError ? "react-input-wrapper--error" : ""}
    ${hasSuccess ? "react-input-wrapper--success" : ""}
  `.trim();

  const labelClasses = `
    ${isFloating ? "react-input-floating-label" : "react-input-label"}
    ${required ? "react-input-label--required" : ""}
    ${hasError ? "react-input-label--error" : ""}
    ${isFocused ? "react-input-label--focused" : ""}
    ${
      isFloating && (isFocused || hasValue)
        ? "react-input-floating-label--active"
        : ""
    }
    ${isFloating && hasError ? "react-input-floating-label--error" : ""}
  `.trim();

  const inputClasses = `
    react-input-field
    ${hasError ? "react-input-field--error" : ""}
    ${hasSuccess ? "react-input-field--success" : ""}
    ${hasLeftIcon ? "react-input-field--with-left-icon" : ""}
    ${hasRightIcon ? "react-input-field--with-right-icon" : ""}
    ${size === "small" ? "react-input-field--small" : ""}
    ${size === "large" ? "react-input-field--large" : ""}
    ${isFloating ? "react-input-field--floating" : ""}
    ${loading ? "react-input-loading" : ""}
    form-control required-fields
  `.trim();

  return (
    <div className={containerClasses}>
      {/* Label */}
      {label && !isFloating && (
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className={wrapperClasses}>
        {/* Floating label */}
        {label && isFloating && (
          <label htmlFor={name} className={labelClasses}>
            {label}
          </label>
        )}

        {/* Left icon */}
        {hasLeftIcon && (
          <div className="react-input-icon react-input-icon--left">
            {leftIcon}
          </div>
        )}

        {/* Input field */}
        <input
          ref={inputRef}
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFloating ? "" : placeholder}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          autoComplete={autoComplete}
          className={inputClasses}
          style={{color:"black"}}
          {...props}
        />

        {/* Right icon */}
        {hasRightIcon && (
          <div
            className={`
              react-input-icon react-input-icon--right
              ${
                isPasswordType || onIconClick
                  ? "react-input-icon--clickable"
                  : ""
              }
            `}
            onClick={handleRightIconClick}
          >
            {isPasswordType ? showPassword ? <EyeOff /> : <Eye /> : rightIcon}
          </div>
        )}
      </div>

      {/* Character counter */}
      {showCounter && maxLength && (
        <div
          className={`react-input-counter ${
            value.length > maxLength ? "react-input-counter--error" : ""
          }`}
        >
          {value.length}/{maxLength}
        </div>
      )}

      {/* Error message */}
      {hasError && (
        <div className="react-input-error-message">
          <AlertCircle className="react-input-error-icon" />
          <span>{error}</span>
        </div>
      )}

      {/* Success message */}
      {hasSuccess && (
        <div className="react-input-success-message">
          <CheckCircle className="react-input-success-icon" />
          <span>{success}</span>
        </div>
      )}

      {/* Help text */}
      {helpText && !hasError && !hasSuccess && (
        <div className="react-input-help-text">{helpText}</div>
      )}
    </div>
  );
}
