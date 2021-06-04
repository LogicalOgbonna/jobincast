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
        "state": " Bangkok"
    },
    {
        "Country": "Thailand",
        "state": " Amnat Charoen"
    },
    {
        "Country": "Thailand",
        "state": " Ang Thong"
    },
    {
        "Country": "Thailand",
        "state": " Bueng Kan"
    },
    {
        "Country": "Thailand",
        "state": " Buriram"
    },
    {
        "Country": "Thailand",
        "state": " Chachoengsao"
    },
    {
        "Country": "Thailand",
        "state": " Chai Nat"
    },
    {
        "Country": "Thailand",
        "state": " Chaiyaphum"
    },
    {
        "Country": "Thailand",
        "state": " Chanthaburi"
    },
    {
        "Country": "Thailand",
        "state": " Chiang Mai"
    },
    {
        "Country": "Thailand",
        "state": " Chiang Rai"
    },
    {
        "Country": "Thailand",
        "state": " Chonburi"
    },
    {
        "Country": "Thailand",
        "state": " Chumphon"
    },
    {
        "Country": "Thailand",
        "state": " Kalasin"
    },
    {
        "Country": "Thailand",
        "state": " Kamphaeng Phet"
    },
    {
        "Country": "Thailand",
        "state": " Kanchanaburi"
    },
    {
        "Country": "Thailand",
        "state": " Khon Kaen"
    },
    {
        "Country": "Thailand",
        "state": " Krabi"
    },
    {
        "Country": "Thailand",
        "state": " Lampang"
    },
    {
        "Country": "Thailand",
        "state": " Lamphun"
    },
    {
        "Country": "Thailand",
        "state": " Loei"
    },
    {
        "Country": "Thailand",
        "state": " Lopburi"
    },
    {
        "Country": "Thailand",
        "state": " Mae Hong Son"
    },
    {
        "Country": "Thailand",
        "state": " Maha Sarakham"
    },
    {
        "Country": "Thailand",
        "state": " Mukdahan"
    },
    {
        "Country": "Thailand",
        "state": " Nakhon Nayok"
    },
    {
        "Country": "Thailand",
        "state": " Nakhon Pathom"
    },
    {
        "Country": "Thailand",
        "state": " Nakhon Phanom"
    },
    {
        "Country": "Thailand",
        "state": " Nakhon Ratchasima"
    },
    {
        "Country": "Thailand",
        "state": " Nakhon Sawan"
    },
    {
        "Country": "Thailand",
        "state": " Nakhon Si Thammarat"
    },
    {
        "Country": "Thailand",
        "state": " Nan"
    },
    {
        "Country": "Thailand",
        "state": " Narathiwat"
    },
    {
        "Country": "Thailand",
        "state": " Nong Bua Lamphu"
    },
    {
        "Country": "Thailand",
        "state": " Nong Khai"
    },
    {
        "Country": "Thailand",
        "state": " Nonthaburi"
    },
    {
        "Country": "Thailand",
        "state": " Pathum Thani"
    },
    {
        "Country": "Thailand",
        "state": " Pattani"
    },
    {
        "Country": "Thailand",
        "state": " Phang Nga"
    },
    {
        "Country": "Thailand",
        "state": " Phatthalung"
    },
    {
        "Country": "Thailand",
        "state": " Phayao"
    },
    {
        "Country": "Thailand",
        "state": " Phetchabun"
    },
    {
        "Country": "Thailand",
        "state": " Phetchaburi"
    },
    {
        "Country": "Thailand",
        "state": " Phichit"
    },
    {
        "Country": "Thailand",
        "state": " Phitsanulok"
    },
    {
        "Country": "Thailand",
        "state": " Phra Nakhon Si Ayutthaya"
    },
    {
        "Country": "Thailand",
        "state": " Phrae"
    },
    {
        "Country": "Thailand",
        "state": " Phuket"
    },
    {
        "Country": "Thailand",
        "state": " Prachinburi"
    },
    {
        "Country": "Thailand",
        "state": " Prachuap Khiri Khan"
    },
    {
        "Country": "Thailand",
        "state": " Ranong"
    },
    {
        "Country": "Thailand",
        "state": " Ratchaburi"
    },
    {
        "Country": "Thailand",
        "state": " Rayong"
    },
    {
        "Country": "Thailand",
        "state": " Roi Et"
    },
    {
        "Country": "Thailand",
        "state": " Sa Kaeo"
    },
    {
        "Country": "Thailand",
        "state": " Sakon Nakhon"
    },
    {
        "Country": "Thailand",
        "state": " Samut Prakan"
    },
    {
        "Country": "Thailand",
        "state": " Samut Sakhon"
    },
    {
        "Country": "Thailand",
        "state": " Samut Songkhram"
    },
    {
        "Country": "Thailand",
        "state": " Saraburi"
    },
    {
        "Country": "Thailand",
        "state": " Satun"
    },
    {
        "Country": "Thailand",
        "state": " Sing Buri"
    },
    {
        "Country": "Thailand",
        "state": " Sisaket"
    },
    {
        "Country": "Thailand",
        "state": " Songkhla"
    },
    {
        "Country": "Thailand",
        "state": " Sukhothai"
    },
    {
        "Country": "Thailand",
        "state": " Suphan Buri"
    },
    {
        "Country": "Thailand",
        "state": " Surat Thani"
    },
    {
        "Country": "Thailand",
        "state": " Surin"
    },
    {
        "Country": "Thailand",
        "state": " Tak"
    },
    {
        "Country": "Thailand",
        "state": " Trang"
    },
    {
        "Country": "Thailand",
        "state": " Trat"
    },
    {
        "Country": "Thailand",
        "state": " Ubon Ratchathani"
    },
    {
        "Country": "Thailand",
        "state": " Udon Thani"
    },
    {
        "Country": "Thailand",
        "state": " Uthai Thani"
    },
    {
        "Country": "Thailand",
        "state": " Uttaradit"
    },
    {
        "Country": "Thailand",
        "state": " Yala"
    },
    {
        "Country": "Thailand",
        "state": " Yasothon"
    },
    {
        "Country": "Vietnam",
        "state": "Bắc Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Bắc Kạn Province"
    },
    {
        "Country": "Vietnam",
        "state": "Cao Bằng Province"
    },
    {
        "Country": "Vietnam",
        "state": "Hà Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Lạng Sơn Province"
    },
    {
        "Country": "Vietnam",
        "state": "Phú Thọ Province"
    },
    {
        "Country": "Vietnam",
        "state": "Quảng Ninh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Thái Nguyên Province"
    },
    {
        "Country": "Vietnam",
        "state": "Tuyên Quang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Lào Cai Province"
    },
    {
        "Country": "Vietnam",
        "state": "Yên Bái Province"
    },
    {
        "Country": "Vietnam",
        "state": "Điện Biên Province"
    },
    {
        "Country": "Vietnam",
        "state": "Hòa Bình Province"
    },
    {
        "Country": "Vietnam",
        "state": "Lai Châu Province"
    },
    {
        "Country": "Vietnam",
        "state": "Sơn La Province"
    },
    {
        "Country": "Vietnam",
        "state": "Bắc Ninh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Hà Nam Province"
    },
    {
        "Country": "Vietnam",
        "state": "Hải Dương Province"
    },
    {
        "Country": "Vietnam",
        "state": "Hưng Yên Province"
    },
    {
        "Country": "Vietnam",
        "state": "Nam Định Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ninh Bình Province"
    },
    {
        "Country": "Vietnam",
        "state": "Thái Bình Province"
    },
    {
        "Country": "Vietnam",
        "state": "Vĩnh Phúc Province"
    },
    {
        "Country": "Vietnam",
        "state": "Hà Nội City"
    },
    {
        "Country": "Vietnam",
        "state": "Hải Phòng City"
    },
    {
        "Country": "Vietnam",
        "state": "Hà Tĩnh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Nghệ An Province"
    },
    {
        "Country": "Vietnam",
        "state": "Quảng Bình Province"
    },
    {
        "Country": "Vietnam",
        "state": "Quảng Trị Province"
    },
    {
        "Country": "Vietnam",
        "state": "Thanh Hóa Province"
    },
    {
        "Country": "Vietnam",
        "state": "Thừa Thiên-Huế Province"
    },
    {
        "Country": "Vietnam",
        "state": "Đắk Lắk Province"
    },
    {
        "Country": "Vietnam",
        "state": "Đắk Nông Province"
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
        "state": "Lâm Đồng Province"
    },
    {
        "Country": "Vietnam",
        "state": "Bình Định Province"
    },
    {
        "Country": "Vietnam",
        "state": "Bình Thuận Province"
    },
    {
        "Country": "Vietnam",
        "state": "Khánh Hòa Province"
    },
    {
        "Country": "Vietnam",
        "state": "Ninh Thuận Province"
    },
    {
        "Country": "Vietnam",
        "state": "Phú Yên Province"
    },
    {
        "Country": "Vietnam",
        "state": "Quảng Nam Province"
    },
    {
        "Country": "Vietnam",
        "state": "Quảng Ngãi Province"
    },
    {
        "Country": "Vietnam",
        "state": "Đà Nẵng City"
    },
    {
        "Country": "Vietnam",
        "state": "Bà Rịa-Vũng Tàu Province"
    },
    {
        "Country": "Vietnam",
        "state": "Bình Dương Province"
    },
    {
        "Country": "Vietnam",
        "state": "Bình Phước Province"
    },
    {
        "Country": "Vietnam",
        "state": "Đồng Nai Province"
    },
    {
        "Country": "Vietnam",
        "state": "Tây Ninh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Hồ Chí Minh City"
    },
    {
        "Country": "Vietnam",
        "state": "An Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Bạc Liêu Province"
    },
    {
        "Country": "Vietnam",
        "state": "Bến Tre Province"
    },
    {
        "Country": "Vietnam",
        "state": "Cà Mau Province"
    },
    {
        "Country": "Vietnam",
        "state": "Đồng Tháp Province"
    },
    {
        "Country": "Vietnam",
        "state": "Hậu Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Kiên Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Long An Province"
    },
    {
        "Country": "Vietnam",
        "state": "Sóc Trăng Province"
    },
    {
        "Country": "Vietnam",
        "state": "Tiền Giang Province"
    },
    {
        "Country": "Vietnam",
        "state": "Trà Vinh Province"
    },
    {
        "Country": "Vietnam",
        "state": "Vĩnh Long Province"
    },
    {
        "Country": "Vietnam",
        "state": "Cần Thơ City"
    }
]

const countriesFilter = [...new Set(countriesNStates.map(value => value.Country))].map(value => ({ label: value, id: nanoid(), type: 'location' }));
const selectCountry = {};
countriesNStates.forEach(({ Country, state }) => {
    selectCountry[Country.toUpperCase()] ? selectCountry[Country.toUpperCase()].push(state) : selectCountry[Country.toUpperCase()] = [state]
})

export { countriesFilter, selectCountry }