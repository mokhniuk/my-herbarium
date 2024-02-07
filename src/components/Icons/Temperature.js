import React from 'react';

const Temperature = ({ size = '24', color = 'black' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C11.2044 2 10.4413 2.31607 9.87868 2.87868C9.31607 3.44129 9 4.20435 9 5V8.99803C9 8.99868 9 8.99934 9 9C9 9.00066 9 9.00132 9 9.00197V12.9641C8.28585 13.4997 7.725 14.2192 7.3806 15.0507C6.9594 16.0676 6.8855 17.195 7.17037 18.2582C7.45525 19.3214 8.08298 20.2608 8.9562 20.9309C9.82942 21.6009 10.8993 21.9641 12 21.9641C13.1007 21.9641 14.1706 21.6009 15.0438 20.9309C15.917 20.2608 16.5448 19.3214 16.8296 18.2582C17.1145 17.195 17.0406 16.0676 16.6194 15.0507C16.275 14.2192 15.7141 13.4997 15 12.9641V5C15 4.20435 14.6839 3.44129 14.1213 2.87868C13.5587 2.31607 12.7957 2 12 2ZM11 10V13.5C11 13.8573 10.8094 14.1874 10.5 14.366C9.92808 14.6962 9.48109 15.2059 9.22836 15.8161C8.97564 16.4262 8.9313 17.1027 9.10222 17.7406C9.27315 18.3785 9.64978 18.9421 10.1737 19.3442C10.6977 19.7462 11.3396 19.9641 12 19.9641C12.6604 19.9641 13.3024 19.7462 13.8263 19.3442C14.3502 18.9421 14.7269 18.3785 14.8978 17.7406C15.0687 17.1027 15.0244 16.4262 14.7716 15.8161C14.5189 15.2059 14.0719 14.6962 13.5 14.366C13.1906 14.1874 13 13.8573 13 13.5V10H11ZM13 8V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V8H13Z"
        fill={color}
      />
    </svg>
  );
};

export default Temperature;
