import React from 'react';
import PropTypes from 'prop-types';

const AppIcon = ({ ...rest }) => (
  <svg
    viewBox="0 0 34 34"
    fill="none"
    style={{ width: '100%', maxWidth: '100%', display: 'block' }}
    {...rest}
  >
    <path
      d="M27.7771 34H6.24321C2.78386 34 1.24936e-06 31.1957 1.24936e-06 27.7568V6.24323C1.24936e-06 2.78386 2.80433 1.56171e-07 6.24321 1.56171e-07H27.7567C31.216 1.56171e-07 33.9999 2.80433 33.9999 6.24323V27.7568C34.0204 31.1957 31.216 34 27.7771 34Z"
      fill="#142144"
    />
    <path
      d="M2.4536 4.90722C3.80869 4.90722 4.90721 3.8087 4.90721 2.45361C4.90721 1.09852 3.80869 0 2.4536 0C1.09851 0 -6.30553e-06 1.09852 -6.30553e-06 2.45361C-6.30553e-06 3.8087 1.09851 4.90722 2.4536 4.90722Z"
      transform="translate(23.8351 3.85547)"
      fill="#FE4F74"
    />
    <path
      d="M1.75258 3.50516C2.7205 3.50516 3.50515 2.7205 3.50515 1.75258C3.50515 0.784655 2.7205 0 1.75258 0C0.784661 0 -2.81497e-06 0.784655 -2.81497e-06 1.75258C-2.81497e-06 2.7205 0.784661 3.50516 1.75258 3.50516Z"
      transform="translate(5.08252 12.6191)"
      fill="#0CCABA"
    />
    <path
      d="M0 18.7722L1.50556 18.5524L7.91869 0H12.2472L18.6169 18.5524L20.1224 18.7722V21.3367H12.9421V18.7722L14.4042 18.5084L13.4777 15.5776H6.64475L5.71825 18.5084L7.18038 18.7722V21.3367H0V18.7722ZM7.64363 12.4269H12.4788L10.1047 4.90921H10.0178L7.64363 12.4269Z"
      transform="translate(6.93872 6.41797)"
      fill="#DAEBFB"
    />
    <path
      d="M5.11734 10.2347C7.94358 10.2347 10.2347 7.94358 10.2347 5.11735C10.2347 2.29111 7.94358 0 5.11734 0C2.29111 0 -3.23667e-06 2.29111 -3.23667e-06 5.11735C-3.23667e-06 7.94358 2.29111 10.2347 5.11734 10.2347Z"
      transform="translate(20.2959 18.3887)"
      fill="#FEB241"
    />
    <path
      d="M5.11734 9.62485C5.78021 9.62485 6.44308 9.49227 7.02641 9.25364H6.9999C6.86732 9.22712 6.70823 9.25364 6.54914 9.25364C6.25748 9.28015 5.88627 9.12107 5.83324 8.8294C5.7537 8.4582 6.17794 8.16654 6.52264 8.03396C6.44309 7.79533 6.12491 7.7423 5.88628 7.71578C5.62113 7.66275 5.32947 7.50367 5.35598 7.26503C5.38249 7.10594 5.51506 6.99989 5.64764 6.92034C5.7537 6.81428 5.85975 6.65519 5.78021 6.52262C5.48855 6.46959 5.19689 6.44308 4.90523 6.39005C4.74614 6.36353 4.58705 6.33702 4.5075 6.20444C4.42796 6.07187 4.50751 5.91278 4.61357 5.78021C4.82569 5.51506 5.17038 5.38249 5.48855 5.38249C5.7537 5.38249 6.0984 5.409 6.12491 5.14386C6.15143 5.01128 6.01885 4.90523 5.88628 4.8522C5.7537 4.82568 5.62113 4.85219 5.48855 4.87871C4.87872 5.01128 4.26887 5.01128 3.65903 4.98477C3.36737 4.95825 3.04919 4.93174 2.78405 4.79916C2.5189 4.66659 2.28027 4.37493 2.30678 4.08327C2.3333 3.606 2.8636 3.36737 3.28783 3.15525C3.49995 3.04919 3.71207 2.83708 3.60601 2.65147C3.52647 2.5189 3.31435 2.5189 3.15526 2.49238C2.62496 2.41284 2.28027 1.82951 2.30678 1.29922C2.30678 0.821956 2.5189 0.397722 2.78405 8.09165e-07C1.14013 0.848472 -3.23666e-06 2.57193 -3.23666e-06 4.56053C-3.23666e-06 7.34458 2.28026 9.62485 5.11734 9.62485Z"
      transform="translate(20.2959 18.998)"
      fill="#D99439"
    />
  </svg>
);

AppIcon.propTypes = {
  size: PropTypes.number,
};

export { AppIcon };
