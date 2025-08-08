// export const markersData = [
//     { name: "United States", latLng: [37.0902, -95.7129], style: { fill: "#d84ef2" } },
//     { name: "Brazil", latLng: [-14.235, -51.9253], style: { fill: "#6f4ef2" } },
//     { name: "South Africa", latLng: [-30.5595, 22.9375], style: { fill: "#f2c94e" } },
//     { name: "Algeria", latLng: [28.0339, 1.6596], style: { fill: "#8af24e" } },
//     { name: "Canada", latLng: [56.1304, -106.3468], style: { fill: "#cb76b9" } },
//     { name: "United Kingdom", latLng: [54.3781, -3.4360], style: { fill: "#ff4e4e" } },
//     { name: "Russia - West", latLng: [46.7558, 43.5173], style: { fill: "#6ed997" } },
//     { name: "Russia - East", latLng: [61.5264, 69.1962], style: { fill: "#25f1de" } },
//     { name: "Indonesia", latLng: [-4.7893, 107.9213], style: { fill: "#f27d4e" } },
//     { name: "Australia", latLng: [-21.2744, 135.7751], style: { fill: "#4e89f2" } },
// ];

export const markersData = [
    {
        name: "United States",
        code: "US",
        latLng: [37.0902, -95.7129],
        style: { fill: "#d84ef2" },
        flagUrl: "https://flagcdn.com/us.svg",
        totalReduction: "-72%",
        baseYear: "2005",
        relTo2005: "-32%",
        relTo2023: "-42%"
    },
    {
        name: "Brazil",
        code: "BR",
        latLng: [-14.235, -51.9253],
        style: { fill: "#6f4ef2" },
        flagUrl: "https://flagcdn.com/br.svg",
        totalReduction: "-68%",
        baseYear: "2000",
        relTo2005: "-28%",
        relTo2023: "-38%"
    },
    {
        name: "South Africa",
        code: "ZA",
        latLng: [-30.5595, 22.9375],
        style: { fill: "#f2c94e" },
        flagUrl: "https://flagcdn.com/za.svg",
        totalReduction: "-65%",
        baseYear: "1990",
        relTo2005: "-25%",
        relTo2023: "-35%"
    },
    {
        name: "Algeria",
        code: "DZ",
        latLng: [28.0339, 1.6596],
        style: { fill: "#8af24e" },
        flagUrl: "https://flagcdn.com/dz.svg",
        totalReduction: "-70%",
        baseYear: "2005",
        relTo2005: "-30%",
        relTo2023: "-40%"
    },
    {
        name: "Canada",
        code: "CA",
        latLng: [56.1304, -106.3468],
        style: { fill: "#cb76b9" },
        flagUrl: "https://flagcdn.com/ca.svg",
        totalReduction: "-75%",
        baseYear: "2005",
        relTo2005: "-35%",
        relTo2023: "-45%"
    },
    {
        name: "United Kingdom",
        code: "GB",
        latLng: [54.3781, -3.4360],
        style: { fill: "#ff4e4e" },
        flagUrl: "https://flagcdn.com/gb.svg",
        totalReduction: "-80%",
        baseYear: "1990",
        relTo2005: "-40%",
        relTo2023: "-50%"
    },
    {
        name: "Russia - West",
        code: "RU",
        latLng: [46.7558, 43.5173],
        style: { fill: "#6ed997" },
        flagUrl: "https://flagcdn.com/ru.svg",
        totalReduction: "-60%",
        baseYear: "1990",
        relTo2005: "-20%",
        relTo2023: "-30%"
    },
    {
        name: "Russia - East",
        code: "RU",
        latLng: [61.5264, 69.1962],
        style: { fill: "#25f1de" },
        flagUrl: "https://flagcdn.com/ru.svg",
        totalReduction: "-55%",
        baseYear: "2000",
        relTo2005: "-15%",
        relTo2023: "-25%"
    },
    {
        name: "Indonesia",
        code: "ID",
        latLng: [-4.7893, 107.9213],
        style: { fill: "#f27d4e" },
        flagUrl: "https://flagcdn.com/id.svg",
        totalReduction: "-50%",
        baseYear: "2005",
        relTo2005: "-10%",
        relTo2023: "-20%"
    },
    {
        name: "Australia",
        code: "AU",
        latLng: [-21.2744, 135.7751],
        style: { fill: "#4e89f2" },
        flagUrl: "https://flagcdn.com/au.svg",
        totalReduction: "-65%",
        baseYear: "2005",
        relTo2005: "-25%",
        relTo2023: "-35%"
    }
];

