"use client";

export default function SaveAsPdfButton() {
  return (
    <a
      className="btn"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.print();
      }}
    >
      Save as PDF
    </a>
  );
}
