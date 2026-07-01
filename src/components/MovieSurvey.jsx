import React, { useState } from "react";
import { movies } from "@/data/moviesData";
import { validateSurveyForm } from "@/utils/validation";
import TextField from "@/components/TextField";
import MovieRadioGroup from "@/components/MovieRadioGroup";
import SurveyResult from "@/components/SurveyResult";
import { Film, RefreshCw, Send } from 'lucide-react';

export default function MovieSurvey() {
  const initialFormState = {
    fullName: "",
    email: "",
    favoriteMovie: "",
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const validationErrors = validateSurveyForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#eef1f5] p-4 flex justify-center items-center font-sans antialiased">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
        
        <div className="bg-linear-to-r from-[#8130eb] to-[#402cc2] text-white p-6 flex items-center gap-3">
        <Film className="h-7 w-7" />
          <h1 className="text-3xl font-bold m-0 tracking-wide">Movie Survey</h1>
        </div>

        {!isSubmitted ? (
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <TextField
                label="ชื่อ"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="กรุณากรอกชื่อของคุณ"
                error={errors.fullName}
                required
              />

              <TextField
                label="อีเมล"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                error={errors.email}
                required
              />

              <MovieRadioGroup
                name="favoriteMovie"
                options={movies}
                selectedValue={formData.favoriteMovie}
                onChange={handleChange}
                error={errors.favoriteMovie}
              />

              <TextField
                label="ความคิดเห็นเกี่ยวกับหนัง"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                isTextArea
              />

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium text-black"
                >
                  <RefreshCw className="h-4 w-4" />
                  รีเซ็ต
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#6d31e0] hover:bg-[#5b29c0] text-white rounded-md transition-colors font-medium shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  ส่งแบบสำรวจ
                </button>
              </div>
            </form>
          </div>
        ) : (
          <SurveyResult data={formData} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}
