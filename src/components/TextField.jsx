import React from "react";

export default function TextField({ label, name, value, onChange, placeholder, error, required, isTextArea = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-base font-medium text-slate-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border p-3 rounded-md resize-none min-h-[100px] outline-none transition-colors ${
            error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-slate-900"
          }`}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border p-3 rounded-md outline-none transition-colors ${
            error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#6d31e0]"
          }`}
        />
      )}
      
      {error && <p className="text-sm font-medium text-red-500 m-0">{error}</p>}
    </div>
  );
}