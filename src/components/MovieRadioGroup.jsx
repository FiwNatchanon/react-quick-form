import React from "react";

export default function MovieRadioGroup({ options, name, selectedValue, onChange, error }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium text-slate-900">
        เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
      </label>
      
      <div className={`${error ? "border border-red-500 rounded-md p-4" : "pt-2"}`}>
        <div className="flex flex-col space-y-4">
          {options.map((movie) => (
            <label key={movie.title} className="flex items-start space-x-3 cursor-pointer group hover:bg-gray-100 rounded-md p-2 transition-colors">
              <input
                type="radio"
                name={name}
                value={movie.title}
                checked={selectedValue === movie.title}
                onChange={onChange}
                className="mt-1 w-4 h-4 cursor-pointer accent-slate-900"
              />
              <div className="flex flex-col leading-none">
                <span className="text-base text-slate-900 font-normal">
                  {movie.title} ({movie.year})
                </span>
                <span className="text-sm text-gray-500 mt-1">Director: {movie.director}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
      
      {error && <p className="text-sm font-medium text-red-500 m-0">{error}</p>}
    </div>
  );
}