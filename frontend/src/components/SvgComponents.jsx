import React from "react";
//https://ozorku.hashnode.dev/how-to-use-svg-images-in-react-native-expo-app-ckahw4soq01dumks1zffuv4ey
import { SvgXml } from "react-native-svg";

const SvgHeart = ({ styles, width, height }) => {
  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 279.69 425.5" xmlns="http://www.w3.org/2000/svg">
<g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10px" data-name="Layer 5">
<path d="M139.85 420.5S72.19 381 43.19 349C14 316.79-8.3 279.2 14.19 236c25-48 92.66-51.5 125.66 22.5 33-74 100.65-70.5 125.65-22.5 22.5 43.2.19 80.79-29 113-29 32-96.65 71.5-96.65 71.5zM139.5 251V89M193.5 89s-53.27 49-53.63 81S123.5 66 102.5 49"/>
<path d="M116.5 97s-65-7-40-92c0 0 83 23 40 92zM165 119.76S140.5 57 217.5 51c0 0 32.97 73.51-52.5 68.76z"/>
</g>
</svg>
`;
  const SvgHeart = () => <SvgXml xml={xml} width={width} height={height}/>;
  return <SvgHeart styles={{styles}}/>;
};

const SvgLogo = ({ styles, width, height }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.62 356.17">
    <g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10px">
      <path class="cls-1" d="M96 155.5v168.98M311.62 8L96 253.83 8 153.5"/>
      <path class="cls-1" d="M54 8l215.62 245.83 88-100.33"/>
      <path class="cls-1" d="M346.5 348.17c-38.38-18.6-97.61-30.67-164.06-30.67V9.5v308c-66.46 0-125.68 12.07-164.06 30.67M269.39 155.96v168.98"/>
    </g>
</svg>
`;
  const SvgLogo = () => <SvgXml xml={xml} width={width} height={height}/>;
  return <SvgLogo styles={{styles}}/>;
};

const SvgLocation = ({ styles, width, height }) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499.63 456.08">
    <g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10px">
      <path class="cls-1" d="M5 451.08h335.77M362.06 451.08h36.77M420.12 451.08h74.51M250 5C120.36 5 110.89 126.92 119.6 177.24S250 432.7 250 432.7s121.74-205.14 130.45-255.46S379.69 5 250 5z"/>
      <path class="cls-1" d="M144.82 131.76H109.7s-4.39-30-35.13-30h1.65c-30.74 0-35.13 30-35.13 30H6M487.58 302.19h-35.12s-4.39-30-35.13-30H419c-30.74 0-35.13 30-35.13 30M428.83 338.84h34.83M34.03 168.53h34.83M205.77 169.97v85.94M315.42 94.96L205.77 219.98l-44.75-51.02"/>
      <path class="cls-1" d="M184.41 94.96l109.65 125.02 44.75-51.02"/>
      <path class="cls-1" d="M333.16 268c-19.52-9.46-49.64-15.6-83.43-15.6V95.73v156.66c-33.8 0-63.92 6.14-83.44 15.6M293.95 170.21v85.93"/>
    </g>
</svg>
`;
  const SvgLocation = () => <SvgXml xml={xml} width={width} height={height}/>;
  return <SvgLocation styles={{styles}}/>;
};

const SvgMembers = ({ styles, width, height }) => {
  const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 347.15 258" xmlns="http://www.w3.org/2000/svg">
<g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10px">
<circle cx="172.15" cy="67" r="62"/>
<path d="m100.15 253v-89s-5-41.27 32-49.63"/>
<path d="m245.15 253v-89s5-41.27-32-49.63"/>
<circle cx="49.21" cy="91.05" r="37.95"/>
<path d="M5.14 204.9v-54.48S2.08 125.16 24.72 120"/>
<circle cx="297.95" cy="91.05" r="37.95"/>
<path d="m342 204.9v-54.48s3.06-25.26-19.59-30.38"/>
</g>
</svg>
`;
  const SvgMembers = () => <SvgXml xml={xml} styles={{styles}} width={width} height={height}/>;
  return <SvgMembers />;
};

export { SvgMembers, SvgHeart, SvgLogo, SvgLocation };
