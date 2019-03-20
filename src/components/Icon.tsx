import * as React from "react";

export enum EIcon {
  Facebook = "facebook",
  Twitter = "twitter",
  Github = "github",
  LinkedIn = "linkedIn"
}

interface Props {
  icon: EIcon;
}

export default function Icon(props: Props) {
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      {getPath(props.icon)}
    </svg>
  );
}

function getPath(icon: string) {
  switch (icon) {
    case EIcon.Facebook:
      return (
        <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z" />
      );
    case EIcon.Twitter:
      return (
        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
      );
    case EIcon.Github:
      return (
        <path d="M140.1 348.5c12.1 0 29.5 2.1 29.5 17.9 0 15.5-13.9 18.8-27 18.8-12.3 0-30.9-2-30.9-18s15.7-18.7 28.4-18.7zm-24.7-116.6c0 14.8 6.6 24.1 22.3 24.1 15.5 0 21.2-10 21.2-24.5.1-34.4-43.5-34.8-43.5.4zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-241 93.7c-12.3 4.8-25.5 8.4-38.9 8.4-38.5-22.1-90.7.9-90.7 49.5 0 18 11.6 42.9 29.6 48.9v.7c-13.4 5.9-17.1 36.1.7 47v.7c-19.5 6.4-32.3 18.8-32.3 40.2 0 36.8 34.8 47 65.4 47 37.1 0 64.8-13.4 64.8-54.3 0-50.4-72.1-31.8-72.1-59.1 0-9.6 5.2-13.4 14.1-15.2 29.6-5.5 48.2-28.6 48.2-58.7 0-5.2-1.1-10.2-2.9-15 4.8-1.1 9.5-2.3 14.1-3.9v-36.2zm56.8 1.8h-39.6c1.3 10.6 1.1 142.6 0 155.5h39.6c-1.1-12.8-1.2-145.1 0-155.5zm4.5-53.3c0-13.4-10-26.2-24.1-26.2-14.3 0-24.6 12.5-24.6 26.2 0 13.6 10.5 25.9 24.6 25.9 13.7 0 24.1-12.5 24.1-25.9zm104.3 53.3h-36.4c0-9.8-.4-19.6 1.1-29.5h-40.5c1.3 7.3 1.1 13.6 1.1 29.5h-17.1v33.9c11.9-1.9 12.1-.7 17.1-.7v.7h-.4v62.7c0 31.1 4.5 61.2 42.7 61.2 10.7 0 23-1.8 32.5-7v-35c-5.7 3.9-13.9 5.9-20.9 5.9-13.2 0-15.5-12.9-15.5-23.4v-65.2c22.7 0 36.4.7 36.4.7v-33.8z" />
      );
    case EIcon.LinkedIn:
      return (
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      );
  }
}
