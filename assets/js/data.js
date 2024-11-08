const data = [
   
        {
            "city": "Visakhapatnam",
            "growth_from_2000_to_2013": "15.4%",
            "population": "2000000",
            "rank": "1",
            "state": "Andhra Pradesh",
            "latitude": 17.6869,
            "longitude": 83.2185
        },
        {
            "city": "Vijayawada",
            "growth_from_2000_to_2013": "17.2%",
            "population": "1440000",
            "rank": "2",
            "state": "Andhra Pradesh",
            "latitude": 16.5065,
            "longitude": 80.6480
        },
        {
            "city": "Guntur",
            "growth_from_2000_to_2013": "12.6%",
            "population": "748000",
            "rank": "3",
            "state": "Andhra Pradesh",
            "latitude": 16.3067,
            "longitude": 80.4360
        },
        {
            "city": "Tirupati",
            "growth_from_2000_to_2013": "10.9%",
            "population": "374000",
            "rank": "4",
            "state": "Andhra Pradesh",
            "latitude": 13.6288,
            "longitude": 79.4192
        },
        {
            "city": "Kakinada",
            "growth_from_2000_to_2013": "14.4%",
            "population": "396000",
            "rank": "5",
            "state": "Andhra Pradesh",
            "latitude": 16.9893,
            "longitude": 82.2410
        },
        {
            "city": "Anantapur",
            "growth_from_2000_to_2013": "8.3%",
            "population": "350000",
            "rank": "6",
            "state": "Andhra Pradesh",
            "latitude": 14.6816,
            "longitude": 77.5984
        },
    
        // Telangana Cities
        {
            "city": "Hyderabad",
            "growth_from_2000_to_2013": "22.7%",
            "population": "6809970",
            "rank": "1",
            "state": "Telangana",
            "latitude": 17.3850,
            "longitude": 78.4867
        },
        {
            "city": "Warangal",
            "growth_from_2000_to_2013": "13.6%",
            "population": "798000",
            "rank": "2",
            "state": "Telangana",
            "latitude": 17.9784,
            "longitude": 79.5941
        },
        {
            "city": "Khammam",
            "growth_from_2000_to_2013": "10.1%",
            "population": "330000",
            "rank": "3",
            "state": "Telangana",
            "latitude": 17.2479,
            "longitude": 80.1507
        },
        {
            "city": "Nizamabad",
            "growth_from_2000_to_2013": "6.7%",
            "population": "275000",
            "rank": "4",
            "state": "Telangana",
            "latitude": 18.6732,
            "longitude": 78.1000
        },
        {
            "city": "Karimnagar",
            "growth_from_2000_to_2013": "9.3%",
            "population": "312000",
            "rank": "5",
            "state": "Telangana",
            "latitude": 17.3588,
            "longitude": 79.1280
        },
        {
            "city": "Ramagundam",
            "growth_from_2000_to_2013": "7.5%",
            "population": "250000",
            "rank": "6",
            "state": "Telangana",
            "latitude": 18.7963,
            "longitude": 79.4574
        },

        {
            "city": "Delhi",
            "growth_from_2000_to_2013": "18.2%",
            "population": "16787941",
            "rank": "1",
            "state": "Delhi",
            "latitude": 28.6139,
            "longitude": 77.2090
        },
        {
            "city": "Mumbai",
            "growth_from_2000_to_2013": "9.5%",
            "population": "12478447",
            "rank": "2",
            "state": "Maharashtra",
            "latitude": 19.0760,
            "longitude": 72.8777
        },
        {
            "city": "Bangalore",
            "growth_from_2000_to_2013": "39.3%",
            "population": "8443675",
            "rank": "3",
            "state": "Karnataka",
            "latitude": 12.9716,
            "longitude": 77.5946
        },
        {
            "city": "Kolkata",
            "growth_from_2000_to_2013": "2.8%",
            "population": "4496694",
            "rank": "4",
            "state": "West Bengal",
            "latitude": 22.5726,
            "longitude": 88.3639
        },
        {
            "city": "Chennai",
            "growth_from_2000_to_2013": "15.1%",
            "population": "4646732",
            "rank": "5",
            "state": "Tamil Nadu",
            "latitude": 13.0827,
            "longitude": 80.2707
        },
        {
            "city": "Ahmedabad",
            "growth_from_2000_to_2013": "13.9%",
            "population": "5570585",
            "rank": "7",
            "state": "Gujarat",
            "latitude": 23.0225,
            "longitude": 72.5714
        },
        {
            "city": "Pune",
            "growth_from_2000_to_2013": "38.5%",
            "population": "3124458",
            "rank": "8",
            "state": "Maharashtra",
            "latitude": 18.5204,
            "longitude": 73.8567
        },
        {
            "city": "Surat",
            "growth_from_2000_to_2013": "18.0%",
            "population": "4460000",
            "rank": "9",
            "state": "Gujarat",
            "latitude": 21.1702,
            "longitude": 72.8311
        },
        {
            "city": "Jaipur",
            "growth_from_2000_to_2013": "29.6%",
            "population": "3045820",
            "rank": "10",
            "state": "Rajasthan",
            "latitude": 26.9124,
            "longitude": 75.7873
        },
        {
            "city": "Lucknow",
            "growth_from_2000_to_2013": "20.4%",
            "population": "3380000",
            "rank": "11",
            "state": "Uttar Pradesh",
            "latitude": 26.8467,
            "longitude": 80.9462
        },
        {
            "city": "Kanpur",
            "growth_from_2000_to_2013": "3.9%",
            "population": "2920000",
            "rank": "12",
            "state": "Uttar Pradesh",
            "latitude": 26.4499,
            "longitude": 80.3319
        },
        {
            "city": "Nagpur",
            "growth_from_2000_to_2013": "11.8%",
            "population": "2400000",
            "rank": "13",
            "state": "Maharashtra",
            "latitude": 21.1458,
            "longitude": 79.0882
        },
        {
            "city": "Indore",
            "growth_from_2000_to_2013": "28.3%",
            "population": "2470000",
            "rank": "14",
            "state": "Madhya Pradesh",
            "latitude": 22.7196,
            "longitude": 75.8577
        },
        {
            "city": "Vadodara",
            "growth_from_2000_to_2013": "17.5%",
            "population": "2000000",
            "rank": "15",
            "state": "Gujarat",
            "latitude": 22.3072,
            "longitude": 73.1812
        },
        {
            "city": "Bhopal",
            "growth_from_2000_to_2013": "19.4%",
            "population": "1790000",
            "rank": "16",
            "state": "Madhya Pradesh",
            "latitude": 23.2599,
            "longitude": 77.4126
        },
        {
            "city": "Coimbatore",
            "growth_from_2000_to_2013": "11.5%",
            "population": "1600000",
            "rank": "17",
            "state": "Tamil Nadu",
            "latitude": 11.0168,
            "longitude": 76.9558
        },
        {
            "city": "Vijayawada",
            "growth_from_2000_to_2013": "17.2%",
            "population": "1440000",
            "rank": "18",
            "state": "Andhra Pradesh",
            "latitude": 16.5065,
            "longitude": 80.6480
        },
        {
            "city": "Chandigarh",
            "growth_from_2000_to_2013": "15.4%",
            "population": "1050000",
            "rank": "19",
            "state": "Chandigarh",
            "latitude": 30.7333,
            "longitude": 76.7794
        },
        {
            "city": "Madurai",
            "growth_from_2000_to_2013": "12.8%",
            "population": "1200000",
            "rank": "20",
            "state": "Tamil Nadu",
            "latitude": 9.9250,
            "longitude": 78.1193
        }
    
    
]