export const countries = {
    AF: 33, AL: 33, DZ: 33, AS: 33, AD: 33, AO: 33, AI: 33, AQ: 33, AG: 33,
    AR: 33, AM: 33, AW: 33, AU: 33, AT: 33, AZ: 33, BS: 33, BH: 33, BD: 33,
    BB: 33, BY: 33, BE: 33, BZ: 33, BJ: 33, BM: 33, BT: 33, BO: 33, BA: 33,
    BW: 33, BV: 33, BR: 33, IO: 33, BN: 33, BG: 33, BF: 33, BI: 33, KH: 33,
    CM: 33, CA: 33, CV: 33, KY: 33, CF: 33, TD: 33, CL: 33, CN: 33, CX: 33,
    CC: 33, CO: 33, KM: 33, CG: 33, CD: 33, CK: 33, CR: 33, CI: 33, HR: 33,
    CU: 33, CY: 33, CZ: 33, DK: 33, DJ: 33, DM: 33, DO: 33, EC: 33, EG: 33,
    SV: 33, GQ: 33, ER: 33, EE: 33, ET: 33, FK: 33, FO: 33, FJ: 33, FI: 33,
    FR: 33, GF: 33, PF: 33, TF: 33, GA: 33, GM: 33, GE: 33, DE: 33, GH: 33,
    GI: 33, GR: 33, GL: 33, GD: 33, GP: 33, GU: 33, GT: 33, GG: 33, GN: 33,
    GW: 33, GY: 33, HT: 33, HM: 33, VA: 33, HN: 33, HK: 33, HU: 33, IS: 33,
    IN: 33, ID: 33, IR: 33, IQ: 33, IE: 33, IM: 33, IL: 33, IT: 33, JM: 33,
    JP: 33, JE: 33, JO: 33, KZ: 33, KE: 33, KI: 33, KP: 33, KR: 33, KW: 33,
    KG: 33, LA: 33, LV: 33, LB: 33, LS: 33, LR: 33, LY: 33, LI: 33, LT: 33,
    LU: 33, MO: 33, MK: 33, MG: 33, MW: 33, MY: 33, MV: 33, ML: 33, MT: 33,
    MH: 33, MQ: 33, MR: 33, MU: 33, YT: 33, MX: 33, FM: 33, MD: 33, MC: 33,
    MN: 33, ME: 33, MS: 33, MA: 33, MZ: 33, MM: 33, NA: 33, NR: 33, NP: 33,
    NL: 33, NC: 33, NZ: 33, NI: 33, NE: 33, NG: 33, NU: 33, NF: 33, MP: 33,
    NO: 33, OM: 33, PK: 33, PW: 33, PS: 33, PA: 33, PG: 33, PY: 33, PE: 33,
    PH: 33, PN: 33, PL: 33, PT: 33, PR: 33, QA: 33, RE: 33, RO: 33, RU: 33,
    RW: 33, BL: 33, SH: 33, KN: 33, LC: 33, MF: 33, PM: 33, VC: 33, WS: 33,
    SM: 33, ST: 33, SA: 33, SN: 33, RS: 33, SC: 33, SL: 33, SG: 33, SX: 33,
    SK: 33, SI: 33, SB: 33, SO: 33, ZA: 33, GS: 33, SS: 33, ES: 33, LK: 33,
    SD: 33, SR: 33, SJ: 33, SZ: 33, SE: 33, CH: 33, SY: 33, TW: 33, TJ: 33,
    TZ: 33, TH: 33, TL: 33, TG: 33, TK: 33, TO: 33, TT: 33, TN: 33, TR: 33,
    TM: 33, TC: 33, TV: 33, UG: 33, UA: 33, AE: 33, GB: 33, US: 33, UM: 33,
    UY: 33, UZ: 33, VU: 33, VE: 33, VN: 33, VG: 33, VI: 33, WF: 33, EH: 33,
    YE: 33, ZM: 33, ZW: 33
};

// marker countries
const markerCountries = ["US", "BR", "ZA", "DZ", "CA", "GB", "RU", "ID", "AU"];

// assign value 79 to marker countries
markerCountries.forEach(code => {
    if (countries[code] !== undefined) {
        countries[code] = 69;
    }
});