const inputStyle = {
  width: "100%",
  padding: "6px",
  height: "34px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  // marginBottom: "10px",
  fontSize: "13px",
  fontFamily: "'Poppins', sans-serif",
};

const labelStyle = {
  fontWeight: "600",
  marginBottom: "4px",
  fontSize: "13px",
  fontFamily: "'Poppins', sans-serif",
};

const sectionTitleStyle = {
  fontSize: "16px",
  fontWeight: "700",
  margin: "20px 0 10px",
  fontFamily: "'Poppins', sans-serif",
  borderBottom: "1px solid #eee",
  paddingBottom: "5px",
};

const phoneInputErrorStyle = `
  .react-tel-input .form-control.is-invalid {
    border: 1px solid #dc3545 !important;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }
`;

export { inputStyle, labelStyle, sectionTitleStyle, phoneInputErrorStyle };
