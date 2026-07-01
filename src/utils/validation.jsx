export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validateSurveyForm = (values) => {
    const errors = {};
    
    if (!values.fullName.trim()) {
      errors.fullName = "โปรดใส่ชื่อของคุณ";
    }
    
    if (!values.email.trim()) {
      errors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!validateEmail(values.email)) {
      errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    
    if (!values.favoriteMovie) {
      errors.favoriteMovie = "กรุณาเลือกหนังที่คุณชอบ";
    }
    
    return errors;
  };