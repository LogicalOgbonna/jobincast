import { nanoid } from "@reduxjs/toolkit";

const countriesNStates = [
    {
        "Country": "Malaysia",
        "state": "Johor"
    },
    {
        "Country": "Malaysia",
        "state": "Kedah"
    },
    {
        "Country": "Malaysia",
        "state": "Kelantan"
    },
    {
        "Country": "Malaysia",
        "state": "Melaka"
    },
    {
        "Country": "Malaysia",
        "state": "Negeri Sembilan"
    },
    {
        "Country": "Malaysia",
        "state": "Pahang"
    },
    {
        "Country": "Malaysia",
        "state": "Penang"
    },
    {
        "Country": "Malaysia",
        "state": "Perak"
    },
    {
        "Country": "Malaysia",
        "state": "Perlis"
    },
    {
        "Country": "Malaysia",
        "state": "Sabah"
    },
    {
        "Country": "Malaysia",
        "state": "Sarawak"
    },
    {
        "Country": "Malaysia",
        "state": "Selangor"
    },
    {
        "Country": "Malaysia",
        "state": "Terengganu"
    },
    {
        "Country": "Malaysia",
        "state": "Wilayah Persekutuan"
    },
    {
        "Country": "Indonesia",
        "state": "Aceh"
    },
    {
        "Country": "Indonesia",
        "state": "Bali"
    },
    {
        "Country": "Indonesia",
        "state": "Bangka Belitung"
    },
    {
        "Country": "Indonesia",
        "state": "Banten"
    },
    {
        "Country": "Indonesia",
        "state": "Bengkulu"
    },
    {
        "Country": "Indonesia",
        "state": "Central Java"
    },
    {
        "Country": "Indonesia",
        "state": "Central Kalimantan"
    },
    {
        "Country": "Indonesia",
        "state": "Central Sulawesi"
    },
    {
        "Country": "Indonesia",
        "state": "East Java"
    },
    {
        "Country": "Indonesia",
        "state": "East Kalimantan"
    },
    {
        "Country": "Indonesia",
        "state": "East Nusa Tenggara"
    },
    {
        "Country": "Indonesia",
        "state": "Gorontalo"
    },
    {
        "Country": "Indonesia",
        "state": "Jakarta"
    },
    {
        "Country": "Indonesia",
        "state": "Jambi"
    },
    {
        "Country": "Indonesia",
        "state": "Kepulauan Riau"
    },
    {
        "Country": "Indonesia",
        "state": "Lampung"
    },
    {
        "Country": "Indonesia",
        "state": "Maluku"
    },
    {
        "Country": "Indonesia",
        "state": "North Kalimantan"
    },
    {
        "Country": "Indonesia",
        "state": "North Maluku"
    },
    {
        "Country": "Indonesia",
        "state": "North Sulawesi"
    },
    {
        "Country": "Indonesia",
        "state": "North Sumatra"
    },
    {
        "Country": "Indonesia",
        "state": "Papua"
    },
    {
        "Country": "Indonesia",
        "state": "Riau"
    },
    {
        "Country": "Indonesia",
        "state": "South Kalimantan"
    },
    {
        "Country": "Indonesia",
        "state": "South Sulawesi"
    },
    {
        "Country": "Indonesia",
        "state": "South Sumatra"
    },
    {
        "Country": "Indonesia",
        "state": "Southeast Sulawesi"
    },
    {
        "Country": "Indonesia",
        "state": "West Java"
    },
    {
        "Country": "Indonesia",
        "state": "West Kalimantan"
    },
    {
        "Country": "Indonesia",
        "state": "West Nusa Tenggara"
    },
    {
        "Country": "Indonesia",
        "state": "West Papua"
    },
    {
        "Country": "Indonesia",
        "state": "West Sumatra"
    },
    {
        "Country": "Indonesia",
        "state": "Yogyakarta"
    },
    {
        "Country": "India",
        "state": "Andhra Pradesh"
    },
    {
        "Country": "India",
        "state": "Bihar"
    },
    {
        "Country": "India",
        "state": "Chandigarh"
    },
    {
        "Country": "India",
        "state": "Chhattisgarh"
    },
    {
        "Country": "India",
        "state": "Delhi"
    },
    {
        "Country": "India",
        "state": "Gujarat"
    },
    {
        "Country": "India",
        "state": "Haryana"
    },
    {
        "Country": "India",
        "state": "Jammu and Kashmir"
    },
    {
        "Country": "India",
        "state": "Jharkhand"
    },
    {
        "Country": "India",
        "state": "Karnataka"
    },
    {
        "Country": "India",
        "state": "Madhya Pradesh"
    },
    {
        "Country": "India",
        "state": "Maharashtra"
    },
    {
        "Country": "India",
        "state": "Punjab"
    },
    {
        "Country": "India",
        "state": "Rajasthan"
    },
    {
        "Country": "India",
        "state": "Tamil Nadu"
    },
    {
        "Country": "India",
        "state": "Telangana"
    },
    {
        "Country": "India",
        "state": "Uttar Pradesh"
    },
    {
        "Country": "India",
        "state": "West Bengal"
    },
    {
        "Country": "India",
        "state": "Arunachal Pradesh"
    },
    {
        "Country": "India",
        "state": "Assam"
    },
    {
        "Country": "India",
        "state": "Goa"
    },
    {
        "Country": "India",
        "state": "Himachal Pradesh"
    },
    {
        "Country": "India",
        "state": "Kerala"
    },
    {
        "Country": "India",
        "state": "Manipur"
    },
    {
        "Country": "India",
        "state": "Meghalaya"
    },
    {
        "Country": "India",
        "state": "Mizoram"
    },
    {
        "Country": "India",
        "state": "Nagaland"
    },
    {
        "Country": "India",
        "state": "Odisha"
    },
    {
        "Country": "India",
        "state": "Sikkim"
    },
    {
        "Country": "India",
        "state": "Tripura"
    },
    {
        "Country": "India",
        "state": "Uttarakhand"
    },
    {
        "Country": "Singapore",
        "state": "Singapore"
    },
    {
        "Country": "Philippine",
        "state": "Abra"
    },
    {
        "Country": "Philippine",
        "state": "Agusan del Norte"
    },
    {
        "Country": "Philippine",
        "state": "Agusan del Sur"
    },
    {
        "Country": "Philippine",
        "state": "Aklan"
    },
    {
        "Country": "Philippine",
        "state": "Albay"
    },
    {
        "Country": "Philippine",
        "state": "Antique"
    },
    {
        "Country": "Philippine",
        "state": "Apayao"
    },
    {
        "Country": "Philippine",
        "state": "Aurora"
    },
    {
        "Country": "Philippine",
        "state": "Basilan"
    },
    {
        "Country": "Philippine",
        "state": "Bataan"
    },
    {
        "Country": "Philippine",
        "state": "Batanes"
    },
    {
        "Country": "Philippine",
        "state": "Batangas"
    },
    {
        "Country": "Philippine",
        "state": "Benguet"
    },
    {
        "Country": "Philippine",
        "state": "Biliran"
    },
    {
        "Country": "Philippine",
        "state": "Bohol"
    },
    {
        "Country": "Philippine",
        "state": "Bukidnon"
    },
    {
        "Country": "Philippine",
        "state": "Bulacan"
    },
    {
        "Country": "Philippine",
        "state": "Cagayan"
    },
    {
        "Country": "Philippine",
        "state": "Camarines Norte"
    },
    {
        "Country": "Philippine",
        "state": "Camarines Sur"
    },
    {
        "Country": "Philippine",
        "state": "Camiguin"
    },
    {
        "Country": "Philippine",
        "state": "Capiz"
    },
    {
        "Country": "Philippine",
        "state": "Catanduanes"
    },
    {
        "Country": "Philippine",
        "state": "Cavite"
    },
    {
        "Country": "Philippine",
        "state": "Cebu"
    },
    {
        "Country": "Philippine",
        "state": "Cotabato"
    },
    {
        "Country": "Philippine",
        "state": "Davao de Oro"
    },
    {
        "Country": "Philippine",
        "state": "Davao del Norte"
    },
    {
        "Country": "Philippine",
        "state": "Davao del Sur"
    },
    {
        "Country": "Philippine",
        "state": "Davao Occidental"
    },
    {
        "Country": "Philippine",
        "state": "Davao Oriental"
    },
    {
        "Country": "Philippine",
        "state": "Dinagat Islands"
    },
    {
        "Country": "Philippine",
        "state": "Eastern Samar"
    },
    {
        "Country": "Philippine",
        "state": "Guimaras"
    },
    {
        "Country": "Philippine",
        "state": "Ifugao"
    },
    {
        "Country": "Philippine",
        "state": "Ilocos Norte"
    },
    {
        "Country": "Philippine",
        "state": "Ilocos Sur"
    },
    {
        "Country": "Philippine",
        "state": "Iloilo"
    },
    {
        "Country": "Philippine",
        "state": "Isabela"
    },
    {
        "Country": "Philippine",
        "state": "Kalinga"
    },
    {
        "Country": "Philippine",
        "state": "La Union"
    },
    {
        "Country": "Philippine",
        "state": "Laguna"
    },
    {
        "Country": "Philippine",
        "state": "Lanao del Norte"
    },
    {
        "Country": "Philippine",
        "state": "Lanao del Sur"
    },
    {
        "Country": "Philippine",
        "state": "Leyte"
    },
    {
        "Country": "Philippine",
        "state": "Maguindanao"
    },
    {
        "Country": "Philippine",
        "state": "Marinduque"
    },
    {
        "Country": "Philippine",
        "state": "Masbate"
    },
    {
        "Country": "Philippine",
        "state": "Misamis Occidental"
    },
    {
        "Country": "Philippine",
        "state": "Misamis Oriental"
    },
    {
        "Country": "Philippine",
        "state": "Mountain Province"
    },
    {
        "Country": "Philippine",
        "state": "Negros Occidental"
    },
    {
        "Country": "Philippine",
        "state": "Negros Oriental"
    },
    {
        "Country": "Philippine",
        "state": "Northern Samar"
    },
    {
        "Country": "Philippine",
        "state": "Nueva Ecija"
    },
    {
        "Country": "Philippine",
        "state": "Nueva Vizcaya"
    },
    {
        "Country": "Philippine",
        "state": "Occidental Mindoro"
    },
    {
        "Country": "Philippine",
        "state": "Oriental Mindoro"
    },
    {
        "Country": "Philippine",
        "state": "Palawan"
    },
    {
        "Country": "Philippine",
        "state": "Pampanga"
    },
    {
        "Country": "Philippine",
        "state": "Pangasinan"
    },
    {
        "Country": "Philippine",
        "state": "Quezon"
    },
    {
        "Country": "Philippine",
        "state": "Quirino"
    },
    {
        "Country": "Philippine",
        "state": "Rizal"
    },
    {
        "Country": "Philippine",
        "state": "Romblon"
    },
    {
        "Country": "Philippine",
        "state": "Samar"
    },
    {
        "Country": "Philippine",
        "state": "Sarangani"
    },
    {
        "Country": "Philippine",
        "state": "Siquijor"
    },
    {
        "Country": "Philippine",
        "state": "Sorsogon"
    },
    {
        "Country": "Philippine",
        "state": "South Cotabato"
    },
    {
        "Country": "Philippine",
        "state": "Southern Leyte"
    },
    {
        "Country": "Philippine",
        "state": "Sultan Kudarat"
    },
    {
        "Country": "Philippine",
        "state": "Sulu"
    },
    {
        "Country": "Philippine",
        "state": "Surigao del Norte"
    },
    {
        "Country": "Philippine",
        "state": "Surigao del Sur"
    },
    {
        "Country": "Philippine",
        "state": "Tarlac"
    },
    {
        "Country": "Philippine",
        "state": "Tawi-Tawi"
    },
    {
        "Country": "Philippine",
        "state": "Zambales"
    },
    {
        "Country": "Philippine",
        "state": "Zamboanga del Norte"
    },
    {
        "Country": "Philippine",
        "state": "Zamboanga del Sur"
    },
    {
        "Country": "Philippine",
        "state": "Zamboanga Sibugay"
    },
    {
        "Country": "Philippine",
        "state": "Metro Manila"
    },
    {
        "Country": "Thailand",
        "state": "??Bangkok"
    },
    {
        "Country": "Thailand",
        "state": "??Amnat Charoen"
    },
    {
        "Country": "Thailand",
        "state": "??Ang Thong"
    },
    {
        "Country": "Thailand",
        "state": "??Bueng Kan"
    },
    {
        "Country": "Thailand",
        "state": "??Buriram"
    },
    {
        "Country": "Thailand",
        "state": "??Chachoengsao"
    },
    {
        "Country": "Thailand",
        "state": "??Chai Nat"
    },
    {
        "Country": "Thailand",
        "state": "??Chaiyaphum"
    },
    {
        "Country": "Thailand",
        "state": "??Chanthaburi"
    },
    {
        "Country": "Thailand",
        "state": "??Chiang Mai"
    },
    {
        "Country": "Thailand",
        "state": "??Chiang Rai"
    },
    {
        "Country": "Thailand",
        "state": "??Chonburi"
    },
    {
        "Country": "Thailand",
        "state": "??Chumphon"
    },
    {
        "Country": "Thailand",
        "state": "??Kalasin"
    },
    {
        "Country": "Thailand",
        "state": "??Kamphaeng Phet"
    },
    {
        "Country": "Thailand",
        "state": "??Kanchanaburi"
    },
    {
        "Country": "Thailand",
        "state": "??Khon Kaen"
    },
    {
        "Country": "Thailand",
        "state": "??Krabi"
    },
    {
        "Country": "Thailand",
        "state": "??Lampang"
    },
    {
        "Country": "Thailand",
        "state": "??Lamphun"
    },
    {
        "Country": "Thailand",
        "state": "??Loei"
    },
    {
        "Country": "Thailand",
        "state": "??Lopburi"
    },
    {
        "Country": "Thailand",
        "state": "??Mae Hong Son"
    },
    {
        "Country": "Thailand",
        "state": "??Maha Sarakham"
    },
    {
        "Country": "Thailand",
        "state": "??Mukdahan"
    },
    {
        "Country": "Thailand",
        "state": "??Nakhon Nayok"
    },
    {
        "Country": "Thailand",
        "state": "??Nakhon Pathom"
    },
    {
        "Country": "Thailand",
        "state": "??Nakhon Phanom"
    },
    {
        "Country": "Thailand",
        "state": "??Nakhon Ratchasima"
    },
    {
        "Country": "Thailand",
        "state": "??Nakhon Sawan"
    },
    {
        "Country": "Thailand",
        "state": "??Nakhon Si Thammarat"
    },
    {
        "Country": "Thailand",
        "state": "??Nan"
    },
    {
        "Country": "Thailand",
        "state": "??Narathiwat"
    },
    {
        "Country": "Thailand",
        "state": "??Nong Bua Lamphu"
    },
    {
        "Country": "Thailand",
        "state": "??Nong Khai"
    },
    {
        "Country": "Thailand",
        "state": "??Nonthaburi"
    },
    {
        "Country": "Thailand",
        "state": "??Pathum Thani"
    },
    {
        "Country": "Thailand",
        "state": "??Pattani"
    },
    {
        "Country": "Thailand",
        "state": "??Phang Nga"
    },
    {
        "Country": "Thailand",
        "state": "??Phatthalung"
    },
    {
        "Country": "Thailand",
        "state": "??Phayao"
    },
    {
        "Country": "Thailand",
        "state": "??Phetchabun"
    },
    {
        "Country": "Thailand",
        "state": "??Phetchaburi"
    },
    {
        "Country": "Thailand",
        "state": "??Phichit"
    },
    {
        "Country": "Thailand",
        "state": "??Phitsanulok"
    },
    {
        "Country": "Thailand",
        "state": "??Phra Nakhon Si Ayutthaya"
    },
    {
        "Country": "Thailand",
        "state": "??Phrae"
    },
    {
        "Country": "Thailand",
        "state": "??Phuket"
    },
    {
        "Country": "Thailand",
        "state": "??Prachinburi"
    },
    {
        "Country": "Thailand",
        "state": "??Prachuap Khiri Khan"
    },
    {
        "Country": "Thailand",
        "state": "??Ranong"
    },
    {
        "Country": "Thailand",
        "state": "??Ratchaburi"
    },
    {
        "Country": "Thailand",
        "state": "??Rayong"
    },
    {
        "Country": "Thailand",
        "state": "??Roi Et"
    },
    {
        "Country": "Thailand",
        "state": "??Sa Kaeo"
    },
    {
        "Country": "Thailand",
        "state": "??Sakon Nakhon"
    },
    {
        "Country": "Thailand",
        "state": "??Samut Prakan"
    },
    {
        "Country": "Thailand",
        "state": "??Samut Sakhon"
    },
    {
        "Country": "Thailand",
        "state": "??Samut Songkhram"
    },
    {
        "Country": "Thailand",
        "state": "??Saraburi"
    },
    {
        "Country": "Thailand",
        "state": "??Satun"
    },
    {
        "Country": "Thailand",
        "state": "??Sing Buri"
    },
    {
        "Country": "Thailand",
        "state": "??Sisaket"
    },
    {
        "Country": "Thailand",
        "state": "??Songkhla"
    },
    {
        "Country": "Thailand",
        "state": "??Sukhothai"
    },
    {
        "Country": "Thailand",
        "state": "??Suphan Buri"
    },
    {
        "Country": "Thailand",
        "state": "??Surat Thani"
    },
    {
        "Country": "Thailand",
        "state": "??Surin"
    },
    {
        "Country": "Thailand",
        "state": "??Tak"
    },
    {
        "Country": "Thailand",
        "state": "??Trang"
    },
    {
        "Country": "Thailand",
        "state": "??Trat"
    },
    {
        "Country": "Thailand",
        "state": "??Ubon Ratchathani"
    },
    {
        "Country": "Thailand",
        "state": "??Udon Thani"
    },
    {
        "Country": "Thailand",
        "state": "??Uthai Thani"
    },
    {
        "Country": "Thailand",
        "state": "??Uttaradit"
    },
    {
        "Country": "Thailand",
        "state": "??Yala"
    },
    {
        "Country": "Thailand",
        "state": "??Yasothon"
    },
    {
        "Country": "Vietnam",
        "state": "B???c Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "B???c K???n Province"
    },
    {
        "Country": "Vietnam",
        "state": "Cao B???ng Province"
    },
    {
        "Country": "Vietnam",
        "state": "H?? Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "L???ng S??n Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ph?? Th??? Province"
    },
    {
        "Country": "Vietnam",
        "state": "Qu???ng Ninh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Th??i Nguy??n Province"
    },
    {
        "Country": "Vietnam",
        "state": "Tuy??n Quang Province"
    },
    {
        "Country": "Vietnam",
        "state": "L??o Cai Province"
    },
    {
        "Country": "Vietnam",
        "state": "Y??n B??i Province"
    },
    {
        "Country": "Vietnam",
        "state": "??i???n Bi??n Province"
    },
    {
        "Country": "Vietnam",
        "state": "H??a B??nh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Lai Ch??u Province"
    },
    {
        "Country": "Vietnam",
        "state": "S??n La Province"
    },
    {
        "Country": "Vietnam",
        "state": "B???c Ninh Province"
    },
    {
        "Country": "Vietnam",
        "state": "H?? Nam Province"
    },
    {
        "Country": "Vietnam",
        "state": "H???i D????ng Province"
    },
    {
        "Country": "Vietnam",
        "state": "H??ng Y??n Province"
    },
    {
        "Country": "Vietnam",
        "state": "Nam ?????nh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ninh B??nh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Th??i B??nh Province"
    },
    {
        "Country": "Vietnam",
        "state": "V??nh Ph??c Province"
    },
    {
        "Country": "Vietnam",
        "state": "H?? N???i City"
    },
    {
        "Country": "Vietnam",
        "state": "H???i Ph??ng City"
    },
    {
        "Country": "Vietnam",
        "state": "H?? T??nh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ngh??? An Province"
    },
    {
        "Country": "Vietnam",
        "state": "Qu???ng B??nh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Qu???ng Tr??? Province"
    },
    {
        "Country": "Vietnam",
        "state": "Thanh H??a Province"
    },
    {
        "Country": "Vietnam",
        "state": "Th???a Thi??n-Hu??? Province"
    },
    {
        "Country": "Vietnam",
        "state": "?????k L???k Province"
    },
    {
        "Country": "Vietnam",
        "state": "?????k N??ng Province"
    },
    {
        "Country": "Vietnam",
        "state": "Gia Lai Province"
    },
    {
        "Country": "Vietnam",
        "state": "Kon Tum Province"
    },
    {
        "Country": "Vietnam",
        "state": "L??m ?????ng Province"
    },
    {
        "Country": "Vietnam",
        "state": "B??nh ?????nh Province"
    },
    {
        "Country": "Vietnam",
        "state": "B??nh Thu???n Province"
    },
    {
        "Country": "Vietnam",
        "state": "Kh??nh H??a Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ninh Thu???n Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ph?? Y??n Province"
    },
    {
        "Country": "Vietnam",
        "state": "Qu???ng Nam Province"
    },
    {
        "Country": "Vietnam",
        "state": "Qu???ng Ng??i Province"
    },
    {
        "Country": "Vietnam",
        "state": "???? N???ng City"
    },
    {
        "Country": "Vietnam",
        "state": "B?? R???a-V??ng T??u Province"
    },
    {
        "Country": "Vietnam",
        "state": "B??nh D????ng Province"
    },
    {
        "Country": "Vietnam",
        "state": "B??nh Ph?????c Province"
    },
    {
        "Country": "Vietnam",
        "state": "?????ng Nai Province"
    },
    {
        "Country": "Vietnam",
        "state": "T??y Ninh Province"
    },
    {
        "Country": "Vietnam",
        "state": "H??? Ch?? Minh City"
    },
    {
        "Country": "Vietnam",
        "state": "An Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "B???c Li??u Province"
    },
    {
        "Country": "Vietnam",
        "state": "B???n Tre Province"
    },
    {
        "Country": "Vietnam",
        "state": "C?? Mau Province"
    },
    {
        "Country": "Vietnam",
        "state": "?????ng Th??p Province"
    },
    {
        "Country": "Vietnam",
        "state": "H???u Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ki??n Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Long An Province"
    },
    {
        "Country": "Vietnam",
        "state": "S??c Tr??ng Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ti???n Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Tr?? Vinh Province"
    },
    {
        "Country": "Vietnam",
        "state": "V??nh Long Province"
    },
    {
        "Country": "Vietnam",
        "state": "C???n Th?? City"
    }
]

const countriesFilter = (searchKey) => [...new Set(countriesNStates.map(value => value.Country))].map(value => ({ label: value, id: nanoid(), type: 'location', searchKey }));
const selectCountry = {};
countriesNStates.forEach(({ Country, state }) => {
    selectCountry[Country.toUpperCase()] ? selectCountry[Country.toUpperCase()].push(state) : selectCountry[Country.toUpperCase()] = [state]
})
const mappedCountries =  [...new Set(countriesNStates.map(value => value.Country))].map(value => ({ label: value.replace(/_/g, " ").toLowerCase(), value: value.toLocaleUpperCase() }));
export { countriesFilter, selectCountry, mappedCountries }